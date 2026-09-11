# 角色參考與美術指導 — v7

全體角色代表十二位成年畫家在 **1888 年 12 月 31 日** 的樣子，年齡 24–58 歲。名單、年齡和虛構的隊伍關係記錄在 [ART-WORLD.md](ART-WORLD.md)。肖像提供可辨識的特徵依據；**角色模型仍然是藝術詮釋，不是考證過的肖似，也不是體格的精確重建。**

## 模型與檢視

第 7 版把官方的 **CC0 MakeHuman** 解剖基礎，跟獨立設計的畫家設定檔結合起來。Blender 套上年齡／性別的巨集變形，正規化取出的頭與頸，再塑出該畫家的臉、貼合表面的頭髮與鬍鬚、眼皮和 `Blink` 變形。程序產生的法線與粗糙度貼圖補上克制的皮膚與纖維細節。頭部再接到遊戲裡合身的身體、服裝和帽子上；身體比例、材質和動作權重都屬於各畫家自己的設定檔。

在選角畫面點選中名字旁邊的 **查看畫家**。**臉部**、**全身**、**行走**、**蹲下** 顯示的就是遊戲裡實際用的模型和動畫。拖曳可以旋轉、滾輪縮放、用左右箭頭比較不同畫家，按 **Esc** 關閉。畫布取得焦點後也支援方向鍵旋轉、**＋／−** 縮放，以及 **Home** 重設。肖像卡也是從這同一批組好的模型算出來的。

建置會匯出 `assets/characters/<id>-head.glb`（含近距離與遠距離幾何），以及可編輯的 `assets/characters/Artist-Portrait-Sculpts.blend`。製作流程與來源授權記錄在 [CHARACTER-FRAMEWORK.md](CHARACTER-FRAMEWORK.md) 和 [PROVENANCE.md](../PROVENANCE.md)。**博物館作品只是參考資料，肖像的像素並沒有被嵌進臉部或頭像卡裡。**

## 參考表

下面寫的是遊戲的視覺選擇。一張肖像記錄的是某個時間點畫家被描繪的樣子，**它不能確立確切的解剖結構、真實膚髮色，或是固定的衣著**。比設定年代更早或更晚的參考都明確標了日期。

