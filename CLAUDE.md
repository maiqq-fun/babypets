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
- 前端 v2.73、後端 v69（都已上線，2026-11-25）。
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
