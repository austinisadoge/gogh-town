# 角色框架 — v8 表面細修

目標：在既有的 Three.js 遊戲裡做出辨識度高、模型細緻的成年畫家。人物、臉部特寫和移動要一起改善。原始小鎮與戰鬥／輸入／重生規則維持不動。**這是帶雕塑感的遊戲詮釋，不主張照片級的紀實肖似。**

## 製作流程

頭部從官方的 **CC0 MakeHuman hm08 佈線** 開始，含眼皮、嘴唇、鼻孔、耳朵和 UV。`tools/human_base_head.py` 用原始頂點索引套上對應的性別與年齡巨集變形，取出頭與頸，再重新定位與正規化。因此那些變形帶來的全身身高變化，不會蓋掉遊戲自己的身體比例。成人的年齡混合用 MakeHuman 的 25 歲與 90 歲端點；24 歲的角色以年輕成人端點當起始形狀。

接著用各畫家專屬的 Blender 變形，依設定檔塑出臉型。原生眼皮會拿到一個 `Blink` 形狀鍵；內嵌、程序產生的法線與粗糙度貼圖提供克制的表面細節。v8 的皮膚色素在臉頰、鼻子、耳朵和眼皮周圍加了柔和的解剖變化，對齊每位畫家實際的臉部特徵點。`tools/character_groom.py` 把頭髮、眉毛、鬍鬚和眼鏡貼合到實際的頭部表面，眉毛和八字鬍更飽滿、鬍鬚邊緣更柔、多餘的髮絲更少。**沒有把任何博物館肖像投影到臉上，也沒有用下載的皮膚照片。**

`tools/character_surface.py` 再針對真實的皮膚、眼睛和毛髮幾何量測局部遮蔽：每個頂點打 20 條固定的半球射線，最遠 3.8 公分。它會輕輕加深皺摺處和髮根的皮膚／毛髮頂點色；眼睛和金屬眼鏡保留各自的材質。**這一關只改顏色**，位置、UV 和 Blink 變形都不動，也不會多出執行時的幾何、貼圖或材質。它不會把方向性的日光陰影烘進臉裡。

`tools/build-character-heads.py` 把三個產生器串起來，再做出簡化網格。它匯出 `assets/characters/<id>-head.glb`（含近距離與遠距離兩組網格），以及可編輯的 `assets/characters/Artist-Portrait-Sculpts.blend`。近距離網格保留 `Blink`；遠距離網格拿掉那個變形。`src/character-assets.js` 超過 11 公尺切成簡化細節，回到 9 公尺以內才切回近距離，避免在單一距離邊界附近反覆切換。產生器支援 `--output` 和 `--only`，可以先做一部分測試：

```sh
node tools/export-character-designs.mjs
blender --background --python tools/build-character-heads.py -- --output work/character-staging --only van-gogh,morisot
```

頭部會接到 `src/actors.js` 在執行時建出來的合身身體與帽子上。連續的肩頸塑形、圓潤的布料補片和真實的下襬讓衣服有體積，同時保住畫家的比例。關節和手部的幾何是重新分配的，不是靠增加整體的三角形預算。可動的手腳保留武器 IK。

`src/character-materials.js` 透過既有合併幾何上的 `aSurface` 頂點屬性，區分布料、皮革和裸露皮膚。布料有克制的纖維光澤和織紋；皮革和皮膚是平滑表面，各有自己的粗糙度。只針對角色的間接光被調低，好讓顏色和臉部形體看得清楚，同時不改動小鎮的曝光和直接光源。`src/character-lighting.js` 套用對應的肖像處理，角色檢視器則用一組受控的棚燈配置。既有的共用貼圖仍然共用；表面分類不需要額外的 draw call。

`src/character-motion.js` 以實際位移距離驅動步伐，把支撐腳固定在世界座標裡，再用身體反向運動和個別的動作權重解出腿的落點。**這些視覺系統不改變戰鬥平衡。** 遊戲、角色檢視器和肖像產生器用的是同一批組好的模型；`tools/render-character-portraits.py` 從驗證過、未改動的來源與 GLB 快照擷取卡片。表面細修的目標是在遊戲的雕塑風格裡做出更自然的人體，**不是要建立照片級的肖似或考證過的歷史外貌**。

來源檔、雜湊值與授權證據記錄在 `vendor/makehuman/SOURCES.json`，另見 [PROVENANCE.md](../PROVENANCE.md)。專業的解剖佈線改善了建模基礎，但同樣不構成照片級的肖似或畫家確切的體格。

## 畫家設定檔

每位畫家有一份 `src/character-designs/<id>.js` 設定檔，以及對應的 `docs/characters/<id>.md` 設計筆記。每份設定檔匯出一個預設的純物件。**不要改動玩法數值。** 年齡以 1888 年底為基準。博物館肖像提供質性的外貌依據；**沒有文獻記載的確切體重／身高，不可以當成史實捏造。** 身形比例屬於遊戲的美術指導，唯一的例外是羅特列克那個有文獻記載的約 1.52 公尺身高。請用第一手的博物館出處，引用之前先真的打開那個頁面看過。

