import {getStore} from '@netlify/blobs';

/** 一次性清除：把壓力測試留下的假資料刪乾淨。用完就刪掉這個檔案。 */
export default async () => {
  const s = getStore({name: 'play-stats', consistency: 'strong'});
  const removed = [];
  for await (const page of s.list({paginate: true})) {
    for (const b of page.blobs) {
      await s.delete(b.key).catch(() => {});
      removed.push(b.key);
    }
  }
  return new Response(JSON.stringify({刪除筆數: removed.length, 範例: removed.slice(0, 5)}, null, 2),
    {headers: {'content-type': 'application/json; charset=utf-8'}});
};

export const config = {path: '/api/blobtest'};
