# 毛很多（babypets）— 給 Claude 的交接說明

島主（使用者）不寫程式、用繁體中文溝通。回覆用簡單的白話中文，少用術語；說明改了什麼、要不要更新後端、怎麼確認。

## 架構
- **前端**：`index.html` 單一檔案（CSS + 一個很大的 `<script>`），GitHub Pages 上線。圖片在 `assets/`。
- **後端**：`backend/backend.gs`（Google Apps Script）。**島主自己貼到 Apps Script 並部署**，Claude 不能直接部署。
- **資料**：Google 試算表（players、houses、pets、meta…），不在 GitHub。
- 版本號：前端 `const APP_VER='v2.xx'`（每次改前端都 +1）；後端檔案開頭註解 `整理版 vXX`（改後端就 +1，並寫一行變更說明）。

## 工作流程
1. 在分支 `claude/pensive-cori-8irdtv` 改、commit、push。
2. **只改前端**：開 PR → 合併到 main → `git fetch origin main && git merge --ff-only origin/main && git push`。
   - PR：`gh api repos/maiqq-fun/babypets/pulls -f title=... -f head=claude/pensive-cori-8irdtv -f base=main -F body=@檔案`
   - 合併：`gh api -X PUT repos/maiqq-fun/babypets/pulls/N/merge -f merge_method=merge`（遇到 405 等幾秒再試）
3. **有改後端**：前端先只 commit 到分支、不要合併；把新的 `backend/backend.gs` 也 commit（備份），並另存一份 `毛很多後端_vXX.gs` 傳給島主。等島主說「後端好了」才合併前端。
4. 島主偏好：一次想改的事先記著再一起改，減少更新後端的次數；畫面改動先給截圖確認。

## 檢查與測試
- 語法：把 `<script>` 抽出來 `node --check`：
  `sed -n '/<script>/,/<\/script>/p' index.html | sed '1d;$d' > /tmp/all.js && node --check /tmp/all.js`
- 後端語法：`node -e "new Function(require('fs').readFileSync('backend/backend.gs','utf8'))"`
- `tools/mockback.js`：在 Node 裡跑 backend.gs（記憶體假試算表，島主密碼是 `x`）；`tools/seed.js` 放測試資料。
  Playwright 測試時把 `script.google.com` 的請求導到 `B.__api(body)`。
- `tools/patch.py`：`patch(path, [(舊字串, 新字串), ...])`，每個舊字串必須剛好出現一次。
- 注意：單行 JS 裡不要插 `//` 註解（會吃掉後面的程式）。

## 慣例
- 遊戲裡不要出現 emoji：文字裡的 emoji 會被 `ICMAP`（index.html）自動換成 `assets/icon_*.webp` 自製圖示；新 emoji 要加進 ICMAP 或改用圖示。有 `noic` class 的元素不會被換。
- 綠幕素材：用色鍵去背（`g - max(r,b)`），照輪廓切，不要照格子切。
- commit 訊息結尾加 Co-Authored-By 與 Claude-Session 行；不要在 commit / PR 寫模型名稱。

