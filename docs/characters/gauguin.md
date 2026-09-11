# 保羅・高更 · 1888 年 40 歲

這個角色是對一位成年畫家在 1888 年 12 月 31 日樣貌的雕塑式詮釋。**所有尺寸、步態權重和材質數值都是美術指導，不是有紀錄的身體量測，也不是對他實際動作的觀察。**

## 三個遠距離辨識點

1. 一頂壓低、不對稱的 **酒紅色軟貝雷帽** 往側邊延伸，蓋在深色的後頸髮上。保留原先指定的 `hat: 'slouchberet'`。
2. **上半身的楔形** 由 `shoulderWidth: 1.31`、`chest: 0.66`、`torsoDepth: 1.22` 和 `waistWidth: 1.09` 組成。克制的腹部讓寬闊的胸膛跟「以腰為主」的圓潤身形區隔開來。
3. **結實挺直的雙排扣外套配上厚實的直腿**，用 `legThickness: 1.17`、`neckWidth: 1.21` 和 `stoop: 0.012`。沒有圍裙、垂掛的配件或誇張的大鬍子去干擾身體輪廓。

## 肖像依據與臉部建構

- **突出的鼻子：**[梵谷美術館 1888 年自畫像的圖錄](https://catalogues.vangoghmuseum.com/contemporaries-of-van-gogh-1/cat57) 定錨了這個時期；[美國國家藝廊 1889 年的自畫像](https://www.nga.gov/artworks/46625-self-portrait) 明確描述了鷹鉤鼻。`noseLength: 1.25`、`noseWidth: 1.17`、`noseBridge: 1.24`、`noseTip: 1.10` 做出一條連續而強勢的側臉線，不必把每個五官都放大。
- **後縮的眼睛與厚實的下巴：**[美國國家藝廊《獻給卡里埃的自畫像》，1888 或 1889](https://www.nga.gov/artworks/66418-self-portrait-dedicated-carriere) 描述了眼下的凹陷、不對稱的眉毛、寬鼻樑和前突的下巴。`eyeDepth: 0.62`、`lidWeight: 0.58`、`eyeSize: 0.91`、`browWeight: 1.26`、`chinWidth: 1.16` 和 `asymmetry: 0.06` 把這些關係轉譯成細緻的解剖結構。
- **深色頭髮與有份量的八字鬍：**美國國家藝廊 1889 年的肖像描述了深色頭髮、拱形眉和刷子般的八字鬍。`beard: 'moustache'`、`moustacheShape: 'drooping'`、`beardDensity: 1.22`、`beardLength: 1.12`、`hairPart: -0.24` 和 `hairWave: 0.36` 讓八字鬍底下的下顎仍然露出來。貝雷帽下較長的後頸髮是輪廓選擇。

三個博物館頁面在設計過程中都實際開啟看過。兩張主要的自畫像都使用象徵性的顏色與形體；梵谷美術館特別說明 1888 年那張的臉部畫法是抽象的。**暖調膚色、棕色眼睛、胸圍、髮長、紅貝雷帽、鏽色外套、米色圍巾和炭綠長褲都是遊戲選擇。** 1889 年那張畫只是有年代的交叉比對，不是 1888 年確切樣貌的證據。

## 完整的設定選擇

`look`：`stature 1.04`, `shoulderWidth 1.31`, `waistWidth 1.09`, `hipWidth 1.07`, `torsoDepth 1.22`, `belly 0.20`, `chest 0.66`, `legLength 1.00`, `torsoLength 1.05`, `legThickness 1.17`, `neckWidth 1.21`, `handScale 1.10`, `headWidth 1.07`, `headLength 1.05`, `stoop 0.012`, `hairline 0.14`, `ageLines 0.40`。服裝列舉值為 `slouchberet`、`long` 頭髮、`moustache`、`broad`、`doublebreast`、`cuffed`、`kerchief`，accessory 為 `none`。配色：膚色 `#bd947c`、頭髮 `#352c27`、八字鬍 `#302923`、眼睛 `#655b42`、外套 `#805445`、襯衫 `#d2c5a6`、長褲 `#3c4846`、滾邊 `#ab8766`、貝雷帽 `#703f42`、帽帶 `#482f32`。

`face`：`jawWidth 1.18`, `chinWidth 1.16`, `cheekbone 1.18`, `cheekFullness 0.38`, `foreheadSlope 0.34`, `noseLength 1.25`, `noseWidth 1.17`, `noseBridge 1.24`, `noseTip 1.10`, `eyeSpacing 0.98`, `eyeSize 0.91`, `eyeTilt -0.018`, `eyeDepth 0.62`, `browWeight 1.26`, `lidWeight 0.58`, `mouthWidth 1.10`, `lipFullness 0.86`, `earSize 1.07`, `age 0.40`, `asymmetry 0.06`, `freckles 0.025`, `beardLength 1.12`, `beardDensity 1.22`, `moustacheShape drooping`, `hairPart -0.24`, `hairWave 0.36`。稍微飽滿一點的嘴和臉頰，讓強勢的鼻子和下巴長在一張可信的中年臉上。

`motion`：`cadence 0.94`, `stride 1.10`, `hipSway 0.75`, `shoulderSway 1.05`, `forwardLean 0.029`, `headSteadiness 1.22`, `stanceWidth 1.18`, `footLift 0.92`, `idleBreath 1.04`, `turnLag 1.10`, `handEnergy 0.78`。大步、踩得穩、臀部安靜、頭部穩定，加上肩膀輕微的跟隨，做出重量感又不至於笨重。**這些是視覺權重，戰鬥速度和位置都不變。**

`tailoring`：`fabric wool`, `weave 0.62`, `roughness 0.88`, `wear 0.28`, `foldScale 1.12`, `buttonMetal horn`, `seamContrast 0.72`。柔和的羊毛高光與寬大的皺褶適合這件厚外套，邊緣磨損適中、縫線克制，臉部才不會被搶走。

## 驗證界線

設定檔是完整的純物件匯出，`node --check src/character-designs/gauguin.js` 通過。**最終模型整合仍然需要正面／四分之三側臉的肖像檢查、中性排列比對，以及在小鎮光照下的動作檢視，含腳部和武器握持。語法驗證通過不代表視覺或動畫品質過關。**
