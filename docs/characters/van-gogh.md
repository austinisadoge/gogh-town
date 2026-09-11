# 文森・梵谷 · 1888 年 35 歲

遊戲距離下的三個辨識點是：**磨損的寬草帽簷**、**窄版藍工作服配捲袖露出的前臂與淺色圍裙**，以及 **收窄軀幹底下又長又細的腿**。銅色的鬍鬚是顏色上的簽名；就算轉成黑白，輪廓一樣認得出來。表情要專注而有生氣，眼神穩定，不要做成永遠皺著臉的樣子。

## 外貌依據

出處頁面於 2026 年 9 月 4 日開啟確認。**這些是質性的肖像線索，不是考證過的解剖尺寸。** 這次查證時圖片端點沒有回傳影像；下面的方向依據博物館可存取的文字描述，並沿用既有的「稜角分明的臉」這個詮釋。

| 臉部線索 | 肖像依據與建模決定 |
| --- | --- |
| 眉骨略微壓著的深陷綠色眼睛 | [梵谷美術館對《作為畫家的自畫像》（1887–1888）的詮釋](https://ontrafel.vangogh.nl/en/story/23/a-cheap-model/) 指出綠色的眼睛和皺眉的表情。內縮的眼窩、適度的眼皮和安靜的眉骨帶出專注感，而不是誇張的怒容。 |
| 明顯的銅色鬍鬚，襯著較低調的髮色與膚色 | [科陶德藝廊對同一張畫（1887 年 12 月–1888 年 2 月）的詮釋](https://virtualtour.courtauld.ac.uk/gal-hotspot/self-portrait-as-a-painter/) 引用了梵谷自己描述的紅色亂鬍與灰調頭髮。修短的方形鬍、窄下顎和較低的臉頰飽滿度拉出長形的臉部輪廓；下顎與鼻子的確切係數屬於雕塑上的推斷。 |
| 較厚的嘴唇，以及看得出但克制的額頭／嘴部歲月痕跡 | 同一份科陶德資料提到厚唇和臉部紋路。適中的唇量與年齡係數維持 35 歲成人的樣貌；又長又窄的鼻子是質性的身分辨識選擇，不是量測出來的主張。 |

作品屬於[梵谷美術館](https://www.vangoghmuseum.nl/en/collection/s0022V1962)；科陶德那一頁是展覽詮釋。[大都會博物館的《戴草帽的自畫像》（1887）](https://www.metmuseum.org/art/collection/search/436532) 提供第二張近同期肖像與草帽母題。**沒有任何博物館圖片被打包或拿來當貼圖。**

## 實際使用的設定值

下面是 `src/character-designs/van-gogh.js` 裡的**無單位係數**，不代表身高、體重或歷史上的動作方式。

| 分組 | 控制項 |
| --- | --- |
| 身體 | `stature 1`, `shoulderWidth .88`, `waistWidth .82`, `hipWidth .88`, `torsoDepth .87`, `belly .06`, `chest .13`, `legLength 1.06`, `torsoLength .97`, `legThickness .86`, `neckWidth .88`, `handScale 1.04`, `headWidth .92`, `headLength 1.08`, `stoop .025` |
| 臉部結構 | `jawWidth .88`, `chinWidth .90`, `cheekbone 1.13`, `cheekFullness .20`, `foreheadSlope .28`, `noseLength 1.16`, `noseWidth .88`, `noseBridge 1.14`, `noseTip .94`, `earSize 1.04` |
| 眼睛與嘴 | `eyeSpacing .96`, `eyeSize .91`, `eyeTilt -.025`, `eyeDepth .64`, `browWeight 1.10`, `lidWeight .37`, `mouthWidth .98`, `lipFullness 1.10` |
| 年齡與毛髮 | `age .34`, `asymmetry .045`, `freckles .08`, `beardLength 1.08`, `beardDensity 1.16`, `moustacheShape trimmed`, `hairPart -.35`, `hairWave .18`；相容的外觀控制 `hairline .16`, `ageLines .34`, `jawWidth .88`, `noseLength 1.16`, `noseWidth .88` |
| 動作 | `cadence 1.06`, `stride 1.07`, `hipSway .78`, `shoulderSway 1.07`, `forwardLean .042`, `headSteadiness 1.10`, `stanceWidth .94`, `footLift 1.04`, `idleBreath 1.03`, `turnLag .89`, `handEnergy 1.06` |
| 裁縫 | `fabric linen`, `weave .83`, `roughness .90`, `wear .47`, `foldScale 1.18`, `buttonMetal horn`, `seamContrast .86` |
| 服裝 | `hat frayedstraw`, `hair short`, `beard short`, `beardShape square`, `coat smock`, `build slim`, `accessory apron`, `sleeves rolled`, `neckwear none` |
| 配色 | `skin #d5a48c`, `hairColor #886348`, `beardColor #a6532e`, `eyeColor #68765b`, `coatColor #496773`, `shirtColor #ddd0b4`, `pantsColor #4b5148`, `trim #e7c764`, `hatColor #bea364`, `hatBandColor #78603b`, `apronColor #bca987` |

虛構的移動方式是有目的且沉穩的：步伐略快、臀部橫向擺動很少、肩膀反向擺動適中，轉身時眼神仍然看得清楚。前傾幅度很小；**不要做成駝背、抖動、彈跳，也不要把藝術上的強度轉譯成病症。** 步態係數只改外觀，位置、武器和戰鬥速度都不變。

粗織的藍亞麻有肖像支持。確切的低彩度配色、帽簷磨損、捲起的袖子、圍裙、牛角鈕扣、纖細的身體比例、膚色變化、不對稱和動作，都是虛構的遊戲指導。工作服要有寬鬆柔和的皺褶和磨損的縫線，不要做成亮面塑膠感；鬍鬚密度要讓嘴和下巴的結構還看得出來。**最終的肖似度、排在一起的辨識度、地面接觸、握持，以及每一種移動／動作狀態，都必須在整合後的算圖裡檢查；語法驗證通過不代表這些都過關。**
