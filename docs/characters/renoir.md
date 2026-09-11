# 奧古斯特・雷諾瓦 · 1888 年 47 歲

遊戲的詮釋是一位瘦削、沒戴帽子的中年男子，頭頂只有一小撮紅褐色頭髮，臉窄，穿合身的背心。維持既有的虛構側翼位置。下面兩個博物館頁面都開啟過，並實際檢視了放大的肖像影像；**角色本身沒有打包任何肖像圖像。**

在遊戲距離下，三個大特徵撐起辨識度：

- 沒遮蓋的高額頭，兩側是短髮、頭頂有小小的分線，配一把收尖的短鬍。
- 窄肩、窄腰、淺軀幹，臀部量體收斂，腿也細。**這些無單位的輪廓選擇刻意讓他比莫內和塞尚更瘦，不是對他歷史上身高體重的主張。**
- 合身的短背心和捲起的襯衫袖子，露出前臂和長長的腿線。暖棕、亞麻和煙灰的配色裡帶一小塊冷藍色的領結／隊伍滾邊。

臉部決定來自肖像上具體看得到的線索：

- 雷諾瓦的[《藝術家肖像》，1879，奧賽美術館](https://www.musee-orsay.fr/fr/oeuvres/portrait-de-lartiste-487) 顯示了短分線頭髮之間露出的額頭，以及下端收窄的紅褐色鬍子。遊戲把髮際後退的程度往 1888 年適度加深，鬍子維持緊湊。
- 同一張 1879 年的影像提供了淡眉底下清亮的小眼睛。適中的眼皮厚度與歲月痕跡維持 47 歲的臉，**不借用雷諾瓦晚年那個老得多的樣貌**。虹膜和膚色都是繪畫式近似，**不是考證過的真實顏色**。
- 巴齊耶的[《皮耶・奧古斯特・雷諾瓦》，1867，奧賽美術館](https://www.musee-orsay.fr/en/artworks/pierre-auguste-renoir-63) 讓窄而突出的鼻子、從臉頰到下顎的纖細過渡，以及露出的耳朵特別清楚。鼻樑、窄下顎和稍大的耳朵在四分之三視角裡支撐了這份肖似。**這張較年輕的肖像比設定年代早 21 年。**

動作是虛構但自然的遊戲編排：緊湊而俐落的步伐；臀與肩的橫向位移都很小；略帶前傾的意圖；頭部穩定；轉身快而柔。**步頻與步幅的組合提供個性，不影響移動速度、武器時序或戰鬥數值。** 待機呼吸維持安靜。同樣的窄站姿和收斂擺動要延續到橫移、蹲下、瞄準和換彈；既有的表情動作仍然相容。

背心、捲袖、領結、確切的配色、布料處理和整個體型都是美術指導。**肖像顯示了合身的衣著，但沒有記載這一套特定的服裝。** 適度的羊毛織紋、霧面質感、牛角鈕扣和克制的縫線對比，讓外衣有穿舊、柔軟的感覺，又不會用裝飾蓋掉輪廓。

完整支援的控制項都明確設定在[設定檔](../../src/character-designs/renoir.js) 裡：

| 控制分組 | 實際選擇 |
| --- | --- |
| 頭部／毛髮 | `hat none`, `hair short`, `beard short`, `beardShape pointed`, `hairline .71`, `ageLines .52`；頭髮 `#79533d`、鬍子 `#89593f`、膚色 `#deb79d`、眼睛 `#526166` |
| 服裝 | `coat vest`, `build slim`, `accessory none`, `sleeves rolled`, `neckwear bow`；外套 `#77554f`、襯衫 `#d8c6ab`、長褲 `#505057`、滾邊 `#8fa9b9` |
| 身體 | `stature .97`, `shoulderWidth .83`, `waistWidth .78`, `hipWidth .86`, `torsoDepth .83`, `belly .035`, `chest .14`, `legLength 1.055`, `torsoLength .97`, `legThickness .79`, `neckWidth .81`, `handScale .90`, `headWidth .90`, `headLength 1.055`, `stoop .022` |
| 臉部結構 | `jawWidth .81`, `chinWidth .80`, `cheekbone .99`, `cheekFullness .24`, `foreheadSlope .22`, `noseLength 1.09`, `noseWidth .80`, `noseBridge 1.08`, `noseTip .95` |
| 眼睛／嘴 | `eyeSpacing 1.03`, `eyeSize .90`, `eyeTilt -.017`, `eyeDepth .42`, `browWeight .78`, `lidWeight .48`, `mouthWidth .93`, `lipFullness .83`, `earSize 1.06` |
| 表面／毛髮修整 | `age .52`, `asymmetry .055`, `freckles .025`, `beardLength .93`, `beardDensity .87`, `moustacheShape drooping`, `hairPart -.36`, `hairWave .28` |
| 動作 | `cadence 1.09`, `stride .96`, `hipSway .79`, `shoulderSway .83`, `forwardLean .026`, `headSteadiness 1.15`, `stanceWidth .92`, `footLift .94`, `idleBreath .88`, `turnLag .87`, `handEnergy .96` |
| 裁縫 | `fabric wool`, `weave .42`, `roughness .86`, `wear .26`, `foldScale .82`, `buttonMetal horn`, `seamContrast .72` |

舊版的 `look.jawWidth`、`look.noseLength`、`look.noseWidth` 和 `look.browWeight` 與 face 的數值一致，讓任何還在用舊介面的地方也能得到相同結果。沒戴帽子、沒有圍裙，所以那兩組顏色刻意不提供。

這份獨立設定檔的驗證只做了 JavaScript 語法和欄位／範圍檢查。**最終驗收屬於整合後的模型：正面與四分之三側臉、在小鎮光線下跟莫內／塞尚並排比較，以及完整移動組合中的地面、握持和布料檢查。這份筆記不宣稱那些整合檢查已經通過。**
