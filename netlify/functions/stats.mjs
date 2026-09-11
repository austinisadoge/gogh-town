import {getStore} from '@netlify/blobs';

/** 遊玩次數統計。
 *
 * GET  /api/stats            → {players, plays}
 * POST /api/stats {playerId} → 記一場，回傳更新後的 {players, plays}
 *
 * playerId 由瀏覽器自己產生後存在 localStorage，伺服器只拿它去重，
 * 不記 IP、不記任何可以認出是誰的資料。
 */

const COUNTERS = 'counters';
const COOLDOWN_MS = 20_000;   // 同一個人 20 秒內連開，只算一場（避免重整洗數字）
const MAX_RETRY = 12;         // 樂觀鎖撞車時的重試次數

const store = () => getStore({name: 'play-stats', consistency: 'strong'});

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store'},
  });

async function readCounters(s) {
  const res = await s.getWithMetadata(COUNTERS, {type: 'json'});
  return {value: res?.data ?? {players: 0, plays: 0}, etag: res?.etag};
}

/** 先比對 etag 再寫入，同一瞬間有別人寫過就重讀重算，數字才不會被蓋掉。
 *
 * 每次重試前隨機等一小段時間。少了這段，同時進來的請求會一起重讀、
 * 一起重寫、再一起撞掉，重試幾次都沒用 —— 錯開時間才解得開。
 */
async function bump(s, {newPlayer}) {
  for (let attempt = 0; attempt < MAX_RETRY; attempt++) {
    if (attempt) {
      const backoff = Math.min(400, 15 * 2 ** attempt);
      await new Promise(r => setTimeout(r, backoff * (0.5 + Math.random())));
    }
    const {value, etag} = await readCounters(s);
    const next = {
      players: (value.players || 0) + (newPlayer ? 1 : 0),
      plays: (value.plays || 0) + 1,
      updatedAt: new Date().toISOString(),
    };
    const opts = etag ? {onlyIfMatch: etag} : {onlyIfNew: true};
    const {modified} = await s.setJSON(COUNTERS, next, opts);
    if (modified) return {...next, counted: true};
  }
  // 真的擠不進去就照實回報沒記到，不要假裝成功
  const {value} = await readCounters(s);
  return {players: value.players || 0, plays: value.plays || 0, counted: false};
}

export default async (request) => {
  const s = store();

  if (request.method === 'GET') {
    const {value} = await readCounters(s);
    return json({players: value.players || 0, plays: value.plays || 0});
  }

  if (request.method !== 'POST') return json({error: '只接受 GET 與 POST'}, 405);

  let body = {};
  try { body = await request.json(); } catch { /* 空 body 當作沒帶 id */ }

  const id = String(body.playerId || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);
  if (id.length < 12) return json({error: 'playerId 格式不對'}, 400);

  const now = Date.now();
  const seenKey = `player/${id}`;
  const seen = await s.get(seenKey, {type: 'json'}).catch(() => null);

  // 冷卻期間內不計數，但還是回傳目前的數字讓畫面能更新
  if (seen && now - (seen.last || 0) < COOLDOWN_MS) {
    const {value} = await readCounters(s);
    return json({players: value.players || 0, plays: value.plays || 0, counted: false});
  }

  await s.setJSON(seenKey, {last: now, matches: (seen?.matches || 0) + 1});
  const next = await bump(s, {newPlayer: !seen});
  return json({players: next.players, plays: next.plays, counted: next.counted});
};

// Netlify v2 函式可以直接指定網址，不必另外寫轉址規則
export const config = {path: '/api/stats'};
