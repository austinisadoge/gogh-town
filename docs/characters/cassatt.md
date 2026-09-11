# 瑪麗・卡薩特 · 1888 年 44 歲

這個模型描繪一位身形飽滿挺拔、神情沉穩的成熟女性。**下面確切的臉部比例和身體尺寸都是無單位的遊戲選擇，不是歷史量測值。** 武器和斥候數值沿用原設定。

## 肖像觀察

開啟了[大都會博物館的《藝術家肖像》，1878](https://www.metmuseum.org/art/collection/search/10409) 並檢視實際影像。畫面顯示圓潤的臉頰與下巴、輪廓分明的鼻子、裝飾帽下往上梳的頭髮，以及一片高聳的淺色領子。**畫中坐姿的不對稱屬於那張畫，不是她步態的證據。**

[國家肖像藝廊的《自畫像》，約 1880](https://npg.si.edu/object/npg_NPG.76.33) 是透過芝加哥藝術學院的[館方託管複製圖](https://artic-web.imgix.net/null28a55ead-0551-43f3-bdb7-cad3f126df0c/NPG-NPG_76_33Cassatt_d1.jpg?auto=format%2Ccompress&crop=faces%2Ccenter&fit=crop&h=2152&q=80&rect=0%2C0%2C2974%2C4000&w=1600) 檢視的，NPG 的物件頁面本身拒絕存取。另外開啟的[史密森尼教學指南第 66–67 頁](https://npg.si.edu/sites/default/files/npg_women-curriculum_guide_interactive-fields_final.pdf#page=66) 獨立佐證了這件作品，並討論了畫中回望的眼神。**那張自畫像比設定年代早約八年，大都會那件則早十年。**

三個臉部線索指引了雕塑：

- **飽滿的臉頰塊面與圓潤明確的下巴：** 兩張自畫像都看得到；`headWidth 1.07`、`headLength 0.99`、`cheekFullness 0.67`、`chinWidth 0.98` 維持成人的結構，不做成尖細的小下臉。
- **厚實、鼻樑清楚的鼻子：** 在約 1880 年那件裡特別明顯；`noseLength 1.06`、`noseWidth 1.03`、`noseBridge 1.03`、`noseTip 0.98` 保住那份存在感，又不會變成球狀的漫畫鼻。
- **輪廓分明的眼睛與適中的嘴唇：** 約 1880 年那件的眼部輪廓與陰影導向 `eyeSize 0.92`、`eyeDepth 0.43`、`lidWeight 0.55`，搭配 `mouthWidth 0.96` 和 `lipFullness 0.94`。年齡處理 `0.49` 是往 1888 年的克制外推，**不是主張畫面上每一處陰影都是皺紋。**

## 遊戲輪廓與虛構的部分

1. 一頂寬大、傾斜的 **李子色大禮帽**，配上指定的不對稱藍灰緞帶與羽毛，讓頭部輪廓跟莫利索的緊湊軟帽區隔開來。**確切的帽子構造、李子色調和羽毛都是虛構的**；參考資料支持華麗的頭飾，但不支持這一頂特定的帽子。
2. 一件 **弧線層疊的短披肩罩在高象牙領上**，在沉穩的腰身之上形成一整片圓潤的肩部包覆。低彩的絲絨、寬幅垂墜的皺褶、克制的縫線和牛角鈕扣，取代了平塗色塊。**這套服裝是美術指導；肖像並沒有確立布料種類。**
3. **較豐厚的腰臀、一般長度的腿和收攏的頭髮**，給卡薩特一個有份量的成年輪廓，不用寬闊的男性肩線，也不做誇張的沙漏身材。**這是刻意跟莫利索做出的對比，不是有記載的體重或身高主張。** 束起的袖口避免出現玩具般的泡泡肩。

深李子色的外層、暖象牙領、藍灰帽帶和灰玫瑰滾邊構成一整組配色。頭髮是暖棕色，眼睛顏色低調，膚色是近似值；**兩張畫都沒有確立確切的天然顏色。**

## 實際支援的控制項

| 分組 | 選定的控制項 |
| --- | --- |
| 服裝 | `hat portrait`, `hair pinned`, `beard none`, `presentation woman`, `coat cape`, `build average`, `accessory capelet`, `sleeves cuffed`, `neckwear none` |
| 配色 | `hairColor #705345`, `beardColor #705345`（未作用）, `skin #dfb594`, `eyeColor #485450`, `coatColor #65536d`, `shirtColor #ded3c1`, `pantsColor #46434f`, `trim #b798a6`, `hatColor #62445d`, `hatBandColor #a6b9c5` |
| 身體 | `stature 1.015`, `shoulderWidth 1.01`, `waistWidth 1.13`, `hipWidth 1.18`, `torsoDepth 1.12`, `belly 0.27`, `chest 0.4`, `legLength 1`, `torsoLength 1.05`, `legThickness 1.07`, `neckWidth 0.96`, `handScale 0.98`, `headWidth 1.07`, `headLength 0.99`, `stoop 0.015` |
| 臉部結構 | `jawWidth 1`, `chinWidth 0.98`, `cheekbone 1.06`, `cheekFullness 0.67`, `foreheadSlope 0.3`, `noseLength 1.06`, `noseWidth 1.03`, `noseBridge 1.03`, `noseTip 0.98` |
| 眼睛與嘴 | `eyeSpacing 1`, `eyeSize 0.92`, `eyeTilt 0.015`, `eyeDepth 0.43`, `browWeight 0.83`, `lidWeight 0.55`, `mouthWidth 0.96`, `lipFullness 0.94` |
| 臉部收尾與毛髮 | `earSize 0.95`, `age 0.49`, `asymmetry -0.055`, `freckles 0.025`, `beardLength 1`, `beardDensity 1`, `moustacheShape none`, `hairPart -0.26`, `hairWave 0.48`；未作用的鬍鬚控制項維持中性。舊版 `look` 重複下顎／鼻／眉的數值，並使用 `hairline 0.13`、`ageLines 0.49`。 |
| 動作 | `cadence 1.04`, `stride 0.96`, `hipSway 0.86`, `shoulderSway 0.84`, `forwardLean 0.026`, `headSteadiness 1.18`, `stanceWidth 1.08`, `footLift 0.95`, `idleBreath 0.89`, `turnLag 0.94`, `handEnergy 0.85` |
| 裁縫 | `fabric velvet`, `weave 0.29`, `roughness 0.89`, `wear 0.16`, `foldScale 1.16`, `buttonMetal horn`, `seamContrast 0.76` |

動作方向：緊湊有目的的步伐、沉穩的支撐站姿、適度的反向旋轉、手部位移小。穩定的頭部讓視線帶著轉身走，帽子不會跟著甩；移動時出現輕微的前傾。**這是虛構的動畫指導，不改變任何玩法速度。避免搖擺的模特兒走法、誇張的彈跳，或是僵住的上半身。**

這份設定檔的驗證：匯出模組語法與完整的控制項範圍都檢查過。**根層級的整合仍然需要正面／四分之三臉部檢視、在小鎮光線下與莫利索的輪廓比對，以及待機、移動、橫移、蹲下、瞄準／換彈和表情動作的播放。宣稱視覺或動作驗收通過之前，要先在最終模型上確認披肩的間隙、帽子與緞帶的輪廓、腳部接觸和握持。**