| 畫家 · 年齡 | 肖像參考 | 角色方向 |
| --- | --- | --- |
| 梵谷 · 35 | [《作為畫家的自畫像》，1888 — 科陶德藝廊](https://virtualtour.courtauld.ac.uk/gal-hotspot/self-portrait-as-a-painter/) | 紅鬍子、稜角分明的臉；磨損的草帽、捲起的袖子和畫家圍裙讓輪廓好認。 |
| 高更 · 40 | [《自畫像與貝爾納肖像》，1888 — 梵谷美術館](https://catalogues.vangoghmuseum.com/contemporaries-of-van-gogh-1/cat57) | 深色頭髮、厚實的八字鬍和鼻子；寬闊的體型、紅色軟貝雷帽和鏽色外套屬於美術指導。那張自畫像本身就帶有刻意的象徵性。 |
| 塞尚 · 49 | [《自畫像》，約 1880–81 — 英國國家美術館](https://www.nationalgallery.org.uk/paintings/paul-cezanne-self-portrait) | 光亮的額頭、濃密的鬍子和寬闊的臉部塊面；較厚的腰身和圍裙讓這位中堅辨識度更高。 |
| 秀拉 · 29 | [勞倫特所繪的肖像，1883 — 奧賽美術館](https://www.musee-orsay.fr/fr/oeuvres/portrait-de-georges-seurat-1859-1891-200796) | 年輕的臉、深色頭髮與鬍子；瘦高挺直的輪廓是為了跟年長畫家做對比而設計的。 |
| 席涅克 · 25 | [畢沙羅所繪的肖像，約 1890 — 美國國家藝廊](https://www.nga.gov/artworks/10105-paul-signac-portrait-de-paul-signac) | 年輕的臉配上濃密的鬍子；扁平的水手帽和寬大的海軍領呼應他對航海的興趣。**這份參考比設定年代晚約兩年。** |
| 羅特列克 · 24 | [拉修所繪的肖像，1883 — GrandPalaisRmn 手冊，第 55 頁](https://grandpalaisrmn.fr/sites/default/files/media/files/Livret_HDA_MicroFolies_Portraitdanslart.pdf)；[全身照，約 1892 — 吉亞納達基金會圖錄，第 25 頁](https://www.gianadda.ch/wp-content/uploads/2017/12/DP-TOULOUSE-LAUTREC-_-FONDATION-PIERRE-GIANADDA.pdf) | 深色頭髮、鬍子、眼鏡和一頂小圓頂禮帽；成人的上半身比例配上較短的腿。**那張較晚的照片只當比例參考，不是 1888 年的快照。** |
| 莫內 · 48 | [雷諾瓦所繪的肖像，1875 — 奧賽美術館](https://www.musee-orsay.fr/en/artworks/claude-monet-496) | 寬大的橄欖色園藝帽和濃密的鬍子；用較寬的中年臉，避開那張年紀大得多的「花園畫家」形象。**這份參考比設定年代早十三年。** |
| 雷諾瓦 · 47 | [《自畫像》，1879 — 奧賽美術館](https://www.musee-orsay.fr/en/artworks/portrait-de-lartiste-487) | 紅褐色的鬍子和後退的髮線；較瘦的輪廓讓他跟莫內分得開。 |
| 竇加 · 54 | [《竇加的封神》，1885 — 奧賽美術館](https://www.musee-orsay.fr/fr/oeuvres/apotheose-de-degas-141886) | 成熟的臉、禿頂、短鬍和長外套。這張合影由竇加安排、巴恩斯拍攝。 |
| 莫利索 · 47 | [《自畫像》，1885 — 瑪摩丹莫內美術館](https://www.marmottan.fr/collections/berthe-morisot/) | 銀灰色的波浪髮、小巧的緞帶軟帽、成熟的長臉，以及輕盈的高領輪廓；這張接近同期的自畫像決定了角色的年齡感。 |
| 畢沙羅 · 58 | [《自畫像》，約 1890 — 美國國家藝廊](https://www.nga.gov/artworks/42668-self-portrait-camille-pissarro-par-lui-meme) | 白鬍子、眼鏡和一頂柔軟下垂的布帽；微微的駝背屬於動畫指導。**這份參考比設定年代晚約兩年。** |
| 卡薩特 · 44 | [《自畫像》，約 1880 — 史密森尼學會](https://www.si.edu/object/mary-cassatt-self-portrait%3Anpg_NPG.76.33)；[館藏描述](https://www.si.edu/object/mary-cassatt-self-portrait-1844-1926-painting%3Asiris_ari_177533) | 不對稱的李子色帽子配緞帶與羽毛、收攏的頭髮、成熟的臉和高領；臉部比例與服裝都跟莫利索明顯區隔。 |

莫利索和卡薩特都是有完整生涯紀錄與自畫像的重要印象派畫家。莫利索是該團體的核心成員；卡薩特受竇加邀請後與他們共同展出過四次。把她們放進來、以及做成中年樣貌，都是依照這段歷史。**她們的戰鬥位置是虛構的。** [瑪摩丹莫內美術館](https://www.marmottan.fr/collections/berthe-morisot/)、[大都會博物館](https://www.metmuseum.org/essays/mary-stevenson-cassatt-1844-1926)

## 比例與界線

羅特列克是唯一有引用整體身高的例外：博物館展覽資料給出約 **1.52 公尺**，並描述他的腿相對軀幹偏短。因此這個角色保留成人的頭部與上半身比例，把腿縮短。**網格的精確比例是藝術選擇；這個設計不做任何醫學診斷或體重主張。** [吉亞納達基金會，第 10 頁](https://www.gianadda.ch/wp-content/uploads/2017/11/CahierNF_TLautrec.pdf)、[GrandPalaisRmn，第 55 頁](https://grandpalaisrmn.fr/sites/default/files/media/files/Livret_HDA_MicroFolies_Portraitdanslart.pdf)

每份 `src/character-designs/<id>.js` 設定檔透過 `src/factions.js` 提供**無單位的建模係數**：身高、肩／腰／臀寬、軀幹厚度、胸腹量體、四肢長度與粗細、手、頸和臉部比例。像 `slim` 或 `broad` 這種標籤是輪廓選擇，**不是有記載的體重**。髮線、歲月痕跡、姿態、膚色和眼睛顏色都是繪畫式的近似。**不應該從這些數值反推出任何公分、公斤或確切的肢體尺寸。** `docs/characters/` 裡的筆記會把每位畫家的肖像依據，跟虛構的比例、服裝與動作分開寫。

圓潤的布料量體、接縫、袖口、鈕扣、織紋和磨損，讓這些形狀有服裝結構。八種各不相同的帽子構造保留下來，塞尚、秀拉、雷諾瓦和竇加則是沒戴帽子。圍裙、背心、工作服、長禮服和披肩狀的肩線都用一致的配色；小面積的金／藍臂章維持隊伍辨識度。**這些是虛構的衣著，不主張哪位畫家真的穿過那一套。**

走路現在依實際位移距離驅動，支撐腳固定在地面，並帶有各自的步幅、頭部穩定度、肩／臀反向擺動和呼吸。蹲下會彎曲可動的腿和軀幹，武器 IK 仍然維持握持。**這些身體、裁縫和移動的改動都不影響玩法數值，包括血量、移動速度和武器傷害。** 原始小鎮維持不變。改過外觀或產生器之後要重建頭部模型，再從同一份穩定的模型快照重新產生整組肖像；**光是匯出成功，不等於最終的視覺與玩法驗收通過。**

## 虛構的勝利動作

十二支原創的短動作，各有自己的手臂、軀幹、頭部和腳步節奏。它們是受藝術母題啟發的競技遊戲表演，**不主張歷史上的畫家真的這樣動**。共用的尺寸和命中體積維持不變；動作結束會回到中性姿勢，也可以立刻取消。雙手做動作時武器會背起來。
