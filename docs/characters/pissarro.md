# 卡米耶・畢沙羅 · 1888 年 58 歲

這份設定檔代表 1888 年 12 月 31 日的畢沙羅。肖像依據引導雕塑式的詮釋。**身體比例、姿態、動作和服裝構造都是虛構的遊戲美術指導，不是量測過的歷史解剖數據。**

三個遊戲距離下的特徵撐起他的辨識度：

1. 一頂 **壓低、往一側下垂的布帽**，沿用 `hat: 'floppy'`，在頭上做出柔軟的輪廓。淺灰褐色的帽頂壓在深色罩衫之上。
2. 一把 **飄逸的灰白長鬍** 延伸到下巴以下，往胸口收窄。`beardShape: 'flowing'`、`beardLength: 1.31` 和 `beardDensity: 1.18` 讓「長度」而不是圓球狀的鬍子量體，成為臉部輪廓的主角。
3. **微微前傾的肩膀與寬鬆的束袖罩衫** 讓軀幹呈現以腰為主的適度飽滿。`shoulderWidth: 0.97`、`waistWidth: 1.07`、`belly: 0.22` 和 `stoop: 0.075` 維持自然的成人體型和一般的腿部比例。

三個臉部特徵有實際開啟過的博物館出處：

- **眼睛與眼鏡：**[美國國家藝廊的自畫像，約 1890](https://www.nga.gov/artworks/42668-self-portrait-camille-pissarro-par-lui-meme) 描述深陷的眼睛越過低垂的半月形眼鏡往上看。`eyeDepth: 0.68`、`eyeSize: 0.91`、`lidWeight: 0.72` 加上既有的眼鏡配件，讓眼睛在成熟的眼窩結構裡仍然看得見。**這份參考比設定年代晚約兩年。**
- **鬍鬚與八字鬍：**該版畫支持淺色的長鬍和被八字鬍遮住的嘴。暖灰白的鬍子加上 `moustacheShape: 'drooping'` 形成一整片有方向性的毛髮量體；底下的嘴唇仍然有塑形。**由於版畫是單色的，眼睛、頭髮和皮膚的真實顏色都是近似值。**
- **額頭、眉骨與鼻子：**[奧賽美術館的自畫像，1873](https://www.musee-orsay.fr/fr/oeuvres/portrait-de-lartiste-366)（影像已實際檢視）顯示了高而露出的額頭、厚實的眉骨和長鼻子。`hairline: 0.92`、`browWeight: 1.18`、`noseLength: 1.21` 和 `noseBridge: 1.17` 轉譯了這些關係。**這張較早的肖像只用來抓結構，不是照抄他 1888 年的年齡。**

樹皮棕的亞麻罩衫、灰褐帽子、鼠尾草綠襯衫、藍灰長褲、淡藍滾邊、圍巾、牛角鈕扣、適度的腰身飽滿和步態，都是刻意的虛構。選這些顏色是為了讓淺色的鬍子在小鎮裡看得清楚；**不能從中推導出任何確切的身高、體重或個人衣著主張。**

[pissarro.js](../../src/character-designs/pissarro.js) 裡完整支援的設定選擇如下：

| 分組 | 數值 |
| --- | --- |
| 身體 | `stature 0.985`, `shoulderWidth 0.97`, `waistWidth 1.07`, `hipWidth 1.03`, `torsoDepth 1.04`, `belly 0.22`, `chest 0.20`, `legLength 0.98`, `torsoLength 1.04`, `legThickness 0.98`, `neckWidth 0.94`, `handScale 1.02`, `headWidth 0.98`, `headLength 1.08`, `stoop 0.075`, `hairline 0.92`, `ageLines 0.72` |
| 服裝 | `hat floppy`, `hair bald`, `beard full`, `beardShape flowing`, `build slim`, `coat smock`, `sleeves cuffed`, `neckwear kerchief`, `accessory glasses` |
| 配色 | `skin #cba58b`, `hairColor #aaa99d`, `beardColor #dad8cb`, `eyeColor #47473e`, `coatColor #655e4b`, `shirtColor #c0c3af`, `pantsColor #505b5d`, `trim #94b6bd`, `hatColor #a29c87`, `hatBandColor #756f60` |
| 臉部 | `jawWidth 0.98`, `chinWidth 0.91`, `cheekbone 1.07`, `cheekFullness 0.38`, `foreheadSlope 0.44`, `noseLength 1.21`, `noseWidth 1.03`, `noseBridge 1.17`, `noseTip 1.06`, `eyeSpacing 0.97`, `eyeSize 0.91`, `eyeTilt -0.024`, `eyeDepth 0.68`, `browWeight 1.18`, `lidWeight 0.72`, `mouthWidth 0.99`, `lipFullness 0.77`, `earSize 1.10`, `age 0.72`, `asymmetry 0.045`, `freckles 0.04`, `beardLength 1.31`, `beardDensity 1.18`, `moustacheShape drooping`, `hairPart 0.08`, `hairWave 0.30` |
| 動作 | `cadence 0.94`, `stride 0.96`, `hipSway 0.78`, `shoulderSway 0.83`, `forwardLean 0.026`, `headSteadiness 1.20`, `stanceWidth 1.08`, `footLift 0.92`, `idleBreath 0.88`, `turnLag 1.13`, `handEnergy 0.77` |
| 裁縫 | `fabric linen`, `weave 0.72`, `roughness 0.91`, `wear 0.34`, `foldScale 1.17`, `buttonMetal horn`, `seamContrast 0.65` |

移動時肩膀和臀部都很安靜，視線穩定，抬腳幅度適中，轉身時軀幹稍微跟隨。休息時輕微的駝背在加上前傾之後仍然要維持克制。**踩實的重心轉移要讀起來仍然是有能力的移動，不要抖動、拖步，也不要拿年紀開玩笑。這些權重不改變戰鬥速度或數值。**

亞麻是霧面的、磨損適中、皺褶柔軟；克制的縫線避免罩衫跟臉部細節搶戲。**角色裡沒有內嵌任何畫作。** `node --check src/character-designs/pissarro.js` 驗證語法；**最終整合後的正面／四分之三肖像、排列比對，以及移動、蹲下、瞄準／換彈、表情動作、腳部接觸和武器握持，仍然需要整合負責人目視檢查。**
