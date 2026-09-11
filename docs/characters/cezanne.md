# 保羅・塞尚 · 1888 年 49 歲

這位中堅看起來是一個結實的成熟男子。**他的比例是刻意的遊戲雕塑，不主張歷史上的身高或體重。** 下面三個博物館頁面在設計研究時都實際開啟看過。這些肖像都早於 1888 年；臉部另外加了適度的年齡，但不是他晚年那種滿頭白髮的樣子。

在遊戲距離下，三個形狀就能認出他：**光亮的圓頂頭配一把寬扇形鬍子**；**短背心底下深厚的肚子，腰比肩還寬**；**捲起的淺色袖子壓在赭色腰間圍裙上，腿粗而偏短**。大地色系輔助這個輪廓，但辨識度不是靠顏色撐起來的。

| 臉部特徵 | 依據與詮釋 |
| --- | --- |
| 露出的圓額頭；安靜、略微不對稱的眼睛 | [英國國家美術館《自畫像》，約 1880–81](https://www.nationalgallery.org.uk/paintings/paul-cezanne-self-portrait)。該館的描述指出了圓頂的頭骨和不對稱的雙眼。後縮量、眼皮厚度和克制的不對稱保留了這些區別。 |
| 寬鼻子，眼睛坐在厚重的眉骨底下 | [美國國家藝廊《自畫像（正面）》，約 1880/1882](https://www.nga.gov/artworks/66485-self-portrait-recto)。這張四分之三側面的石墨素描是形體參考。**那一頁的視覺描述明確標示為自動產生，所以這些只是質性的設計線索，不是解剖學上的發現。** |
| 飽滿而不均勻的臉部塊面；濃密的鬍子遮住部分的嘴 | [菲利普斯收藏館《自畫像》，1878–80](https://www.phillipscollection.org/collection/self-portrait)。該館討論了禿頂、紅潤的臉，以及遮住嘴和脖子的鬍子。適度的臉頰、濃密的扇形鬍和下垂的八字鬍撐起這個印象。 |

移動很踏實：步幅緊湊、落腳較寬、橫向擺動與手部動作收斂、視線穩定，轉身時軀幹稍微落後一點。輕柔的呼吸讓厚實的軀幹有生命感。**這些權重只改變視覺上的動作；速度、武器、戰鬥位置和平衡都維持原樣。**

完整支援的設定都在 [cezanne.js](../../src/character-designs/cezanne.js)：

| 分組 | 實際控制項 |
| --- | --- |
| 身體 | `stature .99`, `shoulderWidth 1.18`, `waistWidth 1.40`, `hipWidth 1.18`, `torsoDepth 1.30`, `belly .74`, `chest .30`, `legLength .94`, `torsoLength 1.10`, `legThickness 1.23`, `neckWidth 1.16`, `handScale 1.07`, `headWidth 1.12`, `headLength .99`, `stoop .05`, `build broad` |
| 毛髮與臉部 | `hair bald`, `hat none`, `hairline .90`, `ageLines .64`, `beard full`, `beardShape fan`；`jawWidth 1.16`, `chinWidth 1.10`, `cheekbone 1.12`, `cheekFullness .65`, `foreheadSlope .38`, `noseLength 1.08`, `noseWidth 1.21`, `noseBridge 1.09`, `noseTip 1.10`, `eyeSpacing .98`, `eyeSize .90`, `eyeTilt -.025`, `eyeDepth .65`, `browWeight 1.23`, `lidWeight .64`, `mouthWidth 1.06`, `lipFullness .82`, `earSize 1.10`, `age .64`, `asymmetry .08`, `freckles .04`, `beardLength 1.20`, `beardDensity 1.25`, `moustacheShape drooping`, `hairPart 0`, `hairWave .32`。舊版的下顎／鼻／眉數值一致。 |
| 服裝與配色 | `coat vest`, `sleeves rolled`, `neckwear none`, `accessory waistapron`；膚色 `#d2a681`、眼睛 `#615345`、頭髮 `#65594d`、鬍子 `#706252`、背心 `#575348`、襯衫 `#cfc2a8`、長褲 `#4f483c`、滾邊 `#b9a466`、圍裙 `#aa9471`。沒有提供未啟用的帽子配色。 |
| 動作 | `cadence .91`, `stride .91`, `hipSway .74`, `shoulderSway .86`, `forwardLean .025`, `headSteadiness 1.20`, `stanceWidth 1.18`, `footLift .90`, `idleBreath 1.08`, `turnLag 1.17`, `handEnergy .72` |
| 材質 | `fabric wool`, `weave .72`, `roughness .89`, `wear .34`, `foldScale .93`, `buttonMetal horn`, `seamContrast .73`。主體的羊毛背心是霧面、磨損適度，皺褶看得出來、縫線安靜。 |

**結實的體型、肚子、四肢的相對長度、背心加圍裙的組合、確切的顏色和移動方式，全部是虛構的。** 肖像的光線和顏料不能確立真實的膚色或眼睛顏色。灰棕色的頭髮是一種克制的年齡詮釋。這個角色依原設定維持沒戴帽子。**正面、四分之三側面和實際移動中的檢視，仍然是整合驗收的關卡；語法驗證通過不代表最終的視覺品質過關。**
