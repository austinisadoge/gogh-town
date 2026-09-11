# 保羅・席涅克 · 1888 年 12 月 31 日 25 歲

席涅克應該看起來是一個年輕、結實的男子，帽子和領子構成清楚的水平輪廓。三個遊戲距離下的特徵是：淺色的扁平水手帽、束袖上方的寬大海軍領，以及由肩膀主導、往下緩緩收進自由腰身、再接到厚實雙腿的軀幹。淺色帽子底下露出一把深色的密實絡腮鬍。**既有的支援位置和武器不變。**

開啟了[畢沙羅的蝕刻版畫，約 1890，美國國家藝廊](https://www.nga.gov/artworks/10105-paul-signac-portrait-de-paul-signac)，並用館方的放大功能實際檢視。三個外貌定錨是：突出的直鼻、往下臉收窄的顴骨塊面，以及短分線頭髮底下密實的鬍子。**這張肖像比設定年代晚約兩年**：較低的年齡與眼皮權重維持 25 歲成人的樣貌。顏色和確切的臉部比例是對一張單色版畫的詮釋。**美國國家藝廊的自動產生描述不當成年齡證據。**

[奧賽美術館教育手冊第 5 頁](https://www.musee-orsay.fr/sites/default/files/2022-03/Brochure%20educative%20Orsay_0.pdf) 為范萊塞貝格 1896 年的《掌舵中的席涅克》下了圖說。那個較晚的航海連結啟發了虛構的帽子、領子和藍羊毛衫，**但不足以證明 1888 年有這樣一套穿著**。結實的體型、配色、棕色鬍子、綠灰色眼睛、輕微磨損和所有尺寸都是遊戲美術指導，**不做任何歷史上的體重或身高主張**。

移動踏實而安靜地俐落：站姿略寬、肩膀反向擺動適中、臀部幾乎不飄，頭部穩定而專注。轉身時整個身體很快跟上。細微的呼吸和手部動作讓他有生命感，但不會變成搖搖晃晃的水手漫畫。**這些數值只改變視覺風格，步態相位和武器握持仍交由共用的動畫系統處理。**

實際支援的控制項在 [signac.js](../../src/character-designs/signac.js)：

| 控制項 | 數值 |
| --- | --- |
| 服裝 | `presentation man`, `hat sailor`, `hair short`, `beard full`, `beardShape square`, `glasses false`, `coat sailor`, `build broad`, `accessory none`, `sleeves cuffed`, `neckwear kerchief` |
| 配色 | `skin #dfb28f`, `hairColor #513d32`, `beardColor #614334`, `eyeColor #59635a`, `coatColor #304d58`, `shirtColor #ded8bd`, `pantsColor #35444b`, `trim #bfba94`, `hatColor #d5cfb5`, `hatBandColor #263a43`, `apronColor #b9ad8b`（未啟用的後備值） |
| 身體 | `stature 1.03`, `shoulderWidth 1.17`, `waistWidth 1.04`, `hipWidth 1.02`, `torsoDepth 1.08`, `belly .16`, `chest .42`, `legLength 1.03`, `torsoLength 1.03`, `legThickness 1.08`, `neckWidth 1.04`, `handScale 1.04`, `headWidth 1.04`, `headLength .98`, `stoop .004` |
| 舊版臉部別名 | `hairline .05`, `ageLines .06`, `jawWidth 1.04`, `noseLength 1.13`, `noseWidth .98`, `browWeight 1.06` |
| 臉部塊面 | `jawWidth 1.04`, `chinWidth .94`, `cheekbone 1.13`, `cheekFullness .47`, `foreheadSlope .23` |
| 鼻子 | `noseLength 1.13`, `noseWidth .98`, `noseBridge 1.12`, `noseTip .98` |
| 眼睛與眉毛 | `eyeSpacing 1.01`, `eyeSize .95`, `eyeTilt .025`, `eyeDepth .34`, `browWeight 1.06`, `lidWeight .27` |
| 嘴與細節 | `mouthWidth 1.03`, `lipFullness .87`, `earSize 1.06`, `age .10`, `asymmetry .055`, `freckles .04` |
| 鬍鬚 | `beardLength 1.14`, `beardDensity 1.17`, `moustacheShape trimmed`, `hairPart -.23`, `hairWave .24` |
| 動作 | `cadence 1.06`, `stride 1.03`, `hipSway .94`, `shoulderSway 1.10`, `forwardLean .025`, `headSteadiness 1.10`, `stanceWidth 1.10`, `footLift 1.02`, `idleBreath 1.04`, `turnLag .91`, `handEnergy 1.02` |
| 裁縫 | `fabric wool`, `weave .58`, `roughness .87`, `wear .22`, `foldScale .92`, `buttonMetal horn`, `seamContrast .76` |

略帶粗糙的霧面羊毛和淺皺褶，讓寬領在小鎮光線下維持辨識度；牛角鈕扣和克制的縫線避免出現像首飾那樣的亮點。鬍子要留在下唇以下、不要壓到領子。**最終整合時，要先檢查正面／四分之三側臉、地面接觸、支援武器的握持和完整的移動組合，再接受這個設計。**
