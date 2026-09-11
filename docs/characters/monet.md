# 克勞德・莫內 · 1888 年 48 歲

莫內看起來是一位厚實、圓潤、留著深色鬍子的成年人。三個遊戲距離下的特徵是：寬大的橄欖色 **園藝帽簷**、**深厚圓潤的罩衫與寬腰**，以及 **寬臀底下厚實的褲管**。一條淺色圍巾把鬍子跟苔綠色的布料分開。**就算在黑白排列裡，這幾塊量體也必須跟那些瘦削的畫家分得出來。**

[沙金的《克勞德・莫內》，收錄在國家設計學院館方撰寫的紀錄裡](https://artsandculture.google.com/asset/claude-monet-john-singer-sargent/PgEv2gbWxFOD8A?hl=en)，提供了最接近同期的臉部參考。標題把作品定在 1887 年；隨附的館方文字也接受 1885 年。頁面和顯示的影像都檢視過。三個特徵指引了雕塑：**鼻樑厚實、往前突出的鼻子**、**壓在陰影眼睛上方的堅實眉骨**，以及 **與後梳深色頭髮相連、鬢角帶點灰的濃密深色鬍**。露出的耳朵和後退的鬢角有助於四分之三視角。**這是一張中年的臉，不是晚年那個白鬍子的花園畫家形象。**

也開啟並實際檢視了[雷諾瓦的《克勞德・莫內》，1875，奧賽美術館](https://www.musee-orsay.fr/en/artworks/claude-monet-496)。它從另一個角度佐證了濃密的深色鬍、八字鬍和突出的鼻子。**這張比設定年代早十三年；畫裡那頂小圓帽不是遊戲裡的園藝帽。** 兩張畫都不能證明體重、確切的解剖結構、膚色或眼睛顏色。較寬的臉頰、厚實的腹部與臀部、橄欖色園藝帽、亞麻罩衫、圍巾、配色和材質磨損，都是明確的遊戲美術指導。**下面所有的數值都是無單位的控制項。**

移動要有踩穩、有目的的感覺：支撐面較寬、抬腳幅度適中、視線穩定、肩膀擺動收斂。軀幹稍微落後加上看得見的呼吸，帶出身體的量體感，又不會讓他顯得遲鈍或滑稽。**這些視覺權重不改變速度、戰鬥數值或武器選擇。**

完整設定檔是 [monet.js](../../src/character-designs/monet.js)，支援的控制項如下：

| 分組 | 實際設定 |
| --- | --- |
| 身體 | `stature 1.01`, `shoulderWidth 1.20`, `waistWidth 1.40`, `hipWidth 1.26`, `torsoDepth 1.32`, `belly .74`, `chest .39`, `legLength .97`, `torsoLength 1.08`, `legThickness 1.22`, `neckWidth 1.18`, `handScale 1.08`, `headWidth 1.10`, `headLength 1.02`, `stoop .025` |
| 構造 | `hat garden`, `hair short`, `beard full`, `beardShape fan`, `build broad`, `coat smock`, `sleeves cuffed`, `neckwear kerchief`, `accessory none` |
| 配色 | `skin #d0a080`, `hairColor #403d35`, `beardColor #473d30`, `eyeColor #4a4b3b`, `coatColor #617361`, `shirtColor #d2ceb6`, `pantsColor #40534d`, `trim #a9c2bc`, `hatColor #85835b`, `hatBandColor #59563d` |
| 舊版臉部相容值 | `jawWidth 1.17`, `noseLength 1.20`, `noseWidth 1.06`, `hairline .39`, `ageLines .52`, `browWeight 1.19` |
| 臉部結構 | `jawWidth 1.17`, `chinWidth 1.08`, `cheekbone 1.05`, `cheekFullness .62`, `foreheadSlope .40`, `noseLength 1.20`, `noseWidth 1.06`, `noseBridge 1.21`, `noseTip 1.10` |
| 眼睛與嘴 | `eyeSpacing .96`, `eyeSize .92`, `eyeTilt -.025`, `eyeDepth .58`, `browWeight 1.19`, `lidWeight .60`, `mouthWidth .98`, `lipFullness .86` |
| 臉部收尾 | `earSize 1.10`, `age .52`, `asymmetry .07`, `freckles .02`, `beardLength 1.16`, `beardDensity 1.19`, `moustacheShape drooping`, `hairPart -.40`, `hairWave .45` |
| 動作 | `cadence .90`, `stride .97`, `hipSway .80`, `shoulderSway .79`, `forwardLean .032`, `headSteadiness 1.18`, `stanceWidth 1.18`, `footLift .88`, `idleBreath 1.12`, `turnLag 1.18`, `handEnergy .78` |
| 裁縫 | `fabric linen`, `weave .78`, `roughness .88`, `wear .34`, `foldScale 1.22`, `buttonMetal horn`, `seamContrast .82` |

設定檔驗證：`node --check src/character-designs/monet.js`。**整合後的正面／四分之三算圖、排列辨識度、移動、地面接觸和武器握持，仍然需要共用算圖器的驗收關卡。**
