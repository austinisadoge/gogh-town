import {getStore} from '@netlify/blobs';

/** 遊玩次數統計。
 *
 * GET  /api/stats            → {players, plays}
 * POST /api/stats {playerId} → 記一場，回傳更新後的 {players, plays}
 *
 * playerId 由瀏覽器自己產生後存在 localStorage，伺服器只拿它去重，
 * 不記 IP、不記任何可以認出是誰的資料。
 *
 * 🔴 為什麼不用「讀出數字 +1 再寫回去」：
 * Netlify Blobs 的 onlyIfMatch 在「依序」寫入時正常，但在「同時」寫入時
 * 並非原子操作 —— 實測十個請求帶同一個 etag 併發寫入，有四個都回報成功。
 * 所以任何形式的讀改寫都會掉資料，重試再多次也沒用。
 *
 * 改成：每一場寫一筆 key 不重複的紀錄（不重複就不會互相蓋掉），
 * 數量用數 key 的方式算出來。計數結果只當快取，掉了就重算。
 */

const PLAY = 'play/';        // 一場一筆，key 不重複
const PLAYER = 'player/';    // 一人一筆，key 就是玩家 ID
const CACHE = 'counters';    // 純快取，可以掉
const CACHE_MS = 30_000;     // GET 多久之內直接用快取
const COOLDOWN_MS = 20_000;  // 同一個人 20 秒內重開只算一場

const store = () => getStore({name: 'play-stats', consistency: 'strong'});

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store'},
  });

async function countKeys(s, prefix) {
  let total = 0;
  for await (const page of s.list({prefix, paginate: true})) total += page.blobs.length;
  return total;
}

/** 直接數 key 得出真實數字，順便更新快取。 */
async function recount(s) {
  const [players, plays] = await Promise.all([countKeys(s, PLAYER), countKeys(s, PLAY)]);
  const value = {players, plays, at: Date.now()};
  await s.setJSON(CACHE, value).catch(() => {});  // 快取寫失敗不影響正確性
  return value;
}

async function cachedCounts(s) {
  const cached = await s.get(CACHE, {type: 'json'}).catch(() => null);
  if (cached && Date.now() - (cached.at || 0) < CACHE_MS) return cached;
  return recount(s);
}

export default async (request) => {
  const s = store();

  if (request.method === 'GET') {
    const c = await cachedCounts(s);
    return json({players: c.players || 0, plays: c.plays || 0});
  }

  if (request.method !== 'POST') return json({error: '只接受 GET 與 POST'}, 405);

  let body = {};
  try { body = await request.json(); } catch { /* 空 body 當作沒帶 id */ }

  const id = String(body.playerId || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);
  if (id.length < 12) return json({error: 'playerId 格式不對'}, 400);

  const now = Date.now();
  const seen = await s.get(PLAYER + id, {type: 'json'}).catch(() => null);

  // 冷卻期間內不計數，但還是回傳目前數字讓畫面能更新
  if (seen && now - (seen.last || 0) < COOLDOWN_MS) {
    const c = await cachedCounts(s);
    return json({players: c.players || 0, plays: c.plays || 0, counted: false});
  }

  // key 各自獨立，併發寫入不會互相覆蓋
  const ticket = `${now.toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  await Promise.all([
    s.setJSON(PLAY + ticket, {at: now}),
    s.setJSON(PLAYER + id, {last: now, matches: (seen?.matches || 0) + 1}),
  ]);

  const c = await recount(s);   // 開局當下要看到正確數字，所以重數一次
  return json({players: c.players || 0, plays: c.plays || 0, counted: true});
};

export const config = {path: '/api/stats'};