```js
export default {
 id: 'van-gogh',
 signature: ['稜角分明、留著銅色鬍子的臉', '磨損的草帽輪廓', '捲起袖子的瘦削工作服'],
 silhouette: '精瘦、長腿、略微前傾的站姿',
 look: { /* 既有支援的外觀鍵，加上下面的身體鍵 */ },
 face: { /* 下面列出的臉部控制項 */ },
 motion: { /* 下面列出的動作權重 */ },
 tailoring: { /* 下面列出的材質控制項 */ },
 references: [{title:'...',url:'https://...',date:'1888',observed:'...'}],
};
```

## 身體與服裝控制（`look`）

既有支援的配色／頭髮／帽子／服裝鍵仍然放在 `src/factions.js`。請保留每個人各自獨有的帽子構造（沒戴帽子也可以）。配色要一致，不要隨機湊。**就算拿掉顏色、小配件和名字標籤，主要輪廓也必須彼此分得出來。**

- `stature`：0.84–1.10。羅特列克固定 0.8444444444、秀拉固定 1.08（既有的物理代理不變量）。
- `shoulderWidth`：.76–1.34、`waistWidth`：.72–1.48、`hipWidth`：.78–1.34。
- `torsoDepth`：.78–1.38、`belly`：0–.9、`chest`：0–.75。
- `legLength`：.65–1.15、`torsoLength`：.88–1.13、`legThickness`：.75–1.30。
- `neckWidth`：.75–1.25、`handScale`：.85–1.18。
- `headWidth`：.85–1.15、`headLength`：.92–1.12、`stoop`：0–.15。
- 既有的 `skin`、`hairColor`、`beardColor`、`eyeColor`、`coatColor`、`shirtColor`、`pantsColor`、`trim`、`hatColor`、`hatBandColor`、`apronColor` 接受十六進位色碼。
- 既有的服裝列舉值：coat 為 smock／doublebreast／vest／frock／sailor／cape／highcollar／long／short；sleeves 為 rolled／cuffed；neckwear 為 none／bow／cravat／stock／kerchief；accessory 為 apron／waistapron／shawl／capelet／scarf／satchel／glasses／none。**位置對應的武器不要改。**

## 臉部雕塑控制（`face`）

每個欄位都要填上該畫家專屬且彼此協調的數值。除了明確標示 0–1 或帶正負號的控制項，中性值都是 1。**不要把所有數值都推到極端。**

`jawWidth` .75–1.30；`chinWidth` .70–1.30；`cheekbone` .75–1.30；`cheekFullness` 0–1；`foreheadSlope` 0–1；
`noseLength` .80–1.35；`noseWidth` .70–1.30；`noseBridge` .75–1.35；`noseTip` .80–1.25；
`eyeSpacing` .85–1.15；`eyeSize` .80–1.15；`eyeTilt` −.15–.15；`eyeDepth` 0–1；
`browWeight` .60–1.40；`lidWeight` 0–1；`mouthWidth` .80–1.20；`lipFullness` .55–1.30；
`earSize` .85–1.20；`age` 0–1；`asymmetry` −.25–.25；`freckles` 0–1；
`beardLength` .70–1.35；`beardDensity` .65–1.35；`moustacheShape` 為 trimmed／drooping／handlebar／none；
`hairPart` −1–1；`hairWave` 0–1。

## 動作權重（`motion`）

這些只調整視覺上的個性，**絕不影響移動速度或戰鬥平衡**。要沉穩、自然、細微，不要滑稽或誇張。

`cadence` .80–1.20；`stride` .85–1.20；`hipSway` .65–1.25；`shoulderSway` .60–1.30；
`forwardLean` 0–.10；`headSteadiness` .75–1.30；`stanceWidth` .85–1.25；`footLift` .80–1.20；
`idleBreath` .70–1.30；`turnLag` .75–1.30；`handEnergy` .60–1.20。

## 裁縫（`tailoring`）

`fabric`：linen／wool／velvet／tweed／cotton；`weave` .2–1；`roughness` .65–.95；`wear` .1–.6；`foldScale` .6–1.4；`buttonMetal`：brass／horn／pewter；`seamContrast` .5–1.2。

## 每位畫家必備的依據

每份設計筆記都要寫出：遊戲距離下的三個輪廓特徵、三個綁定到有年代肖像出處的臉部特徵、移動方向性、實際用到的控制項，以及刻意虛構的服裝／體型選擇。**要區分「從肖像上觀察到的」和「建模時決定的」。不要把尺寸當成已驗證的事實陳述。** 匯出的 JS 語法要驗過。每位畫家維持一份設定檔加一份精簡的設計筆記。

## 驗收

十二個人在中性排列和實際小鎮光照下都必須看起來不一樣。要比對正面與四分之三側臉、張眼與閉眼，以及近／遠距離的切換。待機、走／跑、橫移、蹲下、瞄準／換彈和既有的表情動作都要驗；地面接觸、握持、碰撞／命中代理和 GPU 開銷也要檢查。改過設定檔或產生器之後要重建 glTF 素材，再從同一份穩定的最終模型快照重新產生所有肖像卡。**匯出成功、有截圖或單元測試通過，都不等於移動品質和最終視覺過關。**
