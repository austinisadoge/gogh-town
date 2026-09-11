# 喬治・秀拉 · 1888 年 29 歲

這位神射手看起來是高瘦、年輕、安靜而警覺的人。`stature: 1.08` 必須維持原值，這是既有的物理代理不變量，頭部也維持沒戴帽子。**這是雕塑式的遊戲肖似；體型係數不是考證過的歷史尺寸。**

## 肖像依據

開啟了[羅浮宮對勞倫特 1883 年肖像的記錄 RF 23518](https://collections.louvre.fr/ark:/53355/cl020229715) 並實際檢視館方影像。原本的奧賽連結回傳 HTTP 429；羅浮宮把這張素描標示在奧賽的館藏內。也開啟了[美國國家藝廊《Picturing France》印刷版第 100 頁／PDF 第 104 頁](https://www.nga.gov/content/dam/ngaweb/Education/learning-resources/teaching-packets/pdfs/picturing_france.pdf#page=104)，確認了同一張肖像的作者與年代。這是同一張肖像被兩間博物館收錄，時間比遊戲設定早五年。

從勞倫特素描抓出的三個臉部定錨：

1. 突出的長鼻子決定了四分之三側臉；要保留厚實的鼻樑和適度的鼻頭，不要做成細長的三角尖刺。
2. 深色的上眼窩和眉毛框住相對收斂的眼裂。乾淨的額頭和柔和塑形的臉頰維持年輕感；**炭筆素描裡的陰影不能當成深層皺紋的證據。**
3. 深色頭髮往額頭後方梳，濃密的八字鬍與鬍鬚往下收成尖端。要留出看得見的嘴部縫隙，鬍子上方也要保留一點臉頰量體。

頭髮、眼睛和皮膚的顏色都是繪畫式的近似，因為這份參考是單色的。確切的分線、不對稱和鬍鬚修剪方式屬於詮釋。**不要從這張素描推斷確切的身高、體重、步態或性格。**

## 遊戲輪廓與移動

三個好認的特徵是：從腿一路拉上來的挺直垂直線、長禮服外套收窄的肩與腰，以及緊湊尖鬍上方那團露出的圓弧頭髮。外套的下襬收斂、袖口束起、喉部一條淺色領巾撐出脖子；他沒有寬帽簷，也沒有大型配件。炭青、暖象牙和低彩赭色讓服裝在小鎮光線下維持一致。**瘦削的體型、合身的羊毛服裝、顏色和乾淨的牛角鈕扣，都是虛構的遊戲美術指導。**

步伐略長但不趕，落腳貼近，抬趾幅度低但確實，骨盆與肩膀的反向擺動很小。頭部相對穩定，但不跟軀幹鎖死。轉身很快就定下來；雙手和待機呼吸仍有生命感，但很節制。蹲下時髖、膝、踝仍然要有實際的關節動作，既有的武器握持、瞄準和換彈時序仍以原設定為準。**這些權重描述的是虛構的移動方式，絕不改變移動速度或戰鬥平衡。**

## 實際支援的控制項

設定檔是 [src/character-designs/seurat.js](../../src/character-designs/seurat.js)。框架裡每一個臉部、動作和裁縫控制項都明確設定過。

| 分組 | 數值 |
| --- | --- |
| 身體 | `stature 1.08`, `shoulderWidth .89`, `waistWidth .83`, `hipWidth .88`, `torsoDepth .86`, `belly .04`, `chest .18`, `legLength 1.12`, `torsoLength .98`, `legThickness .85`, `neckWidth .87`, `handScale .97`, `headWidth .92`, `headLength 1.07`, `stoop .008` |
| 構造 | `hat none`, `hair short`, `beard full`, `beardShape pointed`, `hairline .06`, `ageLines .12`, `coat frock`, `sleeves cuffed`, `neckwear stock`, `accessory none`, `build slim` |
| 配色 | `skin #d8b291`, `hairColor #302923`, `beardColor #352b25`, `eyeColor #4a4034`, `coatColor #38494a`, `shirtColor #e5dcc5`, `pantsColor #353f3f`, `trim #cbbd92`；未啟用的 `hatColor #38494a`, `hatBandColor #cbbd92`, `apronColor #afa185` |
| 臉部結構 | `jawWidth .91`, `chinWidth .89`, `cheekbone 1.06`, `cheekFullness .25`, `foreheadSlope .24`, `noseLength 1.19`, `noseWidth .93`, `noseBridge 1.16`, `noseTip .99` |
| 眼睛與嘴 | `eyeSpacing .98`, `eyeSize .95`, `eyeTilt .012`, `eyeDepth .52`, `browWeight 1.08`, `lidWeight .47`, `mouthWidth .93`, `lipFullness .88`, `earSize 1.06` |
| 表面與毛髮 | `age .16`, `asymmetry -.025`, `freckles .015`, `beardLength 1.03`, `beardDensity 1.10`, `moustacheShape trimmed`, `hairPart -.38`, `hairWave .28` |
| 動作 | `cadence .92`, `stride 1.08`, `hipSway .73`, `shoulderSway .69`, `forwardLean .012`, `headSteadiness 1.23`, `stanceWidth .91`, `footLift .86`, `idleBreath .78`, `turnLag .84`, `handEnergy .70` |
| 裁縫 | `fabric wool`, `weave .38`, `roughness .82`, `wear .16`, `foldScale .74`, `buttonMetal horn`, `seamContrast .67` |

舊版的 `look.jawWidth`、`look.noseLength`、`look.noseWidth` 和 `look.browWeight` 與 face 的數值一致，讓既有的後備算圖器也能維持同樣的方向。沒戴帽子和沒有圍裙的顏色是備而不用的預設值，不是額外的服裝配件。

語法以 `node --check src/character-designs/seurat.js` 檢查。**最終的正面／四分之三肖似度、長外套與腿的間隙、踩地、蹲下、橫移、瞄準／換彈和表情動作，都屬於整合算圖那一關；資料驗證通過不代表移動品質過關。**