## 目前狀態（2026-11）
- 前端 v3.05（分支上，等 v75 部署後上線）、後端 v75（**等島主部署**）。v3.03／v74 已上線。
- v75／v3.04：島主後台「📐 調整內建背景」（`roomPosPick`／`roomPosEdit`，用 `posEditor`）：拉佈告欄（二樓＝層板）框和地板線，存 `meta.roompos.pos[房間id]={board,floor:{y0,t}}`（`adminRoomPos`，可恢復原本），getState 帶 `roompos`，前端 `applyRoomPos` 蓋過 BOARDS／RFLOOR（x 擋住的格子保留）。
- v3.05：180 個民宿用品不再分民宿類，改進 家具／家電／🧴 盥洗保養（新分類 `bath`）／擺飾／寵物用品，`ser` 記原本色系（m/k/v/r）。
- v3.03：便條紙圖擺正（`.board .note.nimg{transform:none}`），島主說轉角度看起來歪。
- v3.02：佈告欄便條改用島主做的便條紙圖 `assets/note_0～4.webp`（依原本 5 個顏色碼對應，`noteBg`）。
- v3.01：晚上模式（`#nightdim`，台灣時間 23～6 點）從深藍色改成暖黃小夜燈（multiply 混色），奶油色房間不會變灰。珠珠台按鈕還藏著，等島主說。
- v3.00：毛孩身分證、便條紙改奶茶暖棕色系（島主選 B）。存的顏色碼沒改（睡窩圖 `tent_<色碼>` 靠它），畫的時候用 `ccShow`／`ncShow` 換成新顏色。
- v74／v2.99：訂製裝潢分三種 `DECO_KINDS`（b 通用佈告欄版：一二樓都可、board＝佈告欄，放二樓時變層板；w 二樓空牆版：board＝層板位置；d 二樓裝潢設計版：沒有 board、不放層板），申請單存 `kind`，生圖指令 `decoPrompt(t,kind)` 照種類變。上傳做好的房間時 `posEditor` 直接拉黃色框和地板線，`adminDecoFinish` 一起存 board／floor（不用再去後台背景編輯）。一個家一個月一次，折扣碼也算（只是免費）。
- v74／v2.98：訂製裝潢 🪙1000（`DECO_COST`／`DECO_COST_`）。珠珠台按鈕先藏起來（島主說等一下，程式還在，`ppGame`）。（二樓訂製房的層板位置改在上傳時拉，見 v2.99）
- v2.97：訂製裝潢申請如果是二樓用（`m.f2`），生圖指令 `decoPrompt(t,f2)` 改成「牆中間留空牆放層板、不要軟木板」；二樓訂製房還沒拉層板框時，`f2Spots` 先用中間空牆 [254,330,594,700]（排 2 排）。
- v2.96：島主後台上傳背景勾「二樓專用」時，黃色框改叫「層板位置」（就是 `room.board`，二樓 `f2Spots` 用它排 1～2 排層板）。
- v2.95：珠珠台「碰到洞沒加分」：判定改成跟畫出來的洞一樣大（含珠子半徑），大放送洞上方加兩根擋釘，參數 `PP_P` 重新模擬（約 1/3 中、瞄最好約 96%、大放送約 160 顆一次）。
- v2.94：家人列（`#visits`）和毛孩頭像（`#petheads`）放進同一個直欄 `.leftcol`（`placeHeads` 第一次呼叫時建立），家人列每行固定高度，頭像不會在進房間時上下跳。
- v2.93：玩個毛新增「珠珠台」（`ppGame`，下面按鈕列的「珠珠台」）。珠珠存在 `arc.pb`，1 顆＝🪙1 買／換回；倍數 ×1／2／5／10（扣和吐都乘）。物理核心 `ppMake/ppStep/ppLaunch`（tools/pp_core.js），參數 `PP_P` 用 tools/pp_sim.js 模擬過（島主嫌太少中，改成洞變寬、吐少一點）：約 1/3 的珠珠會中，瞄最好的位置長期拿回約 96%，大放送約 155 顆一次。試玩頁：https://claude.ai/artifact/GgVe1m5yhSGAij2kWMp8zk排行榜島主還在想。機台外框目前程式畫的。
- v2.92：收購單剛拿到時記在 `WANTP`，比它早出發的同步（還沒有收購單的舊資料）回來不會蓋掉；板子空的時候自動再要一次（`wantRollMaybe`）。
- v73／v2.91：毛二街佈告欄改「高價收購」（`wantBoard`，店裡不顯示便條、不能留言）。`shop.want={day,list:[{id,p,by}]}`：當天第一個進店的人 `wantRollMaybe` 從上架系列挑 3 款（普通 1200～3000、隱藏版 4000～6000）送 `shopWantRoll`；`shopWantSell` 檢查玩家背包（存在後端的 game.bag）、每款只收一隻先賣先贏。前端賣之前先 save() 等 1.6 秒讓背包同步。
- v73／v2.90：一番賞一律 🪙800（`kujiPrice_` 固定回 800，現在這箱也是），重複房間賣 🪙400。
- v2.89：二樓等上排標題的名字包在 `.ct1`（一行、太長加…，名字裡的 emoji 圖示變小放同一行），不會被擠成三行切到。
- v2.87：溜滑梯、帳篷小屋、彩虹大球、獨角獸搖搖馬、垃圾堆從島主給的原圖重新去背（`?v=2` 讓手機重抓）。v2.88 地瓜乾、寵物布丁、貓掌沙發也重新去背了。聖誕樹是限定玩具（卡包／毛二街補貨才有），不在商店。
- v2.86：盲盒店預覽圖沒載到時自動重抓（`imgRetry`，最多 2 次，還不行就藏起來不顯示破圖）。陽光小鎮圖檔本身是好的。（被切到的玩具圖見 v2.87）
- v2.85：毛二街賣背包東西改成先在畫面上賣好（扣背包、加金幣、臨時上架），shopSell 在背後送；真的失敗才退回（網路太慢不退）。配件、展示櫃的賣法沒改。
- v2.84：二樓玩具（搬、擺、翻面、收回、層板上放／收）也記 pending（`toyPend(hid+":2")`，`keepToys` 依 key 處理 toys／toys2），同步回來的舊資料不會把畫面蓋回去（島主回報「換玩具會跳回前一個版本」）。
- v2.83：佈告欄便條 3 張以下排一排、正方形（`.board.one`），不會被壓扁（寬扁的佈告欄像 circus 最明顯）。二樓「玩具到上限」是同步延遲，島主說已經好了。
- v2.82：一樓「取消擺放」按鈕（`#gcancel`）改放在 body、fixed 蓋在下面那排按鈕（`.actions.hbar`）上，不擋格子。
- v72／v2.81：毛二街出清：`shopTrim_(stock, s)` 擠下來的貨進 `s.clrq`（最多 30），`clrRoll_` 每天（stateTick_）把最舊 6 樣放進 `s.clr`（舊的沒賣掉就丟），`shopBuy` 帶 `clr:1` 買出清（標 sold，空著到隔天）。價錢＝二手價 /4（`clrPrice`）。前端：右邊地上 `CLR_POS` 放出清籃（有貨 clr_basket_full、沒貨 empty），右邊選單多「出清」，`clrSheet`。毛二街佈告欄框改 [432,232,804,436]。
- v71／v2.80：農田紀錄（`farm.log` 最近 30 筆，`farmLog_`；前端「農田紀錄」按鈕）。種／澆／收遇到網路太慢（`FARM_NET`）不退回畫面，改 `farmTruth` 重新同步看真正結果（之前收成逾時會把作物退回、背包扣掉，伺服器其實收了）。新增 13 款層板（*3 結尾）。二樓層板：寬度至少框寬 90%（`f2ShelfGeo`），佈告欄超過 300 高才排 2 排，層板上的玩具放大。二樓選層板時，掛在展示間、上面沒東西的可以直接搬過來（以前顯示「都掛出去了」，島主以為買了沒拿到）。
- v2.79：毛孩頭像開／關會記住（`PH.fold` 存 localStorage `mhd_ph` 和 `DB.game.ph`），換家、重開都照上次；右邊按鈕（famtools）照舊換家就打開。
- v2.78：家裡上排（`#homewrap .top.hbar`）和二樓、農田、展示間、島民中心的上排（`.centerv .chead`）統一：高 62、按鈕高 38、標題高 46，同樣位置，切換不會跳。iPhone 靜音時遊戲音樂還是會播（只有音效跟著靜音），島主說不用改。
- v2.77：家裡的毛孩頭像（`#petheads`）搬到左邊、排在家人列下面（`placeHeads`），最上面有三角形 `.phtog` 可以收起來（換家自動打開）。音效、音樂開關也存進帳號 `DB.game.av`（`avPref`／`avSave`），手機沒有記錄時照帳號；預設還是開。
- v2.76：二樓「買層板」改開自己的商店 `f2ShelfShop`（只列層板），買了直接掛到點的那一排（後端 buyW 會先掛展示間空排，前端再 setW 收回、f2W 掛上）。
- v70／v2.75：二樓牆面只掛層板（島主說民宿不要相框）。`WALL2[背景]`＝一排一排的框 [x0,y0,x1,y1]（848×1264），層板寬度＝框寬（太扁的框會縮）；沒設定的背景用佈告欄排 1～2 排（`f2Spots`）；很花的背景（原本 4 款、fairyforest）沒有位置。`show.f2.w[i]`＝'sh:款式'，跟展示間共用 `show.wo` 倉庫（`wFree` 兩邊一起算）。層板上的玩具存在 `toys2`（多 `w` 排、`c` 格 0～4），算在二樓 25 個裡（`TOY2_MAX`）。換背景放不下的自動收回（`f2WallFit`）。展示間相框照片：同一隻毛孩照掛上去的時間（`wfa`）輪流用第 1、2、3…張。新增 10 款二樓背景（f2shop_loftblack/loftgreen/daisy/creampaw/spacewhite/spacemint/princess2/crystal2/mine/fairyforest，原圖 941×1672 縮成寬 848、從上面 70 開始切 1264 高）。新增 180 個民宿用品玩具：4 個色系 m_奶茶、k_黑森林、v_薰衣草、r_繽紛（v3.05 起依用途分類），綠幕照輪廓去背（g-max(r,b)，55～120 漸層 alpha、去綠邊）；「新品」只留這批。島主說之後會再做層板素材。
- v2.74：家裡右邊那排按鈕（`#famtools`）最上面加三角形 `.ftog`（`famTog()`，MutationObserver 盯著按鈕變動），按了整排收起來看完整便條；換一個家就自動打開。島主不要搬到左邊。佈告欄框（BOARDS）本身大多已對準軟木板，沒改。
- v2.73：17 間地板比較寬的房間（clouddream、study、catbakery…）把擺玩具範圍 `RFLOOR` 的 t 放寬到約 [45,803]、b=[0,848]，角落有家具的加 x 擋住。舊玩具位置不動，可能跨在新格線上。
- v2.72：盲盒店收集方塊：白＝自己的（抽過或背包）、半透明＝只有家人有（家人背包、展示間），「收集 N」只算自己的，上方有圖例。一番賞 🪙1200 箱的重複房間賣 🪙400（🪙200 箱還是 🪙100）。
- v69／v2.71：一番賞不下架，抽完自動開下一箱；新箱一抽 🪙1200（`meta.kuji.price`，舊箱沒寫 price＝🪙200）。前端抽的時候帶 `pay`，付不夠後端擋下、前端退錢。
- v2.70：擺放中離開家（回小島或去別人家）會自動取消擺放，不會把棋盤格帶到別人家。
- v2.69：擺家具時毛孩「借過」：走到後牆排一排、變半透明；來晃的旅客也變淡；擺好就回去亂跑。
- 練舞室 PK 遊戲：島主說先緩緩。討論過輪流制（丟便便、疊疊毛孩、冰壺）和即時制（像爆爆王、賽車，要另外開 Firebase）。
- v68：後端放掉排隊鎖前先 `SpreadsheetApp.flush()`。原因：沒 flush 時下一個請求可能讀到舊的那列，再整列 put_ 回去 → 澆水、收成「跳回去」。
- v2.68：推幣機「賺」照實際花的金幣算（`arc.paid` 記買代幣花的錢，30 枚包一枚 🪙9；推出來的代幣免費）。島主說不用累計。
- 最近完成：玩個毛改版（拿掉票券、彈珠台 🪙30/90 秒/100 分=🪙1、娃娃機 🪙30 保夾 🪙300、打地鼠 🪙10 週前三 1000/750/500、推幣機代幣＋一疊金幣 🪙50）、外島（島主管理搬家、冬眠）、睡覺改 6 款睡窩、毛孩大小照面積算、公仔/玩具星星記號、交換卡片顯示背包/家裡櫃子數量、盲盒家人有的款式半透明、全面換掉 emoji。
- 待辦／觀察：
  - 種菜澆水「怪怪的」：澆完會跳回沒澆、收成完又顯示可收成 → v68 已部署，等島主回報還會不會。
  - 打地鼠排行「按了沒反應」：已改成先顯示讀取中，等島主回報實際狀況。
  - 毛二街右側頭像是打工毛孩的大頭照（跟 Q 版全身圖對不起來），島主還沒決定要不要改。
