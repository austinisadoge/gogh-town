import {cp, mkdir, readdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const output = path.join(root, 'dist');
// 刻意只複製瀏覽器需要的檔案和授權聲明。
// 原始場景、開發工具、本機測試產物和相依套件都不進去。
const entries = ['index.html', 'character-studio.html', 'src', 'vendor/three.module.js', 'vendor/addons',
  'vendor/THREE-LICENSE.txt', 'vendor/makehuman/LICENSE.ASSETS.md', 'vendor/makehuman/SOURCES.json',
  'assets/portraits', 'assets/weapons', 'assets/characters/textures', 'LICENSE', 'THIRD_PARTY_NOTICES.md'];
await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});
for (const entry of entries) {
  const target = path.join(output, entry);
  await mkdir(path.dirname(target), {recursive: true});
  await cp(path.join(root, entry), target, {recursive: true});
}
for (const entry of await readdir(path.join(root, 'assets/characters'))) {
  if (!entry.endsWith('.glb')) continue;
  const target = path.join(output, 'assets/characters', entry);
  await mkdir(path.dirname(target), {recursive: true});
  await cp(path.join(root, 'assets/characters', entry), target);
}
const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
await writeFile(path.join(output, 'release.json'), JSON.stringify({name: '梵谷小鎮大作戰', version: pkg.version}) + '\n');
console.log(`梵谷小鎮大作戰 ${pkg.version} 已打包到 dist/`);
