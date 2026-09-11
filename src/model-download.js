/** 在解析器建出越界的型別陣列之前，先擋掉不完整的 GLB。 */
export function validateModelBuffer(buffer) {
  if (!(buffer instanceof ArrayBuffer) || buffer.byteLength < 20) {
    throw new Error('模型下載不完整（缺少 GLB 檔頭）。');
  }
  const view = new DataView(buffer);
  if (view.getUint32(0, true) !== 0x46546c67 || view.getUint32(4, true) !== 2) {
    throw new Error('下載到的不是 GLB 2 格式的檔案。');
  }
  const expected = view.getUint32(8, true);
  if (expected !== buffer.byteLength) {
    throw new Error(`模型下載不完整（${expected} 位元組只收到 ${buffer.byteLength}）。`);
  }
  let offset = 12;
  while (offset < expected) {
    if (offset + 8 > expected) throw new Error('模型下載的區塊標頭不完整。');
    const length = view.getUint32(offset, true);
    if (length % 4 || offset + 8 + length > expected) {
      throw new Error('模型下載的資料區塊不完整。');
    }
    offset += 8 + length;
  }
  return buffer;
}

export async function downloadModel(url, {
  name = '角色', fetchImpl = fetch, timeoutMs = 45000, onRetry = () => {},
} = {}) {
  let failure;
  for (let attempt = 0; attempt < 2; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    // 換一個網址，順便避開重試時中繼快取回舊的壞資料。
    const requestURL = attempt ? `${url}${url.includes('?') ? '&' : '?'}retry=${Date.now()}` : url;
    try {
      const response = await fetchImpl(requestURL, {
        signal: controller.signal, cache: attempt ? 'no-store' : 'no-cache',
      });
      if (!response.ok) throw new Error(`模型請求失敗（HTTP ${response.status}）。`);
      return validateModelBuffer(await response.arrayBuffer());
    } catch (error) {
      failure = error;
      if (!attempt) onRetry(error);
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error(`${name} 沒有下載完整，請再試一次。`, {cause: failure});
}
