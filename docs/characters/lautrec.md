# 亨利・羅特列克 · 1888 年 24 歲

這個角色維持成人的頭、手和上半身，底下接明顯偏短的腿。約 **1.52 公尺** 的身高出自 [GrandPalaisRmn 第 55 頁](https://grandpalaisrmn.fr/sites/default/files/media/files/Livret_HDA_MicroFolies_Portraitdanslart.pdf)。**下面所有的網格比例都是藝術選擇。這個設計不指派任何醫學狀況或歷史上的步態。**

在遊戲距離下，三個主要辨識點是：小巧的圓頂禮帽；短褲管之上的成人長軀幹；以及深色長禮服外套配淺色衣領形成的筆直、上下分明的輪廓。眼鏡和貼近的短鬍在肖像視角裡加強辨識度。**身體不是整個等比例縮小的。**

開啟並實際檢視了[奧古斯丁博物館的拉修肖像，1883，館藏編號 RO 1020](https://collections.augustins.toulouse.fr/fr/notice/ro-1020-portrait-du-peintre-henri-de-toulouse-lautrec-0b227dc2-9fe3-42c4-baa9-4398ff06a82b)。三個臉部線索指引了雕塑方向：收斂雙眼上方的濃黑眉毛；又長又突出的鼻子；以及配著年輕臉頰與較窄下巴的厚嘴唇。**這張比設定年代早五年。**[該館對這張肖像的討論](https://augustins.toulouse.fr/conferences-en-ligne/) 也描述了那張光滑飽滿的年輕臉孔和講究的衣著。以文字形式開啟的[吉亞納達圖錄第 25 頁](https://www.gianadda.ch/wp-content/uploads/2017/12/DP-TOULOUSE-LAUTREC-_-FONDATION-PIERRE-GIANADDA.pdf) 把吉貝爾的全身照標定為 **約 1892 年**，並註明出自羅特列克美術館；**它只是一份有年代的比例參考，不是 1888 年的快照。** 這次查證時網頁截圖工具無法算出它的影像。

動作方向是沉著而帶觀察感的：以實際位移計算的緊湊步伐、步頻適中、垂直起伏低、肩膀反向擺動收斂、頭部穩定。轉身和手部活動維持靈敏。**這些是虛構的遊戲動畫選擇；沒有滑稽的搖擺、刻意的跛行，也不做任何診斷式的主張。** 瞄準、蹲下、換彈和表情動作都用共用的骨架和未改動的玩法規則。

[設定檔](../../src/character-designs/lautrec.js) 裡支援的控制項如下：

| 分組 | 實際數值 |
| --- | --- |
| 身體 | `stature .8444444444`, `shoulderWidth 1.06`, `waistWidth 1.06`, `hipWidth 1.03`, `torsoDepth 1.04`, `belly .12`, `chest .18`, `legLength .65`, `torsoLength 1.13`, `legThickness .96`, `neckWidth 1.04`, `handScale 1.04`, `headWidth 1.05`, `headLength 1.03`, `stoop .014` |
| 臉部結構 | `jawWidth 1.05`, `chinWidth .94`, `cheekbone 1.03`, `cheekFullness .43`, `foreheadSlope .21`, `noseLength 1.22`, `noseWidth 1.12`, `noseBridge 1.21`, `noseTip 1.1`, `earSize 1.02` |
| 眼睛與嘴 | `eyeSpacing .96`, `eyeSize .93`, `eyeTilt -.035`, `eyeDepth .46`, `browWeight 1.24`, `lidWeight .35`, `mouthWidth 1.06`, `lipFullness 1.13` |
| 年齡與毛髮 | `age .08`, `asymmetry .045`, `freckles .025`, `beardLength .88`, `beardDensity 1.07`, `moustacheShape trimmed`, `hairPart -.28`, `hairWave .62`；舊版 `hairline .1`, `ageLines .1` |
| 動作 | `cadence 1.1`, `stride .88`, `hipSway .72`, `shoulderSway .76`, `forwardLean .026`, `headSteadiness 1.22`, `stanceWidth 1.08`, `footLift .9`, `idleBreath .87`, `turnLag .9`, `handEnergy .9` |
| 構造 | `hat bowler`, `hair curly`, `beard short`, `beardShape square`, `coat frock`, `sleeves cuffed`, `neckwear bow`, `accessory glasses`, `build broad` |
| 表面 | `fabric wool`, `weave .42`, `roughness .83`, `wear .18`, `foldScale .78`, `buttonMetal horn`, `seamContrast .74` |
| 配色 | 膚色 `#d8b395`、眼睛 `#4f4a3a`、頭髮 `#332b28`、鬍子 `#3a2e2a`、外套 `#52454e`、襯衫 `#e3d6bd`、長褲 `#48454a`、滾邊 `#bc9b6a`、帽子 `#322e32`、帽帶 `#514346` |

煙燻李子色的羊毛、低調的帽帶、牛角鈕扣、領結、精確的體型與臉部尺寸，都是虛構的美術指導。修方的短鬍把那張更年輕的肖像往遊戲的 1888 年成人詮釋推進；**顏色數值不是對真實膚色或眼睛顏色的主張。** 指定的身體係數得出 `legScale / torsoScale = .65 / 1.13 ≈ .5752`，維持了 `< .65` 的不變量，同時保住成人的上半身比例。

設定檔語法與身體比例的直接不變量都在本機檢查過。**最終的正面／四分之三肖像、腳部接觸和所有共用骨架的移動狀態，仍然需要整合算圖的檢視。**
