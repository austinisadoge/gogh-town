# 艾德加・竇加 · 1888 年 54 歲

竇加是一位成熟、穿著正式、動作收斂的角色。要傳達的是專注與沉著；**嚴肅感來自眉骨、眼皮和嘴部的比例，不是靠誇張的怒容。** 這個模型是雕塑式的詮釋，不是考證過的重建。

在遊戲距離下，三個形狀認得出他：露出的高頭頂，兩側貼著短髮；較長臉孔底下一把修方的短鬍；以及一件筆直的長版雙排扣外套，上背有輕微的前傾。**外套在臀部刻意收窄**，避開這組角色裡其他人的寬圍裙和寬鬆罩衫輪廓。

開啟並實際檢視了[奧賽美術館 1885 年的《竇加的封神》照片](https://www.musee-orsay.fr/fr/oeuvres/apotheose-de-degas-141886)，由巴恩斯拍攝、竇加安排。畫面中央的人物指引了高額頭、深刻的眉毛和緊湊的鬍子。也開啟並實際檢視了[大都會博物館《書房中的自畫像（手托下巴）》，推測為 1895 年](https://www.metmuseum.org/art/collection/search/296287)。它釐清了四分之三／側面的結構：厚實的長鼻樑收在圓潤的鼻頭、眉骨底下後縮的眼睛，以及相對緊湊的下臉之上寬闊的臉頰塊面。**第二份參考比設定年代晚約七年**，它較重的老化痕跡有被調緩，被遮住的嘴也不當成確切唇形的證據。

動作上頭部穩定、肩膀安靜、臀部橫向位移很小、抬腳幅度低、待機時手部收斂。軀幹轉向略微延遲，增加重量感而不影響玩法速度或戰鬥。**這些選擇包含上背的前傾，都是虛構的動畫指導；1885 年那張安排好的坐姿合照不能證明他平常怎麼動。**

所有實際控制項都在 [`src/character-designs/degas.js`](../../src/character-designs/degas.js)，完整選定的數值如下：

| 控制分組 | 數值 |
| --- | --- |
| 構造 | `hat:none`, `hair:bald`, `beard:short`, `beardShape:square`, `build:average`, `coat:doublebreast`, `sleeves:cuffed`, `neckwear:cravat`, `accessory:none`。正式外套的構造提供了長下襬。 |
| 配色 | `skin:#d3af94`, `hairColor:#756f65`, `beardColor:#79736b`, `eyeColor:#514e46`, `coatColor:#373b45`, `shirtColor:#d7d3c4`, `pantsColor:#303740`, `trim:#a5abb5`。未啟用的帽子／圍裙配色：`hatColor:#373b45`, `hatBandColor:#303740`, `apronColor:#a5abb5`。 |
| 身體 | `stature:1.025`, `shoulderWidth:1.02`, `waistWidth:1.06`, `hipWidth:0.98`, `torsoDepth:1.06`, `belly:0.18`, `chest:0.21`, `legLength:1.04`, `torsoLength:1.02`, `legThickness:0.95`, `neckWidth:0.93`, `handScale:1.0`, `headWidth:0.97`, `headLength:1.07`, `stoop:0.06` |
| 既有臉部後備值 | `hairline:0.89`, `ageLines:0.67`, `jawWidth:1.07`, `noseLength:1.20`, `noseWidth:1.02`, `browWeight:1.26` |
| 臉部塊面與鼻子 | `jawWidth:1.07`, `chinWidth:1.06`, `cheekbone:1.09`, `cheekFullness:0.38`, `foreheadSlope:0.40`, `noseLength:1.20`, `noseWidth:1.02`, `noseBridge:1.18`, `noseTip:1.08` |
| 眼睛與年齡 | `eyeSpacing:0.98`, `eyeSize:0.91`, `eyeTilt:-0.035`, `eyeDepth:0.69`, `browWeight:1.26`, `lidWeight:0.66`, `mouthWidth:0.94`, `lipFullness:0.77`, `earSize:1.05`, `age:0.67`, `asymmetry:0.045`, `freckles:0.0` |
| 毛髮雕塑 | `beardLength:0.78`, `beardDensity:0.93`, `moustacheShape:trimmed`, `hairPart:0.0`, `hairWave:0.08` |
| 動作 | `cadence:0.92`, `stride:0.97`, `hipSway:0.72`, `shoulderSway:0.69`, `forwardLean:0.032`, `headSteadiness:1.24`, `stanceWidth:1.04`, `footLift:0.89`, `idleBreath:0.78`, `turnLag:1.08`, `handEnergy:0.69` |
| 裁縫 | `fabric:wool`, `weave:0.62`, `roughness:0.89`, `wear:0.18`, `foldScale:1.08`, `buttonMetal:horn`, `seamContrast:0.72` |

炭黑色羊毛、灰色領巾、淺色袖口、精確的剪裁、體型係數、膚色／眼睛／頭髮顏色和動作，全部是藝術選擇。**兩張照片都不能確立確切的身體尺寸、真實顏色或固定的衣著。本設計不主張任何身高或體重。** 深色牛角鈕扣和適度的磨損維持外套的正式感，用寬皺褶和低縫線對比，而不是裝飾性的雜訊。

驗證：設定檔通過 `node --check src/character-designs/degas.js` 以及完整的必填欄位／範圍檢查。**最終的正面／四分之三肖似度、地面接觸和外套擺動的驗收，屬於算圖模型的整合檢視。**
