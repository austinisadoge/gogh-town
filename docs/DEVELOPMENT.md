# 開發筆記

## 執行環境

這是一個沒有打包工具的 ES module Three.js 應用。`index.html` 把 Three.js 的匯入指向鎖定版本的 `vendor/` 檔案。`server.mjs` 是一個只監聽本機的小型開發伺服器。`npm run build` 會把明確列出的瀏覽器檔案複製到 `dist/`，產出可以直接掛在網域根目錄用 HTTPS 提供。

- `src/map.js`：保留原樣的程序生成小鎮。
- `src/game.js`：固定步長的模擬、戰局整合與輸入。
- `src/loadout.js`、`src/combat.js`、`src/weapon-view.js`：裝備、射擊與第一人稱持槍。
- `src/bots.js`、`src/physics.js`：電腦對手的決策、導航與碰撞。
- `src/ui.js`、`src/style.css`：戰鬥介面、選單與戰局呈現。
- `src/actors.js`、`src/character-motion.js`：身體、服裝、IK 與動畫。
- `src/character-designs/`：十二份角色設定檔。

`npm ci && npm test` 會跑 Node 的測試。網址加 `?test=1` 會開啟本機診斷用的遊戲 API，一般造訪不會啟用。`character-studio.html` 是開發時檢視全體角色的頁面。做完有意義的改動之後，請用瀏覽器實際玩過，確認滑鼠鎖定、暫停與繼續、打完一整局、高低幀率，以及實際的視覺結果。

## 中文化須知

這個版本是全繁體中文的。動到文字時有兩件事要注意：

1. **`src/map.js` 有一段不可更動的保真區塊**（第 12–14 行與第 32–482 行）。它包含 `viewpoints` 的英文地名，那些名字在遊戲裡不會顯示。`tests/provenance.test.js` 會逐字比對，改一個字元就會失敗。細節見 [素材來源](../PROVENANCE.md)。
2. **塗鴉的手繪字有自己的一套字級計算**（`src/art-tags.js` 的 `lettering()`）。Impact 這種窄體在同樣的 font-size 下字高只有約 0.72 em，中文方塊字卻佔到 0.86 em，所以中文會縮到 0.85 倍，視覺高度才跟原本的英文一致，不會壓到上一行。每塊字的字數也要配合版位寬度：**版位能放的中文字數 ≈ 原本的英文字母數 × 0.45**。加長了就會爆框。

CSS 的字型堆疊（`src/style.css` 的 `--font`、`--serif`、`--display`）都已經串上中文字型；3D 名牌（`src/nameplate.js`）和雷達（`src/radar.js`）是用 canvas 畫字的，字型另外寫在各自檔案裡，改的時候別漏掉。

## 重新產生角色模型

模型已經預先建好放進版控，所以這些工具是選用的。要改頭部幾何或材質，需要支援 Python 的 Blender 5.x：

```sh
node tools/export-character-designs.mjs
blender --background --factory-startup --python tools/build-character-heads.py
npm run optimize:characters
```

設定檔會匯出到 `build/characters/`。Blender 建置會把十二個 GLB、清單檔和可編輯的 `Artist-Portrait-Sculpts.blend` 寫進 `assets/characters/`。產生出來的 Blender 場景檔不進 Git。最佳化工具會無損地把共用貼圖從 GLB 抽出來，避免重複下載；幾何、材質、變形和影像像素全部保留。也可以只建一部分到另一個資料夾：

```sh
blender --background --factory-startup --python tools/build-character-heads.py -- --output build/character-preview --only van-gogh,morisot
```

在 macOS 上，Blender 就算是背景模式也需要存取 GPU。請在一般使用者的 shell 裡執行，確保 Metal 可用。[角色框架](CHARACTER-FRAMEWORK.md) 記錄了比例、臉部控制與材質。

## 產生肖像圖

另外安裝 `agent-browser` CLI，然後執行 `npm start`。肖像腳本抓的就是遊戲裡用的同一批模型。需要 Python 3 和支援 WebGL 的瀏覽器；腳本不會幫你裝相依套件。

```sh
python3 tools/render-character-portraits.py --new-session portraits --artist van-gogh
```

`--help` 可以看預覽、瀏覽器和輸出的選項。整組角色都目視確認過之後，`--finalize` 會在取代現有肖像之前，先擷取並驗證所有卡片與臉部圖。擷取失敗的話原本的肖像會保留不動。產生的清單檔會記錄實際提供的來源與 GLB 雜湊值。暫時的預覽、建置目錄和測試產物都刻意排除在 Git 之外。

## 貢獻

請保持小鎮的保真測試通過。改動放在對應的玩法或呈現模組裡，真正修掉行為問題時要補上迴歸測試，並且在有硬體加速的瀏覽器裡檢查算圖結果。改角色美術時，特寫和全身都要看，走路、蹲下、瞄準和持槍對位也要一起確認。
