# 顏料對決背後的畫家

**畫家是真的，恩怨是虛構的。** 這十二個人在 1888 年都還在世，但從來沒有組成這樣兩支對立的隊伍。隊伍的組合參考了他們彼此重疊的友誼、展覽和色彩實驗。戰鬥位置、武器、隊訓和戰術個性全部是遊戲設計。

下面的年齡以 **1888 年 12 月 31 日** 為基準，對應 `src/factions.js` 裡的 `age1888`。這是歷史上的畫家在那個日期的年齡，不是每張參考肖像的繪製日期。

## 金色 — 黃屋幫

隊名取自梵谷在亞爾提議過的共用工作室。1888 年高更到那裡跟他同住；其他四位成員並不是黃屋的住客。這支擴編的隊伍把不同的色彩與結構路線放在一起。[梵谷美術館](https://www.vangoghmuseum.nl/en/collection/s0032V1962)、[芝加哥藝術學院](https://archive.artic.edu/vangogh/studiosud.html)

| 位置 | 畫家 | 生年 · 年齡 | 歷史關聯 |
| --- | --- | --- | --- |
| 先鋒 | 文森・梵谷 | 1853 · 35 | 整理黃屋，準備當成共用工作室。[梵谷美術館](https://www.vangoghmuseum.nl/en/collection/s0032V1962) |
| 側翼 | 保羅・高更 | 1848 · 40 | 1888 年寄了一張自畫像給梵谷，之後到亞爾跟他同住。[梵谷美術館](https://catalogues.vangoghmuseum.com/contemporaries-of-van-gogh-1/cat57) |
| 中堅 | 保羅・塞尚 | 1839 · 49 | 1880 年代筆觸越來越有秩序，用顏色堆出形體。[英國國家美術館](https://www.nationalgallery.org.uk/artists/paul-cezanne) |
| 神射手 | 喬治・秀拉 | 1859 · 29 | 在 1886 年的印象派畫展上展出《大碗島的星期天下午》。[芝加哥藝術學院](https://archive.artic.edu/seurat/seurat_themes.html) |
| 支援 | 保羅・席涅克 | 1863 · 25 | 與秀拉一起發展分色主義畫法。[奧賽美術館](https://www.musee-orsay.fr/en/program/whats-on/exhibitions/presentation/paul-signac-1863-1935) |
| 斥候 | 亨利・羅特列克 | 1864 · 24 | 1887 年在巴黎畫過梵谷的肖像。[梵谷美術館](https://catalogues.vangoghmuseum.com/contemporaries-of-van-gogh-1/cat132) |

## 藍色 — 獨立派

這裡的 **「獨立派」是虛構的隊名**。它不代表這六個人屬於「獨立藝術家協會」。這支隊伍集合了對風景、現代生活和人物各有偏好的印象派主將。

| 位置 | 畫家 | 生年 · 年齡 | 歷史關聯 |
| --- | --- | --- | --- |
| 先鋒 | 克勞德・莫內 | 1840 · 48 | 1883 年定居吉維尼，研究光線的變化。[英國國家美術館](https://www.nationalgallery.org.uk/artists/claude-monet) |
| 側翼 | 奧古斯特・雷諾瓦 | 1841 · 47 | 1869 年與莫內在塞納河邊一起作畫。[英國國家美術館](https://www.nationalgallery.org.uk/artists/pierre-auguste-renoir) |
| 中堅 | 艾德加・竇加 | 1834 · 54 | 與印象派一同展出，用素描、油畫和粉彩研究現代生活。[英國國家美術館](https://www.nationalgallery.org.uk/artists/hilaire-germain-edgar-degas) |
| 神射手 | 貝爾特・莫利索 | 1841 · 47 | 印象派的核心成員，與莫內、雷諾瓦、竇加、畢沙羅並列。[瑪摩丹莫內美術館](https://www.marmottan.fr/collections/berthe-morisot/) |
| 支援 | 卡米耶・畢沙羅 | 1830 · 58 | 八屆印象派畫展全部參加，1886 年起嘗試新印象派。[阿什莫林博物館](https://www.ashmolean.org/view-my-window) |
| 斥候 | 瑪麗・卡薩特 | 1844 · 44 | 受竇加邀請，1879、1880、1881、1886 年與該團體一同展出。[大都會博物館](https://www.metmuseum.org/essays/mary-stevenson-cassatt-1844-1926) |

莫利索和卡薩特在這段歷史裡都是核心人物，也留下了足以支撐辨識度的當代自畫像。把她們放進來是因為藝術史上的地位，**她們的戰鬥位置不代表任何歷史上的技能或性格**。

兩隊之間刻意留了縫隙：畢沙羅試過秀拉那套畫法，席涅克 1889 年 3 月也親切地去探望過梵谷。那次探訪屬於後來的脈絡，並不是把事件搬到 1888 年。[阿什莫林博物館](https://www.ashmolean.org/view-my-window)、[梵谷 1889 年 3 月 24 日的信](https://vangoghletters.org/vg/letters/let752/letter.html)

## 外貌與實作

[CHARACTER-DESIGN.md](CHARACTER-DESIGN.md) 把肖像證據和虛構的身形比例、服裝、動畫分開處理。`src/factions.js` 存放名單與出處；`src/actors.js` 負責詮釋外貌資料。兩隊都維持先鋒、側翼、中堅、神射手、支援、斥候的順序。博物館連結只是選用的研究參考，遊戲執行時並不依賴它們。

## 個人塗鴉

每位畫家都有一枚原創的噴漆徽章，靈感來自某件作品或某種畫法。[ARTIST-TAGS.md](ARTIST-TAGS.md) 記錄了十二個設計、博物館出處和噴漆行為。這些塗鴉取材橫跨畫家的整個生涯：莫內的睡蓮橋出自 1899 年的畫，羅特列克的海報母題出自 1891 年的版畫。那是虛構遊戲裡刻意放進的晚期呼應，角色年齡的基準仍然是 1888 年。噴漆是暫時性的遊戲效果，不會破壞原始的小鎮畫面與地圖。
