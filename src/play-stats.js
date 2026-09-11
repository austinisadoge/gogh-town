/** 遊玩次數統計（前端這一半）。
 *
 * 每台瀏覽器第一次來時產生一組隨機 ID 存在 localStorage，之後開局就帶著它送出。
 * 伺服器只用這組 ID 去重，不會知道你是誰。
 *
 * 後端沒開或連不上時（例如在本機用 npm start 跑），整塊就安靜地不顯示，
 * 絕不擋住遊戲本身。
 */

const ENDPOINT = '/api/stats';
const STORAGE_KEY = 'gogh-town-player-id';
const TIMEOUT_MS = 4000;

function playerId() {
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id || id.length < 12) {
      id = (crypto.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`)
        .replace(/[^A-Za-z0-9_-]/g, '');
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    // 無痕視窗之類讀不到 localStorage：這一場還是算得到，只是每次都算新玩家
    return `anon-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
  }
}

async function call(method, body) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(ENDPOINT, {
      method,
      signal: controller.signal,
      headers: body ? {'content-type': 'application/json'} : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Number.isFinite(data?.players) && Number.isFinite(data?.plays) ? data : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export function createPlayStats(element) {
  if (!element) return {load: () => {}, recordMatch: () => {}};
  let latest = null;
  let recording = false;

  const render = () => {
    if (!latest) { element.hidden = true; return; }
    const {players, plays} = latest;
    // 還沒人玩過的時候不要顯示「0 人」，那樣很尷尬
    if (plays < 1) { element.hidden = true; return; }
    element.textContent = `已經有 ${players.toLocaleString('zh-TW')} 位畫家在這裡打過 ${plays.toLocaleString('zh-TW')} 場`;
    element.hidden = false;
  };

  const apply = data => { if (data) { latest = data; render(); } };

  return {
    async load() { apply(await call('GET')); },
    async recordMatch() {
      if (recording) return;          // 連點開打不要重複送
      recording = true;
      try { apply(await call('POST', {playerId: playerId()})); }
      finally { recording = false; }
    },
  };
}
