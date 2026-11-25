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
- 前端 v2.87、後端 v72（都已上線，2026-11-25）。
- v2.87：溜滑梯、帳篷小屋、彩虹大球、獨角獸搖搖馬、垃圾堆從島主給的原圖重新去背（`?v=2` 讓手機重抓）。地瓜乾、寵物布丁、貓掌沙發還缺原圖。聖誕樹是限定玩具（卡包／毛二街補貨才有），不在商店。
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
- v70／v2.75：二樓牆面只掛層板（島主說民宿不要相框）。`WALL2[背景]`＝一排一排的框 [x0,y0,x1,y1]（848×1264），層板寬度＝框寬（太扁的框會縮）；沒設定的背景用佈告欄排 1～2 排（`f2Spots`）；很花的背景（原本 4 款、fairyforest）沒有位置。`show.f2.w[i]`＝'sh:款式'，跟展示間共用 `show.wo` 倉庫（`wFree` 兩邊一起算）。層板上的玩具存在 `toys2`（多 `w` 排、`c` 格 0～4），算在二樓 25 個裡（`TOY2_MAX`）。換背景放不下的自動收回（`f2WallFit`）。展示間相框照片：同一隻毛孩照掛上去的時間（`wfa`）輪流用第 1、2、3…張。新增 10 款二樓背景（f2shop_loftblack/loftgreen/daisy/creampaw/spacewhite/spacemint/princess2/crystal2/mine/fairyforest，原圖 941×1672 縮成寬 848、從上面 70 開始切 1264 高）。新增 180 個民宿用品玩具：4 個色系 m_奶茶、k_黑森林、v_薰衣草、r_繽紛（`cat:'innm'` 等，商店 4 個新分類），綠幕照輪廓去背（g-max(r,b)，55～120 漸層 alpha、去綠邊）；「新品」只留這批。島主說之後會再做層板素材。
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
