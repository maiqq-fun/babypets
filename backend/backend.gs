/*
 * 毛很多 babypets 後端・整理版 v75
 * v75：🏠 都更・外牆整修 🪙500；📐 島主可以調整內建背景的佈告欄／層板位置和地板範圍（meta roompos，adminRoomPos）
 * v74：🎨 訂製裝潢一次 🪙1000（以前申請的照當時付的退）；申請分三種（kind：b 通用佈告欄版／w 二樓空牆版／d 二樓裝潢設計版），完成時一起存佈告欄（層板）位置和地板線；一個家一個月一次（折扣碼也算）
 * v73：🎫 一番賞改成一抽 🪙800（現在這箱也是，之後每一箱都是）；🏷️ 毛二街高價收購公仔（shop.want：每天 3 款、🪙1200～6000，賣出一隻那款就結束）
 * v72：🏷️ 毛二街出清：二手架超過 40 樣被擠下來的貨進出清候補（clrq，最多 30），每天換一批 6 樣到出清籃（clr），價錢是二手價的 1/4，沒賣掉的隔天刪掉
 * v71：🌱 農田紀錄（farm.log：誰在什麼時候種、澆、收，最近 30 筆）；🪵 新增 13 款層板
 * v70：🛏️ 二樓：玩具最多 25 個（地上＋層板）；二樓牆面掛層板（show.f2.w，跟展示間共用倉庫），層板上放玩具（toys2 的 w、c）；相框記掛上去的時間（wfa）；新增 10 款二樓背景
 * v69：🎫 一番賞不下架了：這箱抽完自動開下一箱，新箱一抽 🪙1200（price 跟著箱子；前端帶 pay，付不夠就擋下來）
 * v68：🌱 修「澆水、收成會跳回去」：寫進試算表的資料要先真的存好（flush）才讓下一個人排進來；以前偶爾會被別人讀到舊的那份再整列蓋回去
 * v67：🏝️ 外島（adminMoveHouse）：島主把沒在玩的家搬到外島（slot 100～112）；外島的家冬眠：不長便便、不掉錢、不變餓魔、小偷不去、不推播肚子餓；搬回主島時重新計時
 * v66：🎪 玩個毛：打地鼠每週前三名都有獎金（🪙1000／750／500）
 * v57：🗄️ 新增 12 款展示櫃、12 款相框、6 款層板
 * v56：💰 地上的錢袋大約 ×3（小 15～30、中 35～60、大 70～120、超大 150～250、金色福袋 300～500）
 * v55：🎪 玩個毛：打地鼠每週排行榜（arcadeScore／arcadeTop），每週一結算，第一名寄 🪙500
 * v54：🧱 展示間牆面（層板 2 排／壁櫃、相框 2 個、霓虹招牌、榮譽牆自動算）；島主可以上傳展示間專用背景（類別 SH，有價錢，不會被抽到）
 * v53：🔄 公仔交換（tradeOffer／tradeAnswer／tradeCancel／tradeClaim）：提出時先保管、對方答應才互換、3 天沒回自動退回；大家的公仔清單給交換所看
 * v52.1：🐞 人氣王的計分紀錄整週累積，超過試算表一格 5 萬字的上限 → 只留今天的；之後有資料太大會說是哪一筆
 * v52：🎄 小麋鹿豆豆的聖誕禮物（adminXmas／xmasGive／xmasNote／xmasClaim）：送對禮物那家收到 🪙30 的信、全島送滿 100 份每人 🪙300、全部送完 🪙5000
 * v51：🎁 島主自己上傳盲盒系列（adminBbSave／adminBbGet），玩家讀小島時拿到系列清單（不含稀有度）
 * v50：🎁 盲盒店（v51.1：怪咖小鎮補回 SNOWBALL、MOOSE，10 隻全出）（bbDraw：機率和保底在後端抽，每個系列 150 盒保底、隱藏版上動態、集滿送 🪙1000）、🛋️ 裝潢目錄買二樓背景（decoBuy）
 * v49：🗄️ 展示間：島民中心擴建（Lv7、🪙1500、不用審核）；買裝潢、買櫃子（左中右 3 個位置、倉庫）、每個櫃子 4 層 × 5 格放玩具（showEdit）
 * v48：😈 餓魔變溫和：全家 5 天沒上線才出現（原本 2 天）、變成餓魔不發動態；別人摸／餵／零食／玩具一次就解除（不用集 10 點）
 *      🍚 肚子餓推播改成 12 小時沒吃才發（原本 8 小時）
 *      🏗️ 擴建二樓、農田不用島主審核，付錢馬上蓋好（都更還是要審核）
 * v47：💬 便利貼可以回覆（所有人都能回、通知貼的人）、🔒 秘密便條（只有這家的家人和貼的人看得到，其他人只看到摺起來的便條）
 * v46：💼 毛孩打工（毛二街賣萌、公園撿垃圾）：徵才單、投履歷、隔天 4 點抽籤寄信、急徵先搶先贏、每班表現、領薪水（jobApply／jobCancel／jobPay）
 * v45：🐞 排行榜重複發獎：讀小島不排隊（v40 起）時，換週那一刻兩個人同時讀小島會各結算一次 → 結算只在排隊的那段做；順便清掉已經重複的排行榜信
 * v44：島主後台變快——打開後台（adminLogin）、看信（adminMailList）、型錄不用排隊；送禮給全島改成一次送完（adminGiftAll）
 * v43：毛二街買東西可以重送（網路慢逾時後再問，自己剛買到的會直接回「買到了」，不會變成被別人買走）
 * v42：二樓專用的訂製款（只能放二樓、只能送給有二樓的家）；訂製裝潢可以選一樓或二樓
 * v41：換機碼（4 位數）＋「加入現有家庭」點自己名字接回帳號；新島民歡迎信（🪙500＋抽卡券）；島主合併帳號；
 *      訂製裝潢折扣碼（預設「我毛很多」，免費、不限次數）；島主送單一家的禮物不上動態；
 *      島主自己上傳背景（N／R／SSR／限定款／訂製款、軟木板和地板範圍）；島主上傳房子、商店商品（價位、上下架）；
 *      大便改每 3 小時 1 坨、最多 5 坨，零頭留著
 * v40：變快——讀小島（getState）不再整段排隊：要寫的小事（上線時間、掉錢、大便、餓魔）最多等 3 秒，排不到就先跳過；
 *      讀資料的大段不用排隊，其他人的操作（種菜、撿錢、買東西）不會再卡在別人讀小島後面。ping 也不排隊
 * v39：撿錢可以重送（網路慢、逾時後再問一次，撿過的會直接回「撿到了」，不會變成「慢了一步」）
 * v38：擴建門檻 Lv15 → Lv7
 * v37：🏗️ 都更・外牆整修（島民中心申請：Lv7、🪙300、一家 30 天一次、只能選島上沒人用的款式；島主審核，沿用擴建流程）、房子款式 16 → 42 款
 * v36：🌳 毛毛公園（特別的家 id park：毛孩可以遛去、島主免費布置、最多 8 位毛孩客人）
 * v35：🎨 訂製裝潢（島民中心申請 🪙500、一家一個月一次、全島最多 3 件；島主上傳房間寄信給申請人，或退回退款）、島主有沒讀的信直接顯示
 * v34：民宿租金加倍（每小時＝舒適度÷4）、存錢筒最多存 24 小時
 * v33：📐 擴建（島民中心申請、島主審核）：二樓民宿（另一份玩具、換背景、收租）＋農田（種植、澆水、收成、加開格子）
 * v32：🏛️ 島民中心（第 16 塊地不能蓋房子、工讀生設定 adminCenter）、公告可以設期限（1／3／7 天或一直顯示）
 * v31：星寶找到一半（5 次）寫動態、集滿時推播給全島
 * v30：⭐ 星寶活動（adminStar 島主開始／結束、starClaim 集滿 10 次領 500 金幣＋限定房「星星探險屋」）
 * v29：新的大島，地從 12 塊變 16 塊（第 7 塊是毛二街）、房子款式從 12 款變 16 款
 * 把第 1～27 次更新合併成一份：每個動作只寫一次、同一次請求裡每個分頁只讀一次（同步會快很多）。
 * 資料格式和以前完全一樣，試算表、指令碼屬性（SSID、ADMIN_PW）、「設定」分頁都不用動。
 *
 * 換成這份的步驟（請用電腦）：
 * 1. 打開 Apps Script 專案，點 main，把裡面全部刪掉，貼上這整份
 * 2. 專案裡如果還有其他 .gs 檔（例如 Code.gs），右邊 ⋮ → 刪除，只留 main
 * 3. 按 💾 存檔（上方不能出現紅色錯誤）
 * 4. 部署 → 管理部署作業 → ✏️ 編輯 → 版本選「新版本」→ 部署
 *    （不要按「新增部署作業」，不然網址會變；只按存檔不會生效）
 * （每 10 分鐘的定時檢查會沿用原本的，不用重新設定）
 *
 * 這次拿掉的東西：
 * - 沒有用到的動作：feed（舊的餵飯）、adminGive（舊的島主送禮，已由寫信取代）
 * - NPC 基礎（npcMove／npcClaim／adminNpcMove）：前端從來沒用到，卻每 20～40 分鐘寫一次試算表
 * 這次修掉的矛盾：
 * - 撿到金色福袋會寫兩條動態 → 只寫一條
 * - 刪掉毛孩或拆房子時，自訂紀錄（tlogs）和錢袋沒有一起清掉 → 現在會清
 * - 島主撒錢沒填金額時用的是舊的金額表 → 跟自動掉錢用同一套（也會出金色福袋）
 */

// ================= 設定 =================
const NUM = ['slot','style','no','createdAt','poopAt','at','kg','cost','amount','nextNo','lastFed','meals','treatN','wakeUntil','until','amt','seen','on','pushAt'];
const SHEET_NAMES = ['players','houses','pets','weights','medical','expenses','notes','feed','meta','tlogs','letters','adminmail'];
const HOUR_ = 3600000, DAY_ = 86400000, TW_ = 8 * HOUR_;
const FLOOR = { x0: 150, x1: 710, y0: 890, y1: 1170 };
const SLOT_COUNT_ = 16, OUT_BASE_ = 100, OUT_N_ = 13;
const isOut_ = h => !!h && Number(h.slot) >= OUT_BASE_;   // v67：外島的家（冬眠）
const STAR_ROOM_ = 'starhouse', STAR_COINS_ = 500, STAR_GOAL_ = 10, STAR_DAYS_ = 14;
const STYLE_COUNT_ = 42;                                 // 房子款式（13～16：草莓蛋糕屋、鳳梨屋、雪人小屋、恐龍屋）                                  // 小島上的地（第 7 塊是毛二街）

const POOP_EVERY = 3 * HOUR_, POOP_MAX_HOUSE = 5;       // v41：每隻毛孩每 3 小時 1 坨，一個家最多 5 坨（原本 4 小時、4 坨）
const MAX_MEMBERS_ = 5;                                  // 一個家最多 5 個家人
const TREAT_MAX_ = 3, TOY_MAX_ = 20, TOY2_MAX_ = 25, F2_N_ = 6, GIFT_MAX_ = 8;      // 零食每天 3 個、地上玩具 20 個、未拆禮物 8 份
const TOY_ITEMS_ = ['ball','yarn','wand','bone','fishdoll','duck','box','cushion','crown','starlamp','rainbow','castle'];
const ITEM_NAMES_ = { fish: '🐟小魚乾', meat: '🥫肉泥', chicken: '🍗雞肉條', cheese: '🧀起司', carrot: '🥕胡蘿蔔', seeds: '🌻瓜子', cookie: '🍪寵物餅乾', cake: '🎂生日蛋糕' };
const WALK_MS_ = 30 * 60000, GUEST_MAX_ = 3;              // 遛遛 30 分鐘、一個家最多 3 位客人
const FULL_PER_HOUR_ = 100 / 12;                         // 12 小時從飽到空，80 以上不吃
const DROP_LIFE_ = 6 * HOUR_, DROP_EVERY_ = 20 * 60000, DROP_MAX_ = 36;   // 錢袋：每 20 分鐘有機會掉 1 袋、放 6 小時、最多 36 袋
const DROP_P_ = 0.65, DROP_DAY_MAX_ = 3300, DROP_GOLD_ = 200;              // v57：每次 65% 會掉、一袋至少 50、全島一天大約 3000（最多 3300）、200 以上是金色福袋
const DEMON_AFTER_ = 5 * DAY_, DEMON_FREE_ = 3 * HOUR_, DEMON_GOAL_ = 10, DEMON_CD_ = 10 * 60000;
const DEMON_PTS_ = { feed: 3, pat: 1, toy: 2, treat: 2 };   // v48：任何一種互動都直接解救
const ONLINE_MS_ = 3 * 60000;
const KUJI_PLAN_ = { A: 1, B: 2, C: 3, D: 4 }, KUJI_PRICE0_ = 800, KUJI_PRICE_NEW_ = 800;            // 一箱 10 張
const KUJI_ROOMS_ = {                                    // 前端抽籤時會帶最新清單上來覆蓋
  A: ['party','princess'],
  B: ['ocean','star','space','sweetdevil','ufobase','pearl'],
  C: ['sakura','forest','cloud','xmas','arcade','washitsu','circus','pinkroom','street','nightmkt','hiphop','hawaiicat'],
  D: ['study','garden','cafe','beach','dessert','library','cabin','surf','redcheck']
};
const OS_APP_ = 'd95f593b-a072-4dd2-a00c-a057b8467137';
const PUSH_DAY_MAX_ = 10, PUSH_SAME_MS_ = HOUR_;
const PUSH_QUEUE_ = ['gift','rank','notice','note','letter','mail'];   // 半夜發生的這幾種，早上 8 點再推
const PUSH_ST_ = ['on','off','denied','home','na'], PUSH_GIFT_ = { coins: 80, tickets: 1 };
const RANK_BOARDS_ = { coin: '💰財神爺欽點', poop: '💩專業鏟屎官', visit: '🚪社牛里長伯', pop: '🐾本週人氣王' };
const RANK_REWARD_ = [{ coins: 1000, tickets: 1 }, { coins: 600, tickets: 0 }, { coins: 300, tickets: 0 }];   // v65：150/80/40 → 1000/600/300
const POP_DAY_MAX_ = 5;
const MISS_GAP_ = 5 * HOUR_, MISS_LONG_ = 2 * DAY_;
const MAIL_TYPES_ = { bug: '🐞 回報問題', idea: '💡 建議', wish: '🌠 許願', talk: '💬 想說的話' }, MAIL_DAY_MAX_ = 3;
const WEAR_SLOTS_ = ['head','face','neck'];
const CENTER_SLOT_ = 15;                                  // 第 16 塊地是島民中心
const SHOP_ID_ = 'shop2', SHOP_SLOT_ = 6, SHOP_STOCK_MAX_ = 40, SHOP_MGR_MAX_ = 2, SHOP_STAFF_MAX_ = 3;
const SHOP_STAFF0_ = [{ id: 's1', name: '阿二', img: 'assets/shop2_npc_idle.webp', img2: 'assets/shop2_npc_wave.webp', about: '' }];

// ================= 入口 =================
function setup() { SHEET_NAMES.forEach(sh_); uploadsFolder_(); Logger.log('設定完成！資料試算表：' + ss_().getUrl()); }
function doGet() { return ContentService.createTextOutput('毛很多 API OK'); }
const LOCK_FREE_ = { adminLogin: 1, adminMailList: 1, getCatalog: 1, famMembers: 1, noteWatch: 1 };   // v61：noteWatch 只讀便利貼，不排隊
function doPost(e) {
  const lock = LockService.getScriptLock();
  let out, got = false;
  try {
    const req = JSON.parse(e.postData.contents || '{}');
    resetCache_();
    if (req.action === 'getState') {
      // v40：讀小島最常被呼叫（每個人每 45 秒一次）。要寫的部分最多等 3 秒，排不到就跳過（下一次或別人會做）；
      //      讀資料、組畫面的大段不佔排隊，其他人的動作就不會被卡住
      const now = Date.now();
      try { got = lock.tryLock(3000); } catch (x) { got = false; }
      if (got) { try { stateTick_(req, now); } finally { flushSafe_(); try { lock.releaseLock(); } catch (x) {} got = false; } }
      out = { ok: true, data: stateView_(req, now) };
    } else if (LOCK_FREE_[req.action]) {
      // v44：只讀資料的動作不排隊（島主後台、型錄、家人名單）
      const fn = ACTIONS[req.action];
      out = { ok: true, data: fn(req) };
    } else if (req.action === 'ping') {
      try { got = lock.tryLock(2000); } catch (x) { got = false; }
      if (got) ACTIONS.ping(req);
      out = { ok: true, data: true };
    } else {
      lock.waitLock(25000); got = true;
      resetCache_();
      const fn = ACTIONS[req.action];
      if (!fn) throw new Error('不認識的動作：' + req.action);
      out = { ok: true, data: fn(req) };
    }
  } catch (err) {
    out = { ok: false, error: String(err && err.message || err) };
  } finally {
    if (got) { flushSafe_(); try { lock.releaseLock(); } catch (x) {} }
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

// ================= 讀小島（v40 拆成兩段） =================
// 第一段：要寫進試算表的小事（要排隊，最多等 3 秒，排不到就跳過）
function stateTick_(req, now) {
  { const sh = shop_(); if (clrRoll_(sh)) put_('houses', sh); } park_(); kujiSync_(null); kuji_(); rank_(); fixRankDup_();
  const me = req.playerId ? get_('players', req.playerId) : null;
  if (me) {
    let ch = false;
    if (now - (Number(me.seen) || 0) > 5 * 60000) { me.seen = now; ch = true; }
    if (me.houseId) {
      const where = String(req.where || '').slice(0, 20);
      if (now - (Number(me.on) || 0) > 60000 || me.where !== where) { me.on = now; me.where = where; ch = true; }
    }
    if (!me.code) { me.code = newCode_(); ch = true; }
    if (!/^\d{4}$/.test(String(me.pin || ''))) { me.pin = newPin_(); ch = true; }
    if (ch) put_('players', me);
  }
  seenSince_(); demonCheck_(now);
  try { giftTidy_(now); } catch (e) {}
  spawnDrops_(all_('houses').filter(h => !isOut_(h)));
  const houses = all_('houses'), pets = all_('pets');
  houses.forEach(h => { if (!isOut_(h)) spawnPoops_(h, pets.filter(p => p.houseId === h.id).length, now); });
  try { jobTick_(now); } catch (e) {}
  try { econFix_(); } catch (e) {}
  try { keysTick_(); } catch (e) {}
  try { thiefTick_(now); } catch (e) {}
}
// 第二段：只讀資料、組成畫面要的樣子（不用排隊）
function stateView_(req, now) {
  kujiSync_(null);
  const me = req.playerId ? get_('players', req.playerId) : null;
  const houses = all_('houses'), pets = all_('pets');
  const fam = famHouse_(req), isl = meta_('island'), m = isl.dbl === twDay_() ? 2 : 1, P = all_('players');
  const d = {
    now: now,
    houses: houses.map(h => { const c = Object.assign({}, h); delete c.pw; if (!(fam && fam.id === h.id)) delete c.key; return c; }),
    pets: pets.map(p => { if (fam && p.houseId === fam.id) return p; const c = Object.assign({}, p); delete c.chip; delete c.allergy; return c; }),
    weights: all_('weights'),
    medical: fam ? all_('medical').filter(r => petHouse_(pets, r.petId) === fam.id) : [],
    expenses: fam ? all_('expenses').filter(r => petHouse_(pets, r.petId) === fam.id) : [],
    notes: all_('notes').map(n => noteView_(n, req, fam)),
    feed: recentFeed_().sort((a, b) => b.at - a.at).slice(0, 60),
    player: me,
    famOk: !!fam,
    // 家人看得到彼此的金幣（只給同一個家的人）
    players: P.map(p => {
      const g = p.game || {}, o = { id: p.id, nick: p.nick, houseId: p.houseId || '', lv: Number(g.lv) || 1, on: Number(p.on) || Number(p.seen) || 0 };
      const bag = g.bag && typeof g.bag === 'object' ? g.bag : {};
      o.figs = Object.keys(bag).filter(k => TRADE_FIG_.test(k) && Number(bag[k]) > 0);   // v53：交換所看得到的公仔（背包裡的）
      o.figN = {}; o.figs.forEach(k => { o.figN[k] = Number(bag[k]) || 0; });            // v58：每一款有幾隻
      if (me && me.houseId && p.houseId === me.houseId) o.coins = Number(g.coins) || 0;
      return o;
    }),
    // 自訂紀錄：家人全看，外人只看公開的
    tlogs: all_('tlogs').filter(l => {
      const p = pets.find(x => x.id === l.petId);
      if (!p) return false;
      if (fam && p.houseId === fam.id) return true;
      const t = (Array.isArray(p.trackers) ? p.trackers : []).find(x => x.id === l.tid);
      return t && t.vis !== 'family';
    }),
    drops: drops_().map(x => ({ id: x.id, houseId: x.houseId, fl: Number(x.fl) === 2 ? 2 : 1, x: x.x, y: x.y, amt: Number(x.amt) * m, gold: Number(x.amt) >= DROP_GOLD_ })),
    notice: noticeView_(isl), dbl: isl.dbl || '', adminId: isl.adminId || '',
    center: centerView_(),
    rooms: roomsView_(),
    roompos: (get_('meta', 'roompos') || {}).pos || {},
    bbx: bbxView_(),
    catVer: Number((get_('meta', 'catalog') || {}).ver) || 0,
    amail: me && me.id === isl.adminId ? all_('adminmail').filter(m => !m.read).length : 0,
    applies: fam ? all_('apply').filter(a => a.houseId === fam.id).sort((a, b) => b.at - a.at).slice(0, 10) : [],
    letters: me && me.houseId ? lettersFor_(me.id) : [],
    kuji: kujiView_(get_('meta', 'kuji') || kujiNewBox_(1)),
    star: starView_(),
    xmas: xmasView_(),
    trades: me ? tradesFor_(me.id) : [],
    jobs: jobsView_(now),
    thief: thiefView_(),
    online: P.filter(p => p.houseId && now - (Number(p.on) || 0) < ONLINE_MS_).map(p => ({ id: p.id, where: p.where || '' }))
  };
  try { d.rank = rankView_(); } catch (e) {}
  return d;
}

// ================= 試算表（每個分頁第一列是欄位名稱，id 在 A 欄） =================
// 同一次請求裡，每個分頁只讀一次，之後都從記憶體拿；寫入時同時更新記憶體
let SS_ = null, C_ = {};
function resetCache_() { C_ = {}; }
// v68：放掉排隊鎖之前，先把這次寫的東西真的存進試算表（不然下一個人可能讀到舊的，再整列蓋回去）
function flushSafe_() { try { SpreadsheetApp.flush(); } catch (x) {} }
function ss_() {
  if (SS_) return SS_;
  try { SS_ = SpreadsheetApp.getActiveSpreadsheet(); } catch (e) {}
  if (SS_) return SS_;
  const props = PropertiesService.getScriptProperties(), id = props.getProperty('SSID');
  // v59：已經有資料試算表就一定用它；暫時打不開就報錯（不要再自己建一份新的，資料會像被清空一樣）
  if (id) { try { SS_ = SpreadsheetApp.openById(id); return SS_; } catch (e) { throw new Error('小島資料暫時打不開，等一下再試 🙏'); } }
  SS_ = SpreadsheetApp.create('毛很多資料');
  try { DriveApp.getFileById(SS_.getId()).moveTo(folder_(DriveApp.getRootFolder(), 'babypets')); } catch (e) {}
  props.setProperty('SSID', SS_.getId());
  return SS_;
}
function sh_(name) {
  const ss = ss_();
  let s = ss.getSheetByName(name);
  if (!s) { s = ss.insertSheet(name); s.getRange(1, 1).setValue('id'); s.setFrozenRows(1); }
  return s;
}
function headers_(s) { return s.getRange(1, 1, 1, Math.max(1, s.getLastColumn())).getValues()[0].map(String); }
function tab_(name) {
  let c = C_[name];
  if (c) return c;
  const s = sh_(name), h = headers_(s), last = s.getLastRow();
  const rows = last < 2 ? [] : s.getRange(2, 1, last - 1, h.length).getValues();
  const idx = {};
  rows.forEach((r, i) => { const k = String(r[0]); if (r[0] !== '' && idx[k] === undefined) idx[k] = i; });
  c = C_[name] = { s: s, h: h, rows: rows, idx: idx };
  return c;
}
function decode_(h, row) {
  const o = {};
  h.forEach((k, i) => {
    let v = row[i];
    if (v === '' || v === null || v === undefined || k === '') return;
    if (v instanceof Date) v = Utilities.formatDate(v, 'Asia/Taipei', 'yyyy-MM-dd');
    v = String(v);
    if (v[0] === '{' || v[0] === '[') { try { v = JSON.parse(v); } catch (x) {} }
    else if (NUM.indexOf(k) >= 0 && !isNaN(Number(v))) v = Number(v);
    o[k] = v;
  });
  return o;
}
function all_(name) { const c = tab_(name); return c.rows.filter(r => r[0] !== '').map(r => decode_(c.h, r)); }
function get_(name, id) {
  if (!id) return null;
  const c = tab_(name), i = c.idx[String(id)];
  return i === undefined ? null : decode_(c.h, c.rows[i]);
}
function put_(name, obj) {
  const c = tab_(name), s = c.s, h = c.h;
  Object.keys(obj).forEach(k => { if (h.indexOf(k) < 0) { h.push(k); s.getRange(1, h.length).setValue(k); c.rows.forEach(r => r.push('')); } });
  const row = h.map(k => { const v = obj[k]; if (v === undefined || v === null) return ''; return typeof v === 'object' ? JSON.stringify(v) : String(v); });
  const big = row.findIndex(v => v.length > 49000);   // 試算表一格最多 5 萬字：先擋下來，說清楚是哪一筆
  if (big >= 0) throw new Error(`資料太大存不下：${name}／${obj.id}／${h[big]}（${row[big].length} 字），請截圖給 Claude`);
  let i = c.idx[String(obj.id)];
  if (i === undefined) { i = c.rows.length; c.rows.push(row); c.idx[String(obj.id)] = i; } else c.rows[i] = row;
  s.getRange(i + 2, 1, 1, h.length).setNumberFormat('@').setValues([row]);
}
function del_(name, id) { delWhere_(name, o => o.id === String(id)); }
// 一次刪掉符合條件的很多列（從下面往上刪，列號才不會亂）
function delWhere_(name, test) {
  const c = tab_(name), rm = [];
  c.rows.forEach((r, i) => { if (r[0] !== '' && test(decode_(c.h, r))) rm.push(i); });
  if (!rm.length) return 0;
  rm.reverse().forEach(i => c.s.deleteRow(i + 2));
  delete C_[name];
  return rm.length;
}
function uid_() { return Utilities.getUuid().replace(/-/g, '').slice(0, 10); }
function meta_(id) { return get_('meta', id) || { id: id }; }
// ⭐ 星寶活動：島主按開始後兩週（星寶出現的時間、躲在哪家，前端照同一套公式各自算）
// 公告：過期就不回傳
function noticeView_(isl) { const n = isl && isl.notice; if (!n || !n.t) return null; if (Number(n.until) && Date.now() > Number(n.until)) return null; return n; }
// 🏛️ 島民中心：工讀生（沒設定就用前端預設的 Amy）
function centerView_() { const m = get_('meta', 'center'); return m && Array.isArray(m.staff) ? { staff: m.staff } : null; }
// 🎨 訂製房間（島主上傳的，只屬於申請的那一家；不在抽卡、一番賞）
// v41：島主上傳的房子款式、商店商品（meta catalog）。getState 只送版本號，有變前端再用 getCatalog 拿
function catalog_() { const m = meta_('catalog'); if (!Array.isArray(m.styles)) m.styles = []; if (!Array.isArray(m.items)) m.items = []; m.ver = Number(m.ver) || 0; return m; }
function styleOk_(n) { n = Number(n); if (n >= 1 && n <= STYLE_COUNT_) return true; return catalog_().styles.some(x => Number(x.n) === n && !x.off); }
function roomsView_() { const m = get_('meta', 'rooms'); return m && Array.isArray(m.list) ? m.list : []; }
const DECO_COST_ = 1000, DECO_DAYS_ = 30, DECO_QUEUE_ = 3;
function starView_() { const m = get_('meta', 'star'); return m && Number(m.start) ? { start: Number(m.start), end: Number(m.end) || Number(m.start) + STAR_DAYS_ * DAY_ } : null; }
function starOn_() { const v = starView_(), t = Date.now(); return !!(v && t >= v.start && t < v.end); }
function twDay_(t) { return Utilities.formatDate(t ? new Date(t) : new Date(), 'Asia/Taipei', 'yyyy-MM-dd'); }
function twHour_(t) { return new Date((t || Date.now()) + TW_).getUTCHours(); }
function isQuiet_(t) { const h = twHour_(t); return h >= 23 || h < 8; }
const accId_ = s => /^[a-z0-9_]{1,20}$/.test(String(s || '')) ? String(s) : '';
const clampN_ = (v, lo, hi) => Math.max(lo, Math.min(hi, Number(v) || 0));

// ---------- 雲端硬碟 ----------
function uploadsFolder_() { return folder_(folder_(DriveApp.getRootFolder(), 'babypets'), 'uploads'); }
function folder_(parent, name) { const it = parent.getFoldersByName(name); return it.hasNext() ? it.next() : parent.createFolder(name); }

// ---------- 動態 ----------
function feed_(t) {
  put_('feed', { id: uid_(), t: String(t).slice(0, 80), at: Date.now() });
  try { const s = sh_('feed'), last = s.getLastRow(); if (last > 400) { s.deleteRows(2, last - 300); delete C_.feed; } } catch (e) {}
}
function recentFeed_() {
  const c = tab_('feed');
  return c.rows.slice(-80).filter(r => r[0] !== '').map(r => decode_(c.h, r));
}

// ================= 權限 =================
const isShopId_ = id => String(id || '') === SHOP_ID_;
const PARK_ID_ = 'park', PARK_GUESTS_ = 8;
const isParkId_ = id => String(id || '') === PARK_ID_;
const isSpecialId_ = id => isShopId_(id) || isParkId_(id);
function adminOk_(req) { const pw = PropertiesService.getScriptProperties().getProperty('ADMIN_PW'); return !!(pw && String(req.adminPw || '') === pw); }
// 🌳 公園：跟毛二街一樣是特別的「家」，第一次用到時自動建立
function park_() {
  let s = get_('houses', PARK_ID_);
  if (s) return s;
  s = { id: PARK_ID_, kind: 'park', slot: -1, style: 0, name: '毛毛公園', motto: '旅客和毛孩散步的地方', room: 'park', owned: [], poops: [], poopAt: Date.now(), toys: [], gifts: [], createdAt: Date.now() };
  put_('houses', s); return s;
}
// 家人：家的 ID＋家人密碼對得上。allowShop：毛二街的店長也算（只有擺玩具用）
function famHouse_(req, allowShop) {
  if (isShopId_(req.houseId)) return allowShop && isMgr_(req.playerId) ? get_('houses', SHOP_ID_) : null;
  if (isParkId_(req.houseId)) return allowShop && adminOk_(req) ? park_() : null;
  if (!req.houseId || !req.pw) return null;
  const h = get_('houses', req.houseId);
  return h && h.pw === req.pw ? h : null;
}
function mustFam_(req, allowShop) {
  const h = famHouse_(req, allowShop);
  if (!h) throw new Error('只有家人可以這樣做（密碼不對或已被修改）');
  return h;
}
function mustPlayer_(id) {
  const p = id && get_('players', id);
  if (!p) throw new Error('找不到你的玩家資料，請重新整理');
  return p;
}
// 島民：有家的人（私人小島，沒有家的人不能互動）
function resident_(req) {
  const p = get_('players', req.playerId);
  if (!p || !p.houseId || !get_('houses', p.houseId)) throw new Error('這是私人小島，要島主邀請才能加入 🔒');
  return p;
}
function isAdmin_(req) {
  const pw = PropertiesService.getScriptProperties().getProperty('ADMIN_PW');
  if (!pw) throw new Error('還沒設定島主密碼（指令碼屬性 ADMIN_PW）');
  if (String(req.adminPw || '') !== pw) throw new Error('島主密碼不對');
  return true;
}
function noShop_(id) { if (isShopId_(id)) throw new Error('毛二街是店，不能這樣做喔'); if (isParkId_(id)) throw new Error('公園不能這樣做喔'); }
function petHouse_(pets, petId) { const p = pets.find(x => x.id === petId); return p ? p.houseId : ''; }
const membersOf_ = (houseId, exceptId) => all_('players').filter(p => p.houseId === houseId && p.id !== exceptId).map(p => p.id);
const residents_ = () => all_('players').filter(p => p.houseId);
const ownedOf_ = h => (h && Array.isArray(h.owned) ? h.owned : ['wood']);
const dblOn_ = () => meta_('island').dbl === twDay_();

// ================= 小島的自動事件 =================
// ---------- 便便 ----------
function spawnPoops_(h, nPets, now) {
  if (!nPets) return;
  if (!Number(h.poopAt)) { h.poopAt = now; put_('houses', h); return; }
  const last = Number(h.poopAt), periods = Math.floor((now - last) / POOP_EVERY), k = periods * nPets;
  if (k <= 0) return;
  const poops = Array.isArray(h.poops) ? h.poops : [];
  for (let i = 0; i < k && poops.length < POOP_MAX_HOUSE; i++)
    poops.push({ id: uid_(), x: Math.round(FLOOR.x0 + Math.random() * (FLOOR.x1 - FLOOR.x0)), y: Math.round(FLOOR.y0 + Math.random() * (FLOOR.y1 - FLOOR.y0)) });
  h.poops = poops; h.poopAt = last + periods * POOP_EVERY; put_('houses', h);   // v41：零頭留著下次算
}
// ---------- 錢袋 ----------
function dropAmt_() {
  const r = Math.random(), rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  if (r < 0.70) return rnd(50, 55);    // v57：至少 50
  if (r < 0.90) return rnd(56, 80);
  if (r < 0.98) return rnd(90, 150);
  return rnd(200, 300);   // ✨ 金色福袋
}
function drops_() { const now = Date.now(); return (Array.isArray(meta_('drops').list) ? meta_('drops').list : []).filter(d => now - Number(d.at) < DROP_LIFE_); }
function saveDrops_(list) { put_('meta', { id: 'drops', list: list.slice(-40) }); }
// 錢袋、禮物不要疊在一起：找一個離其他東西最遠的位置
function freeSpot_(houseId, skipId) {
  const h = get_('houses', houseId) || {};
  const taken = (Array.isArray(h.gifts) ? h.gifts : []).concat(drops_().filter(d => d.houseId === houseId && !Number(d.fl)))
    .filter(o => o.id !== skipId).map(o => ({ x: Number(o.x), y: Number(o.y) }));
  let best = null, bestD = -1;
  for (let i = 0; i < 16; i++) {
    const x = Math.round(FLOOR.x0 + 60 + Math.random() * (FLOOR.x1 - FLOOR.x0 - 120));
    const y = Math.round(FLOOR.y0 + 30 + Math.random() * (FLOOR.y1 - FLOOR.y0 - 60));
    const d = taken.length ? Math.min(...taken.map(t => Math.hypot(t.x - x, (t.y - y) * 1.6))) : 999;
    if (d > 110) return { x: x, y: y };
    if (d > bestD) { bestD = d; best = { x: x, y: y }; }
  }
  return best;
}
function newDrop_(houseId, amt, fl) {
  if (fl === 2) {   // v57：二樓也會掉錢（位置由前端放進二樓的地板範圍）
    const L = drops_().filter(d => d.houseId === houseId && Number(d.fl) === 2);
    let best = null, bestD = -1;
    for (let i = 0; i < 16; i++) { const x = 0.1 + Math.random() * 0.8, y = 0.15 + Math.random() * 0.7, d = L.length ? Math.min(...L.map(o => Math.hypot(o.x - x, o.y - y))) : 9; if (d > bestD) { bestD = d; best = { x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000 }; } }
    return { id: uid_(), houseId: houseId, fl: 2, amt: amt || dropAmt_(), at: Date.now(), x: best.x, y: best.y };
  }
  const s = freeSpot_(houseId); return { id: uid_(), houseId: houseId, amt: amt || dropAmt_(), at: Date.now(), x: s.x, y: s.y };
}
// 每 30 分鐘掉 1 袋；掉出金色福袋就推播
function spawnDrops_(houses) {
  if (!houses.length) return;
  const isl = meta_('island'), slot = 'h' + Math.floor(Date.now() / DROP_EVERY_);
  if (String(isl.dropSlot) === slot) return;
  isl.dropSlot = slot;
  const day = twDay_(); if (isl.dropDay !== day) { isl.dropDay = day; isl.dropSum = 0; }
  if (Math.random() >= DROP_P_ || (Number(isl.dropSum) || 0) >= DROP_DAY_MAX_) { put_('meta', isl); return; }
  const list = drops_();
  if (list.length >= DROP_MAX_) { put_('meta', isl); return saveDrops_(list); }
  const h = houses[Math.floor(Math.random() * houses.length)], fl = Number(h.floor2) && Math.random() < 0.5 ? 2 : 1;
  const d = newDrop_(h.id, 0, fl);
  isl.dropSum = (Number(isl.dropSum) || 0) + Number(d.amt); put_('meta', isl);
  list.push(d); saveDrops_(list);
  if (Number(d.amt) >= DROP_GOLD_ && !isQuiet_()) notify_(residents_().map(p => p.id), 'gold', '✨ 島上出現金色福袋！先搶先贏！');
  try { camNotify_(h, fl, 'coin'); } catch (e) {}
}
// ---------- 島主禮物：拆過一週自動收掉 ----------
function giftTidy_(now) {
  const isl = meta_('island');
  if (now - (Number(isl.giftChk) || 0) < HOUR_) return;
  isl.giftChk = now; put_('meta', isl);
  all_('houses').forEach(h => {
    if (!Array.isArray(h.gifts)) return;
    const keep = h.gifts.filter(g => !(g.admin && Array.isArray(g.opened) && g.opened.length && now - Number(g.at || 0) > 7 * DAY_));
    if (keep.length !== h.gifts.length) { h.gifts = keep; put_('houses', h); }
  });
}
// ---------- 餓魔：全家 2 天沒上線 ----------
function seenSince_() {
  const isl = meta_('island');
  if (!isl.seenSince) { isl.seenSince = Date.now(); put_('meta', isl); }
  return Number(isl.seenSince);
}
function demonCheck_(now) {
  const isl = meta_('island');
  if (now - (Number(isl.demonChk) || 0) < 10 * 60000) return;
  isl.demonChk = now; if (!isl.seenSince) isl.seenSince = now; put_('meta', isl);
  const since = Number(isl.seenSince), P = all_('players'), pets = all_('pets');
  all_('houses').forEach(h => {
    if (isOut_(h) || (h.demon && typeof h.demon === 'object')) return;
    const M = P.filter(p => p.houseId === h.id);
    if (!M.length || !pets.some(p => p.houseId === h.id)) return;
    const last = Math.max(since, Number(h.demonOff) || 0, ...M.map(p => Number(p.seen) || 0));   // 被救回來之後重新算 5 天
    if (now - last < DEMON_AFTER_) return;
    h.demon = { since: last, at: now, prog: 0, until: 0, helpers: [], cd: {} };
    put_('houses', h);   // v48：不發動態，只在門口顯示
  });
}
// ---------- 遛遛：在別人家被照顧，主人也有獎勵 ----------
function guestOwner_(petId, actorId) {
  const now = Date.now();
  for (const h of all_('houses')) {
    const g = (Array.isArray(h.guests) ? h.guests : []).find(x => x.petId === petId && Number(x.until) > now);
    if (g && g.ownerId !== actorId) return g.ownerId;
  }
  const c = jobNow_(jobs_(), petId, now);   // v46：打工中的毛孩被摸，主人也有小費
  if (c && c.ownerId !== actorId) return c.ownerId;
  return null;
}
function addInbox_(playerId) {
  const p = playerId && get_('players', playerId);
  if (!p) return;
  const ib = p.inbox && typeof p.inbox === 'object' ? p.inbox : { n: 0 };
  ib.n = Math.min(50, (Number(ib.n) || 0) + 1); p.inbox = ib; put_('players', p);
}

// ================= v64：家庭鑰匙碼（6 碼英數，家人看得到、可以改）・PIN 碼（4 位數） =================
// 家庭鑰匙碼只用來「加入家庭」；家人手機裡的登入憑證還是原本的 pw（改鑰匙碼不會把家人登出）
const KEY_CH_ = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const normKey_ = k => String(k || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
const keyOk_ = k => /^[A-Z0-9]{6}$/.test(k) && /[A-Z]/.test(k) && /[0-9]/.test(k);
function newKey_() { let k = ''; do { k = ''; for (let i = 0; i < 6; i++) k += KEY_CH_[Math.floor(Math.random() * KEY_CH_.length)]; } while (!keyOk_(k)); return k; }
function keysTick_() { all_('houses').forEach(h => { if (!isSpecialId_(h.id) && !keyOk_(String(h.key || ''))) { h.key = newKey_(); put_('houses', h); } }); }
function mustKey_(houseId, key) {
  noShop_(houseId);
  const h = get_('houses', houseId), k = normKey_(key);
  if (!h || !k || normKey_(h.key) !== k) throw new Error('家庭鑰匙碼不對喔，再問一下家人或島主');
  return h;
}
function pinCheck_(p, pin) {
  const now = Date.now(), f = p.pinFail && typeof p.pinFail === 'object' ? p.pinFail : { n: 0, at: 0 };
  if (f.n >= 5 && now - Number(f.at) < 10 * 60000) throw new Error('打錯太多次了，10 分鐘後再試，或請島主幫忙看 PIN 碼');
  if (!/^\d{4}$/.test(String(p.pin || '')) || String(p.pin) !== String(pin || '').trim()) {
    p.pinFail = { n: (now - Number(f.at) < 10 * 60000 ? Number(f.n) || 0 : 0) + 1, at: now }; put_('players', p);
    throw new Error('PIN 碼不對喔（在舊手機的「我的設定」可以看到，忘記的話問島主）');
  }
  if (p.pinFail) { p.pinFail = ''; put_('players', p); }
}
// ================= 轉移碼・邀請碼 =================
// v41：4 位數換機碼（加入現有家庭、點自己名字時要打）
function newPin_() { return String(1000 + Math.floor(Math.random() * 9000)); }
// v41：新島民歡迎信（第一次有家的時候寄，一人一次）
const WELCOME_COINS_ = 500, WELCOME_TICKETS_ = 1;
function welcome_(me) {
  if (me.welcomed) return;
  me.welcomed = Date.now();
  put_('letters', { id: uid_(), to: me.id, title: '🏝️ 歡迎搬來毛很多島！',
    body: `嗨 ${me.nick}！我是島主，很高興你和毛孩搬來這裡 🐾\n\n在這座島上可以：\n🍚 照顧毛孩：餵飯、摸摸、清便便，牠會越來越開心\n🏠 串門子：去鄰居家看毛孩、貼便利貼，路上常有錢袋可以撿\n🎴 佈置家：升級拿抽卡券，抽房間、買玩具把家變漂亮\n🏛️ 有問題、想許願，都可以到島民中心寫信給我\n\n送你一點搬家禮，祝你在島上玩得開心！`,
    at: Date.now(), coins: WELCOME_COINS_, tickets: WELCOME_TICKETS_, item: '', n: 0, read: [], claimed: [], hidden: [] });
}
function newCode_() {
  const cs = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789', used = all_('players').map(p => p.code);
  let c;
  do { c = 'MH-'; for (let i = 0; i < 6; i++) c += cs[Math.floor(Math.random() * cs.length)]; } while (used.indexOf(c) >= 0);
  return c;
}
function cleanCode_(raw) {
  const c = String(raw || '').trim().toUpperCase().replace(/^MH-?/, '');
  if (!/^[A-Z0-9]{6,12}$/.test(c)) throw new Error('轉移碼要 6～12 個英文或數字');
  if (!/[A-Z]/.test(c) || !/[0-9]/.test(c)) throw new Error('轉移碼要同時有英文和數字');
  return c;
}
function codeTaken_(c, exceptId) { return all_('players').some(p => p.id !== exceptId && String(p.code || '').replace(/^MH-/, '') === c); }
function invites_() { const m = meta_('invites'); return Array.isArray(m.list) ? m.list : []; }
function saveInvites_(list) { put_('meta', { id: 'invites', list: list.slice(-200) }); }
function normCode_(c) { return String(c || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, ''); }

// ================= 島主信件 =================
function letterTo_(l, pid) {
  if (l.to === pid || l.to === '*') return true;
  return String(l.to || '').indexOf('h:') === 0 && Array.isArray(l.mem) && l.mem.indexOf(pid) >= 0;
}
function lettersFor_(pid) {
  if (!pid) return [];
  const me = get_('players', pid), since = me ? Number(me.createdAt) || 0 : 0;
  return all_('letters').filter(l => letterTo_(l, pid) && !(Array.isArray(l.hidden) && l.hidden.indexOf(pid) >= 0) && (l.to !== '*' || Number(l.at) >= since - 7 * DAY_))
    .sort((a, b) => b.at - a.at).slice(0, 50)
    .map(l => ({ id: l.id, title: l.title, body: l.body, at: Number(l.at), coins: Number(l.coins) || 0, tickets: Number(l.tickets) || 0, item: l.item || '', n: Number(l.n) || 0,
      room: l.room || '', roomName: l.roomName || '',
      read: Array.isArray(l.read) && l.read.indexOf(pid) >= 0, claimed: Array.isArray(l.claimed) && (l.claimed.indexOf(pid) >= 0 || (!!l.one && l.claimed.length > 0)),
      all: l.to === '*', fam: String(l.to || '').indexOf('h:') === 0 }));
}
function letterMark_(req, field) {
  const pid = String(req.playerId || ''), l = get_('letters', req.letterId);
  if (!pid || !l || !letterTo_(l, pid)) throw new Error('找不到這封信');
  const arr = Array.isArray(l[field]) ? l[field] : [];
  if (arr.indexOf(pid) >= 0) return { l: l, already: true };
  arr.push(pid); l[field] = arr; put_('letters', l);
  return { l: l, already: false };
}
// v42：二樓專用的訂製款
function roomF2_(id) { const L = meta_('rooms').list; const o = Array.isArray(L) ? L.find(x => x.id === id) : null; return !!(o && o.f2); }
function f2RoomCheck_(h, room) { if (room && roomF2_(room) && !Number(h.floor2)) throw new Error(`「${h.name}」還沒有二樓，二樓專用的背景只能送給有二樓的家`); }
function letterRoomCheck_(to, room) {
  if (to === '*' && roomF2_(room)) throw new Error('二樓專用的背景不能寄給全島，請送給有二樓的家');
  if (to === '*') {
    if (all_('houses').some(h => ownedOf_(h).indexOf(room) >= 0)) throw new Error('已經有家擁有這間房間了，寄給全島只能送大家都沒有的房間');
    return;
  }
  let hid = '';
  if (to.indexOf('h:') === 0) hid = to.slice(2);
  else { const p = get_('players', to); hid = p ? p.houseId : ''; }
  const h = hid && get_('houses', hid);
  if (h) f2RoomCheck_(h, room);
  if (!h) throw new Error('收件人還沒有家，不能附房間');
  if (ownedOf_(h).indexOf(room) >= 0) throw new Error('他們家已經有這間房間了');
}

// ================= 一番賞 =================
function shuffle_(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
// 獎品清單由前端設定（每次抽都會帶上來），存在 meta 的 kujipool
function kujiSync_(req) {
  const kp = req && req.kpool;
  if (kp && typeof kp === 'object') {
    const pool = {}; let ok = true;
    ['A','B','C','D'].forEach(g => { pool[g] = (Array.isArray(kp[g]) ? kp[g] : []).map(accId_).filter(Boolean).slice(0, 60); if (pool[g].length < KUJI_PLAN_[g]) ok = false; });
    if (ok) { const m = meta_('kujipool'); if (JSON.stringify(m.pool) !== JSON.stringify(pool)) put_('meta', { id: 'kujipool', pool: pool }); }
  }
  const m = meta_('kujipool');
  if (m.pool && typeof m.pool === 'object') ['A','B','C','D'].forEach(g => { if (Array.isArray(m.pool[g]) && m.pool[g].length) { KUJI_ROOMS_[g].length = 0; m.pool[g].forEach(x => KUJI_ROOMS_[g].push(x)); } });
}
function kujiNewBox_(no) {
  const items = [];
  Object.keys(KUJI_PLAN_).forEach(g => shuffle_(KUJI_ROOMS_[g]).slice(0, KUJI_PLAN_[g]).forEach(room => items.push({ g: g, room: room, by: '' })));
  return { id: 'kuji', no: no, items: items, log: [], price: KUJI_PRICE_NEW_ };
}
// v69：抽完（或以前被下架的）就開下一箱
function kuji_() {
  let k = get_('meta', 'kuji');
  if (!k || !Array.isArray(k.items) || !k.items.length) { k = kujiNewBox_(1); put_('meta', k); }
  else if (k.closed || k.items.every(x => x.by)) { const nk = kujiNewBox_((Number(k.no) || 1) + 1); nk.log = Array.isArray(k.log) ? k.log : []; k = nk; put_('meta', k); }
  return k;
}
function kujiPrice_(k) { return KUJI_PRICE_NEW_; }   // v73：不管哪一箱都是 🪙800
function kujiView_(k) { return { price: kujiPrice_(k), closed: !!k.closed, no: Number(k.no) || 1, items: k.items.map(x => ({ g: x.g, room: x.room, t: !!x.by })), log: (k.log || []).slice(-6) }; }

// ================= 推播（OneSignal） =================
function pushKey_() {
  try {
    const s = ss_().getSheetByName('設定');
    if (s && s.getLastRow() > 0) {
      const v = s.getRange(1, 1, s.getLastRow(), 2).getValues();
      for (let i = 0; i < v.length; i++) if (String(v[i][0]).trim().toUpperCase() === 'ONESIGNAL_KEY' && String(v[i][1]).trim()) return String(v[i][1]).trim();
    }
  } catch (e) {}
  try { return PropertiesService.getScriptProperties().getProperty('ONESIGNAL_KEY') || ''; } catch (e) { return ''; }
}
function osFetch_(ids, msg) {
  const key = pushKey_();
  if (!key) return null;
  return UrlFetchApp.fetch('https://api.onesignal.com/notifications?c=push', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { Authorization: (key.indexOf('os_v2') === 0 ? 'Key ' : 'Basic ') + key },
    payload: JSON.stringify({ app_id: OS_APP_, target_channel: 'push', include_aliases: { external_id: ids },
      headings: { en: '毛很多', 'zh-Hant': '毛很多' }, contents: { en: msg, 'zh-Hant': msg }, url: 'https://maiqq-fun.github.io/babypets/' })
  });
}
function pushSend_(ids, msg) {
  ids = ids.filter(Boolean);
  if (!ids.length) return false;
  try { const res = osFetch_(ids, msg); return !!res && res.getResponseCode() < 300; } catch (e) { return false; }
}
function pushQueue_() { const m = meta_('pushq'); return Array.isArray(m.list) ? m.list : []; }
// 推給一群人：正在用 App 的不推、同一種 1 小時 1 次、每人每天最多 10 則、半夜排隊或不推
function notify_(pids, kind, msg) {
  const now = Date.now(), quiet = isQuiet_(now), day = twDay_(), send = [];
  let q = null;
  [...new Set(pids)].forEach(pid => {
    const p = get_('players', pid);
    if (!p || !p.houseId) return;
    if (now - (Number(p.on) || 0) < ONLINE_MS_) return;
    if (quiet) {
      if (PUSH_QUEUE_.indexOf(kind) >= 0) { q = q || pushQueue_(); q.push({ pid: pid, kind: kind, msg: msg, at: now }); }
      return;
    }
    let ps = p.push && typeof p.push === 'object' ? p.push : {};
    if (ps.day !== day) ps = { day: day, n: 0, k: {} };
    if ((Number(ps.n) || 0) >= PUSH_DAY_MAX_) return;
    if (now - (Number(ps.k[kind]) || 0) < PUSH_SAME_MS_) return;
    ps.n = (Number(ps.n) || 0) + 1; ps.k[kind] = now; p.push = ps; put_('players', p);
    send.push(pid);
  });
  if (q) put_('meta', { id: 'pushq', list: q.slice(-300) });
  if (send.length) pushSend_(send, msg);
  return send.length;
}

// ================= 每週排行榜 =================
function weekStart_(t) { const d = new Date((t || Date.now()) + TW_), dow = (d.getUTCDay() + 6) % 7; return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - dow) - TW_; }
function weekKey_(t) { return new Date(weekStart_(t) + TW_).toISOString().slice(0, 10); }
function rankNew_(last) { return { id: 'rank', wk: weekKey_(), s: { coin: {}, poop: {}, visit: {}, pop: {} }, pc: {}, last: last || null }; }
function rankTop_(obj, n) { return Object.keys(obj || {}).map(k => ({ id: k, v: Number(obj[k]) || 0 })).filter(x => x.v > 0).sort((a, b) => b.v - a.v).slice(0, n || 99); }
function rank_() {
  let r = get_('meta', 'rank');
  if (!r || !r.s) { r = rankNew_(); put_('meta', r); return r; }
  if (r.wk !== weekKey_()) r = rankSettle_(r);
  return r;
}
function rankSettle_(r) {
  const win = {}, pets = all_('pets'), P = all_('players'), now = Date.now();
  Object.keys(RANK_BOARDS_).forEach(b => {
    win[b] = rankTop_(r.s[b], 3);
    win[b].forEach((w, i) => {
      const rw = RANK_REWARD_[i], title = `🏆 上週排行榜「${RANK_BOARDS_[b]}」第 ${i + 1} 名`;
      const body = i === 0 ? `恭喜！這週你的名字旁會掛上「${RANK_BOARDS_[b]}」稱號 🎉` : '恭喜上榜，這週再接再厲！';
      const base = { id: uid_(), title: title, body: body, at: now, coins: rw.coins, tickets: rw.tickets, item: '', n: 0, read: [], claimed: [], hidden: [] };
      if (b === 'pop') {
        const pet = pets.find(p => p.id === w.id);
        w.name = pet ? pet.name : '';
        const mem = pet ? P.filter(p => p.houseId === pet.houseId).map(p => p.id) : [];
        if (mem.length) put_('letters', Object.assign(base, { to: 'h:' + pet.houseId, mem: mem, title: `🏆 ${pet.name} 拿到上週「${RANK_BOARDS_[b]}」第 ${i + 1} 名` }));
      } else if (P.some(p => p.id === w.id)) put_('letters', Object.assign(base, { to: w.id }));
    });
  });
  const nr = rankNew_({ wk: r.wk, win: win });
  put_('meta', nr);
  if (Object.keys(win).some(b => win[b].length)) {
    const c = win.coin[0] && P.find(p => p.id === win.coin[0].id);
    feed_(`🏆 上週排行榜出爐！${c ? c.nick + ' 是財神爺欽點 💰' : '快去看看誰上榜'}`);
    notify_(residents_().map(p => p.id), 'rank', '🏆 本週排行榜出爐！快來看看誰上榜～');
  }
  return nr;
}
// v44：一次性清掉 v40～v43 換週時重複寄出的排行榜信（同一人、同標題、10 分鐘內，留最早那封）
function fixRankDup_() {
  const f = meta_('fix45'); if (f.done) return;
  const L = all_('letters').filter(l => /^🏆 /.test(String(l.title || ''))).sort((a, b) => Number(a.at) - Number(b.at)), seen = {};
  L.forEach(l => { const k = l.to + '|' + l.title, t = seen[k];
    if (t != null && Number(l.at) - t < 10 * 60000) del_('letters', l.id); else seen[k] = Number(l.at); });
  put_('meta', { id: 'fix45', done: Date.now() });
}
function rankAdd_(board, key, n) {
  if (!key || !(n > 0)) return;
  const r = rank_(), s = r.s[board] || (r.s[board] = {});
  s[key] = (Number(s[key]) || 0) + n;
  put_('meta', r);
}
// 人氣王：只算朋友（不是家人）的摸頭、餵飯、零食，每人每天對同一隻最多 5 分
function popAdd_(actorId, petId, n) {
  const me = get_('players', actorId), p = get_('pets', petId);
  if (!me || !p || me.houseId === p.houseId) return;
  const r = rank_(), day = twDay_(), k = actorId + ':' + petId + ':' + day;
  const pc0 = r.pc && typeof r.pc === 'object' ? r.pc : {}, pc = {};
  Object.keys(pc0).forEach(x => { if (x.slice(-day.length) === day) pc[x] = pc0[x]; });   // v52.1：只留今天的，舊的會讓一格超過 5 萬字
  const used = Number(pc[k]) || 0, add = Math.min(n, POP_DAY_MAX_ - used);
  if (add <= 0) return;
  pc[k] = used + add; r.pc = pc;
  r.s.pop[petId] = (Number(r.s.pop[petId]) || 0) + add;
  put_('meta', r);
}
// v44：只讀，不結算（結算只在排隊的 stateTick_、整點檢查裡做，不然換週時會被同時結算好幾次）
function rankView_() {
  const r0 = get_('meta', 'rank'), fresh = r0 && r0.s && r0.wk === weekKey_();
  const r = fresh ? r0 : { wk: weekKey_(), s: {}, last: null }, out = { wk: r.wk, ends: weekStart_() + 7 * DAY_, s: {}, last: r.last || null };
  Object.keys(RANK_BOARDS_).forEach(b => out.s[b] = rankTop_(r.s[b], 20));
  return out;
}

// ================= 🛍️ 毛二街 =================
// 店當成一個特別的「家」存在 houses 分頁（id＝shop2），佔第 7 塊地，沒有家人密碼
function shop_() {
  let s = get_('houses', SHOP_ID_);
  if (s) return s;
  const taken = all_('houses').some(h => Number(h.slot) === SHOP_SLOT_);
  s = { id: SHOP_ID_, kind: 'shop', slot: taken ? -1 : SHOP_SLOT_, style: 0, name: '毛二街', motto: '二手好物・撿便宜', room: 'shop2',
    owned: [], poops: [], poopAt: Date.now(), toys: [], gifts: [], mgr: [], staff: SHOP_STAFF0_, stock: [], rday: '', createdAt: Date.now() };
  put_('houses', s);
  return s;
}
function isMgr_(pid) { const s = get_('houses', SHOP_ID_); return !!(s && pid && Array.isArray(s.mgr) && s.mgr.indexOf(String(pid)) >= 0); }
function mustMgr_(req) { if (!isMgr_(req.playerId)) throw new Error('只有毛二街店長可以這樣做'); return shop_(); }
function shopItemOk_(t, item) { return (t === 'acc' || t === 'item') && /^[a-z0-9_]{1,20}$/i.test(String(item || '')); }
const CLR_N_ = 6, CLR_Q_MAX_ = 30;
function shopTrim_(stock, s) {   // 架上最多 40 樣，滿了先移掉最舊的「店家補貨」；v72：擠下來的放進出清候補
  while (stock.length > SHOP_STOCK_MAX_) {
    const i = stock.findIndex(x => x.src !== 'p'), out = stock.splice(i >= 0 ? i : 0, 1)[0];
    if (s && out) { const q = Array.isArray(s.clrq) ? s.clrq : []; q.push(out); s.clrq = q.slice(-CLR_Q_MAX_); }
  }
  return stock;
}
// v72：出清籃每天換一批（舊的沒賣掉就刪掉），候補沒東西就空著
function clrRoll_(s) {
  const day = twDay_();
  if (s.clrDay === day) return false;
  const q = Array.isArray(s.clrq) ? s.clrq : [];
  s.clr = q.splice(0, CLR_N_).map(x => Object.assign({}, x, { sold: 0 })); s.clrq = q; s.clrDay = day;
  return true;
}

// ================= 拆房子（家人自己拆、島主收回共用） =================
function removeHouse_(h) {
  const ids = all_('pets').filter(p => p.houseId === h.id).map(p => p.id);
  ['weights','medical','expenses','tlogs'].forEach(n => delWhere_(n, r => ids.indexOf(r.petId) >= 0));
  delWhere_('pets', p => p.houseId === h.id);
  delWhere_('notes', n => n.houseId === h.id);
  all_('players').filter(p => p.houseId === h.id).forEach(p => { p.houseId = ''; put_('players', p); });
  saveDrops_(drops_().filter(d => d.houseId !== h.id));
  del_('houses', h.id);
}

// ================= 動作 =================
const ACTIONS = {
  // ---------- 讀取整座島 ----------
  getState(req) { const now = Date.now(); stateTick_(req, now); return stateView_(req, now); },
  // 換位置時馬上更新上線名單
  ping(req) {
    const me = req.playerId && get_('players', req.playerId);
    if (me && me.houseId) { me.on = Date.now(); me.where = String(req.where || '').slice(0, 20); put_('players', me); }
    return true;
  },

  // ---------- 玩家 ----------
  savePlayer(req) {
    const p = req.player || {};
    if (!p.id || !p.nick) throw new Error('缺少玩家資料');
    const old = get_('players', p.id) || {};
    const o = Object.assign({}, old, { id: p.id, nick: String(p.nick).slice(0, 12), houseId: old.houseId || '', game: p.game || old.game || {}, createdAt: old.createdAt || Date.now() });
    if (!o.code) o.code = newCode_();
    if (/^\d{4}$/.test(String(req.pin || ''))) o.pin = String(req.pin);   // v64：新玩家自己設 PIN
    put_('players', o);
    return o;
  },
  recoverPlayer(req) {
    const code = String(req.code || '').trim().toUpperCase().replace(/^MH-?/, '');
    const p = code && all_('players').find(x => String(x.code || '').replace(/^MH-/, '') === code);
    if (!p) throw new Error('找不到這組轉移碼，請再確認一次');
    const h = p.houseId ? get_('houses', p.houseId) : null;
    return { player: p, pw: h ? h.pw : '' };
  },
  setCode(req) {
    const me = mustPlayer_(req.playerId), c = cleanCode_(req.code);
    if (codeTaken_(c, me.id)) throw new Error('這組轉移碼有人用了，換一組吧');
    me.code = 'MH-' + c; put_('players', me);
    return { code: me.code };
  },
  claimMail(req) {
    const p = get_('players', req.playerId);
    if (!p) return true;
    const ids = Array.isArray(req.ids) ? req.ids : [];
    p.mail = (Array.isArray(p.mail) ? p.mail : []).filter(m => ids.indexOf(m.id) < 0);
    put_('players', p);
    return true;
  },
  claimInbox(req) { const p = get_('players', req.playerId); if (p) { p.inbox = { n: 0 }; put_('players', p); } return true; },
  pushState(req) {
    const p = get_('players', req.playerId);
    if (!p) throw new Error('找不到玩家');
    p.pushSt = PUSH_ST_.indexOf(req.st) >= 0 ? req.st : 'off'; p.pushAt = Date.now();
    let gift = false;
    if (p.pushSt === 'on' && p.houseId && !p.pushGift) { p.pushGift = Date.now(); gift = true; }   // 第一次打開通知：島主送 80 金幣＋1 張券
    put_('players', p);
    if (gift) put_('letters', { id: uid_(), to: p.id, title: '🔔 謝謝你打開通知！', body: '以後毛孩肚子餓、有人送禮、島主寄信，都會第一時間告訴你 🐾\n這是島主送你的小禮物，收下吧！',
      at: Date.now(), coins: PUSH_GIFT_.coins, tickets: PUSH_GIFT_.tickets, item: '', n: 0, read: [], claimed: [], hidden: [] });
    return true;
  },

  // ---------- 家 ----------
  checkInvite(req) {
    const code = normCode_(req.invite), inv = code && invites_().find(x => normCode_(x.code) === code);
    if (!inv || inv.void) throw new Error('邀請碼不對，請跟島主確認');
    if (inv.usedBy) throw new Error('這組邀請碼已經被用過了');
    return true;
  },
  buildHouse(req) {
    const code = normCode_(req.invite);
    if (!code) throw new Error('蓋房子需要島主給的邀請碼');
    const list = invites_(), inv = list.find(x => normCode_(x.code) === code);
    if (!inv || inv.void) throw new Error('邀請碼不對，請跟島主確認');
    if (inv.usedBy) throw new Error('這組邀請碼已經被用過了');
    const me = mustPlayer_(req.playerId);
    if (me.houseId && get_('houses', me.houseId)) throw new Error('你已經有家了');
    const b = req.house || {}, houses = all_('houses');
    const slot = Number(b.slot), style = Number(b.style), name = String(b.name || '').trim().slice(0, 10);
    if (!(slot >= 0 && slot < SLOT_COUNT_) || slot === SHOP_SLOT_ || slot === CENTER_SLOT_) throw new Error('位置不對');
    if (!styleOk_(style)) throw new Error('房子款式不對');
    if (!name) throw new Error('請幫你的家取名字');
    if (!req.pw || String(req.pw).length < 20) throw new Error('密碼格式不對');
    if (houses.some(h => h.slot === slot)) throw new Error('這塊地剛剛被別人蓋走了，換一塊吧');
    if (houses.some(h => h.style === style)) throw new Error('這款房子剛剛被選走了，換一款吧');
    if (houses.some(h => h.name === name)) throw new Error('島上已經有同名的家了');
    const key = normKey_(req.key);
    const h = { id: uid_(), slot: slot, style: style, name: name, motto: String(b.motto || '').slice(0, 20), room: b.room || 'basic1', key: keyOk_(key) ? key : newKey_(),
      pw: req.pw, owned: ['wood'], poops: [], poopAt: Date.now(), createdAt: Date.now() };
    put_('houses', h);
    me.houseId = h.id; welcome_(me); put_('players', me);
    inv.usedBy = me.id; inv.usedNick = me.nick; inv.usedAt = Date.now(); inv.houseId = h.id;
    saveInvites_(list);
    feed_(`${me.nick} 在島上蓋了「${name}」🏡`);
    return { houseId: h.id };
  },
  // v64：登入毛很多＝選家庭→點自己→打 PIN 碼（不用家庭鑰匙碼）
  loginPin(req) {
    noShop_(req.houseId);
    const h = get_('houses', req.houseId), p = get_('players', req.targetId);
    if (!h || !p || p.houseId !== h.id) throw new Error('找不到這位家人');
    pinCheck_(p, req.pin);
    return { player: p, pw: h.pw, key: h.key || '' };
  },
  // v64：加入毛很多（我有家庭鑰匙碼）＝選家庭＋打鑰匙碼 → 看得到家人名單，可以點自己（再打 PIN）或當新家人
  keyCheck(req) {
    const h = mustKey_(req.houseId, req.key);
    return { members: all_('players').filter(p => p.houseId === h.id).map(p => ({ id: p.id, nick: p.nick, lv: Number((p.game || {}).lv) || 1, on: Number(p.on) || Number(p.seen) || 0 })) };
  },
  keyJoin(req) {
    const h = mustKey_(req.houseId, req.key), me = mustPlayer_(req.playerId);
    if (me.houseId && me.houseId !== h.id && get_('houses', me.houseId)) throw new Error('你已經是別的家的家人了，要先退出才能加入');
    if (all_('players').filter(p => p.houseId === h.id && p.id !== me.id).length >= MAX_MEMBERS_) throw new Error('這個家已經滿 5 個家人了');
    me.houseId = h.id; welcome_(me); put_('players', me);
    feed_(`${me.nick} 搬進了 ${h.name} 🏠`);
    return { houseId: h.id, pw: h.pw, key: h.key || '' };
  },
  setPin(req) {
    const me = mustPlayer_(req.playerId), v = String(req.pin || '').trim();
    if (!/^\d{4}$/.test(v)) throw new Error('PIN 碼是 4 個數字');
    me.pin = v; put_('players', me);
    return { pin: v };
  },
  setKey(req) {
    const h = mustFam_(req), k = normKey_(req.key);
    if (!keyOk_(k)) throw new Error('家庭鑰匙碼要 6 個英文或數字，而且英文和數字都要有');
    h.key = k; put_('houses', h);
    return { key: k };
  },
  // v41：加入現有家庭——打對家庭密碼後，列出這家的家人讓他點自己（不給換機碼）
  famMembers(req) {
    noShop_(req.houseId);
    const h = get_('houses', req.houseId);
    if (!h || h.pw !== req.pw) throw new Error('密碼不對喔，再問一下家人');
    return all_('players').filter(p => p.houseId === h.id).map(p => ({ id: p.id, nick: p.nick, lv: Number((p.game || {}).lv) || 1, on: Number(p.on) || Number(p.seen) || 0 }));
  },
  // v41：點自己名字＋換機碼 → 接回原本的帳號（打錯 5 次要等 10 分鐘）
  claimMember(req) {
    noShop_(req.houseId);
    const h = get_('houses', req.houseId);
    if (!h || h.pw !== req.pw) throw new Error('密碼不對喔，再問一下家人');
    const p = get_('players', req.targetId);
    if (!p || p.houseId !== h.id) throw new Error('找不到這位家人');
    const now = Date.now(), f = p.pinFail && typeof p.pinFail === 'object' ? p.pinFail : { n: 0, at: 0 };
    if (f.n >= 5 && now - Number(f.at) < 10 * 60000) throw new Error('打錯太多次了，10 分鐘後再試，或請島主幫忙看換機碼');
    if (!/^\d{4}$/.test(String(p.pin || '')) || String(p.pin) !== String(req.pin || '').trim()) {
      p.pinFail = { n: (now - Number(f.at) < 10 * 60000 ? Number(f.n) || 0 : 0) + 1, at: now }; put_('players', p);
      throw new Error('換機碼不對喔（在舊手機的「我的設定」可以看到）');
    }
    if (p.pinFail) { p.pinFail = ''; put_('players', p); }
    return { player: p, pw: h.pw };
  },
  getCatalog() { const c = catalog_(); return { ver: c.ver, styles: c.styles, items: c.items }; },
  checkJoin(req) {
    noShop_(req.houseId);
    const h = get_('houses', req.houseId);
    if (!h || h.pw !== req.pw) throw new Error('密碼不對喔，再問一下家人');
    if (all_('players').filter(p => p.houseId === h.id).length >= MAX_MEMBERS_) throw new Error('這個家已經滿 5 個家人了');
    return true;
  },
  joinHouse(req) {
    noShop_(req.houseId);
    const me = mustPlayer_(req.playerId), h = get_('houses', req.houseId);
    if (!h || h.pw !== req.pw) throw new Error('密碼不對喔，再問一下家人');
    if (me.houseId && me.houseId !== h.id && get_('houses', me.houseId)) throw new Error('你已經是別的家的家人了，要先退出才能加入');
    if (all_('players').filter(p => p.houseId === h.id && p.id !== me.id).length >= MAX_MEMBERS_) throw new Error('這個家已經滿 5 個家人了');
    me.houseId = h.id; welcome_(me); put_('players', me);
    feed_(`${me.nick} 搬進了 ${h.name} 🏠`);
    return { houseId: h.id };
  },
  leaveHouse(req) { const me = mustPlayer_(req.playerId); me.houseId = ''; put_('players', me); return true; },
  updateHouse(req) {
    const h = mustFam_(req), p = req.patch || {};
    if (p.name !== undefined) {
      const n = String(p.name).trim().slice(0, 10);
      if (!n) throw new Error('家的名字不能空白');
      if (all_('houses').some(x => x.name === n && x.id !== h.id)) throw new Error('島上已經有同名的家了');
      h.name = n;
    }
    if (p.motto !== undefined) h.motto = String(p.motto).slice(0, 20);
    if (p.room) { if (roomF2_(p.room)) throw new Error('這是二樓專用的背景，到二樓換吧'); h.room = p.room; }
    if (p.room2 && Number(h.floor2)) h.room2 = accId_(p.room2) || h.room2;
    if (p.newPw) h.pw = p.newPw;
    put_('houses', h);
    return true;
  },
  deleteHouse(req) {
    const h = mustFam_(req), me = get_('players', req.playerId);
    removeHouse_(h);
    feed_(`${me ? me.nick : '有人'} 拆掉了「${h.name}」`);
    return true;
  },
  drawCard(req) {
    const h = mustFam_(req), owned = ownedOf_(h);
    if (owned.indexOf(req.cardId) >= 0) return { owned: owned };
    owned.push(req.cardId); h.owned = owned; put_('houses', h);
    if (req.feedText) feed_(String(req.feedText).slice(0, 80));
    return { owned: owned };
  },
  upload(req) {
    mustFam_(req);
    const m = /^data:(image\/[a-z]+);base64,(.+)$/.exec(req.dataUrl || '');
    if (!m) throw new Error('圖片格式不對');
    const bytes = Utilities.base64Decode(m[2]);
    if (bytes.length > 1.5 * 1024 * 1024) throw new Error('圖片太大了');
    const file = uploadsFolder_().createFile(Utilities.newBlob(bytes, m[1], `${req.houseId}_${Date.now()}.${m[1].split('/')[1]}`));
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return { url: 'https://lh3.googleusercontent.com/d/' + file.getId() };
  },

  // ---------- 毛孩・紀錄 ----------
  savePet(req) {
    const h = mustFam_(req), p = req.pet || {};
    if (!String(p.name || '').trim()) throw new Error('請填毛孩的名字');
    const keep = ['name','species','breed','sex','birthday','color','fixed','trait','about','chip','allergy','card','head','body','trackers','photos'];
    const lim = { head: 300, body: 300, trackers: 6000, photos: 2000, about: 90 };
    let pet;
    if (p.id) {
      pet = get_('pets', p.id);
      if (!pet || pet.houseId !== h.id) throw new Error('找不到這隻毛孩');
    } else {
      const meta = get_('meta', 'counter') || { id: 'counter', nextNo: 1 };
      pet = { id: uid_(), houseId: h.id, no: meta.nextNo, createdAt: Date.now() };
      meta.nextNo = Number(meta.nextNo) + 1; put_('meta', meta);
      feed_(`${h.name} 搬來了新成員「${String(p.name).trim()}」🐾`);
    }
    keep.forEach(k => {
      if (p[k] === undefined) return;
      const v = String(p[k]).slice(0, lim[k] || 40);
      if (k === 'trackers' || k === 'photos') { try { pet[k] = JSON.parse(v); } catch (e) {} } else pet[k] = v;
    });
    put_('pets', pet);
    return pet;
  },
  deletePet(req) {
    const h = mustFam_(req), pet = get_('pets', req.petId);
    if (!pet || pet.houseId !== h.id) throw new Error('找不到這隻毛孩');
    ['weights','medical','expenses','tlogs'].forEach(n => delWhere_(n, r => r.petId === pet.id));
    del_('pets', pet.id);
    return true;
  },
  addRecord(req) {
    const h = mustFam_(req), kind = req.kind;
    if (['weights','medical','expenses'].indexOf(kind) < 0) throw new Error('紀錄種類不對');
    const pet = get_('pets', req.rec && req.rec.petId);
    if (!pet || pet.houseId !== h.id) throw new Error('找不到這隻毛孩');
    const r = Object.assign({}, req.rec, { id: uid_(), createdAt: Date.now() });
    put_(kind, r);
    if (kind === 'weights') feed_(`${pet.name} 量了體重 ⚖️`);
    return r;
  },
  deleteRecord(req) {
    const h = mustFam_(req);
    if (['weights','medical','expenses'].indexOf(req.kind) < 0) throw new Error('紀錄種類不對');
    const r = get_(req.kind, req.id);
    if (!r) return true;
    const pet = get_('pets', r.petId);
    if (!pet || pet.houseId !== h.id) throw new Error('不能刪別人家的紀錄');
    del_(req.kind, r.id);
    return true;
  },
  addTLog(req) {
    const h = mustFam_(req), l = req.log || {}, pet = get_('pets', l.petId);
    if (!pet || pet.houseId !== h.id) throw new Error('找不到這隻毛孩');
    const me = get_('players', req.playerId);
    const r = { id: uid_(), petId: pet.id, tid: String(l.tid || '').slice(0, 20), date: String(l.date || '').slice(0, 10), value: String(l.value || '1').slice(0, 12), by: me ? me.nick : '', createdAt: Date.now() };
    put_('tlogs', r);
    return r;
  },
  deleteTLog(req) {
    const h = mustFam_(req), r = get_('tlogs', req.id);
    if (!r) return true;
    const pet = get_('pets', r.petId);
    if (!pet || pet.houseId !== h.id) throw new Error('不能刪別人家的紀錄');
    del_('tlogs', r.id);
    return true;
  },

  // ---------- 互動 ----------
  visit(req) {
    const me = get_('players', req.playerId), h = get_('houses', req.houseId);
    if (!me || !me.houseId || !h) return false;
    const day = twDay_();
    let v = h.visits;
    if (!v || v.day !== day) v = { day: day, list: [] };
    const first = me.houseId !== h.id && !v.list.some(x => x.id === me.id);
    const it = { id: me.id, nick: me.nick, at: Date.now() }, i = v.list.findIndex(x => x.id === me.id);
    if (i >= 0) v.list[i] = it; else v.list.push(it);
    v.list = v.list.slice(-30); h.visits = v; put_('houses', h);
    if (first) rankAdd_('visit', me.id, 1);
    return true;
  },
  addNote(req) {
    const me = resident_(req), n = req.note || {}, h = get_('houses', n.houseId);
    if (!h) throw new Error('找不到這個家');
    const text = String(n.text || '').trim().slice(0, 40);
    if (!text) throw new Error('先寫點什麼再貼喔');
    const note = { id: uid_(), houseId: h.id, by: me.nick, byId: me.id, text: text, color: String(n.color || '#ffe98a').slice(0, 9), createdAt: Date.now() };
    if (n.secret && me.houseId !== h.id) note.secret = 1;   // v47：秘密便條（貼在自己家沒意義，不算）
    put_('notes', note);
    feed_(`${me.nick} 在 ${h.name} 貼了${note.secret ? '一張秘密便條 🔒' : '便利貼 📝'}`);
    if (me.houseId !== h.id) { try { notify_(membersOf_(h.id), 'note', note.secret ? `🔒 ${me.nick} 在你家貼了一張秘密便條，只有你們看得到！` : `📝 ${me.nick} 在你家留言了，快去看看！`); } catch (e) {} }
    return note;
  },
  deleteNote(req) {
    const n = get_('notes', req.id);
    if (!n) return true;
    const h = get_('houses', n.houseId);
    const ok = (h && req.pw && h.pw === req.pw) || n.byId === req.playerId || (isShopId_(n.houseId) && isMgr_(req.playerId));
    if (!ok) throw new Error('只有家人或貼的人可以撕');
    del_('notes', n.id);
    return true;
  },
  cleanPoop(req) {
    const me = resident_(req), h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    const poops = Array.isArray(h.poops) ? h.poops : [], i = poops.findIndex(p => p.id === req.poopId);
    if (i < 0) return { gone: true };
    poops.splice(i, 1); h.poops = poops; put_('houses', h);
    const pet = all_('pets').find(p => p.houseId === h.id);
    feed_(`${me.nick} 幫 ${pet ? pet.name : h.name} 清了大便 🧹`);
    rankAdd_('poop', me.id, 1);
    return { gone: false };
  },
  feedPets(req) {
    const me = resident_(req), h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    const now = Date.now(), day = twDay_(), fed = [];
    (req.petIds || []).forEach(id => {
      const p = get_('pets', id);
      if (!p || p.houseId !== h.id) return;
      const last = Number(p.lastFed) || 0, full = last ? Math.max(0, 100 - (now - last) / HOUR_ * FULL_PER_HOUR_) : 55;
      if (full >= 80) return;
      p.lastFed = now; p.meals = (p.mealDay === day ? Number(p.meals) || 0 : 0) + 1; p.mealDay = day; put_('pets', p);
      fed.push(p.name);
      popAdd_(me.id, p.id, 2);
    });
    if (fed.length) feed_(`${me.nick} 餵了 ${fed.join('、')} 🍖`);
    return { fed: fed };
  },
  pat(req) {
    const me = resident_(req), p = get_('pets', req.petId);
    if (!p) return false;
    const now = Date.now();
    p.pats = (Array.isArray(p.pats) ? p.pats : []).filter(t => now - t < 3 * HOUR_).concat([now]).slice(-6);
    put_('pets', p);
    addInbox_(guestOwner_(p.id, me.id));
    popAdd_(me.id, p.id, 1);
    return true;
  },
  treat(req) {
    const me = resident_(req), p = get_('pets', req.petId);
    if (!p) throw new Error('找不到這隻毛孩');
    const day = twDay_(), n = p.treatDay === day ? Number(p.treatN) || 0 : 0;
    if (n >= TREAT_MAX_) throw new Error(`${p.name} 今天已經吃了 ${TREAT_MAX_} 個零食`);
    p.treatDay = day; p.treatN = n + 1; put_('pets', p);
    feed_(`${me.nick} 請 ${p.name} 吃了 ${String(req.name || ITEM_NAMES_[req.item] || '零食').slice(0, 12)}`);
    addInbox_(guestOwner_(p.id, me.id));
    popAdd_(me.id, p.id, 2);
    return true;
  },
  wakePet(req) {
    resident_(req);
    const p = get_('pets', req.petId);
    if (!p) throw new Error('找不到這隻毛孩');
    p.wakeUntil = Date.now() + (p.trait === '愛睡' ? 15 : 30) * 60000; put_('pets', p);
    return { wakeUntil: p.wakeUntil };
  },
  walkPet(req) {
    const me = resident_(req), p = get_('pets', req.petId);
    if (!p || p.houseId !== me.houseId) throw new Error('只能帶自己家的毛孩出門');
    const h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    if (h.id === p.houseId) throw new Error('這是你自己家喔');
    const now = Date.now();
    if (jobNow_(jobs_(), p.id, now)) throw new Error(`${p.name} 正在打工，下班才能帶出門喔`);
    all_('houses').forEach(x => {
      if (x.id === h.id) return;
      const gs = Array.isArray(x.guests) ? x.guests : [], keep = gs.filter(g => g.petId !== p.id && Number(g.until) > now);
      if (keep.length !== gs.length) { x.guests = keep; put_('houses', x); }
    });
    const cur = (Array.isArray(h.guests) ? h.guests : []).filter(g => g.petId !== p.id && Number(g.until) > now);
    const gmax = isParkId_(h.id) ? PARK_GUESTS_ : GUEST_MAX_;
    if (cur.length >= gmax) throw new Error(`這裡已經有 ${gmax} 位毛孩客人了`);
    const g = { petId: p.id, ownerId: me.id, ownerNick: me.nick, until: now + WALK_MS_ };
    cur.push(g); h.guests = cur; put_('houses', h);
    p.wakeUntil = g.until;
    const fr = new Set(Array.isArray(p.friends) ? p.friends : []);
    all_('pets').filter(x => x.houseId === h.id).forEach(q => {
      fr.add(q.id);
      const f2 = new Set(Array.isArray(q.friends) ? q.friends : []);
      if (!f2.has(p.id)) { f2.add(p.id); q.friends = [...f2]; put_('pets', q); }
    });
    p.friends = [...fr]; put_('pets', p);
    feed_(`${me.nick} 帶 ${p.name} 去 ${h.name} 玩 🐾`);
    return g;
  },
  walkHome(req) {
    const me = mustPlayer_(req.playerId);
    all_('houses').forEach(x => {
      const gs = Array.isArray(x.guests) ? x.guests : [], keep = gs.filter(g => !(g.petId === req.petId && g.ownerId === me.id));
      if (keep.length !== gs.length) { x.guests = keep; put_('houses', x); }
    });
    return true;
  },
  feedOnly(req) { mustPlayer_(req.playerId); feed_(String(req.t || '').slice(0, 80)); return true; },
  pickCoin(req) {
    const me = resident_(req), list = drops_(), d = list.find(x => x.id === req.dropId);
    const pm = meta_('picked'), picked = Array.isArray(pm.list) ? pm.list : [];
    if (!d) {
      const mine = picked.find(x => x.id === req.dropId && x.by === me.id);   // 自己剛剛撿過（第一次回應沒收到）→ 照樣算撿到
      if (mine) return { amt: Number(mine.amt), again: true };
      throw new Error('慢了一步，錢被別人撿走了 😆');
    }
    saveDrops_(list.filter(x => x.id !== d.id));
    const amt = Number(d.amt) * (dblOn_() ? 2 : 1), h = get_('houses', d.houseId);
    put_('meta', { id: 'picked', list: picked.concat({ id: d.id, by: me.id, amt: amt, at: Date.now() }).slice(-60) });
    feed_(Number(d.amt) >= DROP_GOLD_ ? `✨ ${me.nick} 撿到金色福袋 ${amt} 金幣！` : `${me.nick} 在 ${h ? h.name : '島上'}${Number(d.fl) === 2 ? '二樓' : ''} 撿到 ${amt} 金幣 💰`);
    rankAdd_('coin', me.id, amt);
    return { amt: amt };
  },

  // ---------- 禮物・玩具 ----------
  sendGift(req) {
    noShop_(req.houseId);
    const me = resident_(req), h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    const gifts = Array.isArray(h.gifts) ? h.gifts : [];
    if (gifts.filter(x => !x.admin).length >= GIFT_MAX_) throw new Error('他們家還有很多禮物沒拆，晚點再送吧');
    const s = freeSpot_(h.id);
    const g = { id: uid_(), from: me.nick, fromId: me.id, item: String(req.item || '').slice(0, 20), kind: req.kind === 'toy' || TOY_ITEMS_.indexOf(req.item) >= 0 || catalog_().items.some(y => y.id === req.item && y.kind === 'toy') ? 'toy' : 'treat',
      msg: String(req.msg || '').slice(0, 30), at: Date.now(), x: s.x, y: s.y };
    gifts.push(g); h.gifts = gifts; put_('houses', h);
    feed_(`${me.nick} 送了 ${h.name} 一份禮物 🎁`);
    notify_(membersOf_(h.id, me.id), 'gift', `🎁 ${me.nick} 送了你們家一份禮物，快去拆！`);
    return g;
  },
  openGift(req) {
    const h = mustFam_(req), gifts = Array.isArray(h.gifts) ? h.gifts : [], g = gifts.find(x => x.id === req.giftId);
    if (!g) throw new Error('禮物已經被拆開了');
    if (g.admin) {
      // 島主的禮物：一個家一份，第一個拆的人領走（留 7 天讓晚來的家人知道誰拆走了）
      const me = mustPlayer_(req.playerId), opened = Array.isArray(g.opened) ? g.opened : [];
      if (opened.length) throw new Error(`這份禮物已經被 ${g.openedBy || '家人'} 拆走了 🎁`);
      g.opened = [me.id]; g.openedBy = me.nick;
      const out = { admin: { coins: g.coins, tickets: g.tickets, item: g.item, n: g.n, msg: g.msg, by: me.nick } };
      if (g.room) {
        const o = ownedOf_(h), isNew = o.indexOf(g.room) < 0;
        if (isNew) { o.push(g.room); h.owned = o; }
        out.admin.room = g.room; out.admin.roomNew = isNew;
        if (isNew && g.all) feed_(`👑 島主送給 ${h.name} 一間「${g.roomName || g.room}」🏠`);   // v41：只送一家的不上動態
      }
      h.gifts = gifts; put_('houses', h);
      return out;
    }
    h.gifts = gifts.filter(x => x.id !== g.id);
    const out = {}, toys = Array.isArray(h.toys) ? h.toys : [];
    if ((g.kind === 'toy' || TOY_ITEMS_.indexOf(g.item) >= 0) && toys.length < TOY_MAX_) {
      const t = { id: uid_(), item: g.item, x: g.x, y: g.y };
      toys.push(t); h.toys = toys; out.toy = t;
    }
    put_('houses', h);
    if (g.msg) {
      out.note = { id: uid_(), houseId: h.id, by: g.from, byId: g.fromId, text: '🎁 ' + g.msg, color: '#ffd6a8', createdAt: Date.now() };
      put_('notes', out.note);
    }
    return out;
  },
  placeToy(req) {
    const h = mustFam_(req, true), k = toyKey_(h, req), toys = Array.isArray(h[k]) ? h[k] : [];
    const cap = k === 'toys2' ? TOY2_MAX_ : TOY_MAX_;
    if (toys.length >= cap) throw new Error(k === 'toys2' ? `二樓最多放 ${cap} 個玩具` : `地上最多放 ${cap} 個玩具`);
    if (!/^[a-z0-9_]{1,20}$/i.test(String(req.item || ''))) throw new Error('這不是玩具');
    const t = { id: uid_(), item: req.item, x: Math.round(Number(req.x) || 400), y: Math.round(Number(req.y) || 1000) };
    if (k === 'toys2' && req.w !== undefined && req.w !== null && req.w !== '') {   // v70：放在二樓牆上的層板
      const w = Math.floor(Number(req.w)), c = Math.floor(Number(req.c)), s = h.show && typeof h.show === 'object' ? showNorm_(h.show) : null;
      if (!s || !(w >= 0 && w < F2_N_) || String(s.f2.w[w]).indexOf('sh:') !== 0) throw new Error('這裡沒有層板');
      if (!(c >= 0 && c < 5)) throw new Error('沒有這一格');
      if (toys.some(x => Number(x.w) === w && x.w !== undefined && x.w !== null && Number(x.c) === c)) throw new Error('這格已經有東西了');
      t.w = w; t.c = c;
    }
    toys.push(t); h[k] = toys; put_('houses', h);
    return t;
  },
  moveToy(req) {
    const h = mustFam_(req, true), k = toyKey_(h, req), toys = Array.isArray(h[k]) ? h[k] : [], t = toys.find(x => x.id === req.toyId);
    if (!t) return false;
    t.x = Math.round(Number(req.x) || t.x); t.y = Math.round(Number(req.y) || t.y); t.flip = !!req.flip;
    h[k] = toys; put_('houses', h);
    return true;
  },
  removeToy(req) {
    const h = mustFam_(req, true), k = toyKey_(h, req);
    h[k] = (Array.isArray(h[k]) ? h[k] : []).filter(x => x.id !== req.toyId);
    put_('houses', h);
    return true;
  },

  // ---------- 衣櫃 ----------
  addAcc(req) {
    const h = mustFam_(req), acc = Array.isArray(h.acc) ? h.acc : [];
    (Array.isArray(req.acc) ? req.acc : [req.acc]).map(accId_).filter(Boolean).forEach(a => { if (acc.indexOf(a) < 0) acc.push(a); });
    h.acc = acc; put_('houses', h);
    return { acc: acc };
  },
  saveWear(req) {
    const h = mustFam_(req), p = get_('pets', req.petId);
    if (!p || p.houseId !== h.id) throw new Error('找不到這隻毛孩');
    const acc = Array.isArray(h.acc) ? h.acc : [], w = req.wear || {}, a = req.wadj || {}, wear = {}, wadj = {};
    const num = (v, lo, hi, d) => { v = Number(v); return isFinite(v) ? Math.max(lo, Math.min(hi, Math.round(v * 10) / 10)) : d; };
    WEAR_SLOTS_.forEach(s => { const id = accId_(w[s]); if (id && acc.indexOf(id) >= 0) wear[s] = id; });
    // 位置：每個部位一組（新配件的起點），每件配件也各記一組（旋轉、傾斜、上下拉長）
    Object.keys(a).slice(0, 60).forEach(k => {
      const v = a[k];
      if (!v || typeof v !== 'object' || !(WEAR_SLOTS_.indexOf(k) >= 0 || accId_(k))) return;
      const o = { x: num(v.x, -20, 120, 50), y: num(v.y, -40, 130, 20), w: num(v.w, 8, 160, 45) };
      if (v.f) o.f = 1;
      ['r','tx','ty'].forEach(q => { const n = num(v[q], q === 'r' ? -180 : -60, q === 'r' ? 180 : 60, 0); if (n) o[q] = n; });
      if (v.sy !== undefined && Math.abs(Number(v.sy) - 1) > 0.01) o.sy = Math.max(0.3, Math.min(3, Math.round(Number(v.sy) * 100) / 100)) || 1;
      wadj[k] = o;
    });
    p.wear = wear; p.wadj = wadj; put_('pets', p);
    return { wear: wear, wadj: wadj };
  },

  // ---------- 餓魔 ----------
  demonHelp(req) {
    const me = resident_(req), h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    const d = h.demon;
    if (!d || typeof d !== 'object') return { none: true };
    if (me.houseId === h.id) throw new Error('自己家的餓魔，要「摸摸牠」才會變回來');
    const now = Date.now(), pts = DEMON_PTS_[req.kind] || 0;
    if (!pts) throw new Error('這個互動不能解救餓魔');
    // v48：互動一次就解除餓魔（舊資料裡還在「暫時變回來」的也一起解除）
    h.demon = ''; h.demonOff = now; put_('houses', h);
    feed_(`🎉 ${me.nick} 解救了餓魔 ${all_('pets').filter(p => p.houseId === h.id).map(p => p.name).join('、')}！`);
    const fam = all_('players').filter(p => p.houseId === h.id).map(p => p.id);
    notify_(fam, 'note', `💕 ${me.nick} 去你家把餓魔變回來了，記得回來看看牠`);
    return { prog: 0, until: now + DEMON_FREE_, rescued: true, ended: true, add: pts };
  },
  demonEnd(req) {
    const h = mustFam_(req), d = h.demon;
    if (!d || typeof d !== 'object') return { none: true };
    const days = Math.max(5, Math.floor((Date.now() - Number(d.since || Date.now())) / DAY_));
    const helpers = Array.isArray(d.helpers) ? d.helpers : [];
    const names = all_('pets').filter(p => p.houseId === h.id).map(p => p.name).join('、');
    h.demon = ''; put_('houses', h);
    feed_(`${names} 變成餓魔 ${days} 天，${helpers.length ? helpers.join('、') + ' 有來救牠 💕' : '還好主人回來了 💕'}`);
    return { days: days, helpers: helpers };
  },

  // ---------- 一番賞 ----------
  // ⭐ 集滿 10 次星寶，跟毛球重逢：500 金幣＋限定房（每人一次）
  starClaim(req) {
    const me = resident_(req);
    if (!starOn_()) throw new Error('星寶活動已經結束了');
    if (Number(me.starDone)) throw new Error('你已經領過毛球的寶物了');
    if (Number(req.n) < STAR_GOAL_) throw new Error('星寶還沒找齊喔');
    const h = get_('houses', me.houseId), o = ownedOf_(h), fresh = o.indexOf(STAR_ROOM_) < 0;
    if (fresh) { h.owned = o.concat(STAR_ROOM_); put_('houses', h); }
    me.starDone = Date.now(); put_('players', me);
    feed_(`⭐ ${me.nick} 幫毛球找回了星寶！`);
    notify_(residents_().filter(p => p.id !== me.id).map(p => p.id), 'star', `⭐ ${me.nick} 幫毛球找回了星寶！你找到幾個了？`);
    return { coins: STAR_COINS_, room: STAR_ROOM_, roomNew: fresh };
  },
  // ⭐ 找到一半（5 次）寫一條動態（每人一次）
  starNote(req) {
    const me = resident_(req);
    if (!starOn_() || Number(req.n) !== 5 || Number(me.starHalf)) return false;
    me.starHalf = Date.now(); put_('players', me);
    feed_(`⭐ ${me.nick} 已經幫毛球找到一半的星寶了！`);
    return true;
  },
  kujiDraw(req) {
    kujiSync_(req);
    const h = mustFam_(req), me = get_('players', req.playerId);
    if (!me || me.houseId !== h.id) throw new Error('要先住進這個家才能抽');
    let k = kuji_();
    if (k.closed || !k.items.some(x => !x.by)) throw new Error('一番賞正在換新箱，等一下再試 🙏');
    const price = kujiPrice_(k);
    if ((Number(req.pay) || 0) < price) throw new Error(`一番賞漲價了，現在一抽 🪙${price}，金幣退回給你，重新整理再抽`);
    const pool = k.items.filter(x => !x.by), t = pool[Math.floor(Math.random() * pool.length)];
    t.by = me.nick; t.at = Date.now();
    const last = k.items.every(x => x.by), owned = ownedOf_(h), dup = owned.indexOf(t.room) >= 0;
    if (!dup) { owned.push(t.room); h.owned = owned; put_('houses', h); }
    k.log = (Array.isArray(k.log) ? k.log : []).concat([{ nick: me.nick, g: t.g, room: t.room, at: t.at, last: last }]).slice(-20);
    const no = Number(k.no) || 1;
    put_('meta', k);
    if (last) k = kuji_();   // 這箱抽完 → 馬上開下一箱
    if (t.g === 'A') feed_(`🎉 ${me.nick} 抽中一番賞 A 賞！`);
    if (last) feed_(`🏁 ${me.nick} 抽到第 ${no} 箱最後一張，拿到最後賞！第 ${no + 1} 箱開箱囉，一抽 🪙${kujiPrice_(k)} 🎊`);
    return { g: t.g, room: t.room, dup: dup, last: last, no: no, kuji: kujiView_(k) };
  },
  kujiGiftRoom(req) {
    kujiSync_(req);
    noShop_(req.toHouseId);
    const me = resident_(req), to = get_('houses', req.toHouseId);
    if (!to) throw new Error('找不到這個家');
    if (me.houseId === to.id) throw new Error('不能送給自己家');
    const room = String(req.room || '');
    if ([].concat(KUJI_ROOMS_.A, KUJI_ROOMS_.B, KUJI_ROOMS_.C, KUJI_ROOMS_.D).indexOf(room) < 0) throw new Error('沒有這個房間');
    const owned = ownedOf_(to);
    if (owned.indexOf(room) >= 0) throw new Error('他們家已經有這間了');
    owned.push(room); to.owned = owned; put_('houses', to);
    feed_(`🎁 ${me.nick} 送給 ${to.name} 一間「${String(req.name || room).slice(0, 12)}」`);
    notify_(membersOf_(to.id, me.id), 'gift', `🎁 ${me.nick} 送你們家一間新房間！`);
    return { owned: owned };
  },

  // ---------- 島主信件（玩家這邊） ----------
  readLetter(req) { letterMark_(req, 'read'); return true; },
  hideLetter(req) { letterMark_(req, 'hidden'); return true; },
  claimLetter(req) {
    const l0 = get_('letters', req.letterId);   // v57：one＝全家共用一份，第一個領的人拿
    if (l0 && l0.one && Array.isArray(l0.claimed) && l0.claimed.length && l0.claimed.indexOf(String(req.playerId || '')) < 0) throw new Error('這份禮物家人已經領走了');
    const me = resident_(req), r = letterMark_(req, 'claimed');
    if (r.already) throw new Error('這封信的禮物已經領過了');
    const l = r.l, out = { coins: Number(l.coins) || 0, tickets: Number(l.tickets) || 0, item: l.item || '', n: Number(l.n) || 0 };
    if (l.room) {
      const h = get_('houses', me.houseId), o = ownedOf_(h);
      out.room = l.room; out.roomNew = o.indexOf(l.room) < 0;
      if (out.roomNew) { o.push(l.room); h.owned = o; put_('houses', h); }
    }
    return out;
  },
  // 📮 寫信給島主
  mailAdmin(req) {
    const me = mustPlayer_(req.playerId), text = String(req.text || '').trim().slice(0, 200);
    if (!text) throw new Error('先寫點什麼再寄喔');
    const type = MAIL_TYPES_[req.type] ? req.type : 'talk', day = twDay_();
    const sent = all_('adminmail').filter(m => m.fromId === me.id && m.day === day).length;
    if (sent >= MAIL_DAY_MAX_) throw new Error(`今天已經寄了 ${MAIL_DAY_MAX_} 封，明天再寫給島主吧`);
    const img = String(req.img || '');
    if (img && (img.indexOf('data:image/') !== 0 || img.length > 45000)) throw new Error('截圖太大了，換一張試試');
    const h = me.houseId && get_('houses', me.houseId);
    const m = { id: uid_(), fromId: me.id, nick: me.nick, house: h ? h.name : '', anon: req.anon ? 1 : '', type: type, text: text, img: img, at: Date.now(), day: day, read: '', replied: '' };
    put_('adminmail', m);
    const admin = meta_('island').adminId;
    if (admin && admin !== me.id) notify_([admin], 'mail', `📮 ${req.anon ? '有島民' : me.nick} 寫信給你了（${MAIL_TYPES_[type]}）`);
    return { id: m.id, left: MAIL_DAY_MAX_ - sent - 1 };
  },

  // ---------- 🛍️ 毛二街 ----------
  // 買二手：金幣在前端扣，後端確保同一樣只會被一個人買走
  shopBuy(req) {
    const me = resident_(req), s = shop_(), clr = !!req.clr, stock = Array.isArray(s.stock) ? s.stock : [], cl = Array.isArray(s.clr) ? s.clr : [];
    const it = clr ? cl.find(x => x.id === req.stockId && !x.sold) : stock.find(x => x.id === req.stockId);
    const sm = meta_('sold'), sold = Array.isArray(sm.list) ? sm.list : [];
    if (!it) {
      const mine = sold.find(x => x.id === req.stockId && x.by === me.id);   // 自己剛剛買過（第一次回應沒收到）→ 照樣算買到
      if (mine) return { item: mine.item, t: mine.t, again: 1 };
      throw new Error('慢了一步，這個被別人買走了 😆');
    }
    if (it.t === 'cab' || it.t === 'w') {   // v57：展示櫃、牆面裝飾 → 放進自己家展示間的倉庫
      const h = get_('houses', me.houseId);
      if (!h || !h.show || typeof h.show !== 'object') throw new Error('要先有展示間才能買這個喔');
      const sv = showNorm_(h.show);
      if (it.t === 'cab') {
        if (Object.keys(sv.cabs).reduce((a, k) => a + (Number(sv.cabs[k]) || 0), 0) >= SHOW_CAB_MAX_) throw new Error('展示間倉庫放不下了');
        sv.cabs[it.item] = (Number(sv.cabs[it.item]) || 0) + 1;
      } else {
        if (Object.keys(sv.wo).reduce((a, k) => a + (Number(sv.wo[k]) || 0), 0) >= 60) throw new Error('展示間倉庫放不下了');
        sv.wo[it.item] = (Number(sv.wo[it.item]) || 0) + 1;
      }
      h.show = sv; put_('houses', h);
    }
    if (it.t === 'acc') {
      const h = get_('houses', me.houseId), acc = Array.isArray(h.acc) ? h.acc : [];
      if (acc.indexOf(it.item) >= 0) throw new Error('你家已經有這件配件了');
      acc.push(it.item); h.acc = acc; put_('houses', h);
    }
    if (clr) { it.sold = 1; s.clr = cl; } else s.stock = stock.filter(x => x.id !== it.id);
    put_('houses', s);
    put_('meta', { id: 'sold', list: sold.concat({ id: it.id, by: me.id, item: it.item, t: it.t, at: Date.now() }).slice(-60) });
    feed_(`🛍️ ${me.nick} 在毛二街撿到便宜：${String(req.name || it.item).slice(0, 14)}`);
    return { item: it.item, t: it.t };
  },
  // 賣東西：玩具／零食從背包（前端扣），配件從家裡的衣櫃（要家人密碼）
  shopSell(req) {
    const t = req.t === 'acc' ? 'acc' : 'item', item = String(req.item || '');
    if (!shopItemOk_(t, item)) throw new Error('這個不能賣');
    let me;
    if (t === 'acc') {
      const h = mustFam_(req), acc = Array.isArray(h.acc) ? h.acc : [];
      me = mustPlayer_(req.playerId);
      if (acc.indexOf(item) < 0) throw new Error('你家沒有這件配件');
      h.acc = acc.filter(x => x !== item); put_('houses', h);
      all_('pets').filter(p => p.houseId === h.id && p.wear && typeof p.wear === 'object').forEach(p => {
        let ch = false;
        Object.keys(p.wear).forEach(k => { if (p.wear[k] === item) { delete p.wear[k]; ch = true; } });
        if (ch) put_('pets', p);
      });
    } else me = resident_(req);
    const s = shop_(), stock = Array.isArray(s.stock) ? s.stock : [], it = { id: uid_(), item: item, t: t, at: Date.now(), src: 'p', by: me.nick };
    stock.push(it); s.stock = shopTrim_(stock, s); put_('houses', s);
    feed_(`💰 ${me.nick} 把 ${String(req.name || item).slice(0, 14)} 賣給毛二街`);
    return { ok: true, it: it };
  },
  // v73：高價收購公仔。當天第一個進店的人帶 3 款上來（前端照系列挑），一天只收一次
  shopWantRoll(req) {
    resident_(req);
    const s = shop_(), day = twDay_();
    if (s.want && s.want.day === day) return { want: s.want };
    const L = (Array.isArray(req.items) ? req.items : []).slice(0, 3)
      .filter(x => x && /^bb\d+_\d{2}$/.test(String(x.id || '')) && Number(x.p) >= 1200 && Number(x.p) <= 6000)
      .map(x => ({ id: String(x.id), p: Math.round(Number(x.p) / 100) * 100, by: '', at: 0 }));
    s.want = { day: day, list: L }; put_('houses', s);
    return { want: s.want };
  },
  // 賣公仔給店家：每一款只收一隻，先賣先贏（公仔在前端背包扣、金幣在前端加）
  shopWantSell(req) {
    const me = resident_(req), s = shop_(), w = s.want, i = Math.floor(Number(req.i));
    if (!w || w.day !== twDay_() || !Array.isArray(w.list) || !w.list[i]) throw new Error('今天的收購已經換了，重新整理看看');
    const it = w.list[i];
    if (it.id !== String(req.id || '')) throw new Error('收購的款式換了，重新整理看看');
    if (it.by) throw new Error(`慢了一步，${it.by} 已經賣給店家了`);
    const g = me.game || {}, bag = g.bag && typeof g.bag === 'object' ? g.bag : {};
    if (!(Number(bag[it.id]) > 0)) throw new Error('背包裡沒有這隻公仔（剛拿到的話等幾秒再試）');
    it.by = me.nick; it.byId = me.id; it.at = Date.now(); s.want = w; put_('houses', s);
    feed_(`💎 ${me.nick} 把公仔高價賣給毛二街，拿到 🪙${it.p}！`);
    return { p: it.p };
  },
  // 每天補貨：當天第一個進店的人帶 3 樣上來，一天只收一次
  shopRestock(req) {
    resident_(req);
    const s = shop_(), day = twDay_();
    if (s.rday === day) return { stock: s.stock || [] };
    const stock = Array.isArray(s.stock) ? s.stock : [];
    (Array.isArray(req.items) ? req.items : []).slice(0, 3).filter(x => x && shopItemOk_(x.t, x.item))
      .forEach(x => stock.push({ id: uid_(), item: String(x.item), t: x.t, at: Date.now(), src: 's' }));
    s.stock = shopTrim_(stock, s); s.rday = day; put_('houses', s);
    return { stock: s.stock };
  },
  shopUpdate(req) {
    const s = mustMgr_(req), p = req.patch || {};
    if (p.room) { const r = accId_(p.room); if (r) s.room = r; }
    if (p.motto !== undefined) s.motto = String(p.motto).slice(0, 20);
    put_('houses', s);
    return true;
  },
  shopStaff(req) {
    const s = mustMgr_(req);
    const L = (Array.isArray(req.staff) ? req.staff : []).slice(0, SHOP_STAFF_MAX_).map(x => ({
      id: String(x.id || uid_()).slice(0, 12), name: String(x.name || '').trim().slice(0, 8) || '店員',
      img: String(x.img || '').slice(0, 300), img2: String(x.img2 || '').slice(0, 300), about: String(x.about || '').slice(0, 90) }));
    if (!L.length) throw new Error('店裡至少要有 1 位店員');
    if (L.some(x => /^data:/.test(x.img) || /^data:/.test(x.img2))) throw new Error('圖片要先上傳');
    s.staff = L; put_('houses', s);
    return { staff: L };
  },

  // ================= 👑 島主後台 =================
  adminLogin(req) {
    isAdmin_(req);
    const isl = meta_('island');
    if (req.playerId && isl.adminId !== req.playerId) {   // 換島主帳號才寫（要排隊）
      const lk = LockService.getScriptLock();
      if (lk.tryLock(5000)) { try { resetCache_(); const m = meta_('island'); m.adminId = req.playerId; put_('meta', m); } finally { lk.releaseLock(); } }
    }
    const houses = all_('houses').filter(h => !isSpecialId_(h.id)), owned = {}, s = get_('houses', SHOP_ID_);
    houses.forEach(h => { owned[h.id] = ownedOf_(h); });
    return {
      players: all_('players').map(p => {
        const h = houses.find(x => x.id === p.houseId), g = p.game || {};
        return { id: p.id, nick: p.nick, code: p.code || '', pin: p.pin || '', house: h ? h.name : '', houseId: p.houseId || '', lv: g.lv || 1, coins: g.coins || 0, tickets: g.tickets || 0,
          createdAt: Number(p.createdAt) || 0, pushSt: p.pushSt || '', pushAt: Number(p.pushAt) || 0, seen: Number(p.seen) || 0 };
      }),
      houses: houses.map(h => ({ id: h.id, name: h.name, key: h.key || '', slot: Number(h.slot) })),
      owned: owned,
      invites: invites_().slice().reverse(),
      decoCode: String(meta_('deco').code || '我毛很多'),
      drops: drops_().length,
      notice: isl.notice || null, dbl: isl.dbl || '',
      shopMgr: s && Array.isArray(s.mgr) ? s.mgr : [],
      star: starView_(),
      applies: all_('apply').sort((a, b) => b.at - a.at).slice(0, 40)
    };
  },
  adminNotice(req) {
    isAdmin_(req);
    const isl = meta_('island'), t = String(req.text || '').trim().slice(0, 60);
    const at = Date.now(), days = [1, 3, 7].indexOf(Number(req.days)) >= 0 ? Number(req.days) : 0;
    isl.notice = t ? { t: t, at: at, until: days ? at + days * DAY_ : 0 } : ''; put_('meta', isl);
    if (req.push && t) notify_(residents_().map(p => p.id), 'notice', '📢 島主公告：' + t);
    return true;
  },
  adminDouble(req) {
    isAdmin_(req);
    const isl = meta_('island'); isl.dbl = req.on ? twDay_() : ''; put_('meta', isl);
    if (req.on) feed_('👑 島主宣布：今天是雙倍日！賺到的金幣和愛心值都 ×2');
    return true;
  },
  adminRain(req) {
    isAdmin_(req);
    const houses = all_('houses').filter(h => !isSpecialId_(h.id));
    if (!houses.length) throw new Error('島上還沒有房子');
    const n = clampN_(req.n, 1, 10) || 1, amt = clampN_(req.amt, 0, 999), list = drops_();
    for (let i = 0; i < n; i++) {
      const hid = req.houseId || houses[Math.floor(Math.random() * houses.length)].id;
      const d = newDrop_(hid, amt);
      list.push(d); saveDrops_(list);   // 每袋都先存，下一袋才會避開這一袋
    }
    return true;
  },
  adminGiftHouse(req) {
    isAdmin_(req);
    noShop_(req.houseId);
    const h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    const room = accId_(req.room);
    if (room && ownedOf_(h).indexOf(room) >= 0) throw new Error('他們家已經有這間房間了');
    f2RoomCheck_(h, room);
    const s = freeSpot_(h.id), gifts = Array.isArray(h.gifts) ? h.gifts : [];
    const g = { id: uid_(), admin: true, from: '島主', coins: clampN_(req.coins, 0, 1e9), tickets: clampN_(req.tickets, 0, 1e9),
      item: String(req.item || '').slice(0, 20), n: clampN_(req.n, 0, 1e9), msg: String(req.msg || '').slice(0, 40), opened: [], at: Date.now(), x: s.x, y: s.y, all: req.all ? 1 : '' };
    if (room) { g.room = room; g.roomName = String(req.roomName || '').slice(0, 20); }
    gifts.push(g); h.gifts = gifts; put_('houses', h);
    notify_(membersOf_(h.id), 'gift', '🎁 島主送了你們家一份禮物，快去拆！');
    return true;
  },
  // v44：送禮給全島，一次送完（已經有那間房間的家跳過）
  adminGiftAll(req) {
    isAdmin_(req);
    let ok = 0, skip = 0, fail = '';
    all_('houses').filter(h => !isSpecialId_(h.id)).forEach(h => {
      try { ACTIONS.adminGiftHouse(Object.assign({}, req, { houseId: h.id, all: 1 })); ok++; }
      catch (e) { if (/已經有這間房間|還沒有二樓/.test(e.message)) skip++; else fail = e.message; }
    });
    return { ok: ok, skip: skip, fail: fail };
  },
  // 寫信：to＝'*' 全島、'h:家的ID' 整個家（寄出當下的家人）、或玩家 ID
  adminLetter(req) {
    isAdmin_(req);
    const to = req.to === '*' ? '*' : String(req.to || ''), room = accId_(req.room);
    let mem = null;
    if (to.indexOf('h:') === 0) {
      const h = get_('houses', to.slice(2));
      if (!h) throw new Error('找不到這個家');
      mem = all_('players').filter(p => p.houseId === h.id).map(p => p.id);
      if (!mem.length) throw new Error('這個家還沒有人住');
    } else if (to !== '*' && !get_('players', to)) throw new Error('找不到這位玩家');
    if (room) letterRoomCheck_(to, room);
    const title = String(req.title || '').trim().slice(0, 30), body = String(req.body || '').trim().slice(0, 500);
    if (!title) throw new Error('信要有標題');
    const l = { id: uid_(), to: to, title: title, body: body, at: Date.now(),
      coins: clampN_(req.coins, 0, 9999), tickets: clampN_(req.tickets, 0, 99), item: String(req.item || '').slice(0, 20), n: clampN_(req.n, 0, 99),
      read: [], claimed: [], hidden: [] };
    if (mem) l.mem = mem;
    if (room) { l.room = room; l.roomName = String(req.roomName || '').slice(0, 20); }
    put_('letters', l);
    try {
      const gift = l.coins + l.tickets + (l.item && l.n ? 1 : 0) > 0 || !!room;
      const ids = to === '*' ? residents_().map(p => p.id) : mem || [to], admin = meta_('island').adminId;
      notify_(ids.filter(id => id !== admin), 'letter', '💌 島主寄了一封信給你，快打開看看！' + (gift ? '還附了禮物 🎁' : ''));
    } catch (e) {}
    return true;
  },
  adminResetPw(req) {
    isAdmin_(req);
    noShop_(req.houseId);
    const h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    if (req.key != null) { const k = normKey_(req.key); if (!keyOk_(k)) throw new Error('家庭鑰匙碼要 6 個英文或數字，而且英文和數字都要有'); h.key = k; put_('houses', h); return { key: k }; }   // v64
    if (!req.pw) throw new Error('缺少新密碼');
    h.pw = String(req.pw); put_('houses', h);
    return true;
  },
  adminRemoveHouse(req) {
    isAdmin_(req);
    noShop_(req.houseId);
    const h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    removeHouse_(h);
    feed_(`👑 島主把「${h.name}」收回成空地了`);
    return true;
  },
  // v67：🏝️ 搬家到外島／搬回主島（只有島主能搬）
  adminMoveHouse(req) {
    isAdmin_(req);
    noShop_(req.houseId);
    const h = get_('houses', req.houseId);
    if (!h || isSpecialId_(h.id)) throw new Error('找不到這個家');
    const to = Number(req.slot), now = Date.now();
    const okMain = to >= 0 && to < SLOT_COUNT_ && to !== SHOP_SLOT_ && to !== CENTER_SLOT_, okOut = to >= OUT_BASE_ && to < OUT_BASE_ + OUT_N_;
    if (!okMain && !okOut) throw new Error('位置不對');
    if (all_('houses').some(x => x.id !== h.id && Number(x.slot) === to)) throw new Error('那塊地已經有人住了');
    const wasOut = isOut_(h);
    h.slot = to;
    if (okOut) { h.poops = []; h.poopPush = ''; h.demon = null; }
    else if (wasOut) {   // 從外島回來：冬眠結束，重新計時
      h.poopAt = now; h.poops = []; h.demon = null; h.demonOff = now;
      all_('pets').filter(p => p.houseId === h.id).forEach(p => { p.lastFed = now; p.hungPush = ''; put_('pets', p); });
    }
    put_('houses', h);
    if (okOut !== wasOut) feed_(okOut ? `🏝️「${h.name}」搬到外島休息了` : `🏡「${h.name}」從外島搬回主島了！`);
    return { slot: to };
  },
  adminDeletePlayer(req) {
    isAdmin_(req);
    const p = get_('players', req.id);
    if (!p) throw new Error('找不到這位玩家');
    if (p.houseId && get_('houses', p.houseId)) throw new Error('這位玩家有家，要先把他的家收回，或請他退出');
    del_('players', p.id);
    return true;
  },
  // v41：島主重設某人的換機碼（不給 pin 就隨機）
  adminSetPin(req) {
    isAdmin_(req);
    const p = get_('players', req.playerId);
    if (!p) throw new Error('找不到這位玩家');
    const pin = String(req.pin || '').trim();
    p.pin = /^\d{4}$/.test(pin) ? pin : newPin_(); p.pinFail = ''; put_('players', p);
    return { pin: p.pin };
  },
  // v41：合併帳號——留下 keep、刪掉 drop；金幣、抽卡券、等級、背包取多的
  adminMergePlayers(req) {
    isAdmin_(req);
    const a = get_('players', req.keepId), b = get_('players', req.dropId);
    if (!a || !b || a.id === b.id) throw new Error('要選兩個不同的帳號');
    const ga = a.game && typeof a.game === 'object' ? a.game : {}, gb = b.game && typeof b.game === 'object' ? b.game : {};
    if ((Number(gb.lv) || 1) > (Number(ga.lv) || 1) || ((Number(gb.lv) || 1) === (Number(ga.lv) || 1) && (Number(gb.xp) || 0) > (Number(ga.xp) || 0))) { ga.lv = gb.lv; ga.xp = gb.xp; }
    ['coins', 'tickets'].forEach(k => { ga[k] = Math.max(Number(ga[k]) || 0, Number(gb[k]) || 0); });
    const bag = Object.assign({}, ga.bag || {}); Object.keys(gb.bag || {}).forEach(k => { bag[k] = Math.max(Number(bag[k]) || 0, Number(gb.bag[k]) || 0); }); ga.bag = bag;
    a.game = ga;
    if (!a.houseId && b.houseId) a.houseId = b.houseId;
    put_('players', a); del_('players', b.id);
    return { keep: a.id };
  },
  // v41：訂製裝潢折扣碼
  adminDecoCode(req) {
    isAdmin_(req);
    const code = String(req.code || '').trim().slice(0, 20);
    if (!code) throw new Error('折扣碼不能空白');
    const m = meta_('deco'); m.code = code; put_('meta', m);
    return { code: code };
  },
  // v41：島主自己上傳背景（也用來改名字、類別、軟木板、地板範圍、下架）
  // r：N／R／SSR（可抽卡、一番賞）、LTD 限定款（只進一番賞）、CU 訂製款（不抽、不進一番賞，送給島民）
  // v75：調整內建背景的位置（id 不在上傳清單裡的）；空的 board＝用原本的
  adminRoomPos(req) {
    isAdmin_(req);
    const id = String(req.room || '').slice(0, 40);
    if (!/^[a-z0-9_]+$/i.test(id)) throw new Error('沒有這個背景');
    const m = meta_('roompos'), pos = m.pos && typeof m.pos === 'object' ? m.pos : {}, nb = v => Math.round(clampN_(v, 0, 2000)), o = {};
    if (Array.isArray(req.board) && req.board.length === 4) o.board = req.board.map(nb);
    if (req.floor && typeof req.floor === 'object') o.floor = { y0: nb(req.floor.y0), t: [nb((req.floor.t || [])[0]), nb((req.floor.t || [])[1])] };
    if (req.reset) delete pos[id]; else pos[id] = o;
    m.pos = pos; put_('meta', m);
    return { pos: pos };
  },
  adminRoomSave(req) {
    isAdmin_(req);
    const x = req.room || {}, R = meta_('rooms'), list = Array.isArray(R.list) ? R.list : [];
    const name = String(x.name || '').trim().slice(0, 12), r = ['N', 'R', 'SSR', 'LTD', 'CU', 'SH'].indexOf(x.r) >= 0 ? x.r : 'CU';
    if (!name) throw new Error('幫背景取個名字');
    let o = x.id ? list.find(y => y.id === x.id) : null;
    if (!o) {
      if (!/^https:\/\//.test(String(x.img || ''))) throw new Error('先上傳背景圖');
      o = { id: 'rm' + uid_().slice(0, 8), at: Date.now() }; list.push(o);
    }
    o.name = name; o.r = r; if (x.img) o.img = String(x.img).slice(0, 400);
    const nb = v => Math.round(clampN_(v, 0, 2000));
    if (Array.isArray(x.board) && x.board.length === 4) o.board = x.board.map(nb);
    if (x.floor && typeof x.floor === 'object') o.floor = { y0: nb(x.floor.y0), t: [nb((x.floor.t || [])[0]), nb((x.floor.t || [])[1])], b: [0, 848] };
    if ('houseId' in x) o.houseId = String(x.houseId || '');
    o.off = x.off ? 1 : '';
    o.p = r === 'SH' ? Math.round(clampN_(x.p, 0, 99999)) : '';
    o.f2 = x.f2 && r === 'CU' ? 1 : '';
    if (o.f2 && o.houseId) { const hh = get_('houses', o.houseId); if (hh && !Number(hh.floor2)) throw new Error(`「${hh.name}」還沒有二樓，二樓專用的背景只能給有二樓的家`); }
    R.list = list; R.ver = (Number(R.ver) || 0) + 1; put_('meta', R);
    return o;
  },
  // v41：島主上傳房子款式／商店商品，或改名字、價格、上下架
  adminCatSave(req) {
    isAdmin_(req);
    const c = catalog_(), x = req.obj || {}, nb = (v, lo, hi) => Math.round(clampN_(v, lo, hi));
    const url = v => /^https:\/\//.test(String(v || '')) ? String(v).slice(0, 400) : '';
    let o;
    if (req.kind === 'style') {
      o = x.n ? c.styles.find(y => Number(y.n) === Number(x.n)) : null;
      if (!o) {
        if (!x.img || !url(x.img.day)) throw new Error('先上傳房子的圖');
        o = { n: Math.max(100, ...c.styles.map(y => Number(y.n) || 0)) + 1, at: Date.now() }; c.styles.push(o);
      }
      if (x.img) o.img = { dawn: url(x.img.dawn) || o.img && o.img.dawn || '', day: url(x.img.day) || o.img && o.img.day || '', sunset: url(x.img.sunset) || o.img && o.img.sunset || '', night: url(x.img.night) || o.img && o.img.night || '' };
    } else {
      o = x.id ? c.items.find(y => y.id === x.id) : null;
      if (!o) {
        if (!url(x.img)) throw new Error('先上傳商品的圖');
        o = { id: 'ci' + uid_().slice(0, 8), at: Date.now() }; c.items.push(o);
      }
      if (x.img) o.img = url(x.img) || o.img;
      o.kind = x.kind === 'toy' ? 'toy' : 'treat';
      o.price = nb(x.price, 0, 9999);
      o.fav = String(x.fav || '').slice(0, 40);
      o.limited = x.limited ? 1 : '';
    }
    const name = String(x.name || '').trim().slice(0, 12);
    if (!name) throw new Error('取個名字吧');
    o.name = name; o.off = x.off ? 1 : '';
    c.ver += 1; put_('meta', c);
    return o;
  },
  adminSetCode(req) {
    isAdmin_(req);
    const p = get_('players', req.id);
    if (!p) throw new Error('找不到這位玩家');
    if (req.code) {
      const c = cleanCode_(req.code);
      if (codeTaken_(c, p.id)) throw new Error('這組轉移碼有人用了');
      p.code = 'MH-' + c;
    } else p.code = newCode_();
    put_('players', p);
    return { code: p.code };
  },
  // 直接設定某人的金幣（他下次打開 App 會套用）
  adminSetCoins(req) {
    isAdmin_(req);
    const p = get_('players', req.id);
    if (!p) throw new Error('找不到這位玩家');
    const v = Math.round(clampN_(req.coins, 0, 999999));
    p.mail = (Array.isArray(p.mail) ? p.mail : []).concat([{ id: uid_(), setCoins: v, at: Date.now() }]);
    const g = p.game && typeof p.game === 'object' ? p.game : {};
    g.coins = v; p.game = g; put_('players', p);
    return { coins: v };
  },
  adminInviteNew(req) {
    isAdmin_(req);
    const n = clampN_(req.n, 1, 10) || 1, list = invites_(), cs = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789', made = [];
    for (let i = 0; i < n; i++) {
      let c;
      do { c = 'MAO-'; for (let j = 0; j < 4; j++) c += cs[Math.floor(Math.random() * cs.length)]; } while (list.some(x => x.code === c));
      list.push({ code: c, at: Date.now(), note: String(req.note || '').slice(0, 20) }); made.push(c);
    }
    saveInvites_(list);
    return made;
  },
  adminInviteVoid(req) {
    isAdmin_(req);
    const list = invites_(), inv = list.find(x => x.code === req.code);
    if (!inv) throw new Error('找不到這組邀請碼');
    if (inv.usedBy) throw new Error('這組已經被用掉了');
    inv.void = true; saveInvites_(list);
    return true;
  },
  adminMailList(req) {
    isAdmin_(req);
    return all_('adminmail').sort((a, b) => Number(b.at) - Number(a.at)).slice(0, 100).map(m => ({
      id: m.id, fromId: m.fromId, nick: m.anon ? '' : m.nick, house: m.anon ? '' : m.house, anon: !!m.anon, type: m.type, text: m.text, img: m.img || '', at: Number(m.at) || 0, read: !!m.read, replied: !!m.replied,
      st: m.st || '', houseId: m.houseId || '', cost: Number(m.cost) || 0, roomId: m.roomId || '', free: m.free ? 1 : '', f2: m.f2 ? 1 : '' }));
  },
  adminMailMark(req) {
    isAdmin_(req);
    const m = get_('adminmail', req.id);
    if (!m) return true;
    if (req.read !== undefined) m.read = req.read ? 1 : '';
    if (req.replied) m.replied = 1;
    put_('adminmail', m);
    return true;
  },
  adminMailDelete(req) { isAdmin_(req); del_('adminmail', req.id); return true; },
  // 指派毛二街店長（最多 2 位，要有家）
  // ⭐ 星寶活動：開始（從現在算兩週）／提早結束
  adminStar(req) {
    isAdmin_(req);
    const t = Date.now(), m = meta_('star');
    if (req.on) {
      m.start = t; m.end = t + STAR_DAYS_ * DAY_; put_('meta', m);
      feed_('⭐ 探險家毛球來到島上了！他好像在找什麼……');
      notify_(residents_().map(p => p.id), 'letter', '⭐ 探險家毛球來到島上了！去大家家裡看看他在找什麼吧');
    } else { m.end = t; put_('meta', m); }
    return starView_();
  },
  // 🏛️ 島民中心工讀生（最多 3 位）
  adminCenter(req) {
    isAdmin_(req);
    const okImg = u => { u = String(u || ''); return /^(https:\/\/|assets\/)/.test(u) ? u.slice(0, 400) : ''; };
    const staff = (Array.isArray(req.staff) ? req.staff : []).slice(0, 3).map((x, i) => ({
      id: accId_(x.id) || ('c' + (i + 1)), name: String(x.name || '').trim().slice(0, 8), img: okImg(x.img), img2: okImg(x.img2),
      about: String(x.about || '').split('\n').map(t => t.trim()).filter(Boolean).slice(0, 3).join('\n').slice(0, 120)
    })).filter(x => x.name);
    if (!staff.length) throw new Error('至少要有 1 位工讀生');
    const m = meta_('center'); m.staff = staff; put_('meta', m);
    return { staff: staff };
  },
  // ---------- 📐 擴建申請（島民中心） ----------
  applyExpand(req) {
    const h = mustFam_(req), me = mustPlayer_(req.playerId), kind = String(req.kind || '');
    if (!EXP_NAME_[kind]) throw new Error('不知道要擴建什麼');
    if (Math.max(Number((me.game || {}).lv) || 0, Number(req.lv) || 0) < expLv_(kind)) throw new Error(`要 Lv.${expLv_(kind)} 以上才能申請${kind === 'renew' ? '都更' : '擴建'}`);
    if (kind === 'floor2' && Number(h.floor2)) throw new Error('你家已經有二樓了');
    if (kind === 'farm' && h.farm) throw new Error('你家已經有農田了');
    if (kind === 'show' && h.show && typeof h.show === 'object') throw new Error('你家已經有展示間了');
    const APL = all_('apply');
    if (APL.some(a => a.houseId === h.id && a.st === 'wait' && (kind === 'renew' || a.kind === kind))) throw new Error('你家已經有一張申請在等島主看了');
    let style = 0;
    if (kind === 'renew') {
      style = Math.floor(Number(req.style));
      if (Number(h.renewAt) && Date.now() - Number(h.renewAt) < RENEW_DAYS_ * DAY_) throw new Error(`你家這個月已經都更過了，${Math.ceil((Number(h.renewAt) + RENEW_DAYS_ * DAY_ - Date.now()) / DAY_)} 天後可以再申請`);
      renewStyleOk_(h, style);
      if (APL.some(a => a.kind === 'renew' && a.st === 'wait' && Number(a.style) === style)) throw new Error('這款房子有別家正在申請了，換一款吧');
    }
    const a = { id: uid_(), kind: kind, houseId: h.id, house: h.name, playerId: me.id, nick: me.nick, note: String(req.note || '').trim().slice(0, 60), cost: expCost_(kind), at: Date.now(), st: 'wait', reply: '' };
    if (style) { a.style = style; a.from = Number(h.style) || 0; h.renewAt = Date.now(); put_('houses', h); }
    if (kind !== 'renew') {   // v48：二樓、農田不用審核，付錢馬上蓋好
      const now = Date.now();
      if (kind === 'floor2') { h.floor2 = 1; h.room2 = h.room2 || 'basic1'; h.toys2 = Array.isArray(h.toys2) ? h.toys2 : []; h.inn = { at: now }; }
      else if (kind === 'show') h.show = showNorm_(null);
      else h.farm = { n: FARM_N0_, p: [] };
      put_('houses', h);
      a.st = 'ok'; a.doneAt = now; a.reply = '';
      put_('apply', a);
      feed_(`🏗️ 「${h.name}」擴建了${EXP_NAME_[kind]}！`);
      return a;
    }
    put_('apply', a);
    const admin = meta_('island').adminId;
    if (admin) notify_([admin], 'mail', `🏗️ ${me.nick} 申請幫「${h.name}」擴建${EXP_NAME_[kind]}`);
    return a;
  },
  adminApplyDecide(req) {
    isAdmin_(req);
    const a = get_('apply', req.id);
    if (!a || a.st !== 'wait') throw new Error('這張申請已經處理過了');
    const h = get_('houses', a.houseId), ok = !!req.ok, reply = String(req.reply || '').trim().slice(0, 100), now = Date.now();
    if (ok && !h) throw new Error('這個家已經不在了');
    if (ok && a.kind === 'renew') renewStyleOk_(h, Number(a.style));   // 等審核的時候被別人蓋走了 → 只能駁回
    if (!ok && a.kind === 'renew' && h) { h.renewAt = ''; put_('houses', h); }   // 駁回：馬上可以再申請
    if (ok) {
      if (a.kind === 'renew') h.style = Number(a.style);
      else if (a.kind === 'floor2') { h.floor2 = 1; h.room2 = h.room2 || 'basic1'; h.toys2 = Array.isArray(h.toys2) ? h.toys2 : []; h.inn = { at: now }; }
      else h.farm = { n: FARM_N0_, p: [] };
      put_('houses', h);
      feed_(a.kind === 'renew' ? `🏗️ 「${h.name}」都更完成，換上新外觀了！` : `🏗️ 「${h.name}」擴建了${EXP_NAME_[a.kind]}！`);
    }
    a.st = ok ? 'ok' : 'no'; a.reply = reply; a.doneAt = now; put_('apply', a);
    const mem = all_('players').filter(p => p.houseId === a.houseId).map(p => p.id);
    put_('letters', { id: uid_(), to: a.playerId, title: ok ? `🏗️ ${EXP_NAME_[a.kind]}${a.kind === 'renew' ? '完成了' : '蓋好了'}！` : `🏗️ ${a.kind === 'renew' ? '都更' : '擴建'}申請沒有通過`,
      body: (a.kind === 'renew'
        ? (ok ? `島主核准了「${a.house}」的都更，房子已經換上新外觀，快回小島看看！` : `島主這次沒有核准「${a.house}」的都更，申請費 🪙${a.cost} 退還給你，可以馬上再申請一次。`)
        : (ok ? `島主核准了「${a.house}」的${EXP_NAME_[a.kind]}擴建，快回家看看！` : `島主這次沒有核准「${a.house}」的${EXP_NAME_[a.kind]}擴建，申請費 🪙${a.cost} 退還給你。`)) + (reply ? `\n\n島主說：${reply}` : ''),
      at: now, coins: ok ? 0 : Number(a.cost) || EXP_COST_, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
    notify_(ok ? mem : [a.playerId], 'letter', ok ? (a.kind === 'renew' ? `🏗️ 「${a.house}」都更完成，換上新外觀了！` : `🏗️ 「${a.house}」的${EXP_NAME_[a.kind]}蓋好了！`) : `🏗️ ${a.kind === 'renew' ? '都更' : '擴建'}申請有結果了，打開信看看`);
    return a;
  },
  // ---------- 🛏️ 二樓民宿：收租（全家共用一個存錢筒，最多存 12 小時；v57：每小時 舒適度÷2） ----------
  innCollect(req) {
    const h = mustFam_(req);
    if (!Number(h.floor2)) throw new Error('這個家還沒有二樓');
    const now = Date.now(), inn = h.inn && typeof h.inn === 'object' ? h.inn : { at: now }, hrs = Math.min(INN_CAP_H_, Math.max(0, (now - Number(inn.at || now)) / HOUR_));
    const comfort = innComfort_(h), coins = Math.floor(hrs * comfort / 2);
    if (coins <= 0) return { coins: 0, comfort: comfort };
    h.inn = { at: now, last: coins, by: req.playerId }; put_('houses', h);
    return { coins: coins, comfort: comfort };
  },
  // ---------- 🌱 農田 ----------
  farmPlant(req) {
    const h = mustFam_(req), f = farm_(h), i = plot_(f, req.i), c = String(req.c || '');
    if (!CROPS_[c]) throw new Error('沒有這種種子');
    if (f.p[i]) throw new Error('這格已經種東西了');
    f.p[i] = { c: c, at: Date.now(), w: [] }; farmLog_(f, req, 'plant', i, c); h.farm = f; put_('houses', h);
    return f.p[i];
  },
  farmWater(req) {
    resident_(req);
    const h = get_('houses', req.houseId);
    if (!h) throw new Error('找不到這個家');
    const f = farm_(h), i = plot_(f, req.i), c = f.p[i], now = Date.now();
    if (!c) throw new Error('這格還沒種東西');
    const w = Array.isArray(c.w) ? c.w : [];
    if (now >= ripeAt_(c)) throw new Error('已經可以收成了，不用再澆水');
    if (w.length >= cropWMax_(c)) throw new Error(`這格已經澆滿 ${cropWMax_(c)} 次了`);
    if (w.length && now - Number(w[w.length - 1].t || w[w.length - 1]) < HOUR_) throw new Error('剛剛才澆過，1 小時後再澆');
    w.push({ t: now, by: req.playerId }); c.w = w; farmLog_(f, req, 'water', i, c.c); h.farm = f; put_('houses', h);
    return c;
  },
  farmHarvest(req) {
    const h = mustFam_(req), f = farm_(h), i = plot_(f, req.i), c = f.p[i], now = Date.now();
    if (!c) throw new Error('這格是空的');
    if (now < ripeAt_(c)) throw new Error('還沒成熟喔');
    f.p[i] = null; farmLog_(f, req, 'harvest', i, c.c); h.farm = f; put_('houses', h);
    const bag = c.c === 'apple' && Math.random() < 0.2 ? 50 + Math.floor(Math.random() * 16) * 10 : 0;   // 金蘋果 20% 多一個錢袋（50～200）
    return { c: c.c, bag: bag };
  },
  farmBuyPlot(req) {
    const h = mustFam_(req), f = farm_(h);
    if (f.n >= FARM_MAX_) throw new Error(`最多 ${FARM_MAX_} 格`);
    f.n++; h.farm = f; put_('houses', h);
    return { n: f.n };
  },
  // ---------- 🎨 訂製裝潢 ----------
  decoApply(req) {
    const h = mustFam_(req), me = mustPlayer_(req.playerId), now = Date.now(), text = String(req.text || '').trim().slice(0, 400);
    if (text.length < 5) throw new Error('多描述一點你想要的房間吧');
    const img = String(req.img || '');
    if (img && (img.indexOf('data:image/') !== 0 || img.length > 45000)) throw new Error('參考圖太大了，換一張試試');
    const kind = ['b', 'w', 'd'].indexOf(String(req.kind)) >= 0 ? String(req.kind) : (req.f2 ? 'w' : 'b'), f2 = kind === 'b' ? '' : 1;
    if (f2 && !Number(h.floor2)) throw new Error('你家還沒有二樓喔，先申請擴建吧');
    const code = String(req.code || '').trim(), free = !!code && code === String(meta_('deco').code || '我毛很多');
    if (code && !free) throw new Error('折扣碼不對喔');
    if (Number(h.decoAt) && now - Number(h.decoAt) < DECO_DAYS_ * DAY_) throw new Error(`你家這個月已經申請過了，${Math.ceil((Number(h.decoAt) + DECO_DAYS_ * DAY_ - now) / DAY_)} 天後可以再申請`);   // v74：折扣碼也一個月一次
    if (!free) {
      if (all_('adminmail').filter(m => m.type === 'deco' && m.st === 'wait').length >= DECO_QUEUE_) throw new Error('訂製裝潢目前排滿了，過幾天再來看看');
    }
    const m = { id: uid_(), fromId: me.id, nick: me.nick, house: h.name, houseId: h.id, anon: '', type: 'deco', text: text, img: img, at: now, day: twDay_(), read: '', replied: '', st: 'wait', cost: free ? 0 : DECO_COST_, free: free ? 1 : '', f2: f2, kind: kind };
    put_('adminmail', m);
    h.decoAt = now; h.decoFree = free ? now : ''; put_('houses', h);
    const admin = meta_('island').adminId;
    if (admin && admin !== me.id) notify_([admin], 'mail', `🎨 ${me.nick} 申請了${f2 ? '二樓的' : ''}訂製裝潢`);
    return { id: m.id, free: free ? 1 : 0 };
  },
  adminDecoFinish(req) {
    isAdmin_(req);
    const m = get_('adminmail', req.id), name = String(req.name || '').trim().slice(0, 12), img = String(req.img || '');
    if (!m || m.type !== 'deco' || m.st !== 'wait') throw new Error('這張申請已經處理過了');
    if (!name) throw new Error('幫房間取個名字');
    if (!/^https:\/\//.test(img)) throw new Error('先上傳房間的圖');
    const roomId = 'cu' + uid_().slice(0, 8), R = meta_('rooms');
    const nb = v => Math.round(clampN_(v, 0, 2000)), ro = { id: roomId, name: name, img: img.slice(0, 400), houseId: m.houseId, r: 'CU', f2: m.f2 ? 1 : '', at: Date.now() };
    if (Array.isArray(req.board) && req.board.length === 4) ro.board = req.board.map(nb);   // v74：上傳時拉好的佈告欄／層板位置
    if (req.floor && typeof req.floor === 'object') ro.floor = { y0: nb(req.floor.y0), t: [nb((req.floor.t || [])[0]), nb((req.floor.t || [])[1])], b: [0, 848] };
    R.list = (Array.isArray(R.list) ? R.list : []).concat(ro); R.ver = (Number(R.ver) || 0) + 1; put_('meta', R);
    const reply = String(req.reply || '').trim().slice(0, 300);
    put_('letters', { id: uid_(), to: m.fromId, title: '🎨 你訂製的房間完成了！', body: `「${name}」裝潢好了！` + (m.f2 ? '這是二樓專用的，收下之後到二樓按「🎨 背景」就能換上。' : '收下之後到「⚙️ 家」就能換上。') + (reply ? `\n\n島主說：${reply}` : ''),
      at: Date.now(), coins: 0, tickets: 0, item: '', n: 0, room: roomId, roomName: name, read: [], claimed: [], hidden: [] });
    m.st = 'done'; m.read = 1; m.replied = 1; m.roomId = roomId; put_('adminmail', m);
    notify_([m.fromId], 'letter', '🎨 你訂製的房間完成了！快打開信看看');
    return { roomId: roomId };
  },
  adminDecoRefund(req) {
    isAdmin_(req);
    const m = get_('adminmail', req.id);
    if (!m || m.type !== 'deco' || m.st !== 'wait') throw new Error('這張申請已經處理過了');
    const reply = String(req.reply || '').trim().slice(0, 300);
    const back = m.free ? 0 : (m.cost === '' || m.cost == null ? DECO_COST_ : Number(m.cost) || 0);
    put_('letters', { id: uid_(), to: m.fromId, title: '🎨 訂製裝潢退回了', body: (back ? `這次的訂製裝潢沒辦法做，🪙${back} 退還給你，可以再申請一次。` : '這次的訂製裝潢沒辦法做，可以再申請一次。') + (reply ? `\n\n島主說：${reply}` : ''),
      at: Date.now(), coins: back, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
    const h = get_('houses', m.houseId); if (h) { h.decoAt = ''; put_('houses', h); }
    m.st = 'no'; m.read = 1; m.replied = 1; put_('adminmail', m);
    notify_([m.fromId], 'letter', '🎨 訂製裝潢有消息了，打開信看看');
    return true;
  },
  adminShopMgr(req) {
    isAdmin_(req);
    const ids = [...new Set((Array.isArray(req.ids) ? req.ids : []).map(String).filter(Boolean))].slice(0, SHOP_MGR_MAX_);
    const P = ids.map(id => get_('players', id));
    if (P.some(p => !p || !p.houseId)) throw new Error('店長要是有家的島民');
    const s = shop_(), old = Array.isArray(s.mgr) ? s.mgr : [], fresh = ids.filter(id => old.indexOf(id) < 0);
    s.mgr = ids; put_('houses', s);
    if (fresh.length) {
      feed_(`👔 島主指派 ${P.filter(p => fresh.indexOf(p.id) >= 0).map(p => p.nick).join('、')} 當毛二街店長！`);
      notify_(fresh, 'letter', '👔 島主指派你當毛二街的店長了！快去店裡看看');
    }
    return { mgr: ids };
  }
};


// ================= 📐 擴建：二樓民宿＋農田（v33） =================
const EXP_COST_ = 1000, EXP_LV_ = 7, INN_CAP_H_ = 12, FARM_N0_ = 4, FARM_MAX_ = 6, FARM_GROW_H_ = 8, FARM_WATER_MAX_ = 3;
const CROPS_ = { tomato: 1, pumpkin: 1, apple: 1 };
const EXP_NAME_ = { floor2: '二樓民宿', farm: '農田', show: '展示間', renew: '都更・外牆整修' };
const SHOW_COST_ = 1500;
const RENEW_COST_ = 500, RENEW_LV_ = 7, RENEW_DAYS_ = 30;
const expCost_ = k => k === 'renew' ? RENEW_COST_ : k === 'show' ? SHOW_COST_ : EXP_COST_;
const expLv_ = k => k === 'renew' ? RENEW_LV_ : EXP_LV_;
// 都更要換的款式：1～42、不是現在的、島上沒人用、也沒有別家正在申請
function renewStyleOk_(h, style) {
  if (!styleOk_(style)) throw new Error('房子款式不對');
  if (style === Number(h.style)) throw new Error('這就是你家現在的樣子喔');
  if (all_('houses').some(x => x.id !== h.id && Number(x.style) === style)) throw new Error('這款房子島上已經有人用了，換一款吧');
}
function toyKey_(h, req) { if (Number(req.floor) === 2) { if (!Number(h.floor2)) throw new Error('這個家還沒有二樓'); return 'toys2'; } return 'toys'; }
const innComfort_ = h => Math.min(TOY2_MAX_, (Array.isArray(h.toys2) ? h.toys2 : []).length) * 2;     // 二樓每個玩具 +2 舒適度
// v71：農田紀錄（最近 30 筆）
function farmLog_(f, req, a, i, c) { const p = req.playerId ? get_('players', req.playerId) : null; f.log = (Array.isArray(f.log) ? f.log : []).concat([{ t: Date.now(), by: p ? p.nick : '', a: a, i: i, c: c || '' }]).slice(-30); }
function farm_(h) { const f = h.farm && typeof h.farm === 'object' ? h.farm : null; if (!f) throw new Error('這個家還沒有農田'); f.n = clampN_(f.n || FARM_N0_, 1, FARM_MAX_); f.p = Array.isArray(f.p) ? f.p : []; while (f.p.length < FARM_MAX_) f.p.push(null); return f; }
// v57：小番茄長得快（4 小時、澆水最多快 1 小時），南瓜、金蘋果 8 小時（澆 3 次快 3 小時）
const FARM_GROW_ = { tomato: 4, pumpkin: 8, apple: 8 }, FARM_WMAX_ = { tomato: 1, pumpkin: 3, apple: 3 };
const cropGrow_ = c => FARM_GROW_[c.c] || FARM_GROW_H_, cropWMax_ = c => FARM_WMAX_[c.c] || FARM_WATER_MAX_;
const ripeAt_ = c => Number(c.at) + (cropGrow_(c) - Math.min(cropWMax_(c), (Array.isArray(c.w) ? c.w : []).length)) * HOUR_;
function plot_(f, i) { i = Math.floor(Number(i)); if (!(i >= 0 && i < f.n)) throw new Error('這格還沒開放'); return i; }


// ================= 💬 便利貼回覆・🔒 秘密便條（v47） =================
const NOTE_REPLY_MAX_ = 30;
// 看得到秘密便條：這家的家人（要家人密碼）或貼的人
function noteCanSee_(n, req, fam) {
  if (!n.secret) return true;
  if (fam && fam.id === n.houseId) return true;
  return !!req.playerId && n.byId === req.playerId;
}
function noteView_(n, req, fam) {
  if (noteCanSee_(n, req, fam)) return n;
  return { id: n.id, houseId: n.houseId, by: n.by, byId: n.byId, color: n.color, createdAt: n.createdAt, secret: 1, hidden: 1, text: '' };
}
Object.assign(ACTIONS, {
  // v61：線上時每十幾秒問一次「有沒有新的便利貼／回覆」（只讀便利貼這一頁，很輕），留言可以馬上跳通知
  noteWatch(req) {
    const me = req.playerId ? get_('players', req.playerId) : null;
    if (!me) return { notes: [], now: Date.now() };
    const since = Number(req.since) || 0, h = me.houseId ? get_('houses', me.houseId) : null, fam = h && req.pw && h.pw === req.pw ? h : null;
    const L = all_('notes').filter(n => (n.houseId === me.houseId || n.byId === me.id) &&
      (Number(n.createdAt) > since || (Array.isArray(n.replies) && n.replies.some(r => Number(r.at) > since))));
    return { notes: L.map(n => noteView_(n, req, fam)), now: Date.now() };
  },
  replyNote(req) {
    const me = resident_(req), n = get_('notes', req.id);
    if (!n) throw new Error('這張便利貼已經被撕掉了');
    const h = get_('houses', n.houseId), fam = h && req.pw && h.pw === req.pw && me.houseId === h.id ? h : null;
    if (!noteCanSee_(n, req, fam)) throw new Error('這是秘密便條，只有家人和貼的人可以回覆');
    const text = String(req.text || '').trim().slice(0, 40);
    if (!text) throw new Error('先寫點什麼再回覆喔');
    const L = Array.isArray(n.replies) ? n.replies : [];
    if (L.length >= NOTE_REPLY_MAX_) throw new Error('這張便利貼的回覆已經滿了');
    const r = { id: uid_(), by: me.nick, byId: me.id, text: text, at: Date.now() };
    L.push(r); n.replies = L; put_('notes', n);
    if (n.byId && n.byId !== me.id) { try { notify_([n.byId], 'note', `💬 ${me.nick} 回覆了你在「${h ? h.name : '島上'}」的${n.secret ? '秘密便條' : '便利貼'}`); } catch (e) {} }
    return { replies: L };
  },
  deleteReply(req) {
    const n = get_('notes', req.id);
    if (!n) return { replies: [] };
    const L = Array.isArray(n.replies) ? n.replies : [], r = L.find(x => x.id === req.replyId);
    if (!r) return { replies: L };
    const h = get_('houses', n.houseId), ok = (h && req.pw && h.pw === req.pw) || r.byId === req.playerId;
    if (!ok) throw new Error('只有家人或回覆的人可以刪');
    n.replies = L.filter(x => x.id !== r.id); put_('notes', n);
    return { replies: n.replies };
  }
});

// ================= 💼 毛孩打工（v46） =================
// 毛二街「賣萌」、毛毛公園「撿垃圾」；一天 3 個時段，每個地方每個時段 3 個位子（沒人上班的位子由 NPC 代班，前端畫）
// 每天（島上 4 點換日）算好「明天」的空位 → 貼徵才單（今天隨機時間貼出、只開 1～2 小時）→ 隔天 4 點抽籤、寄信公布
// 臨時工讀 1 班；短期工讀 3～7 天（每天同一時段）。每班表現在錄取時就決定好（前端只看得到已經開始的班）
// 急徵：今天快開始的班還有空位 → 偶爾貼「急徵」，先搶先贏、馬上錄取
const JOB_SLOTS_ = [[8, 12], [13, 17], [18, 22]], JOB_SEATS_ = 3, JOB_PLACES_ = ['shop', 'park', 'arcade', 'center'];   // v57：多了玩個毛、島民中心
const JOB_PAY_ = 180, JOB_RAISE_ = 30, JOB_LATE_ = 30, JOB_BONUS_ = 300,   // v57：薪水 60 → 180
      JOB_BAN_DAYS_ = 2, JOB_MISS_MAX_ = 3, JOB_APPS_MAX_ = 40;
const JOB_PLACE_NAME_ = { shop: '毛二街', park: '毛毛公園', arcade: '玩個毛', center: '島民中心' }, JOB_WORK_ = { shop: '賣萌', park: '撿垃圾', arcade: '顧娃娃機', center: '櫃台小幫手' };
const JOB_SLOT_NAME_ = ['早班', '午班', '晚班'];
const jobDay_ = t => twDay_((t || Date.now()) - 4 * HOUR_);                       // 島上的一天從早上 4 點開始
const dAdd_ = (ds, k) => new Date(Date.parse(ds + 'T00:00:00Z') + k * DAY_).toISOString().slice(0, 10);
const dDiff_ = (a, b) => Math.round((Date.parse(a + 'T00:00:00Z') - Date.parse(b + 'T00:00:00Z')) / DAY_);   // a − b（天）
const shiftAt_ = (ds, slot, end) => Date.parse(ds + 'T00:00:00Z') - TW_ + JOB_SLOTS_[slot][end ? 1 : 0] * HOUR_;
const jobLen_ = c => { const f = String(c.res || '').indexOf('f'); return f >= 0 ? f + 1 : Number(c.days) || 1; };   // 被開除就只做到那一班
function jobs_() {
  const m = meta_('jobs');
  m.posts = Array.isArray(m.posts) ? m.posts : []; m.roster = Array.isArray(m.roster) ? m.roster : [];
  m.miss = m.miss && typeof m.miss === 'object' ? m.miss : {};
  return m;
}
function saveJobs_(m) {
  const today = twDay_();
  m.posts = m.posts.filter(p => !p.drawn || dDiff_(today, p.start) <= 2).slice(-60);
  m.roster = m.roster.filter(c => dDiff_(today, dAdd_(c.from, jobLen_(c) - 1)) <= 3 || (Number(c.paid) || 0) < jobLen_(c)).slice(-120);
  put_('meta', m);
}
// 某天某時段已經有幾隻毛孩上班
function jobUsed_(m, ds, place, slot) {
  return m.roster.filter(c => c.place === place && Number(c.slot) === slot && dDiff_(ds, c.from) >= 0 && dDiff_(ds, c.from) < jobLen_(c)).length;
}
// 這隻毛孩還有沒做完的工作（今天或之後還有班）
function jobBusy_(m, petId, now) {
  const today = twDay_(now);
  return m.roster.some(c => c.petId === petId && (dDiff_(dAdd_(c.from, jobLen_(c) - 1), today) > 0 ||
    (dDiff_(dAdd_(c.from, jobLen_(c) - 1), today) === 0 && now < shiftAt_(today, Number(c.slot), true))));
}
// 被開除後 2 天不能投履歷
function jobBanUntil_(m, petId) {
  let u = 0;
  m.roster.filter(c => c.petId === petId && String(c.res || '').indexOf('f') >= 0).forEach(c => {
    const i = String(c.res).indexOf('f'), t = shiftAt_(dAdd_(c.from, i), Number(c.slot), true) + JOB_BAN_DAYS_ * DAY_;
    if (t > u) u = t;
  });
  return u;
}
// 現在正在上班的合約
function jobNow_(m, petId, now) {
  now = now || Date.now();
  const today = twDay_(now);
  return m.roster.find(c => c.petId === petId && dDiff_(today, c.from) >= 0 && dDiff_(today, c.from) < jobLen_(c) &&
    now >= shiftAt_(today, Number(c.slot)) && now < shiftAt_(today, Number(c.slot), true) && String(c.res || '')[dDiff_(today, c.from)] !== 's') || null;
}
// 每班的表現：o 普通、g 表現好被加薪、p 收到禮物、l 遲到、s 翹班、f 偷吃餅乾被開除（個性會影響機率）
function jobRoll_(trait, days) {
  const P = { g: 0.12, p: 0.10, l: 0.10, s: 0.05, f: 0.03 };
  if (trait === '貪吃') P.f = 0.10;
  if (trait === '愛睡') P.l = 0.25;
  if (trait === '高冷') P.s = 0.12;
  if (trait === '活潑') P.g = 0.25;
  if (trait === '黏人') P.p = 0.20;
  let s = '';
  for (let i = 0; i < days; i++) {
    let r = Math.random(), c = 'o';
    for (const k of ['f', 's', 'l', 'p', 'g']) { if (r < P[k]) { c = k; break; } r -= P[k]; }
    s += c;
    if (c === 'f') break;
  }
  return s;
}
function jobLetter_(to, title, body) {
  put_('letters', { id: uid_(), to: to, title: title, body: body, at: Date.now(), coins: 0, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
}
function jobHire_(m, post, app, from) {
  const pet = get_('pets', app.petId);
  const c = { id: uid_(), petId: app.petId, houseId: app.houseId, ownerId: app.ownerId, place: post.place, slot: Number(post.slot), from: from,
    days: Number(post.days) || 1, res: jobRoll_(pet ? pet.trait : '', Number(post.days) || 1), paid: 0, post: post.id, at: Date.now() };
  m.roster.push(c); m.miss[app.petId] = 0;
  return c;
}
function jobWhen_(c) {
  const t = `${JOB_SLOT_NAME_[c.slot]} ${JOB_SLOTS_[c.slot][0]}:00～${JOB_SLOTS_[c.slot][1]}:00`, d = c.from.slice(5).replace('-', '/');
  return Number(c.days) > 1 ? `${d} 起連續 ${c.days} 天，每天${t}` : `${d} ${t}`;
}
// 抽籤：每隻基本 1 支籤，之前每沒抽到一次多 1 支（最多多 3 支）；同一張徵才單一家最多錄取 1 隻
function jobDraw_(m, post, now) {
  const from = dDiff_(post.start, twDay_(now)) >= 0 ? post.start : twDay_(now);
  const seats = Math.max(0, Math.min(Number(post.n) || 0, JOB_SEATS_ - jobUsed_(m, from, post.place, Number(post.slot))));
  let pool = (Array.isArray(post.apps) ? post.apps : []).filter(a => get_('pets', a.petId) && !jobBusy_(m, a.petId, now));
  const win = [], houses = {};
  while (win.length < seats && pool.length) {
    const w = pool.map(a => 1 + Math.min(JOB_MISS_MAX_, Number(m.miss[a.petId]) || 0)), sum = w.reduce((x, y) => x + y, 0);
    let r = Math.random() * sum, k = 0;
    while (r >= w[k]) { r -= w[k]; k++; }
    const a = pool[k]; win.push(a); houses[a.houseId] = 1;
    pool = pool.filter(x => x !== a && !houses[x.houseId]);
  }
  const place = JOB_PLACE_NAME_[post.place], pets = all_('pets');
  win.forEach(a => {
    const c = jobHire_(m, post, a, from), nm = (pets.find(p => p.id === a.petId) || {}).name || '毛孩';
    jobLetter_(a.ownerId, `💼 ${nm} 錄取了！${place}${Number(post.days) > 1 ? '短期' : '臨時'}工讀`,
      `恭喜！${place}的店長說${nm}看起來很適合${JOB_WORK_[post.place]} 🎉\n\n📅 上班時間：${jobWhen_(c)}\n💰 薪水：每班 🪙${JOB_PAY_}${Number(post.days) > 1 ? `，做滿 ${post.days} 天加發全勤獎金 🪙${JOB_BONUS_}` : ''}\n\n時間到${nm}會自己去上班，下班回家再把薪水交給你。想看牠工作的樣子，可以去${place}探班喔！`);
    feed_(`💼 ${nm} 錄取了${place}的${Number(post.days) > 1 ? '短期' : '臨時'}工讀！`);
  });
  (Array.isArray(post.apps) ? post.apps : []).filter(a => win.indexOf(a) < 0).forEach(a => {
    m.miss[a.petId] = Math.min(JOB_MISS_MAX_, (Number(m.miss[a.petId]) || 0) + 1);
    const nm = (pets.find(p => p.id === a.petId) || {}).name || '毛孩';
    const L = [`這次${place}的名額滿了，店長說下次會優先考慮${nm}喔！`, `${place}的店長猶豫了很久，最後還是抽到別人了……下次${nm}的機會更大！`,
      `${nm}的履歷被風吹走了一下下，撿回來的時候名額已經滿了 😭 下次再試試！`, `${place}這次只缺 ${post.n} 個人，${nm}差一點點就上了！`];
    jobLetter_(a.ownerId, `💼 ${nm} 的應徵結果`, L[Math.floor(Math.random() * L.length)]);
  });
  post.drawn = 1; post.won = win.map(a => a.petId);
  const ids = [...new Set((Array.isArray(post.apps) ? post.apps : []).map(a => a.ownerId))];
  if (ids.length) notify_(ids, 'letter', '💼 打工應徵結果出爐了！打開信看看');
}
// 貼明天的徵才單（今天 7～23 點之間隨機時間貼出，開 1～2 小時）
function jobPostDay_(m, day, now) {
  const target = dAdd_(day, 1), base = Date.parse(day + 'T00:00:00Z') - TW_;
  JOB_PLACES_.forEach(place => JOB_SLOTS_.forEach((x, slot) => {
    const v = JOB_SEATS_ - jobUsed_(m, target, place, slot) - m.posts.filter(p => !p.drawn && p.place === place && Number(p.slot) === slot && p.start === target).reduce((a, p) => a + (Number(p.n) || 0), 0);
    if (v <= 0 || Math.random() < 0.1) return;                 // 偶爾不貼（那個位子就由 NPC 代班）；v57：0.25 → 0.1，機會變多
    const short = Math.random() < 0.5, open = Math.max(base + (7 + Math.random() * 15) * HOUR_, (now || 0) + Math.random() * HOUR_);   // 第一次啟用時已經過了的時間往後挪
    m.posts.push({ id: uid_(), place: place, slot: slot, days: short ? 3 + Math.floor(Math.random() * 5) : 1, start: target, n: v,
      open: Math.round(open), close: Math.round(open + (120 + Math.random() * 60) * 60000), t: Math.floor(Math.random() * 100), apps: [] });
  }));
}
// 急徵：今天 1～2 小時後開始的班還有空位 → 偶爾貼一張，先搶先贏
function jobRush_(m, now) {
  const today = twDay_(now), cands = [];
  JOB_PLACES_.forEach(place => JOB_SLOTS_.forEach((x, slot) => {
    const st = shiftAt_(today, slot), left = st - now;
    if (left < 50 * 60000 || left > 150 * 60000) return;
    const busy = m.posts.some(p => p.rush && !p.drawn && p.place === place && Number(p.slot) === slot && p.start === today);
    if (!busy && JOB_SEATS_ - jobUsed_(m, today, place, slot) > 0) cands.push({ place: place, slot: slot, st: st });
  }));
  if (!cands.length) return false;
  const c = cands[Math.floor(Math.random() * cands.length)];
  m.posts.push({ id: uid_(), place: c.place, slot: c.slot, days: 1, start: today, n: 1, open: now, close: c.st - 10 * 60000, rush: 1, t: Math.floor(Math.random() * 100), apps: [] });
  return true;
}
// 每次讀小島（排隊那段）、每 10 分鐘的定時檢查都會跑：換日抽籤＋貼新的徵才單、每小時看要不要急徵
function jobTick_(now) {
  const m = jobs_(), day = jobDay_(now), hk = 'h' + Math.floor(now / HOUR_);
  let ch = false;
  if (m.day !== day) {
    m.posts.filter(p => !p.drawn && !p.rush && dDiff_(day, p.start) >= 0).forEach(p => jobDraw_(m, p, now));
    m.posts.filter(p => !p.drawn && p.rush && now >= Number(p.close)).forEach(p => { p.drawn = 1; });
    jobPostDay_(m, day, now);
    m.day = day; ch = true;
  }
  if (m.hk !== hk) {
    m.hk = hk; ch = true;
    m.posts.filter(p => !p.drawn && p.rush && now >= Number(p.close)).forEach(p => { p.drawn = 1; });
    const hr = twHour_(now);
    if (hr >= 6 && hr <= 20 && Math.random() < 0.35) jobRush_(m, now);
  }
  if (ch) saveJobs_(m);
}
// 給前端看的：徵才單（不給別人的自我介紹以外的資料）、班表（只給已經開始的班的表現）
function jobsView_(now) {
  const m = jobs_(), today = twDay_(now);
  return {
    posts: m.posts.filter(p => !p.drawn && now > Number(p.open) - 12 * HOUR_).map(p => ({   // 撕掉但還沒抽籤的也給（前端要知道誰投過）
      id: p.id, place: p.place, slot: Number(p.slot), days: Number(p.days), start: p.start, n: Number(p.n), open: Number(p.open), close: Number(p.close), rush: p.rush ? 1 : 0, t: Number(p.t) || 0,
      apps: (Array.isArray(p.apps) ? p.apps : []).map(a => ({ petId: a.petId, houseId: a.houseId, msg: a.msg || '' })) })),
    roster: m.roster.filter(c => dDiff_(dAdd_(c.from, jobLen_(c) - 1), today) >= -2 || (Number(c.paid) || 0) < jobLen_(c)).map(c => {
      let done = 0;
      for (let i = 0; i < jobLen_(c); i++) if (now >= shiftAt_(dAdd_(c.from, i), Number(c.slot))) done = i + 1;
      const res = String(c.res || '').slice(0, done);
      return { id: c.id, petId: c.petId, houseId: c.houseId, place: c.place, slot: Number(c.slot), from: c.from, days: Number(c.days), res: res, len: res.indexOf('f') >= 0 ? res.indexOf('f') + 1 : Number(c.days), paid: Number(c.paid) || 0 };
    })
  };
}
Object.assign(ACTIONS, {
  // 投履歷：家人才能幫自己家的毛孩投；一隻毛孩同時只能應徵一張、有工作的不能投、被開除 2 天內不能投
  jobApply(req) {
    const h = mustFam_(req), me = mustPlayer_(req.playerId), now = Date.now(), m = jobs_();
    const pet = get_('pets', req.petId);
    if (!pet || pet.houseId !== h.id) throw new Error('只能幫自己家的毛孩投履歷');
    const post = m.posts.find(p => p.id === req.postId);
    if (post && post.rush && post.drawn) throw new Error('慢了一步，急徵的位子被搶走了 😆');
    if (!post || post.drawn || now < Number(post.open)) throw new Error('找不到這張徵才單');
    if (now >= Number(post.close)) throw new Error('這張徵才單已經撕掉了，下次早一點來看看！');
    const ban = jobBanUntil_(m, pet.id);
    if (ban > now) throw new Error(`${pet.name} 剛被開除，還在家反省中（${Math.ceil((ban - now) / HOUR_)} 小時後可以再投）`);
    if (jobBusy_(m, pet.id, now)) throw new Error(`${pet.name} 已經有工作了，做完再來應徵吧`);
    const apps = Array.isArray(post.apps) ? post.apps : [];
    if (apps.some(a => a.petId === pet.id)) return { ok: 1, already: 1 };
    if (m.posts.some(p => !p.drawn && p.id !== post.id && (p.apps || []).some(a => a.petId === pet.id))) throw new Error(`${pet.name} 已經在應徵別的工作了，一次只能投一張喔`);
    if (apps.length >= JOB_APPS_MAX_) throw new Error('這張徵才單應徵的人太多了，下次再來');
    const app = { petId: pet.id, houseId: h.id, ownerId: me.id, nick: me.nick, msg: String(req.msg || '').trim().slice(0, 20), at: now };
    if (post.rush) {   // 急徵：先搶先贏，馬上錄取
      if (JOB_SEATS_ - jobUsed_(m, post.start, post.place, Number(post.slot)) <= 0) { post.drawn = 1; saveJobs_(m); throw new Error('慢了一步，急徵的位子被搶走了 😆'); }
      apps.push(app); post.apps = apps;
      const c = jobHire_(m, post, app, post.start);
      post.drawn = 1; post.won = [pet.id];
      saveJobs_(m);
      feed_(`⚡ ${pet.name} 搶到${JOB_PLACE_NAME_[post.place]}的急徵工讀！`);
      return { ok: 1, hired: 1, when: jobWhen_(c) };
    }
    apps.push(app); post.apps = apps; saveJobs_(m);
    return { ok: 1, n: apps.length };
  },
  // 收回履歷（徵才單還沒撕掉前）
  jobCancel(req) {
    const h = mustFam_(req), m = jobs_(), post = m.posts.find(p => p.id === req.postId);
    if (!post || post.drawn) throw new Error('這張徵才單已經結束了');
    post.apps = (Array.isArray(post.apps) ? post.apps : []).filter(a => !(a.petId === req.petId && a.houseId === h.id));
    saveJobs_(m);
    return true;
  },
  // 領薪水：下班的班才算；全家共用（第一個打開的家人領走，存進他的金幣）
  jobPay(req) {
    const h = mustFam_(req), m = jobs_(), now = Date.now(), out = [], pets = all_('pets');
    m.roster.filter(c => c.houseId === h.id).forEach(c => {
      const res = String(c.res || ''), len = jobLen_(c);
      let paid = Number(c.paid) || 0;
      while (paid < len && now >= shiftAt_(dAdd_(c.from, paid), Number(c.slot), true)) {
        const code = res[paid] || 'o', raises = (res.slice(0, paid + 1).match(/g/g) || []).length, base = JOB_PAY_ + raises * JOB_RAISE_;
        const coins = code === 's' || code === 'f' ? 0 : code === 'l' ? base - JOB_LATE_ : base;
        paid++;
        const last = paid === len, bonus = last && Number(c.days) >= 3 && len === Number(c.days) && !/[sf]/.test(res) ? JOB_BONUS_ : 0;
        out.push({ petId: c.petId, place: c.place, slot: Number(c.slot), day: dAdd_(c.from, paid - 1), code: code, coins: coins + bonus, bonus: bonus, gift: code === 'p' ? 1 : 0, last: last ? 1 : 0, days: Number(c.days) });
        if (code === 'f') { const p = pets.find(x => x.id === c.petId); feed_(`🍪 ${p ? p.name : '毛孩'} 在${JOB_PLACE_NAME_[c.place]}偷吃餅乾，被開除了……`); }
      }
      if (paid !== (Number(c.paid) || 0)) c.paid = paid;
    });
    if (out.length) saveJobs_(m);
    return { list: out };
  }
});

// ================= 定時檢查（每 10 分鐘，由 setupPush 建立） =================
let CRON_DEADLINE_ = 0;
const late_ = () => CRON_DEADLINE_ && Date.now() > CRON_DEADLINE_;
function missMsg_(p, pets) {
  const mine = pets.filter(x => x.houseId === p.houseId), nm = mine.length ? mine[Math.floor(Math.random() * mine.length)].name : '毛孩';
  const L = [`🐾 ${nm} 在門口等你好久了…`, `🥺 ${nm} 想你了，快回來摸摸牠！`, '🏝️ 島上好熱鬧，大家都在等你～', `💤 ${nm} 睡醒找不到你，在家裡轉圈圈`];
  return L[Math.floor(Math.random() * L.length)];
}
function pushChecks_(now) {
  if (isQuiet_(now)) return;
  const houses = all_('houses'), pets = all_('pets'), P = all_('players');
  const mem = hid => P.filter(p => p.houseId === hid).map(p => p.id);
  houses.forEach(h => {
    if (late_()) return;
    // 😈 變成餓魔
    const dm = h.demon && typeof h.demon === 'object' ? h.demon : null;
    if (dm && !dm.pushed) {
      notify_(mem(h.id), 'demon', `😈 ${pets.filter(p => p.houseId === h.id).map(p => p.name).join('、') || '毛孩'} 餓到變成餓魔了！快回來救救牠！`);
      dm.pushed = 1; h.demon = dm; put_('houses', h);
    }
    // 💩 家裡好臭（地上滿 4 坨）
    const n = Array.isArray(h.poops) ? h.poops.length : 0;
    if (n >= POOP_MAX_HOUSE && !h.poopPush) { notify_(mem(h.id), 'poop', '💩 家裡好臭⋯該打掃了！'); h.poopPush = 1; put_('houses', h); }
    else if (n < POOP_MAX_HOUSE && h.poopPush) { h.poopPush = ''; put_('houses', h); }
  });
  // 🍚 肚子餓（v48：12 小時沒吃，原本 8 小時）
  pets.forEach(p => {
    if (late_()) return;
    const last = Number(p.lastFed) || 0, h = houses.find(x => x.id === p.houseId);
    if (!last || !h || isOut_(h) || (h.demon && typeof h.demon === 'object')) return;
    if (now - last < 12 * HOUR_ || String(p.hungPush || '') === String(last)) return;
    notify_(mem(p.houseId), 'hungry', `🍚 ${p.name} 肚子咕嚕咕嚕叫…有人要來餵我嗎？`);
    p.hungPush = String(last); put_('pets', p);
  });
  // 💰 地上錢袋 8 袋以上（每天最多 2 次、間隔 3 小時）
  const isl = meta_('island'), day = twDay_();
  const cp = isl.coinPush && isl.coinPush.day === day ? isl.coinPush : { day: day, n: 0, at: 0 };
  if (drops_().length >= 8 && cp.n < 2 && now - (Number(cp.at) || 0) > 3 * HOUR_) {
    notify_(P.filter(p => p.houseId).map(p => p.id), 'coins', '💰 島上掉了好多錢，快來撿！');
    cp.n++; cp.at = now; isl.coinPush = cp; put_('meta', isl);
  }
  // 🌙 半夜排隊的通知，早上送出
  const q = pushQueue_();
  if (q.length) {
    put_('meta', { id: 'pushq', list: [] });
    const seen = {};
    q.reverse().forEach(x => { if (late_()) return; const k = x.pid + ':' + x.kind; if (seen[k] || now - Number(x.at) > 12 * HOUR_) return; seen[k] = 1; notify_([x.pid], x.kind, x.msg); });
  }
  // 🐾 太久沒上線（5 小時一次；連續 2 天以上一天 1 次）
  P.filter(p => p.houseId).forEach(p => {
    if (late_()) return;
    const on = Number(p.on) || Number(p.seen) || 0;
    if (!on || now - on < MISS_GAP_) return;
    const ms = p.missPush && typeof p.missPush === 'object' ? p.missPush : { at: 0, day: '' };
    if (now - on >= MISS_LONG_) { if (ms.day === day) return; }
    else if (now - Math.max(Number(ms.at) || 0, on) < MISS_GAP_) return;
    if (notify_([p.id], 'miss', missMsg_(p, pets))) { const q2 = get_('players', p.id); if (q2) { q2.missPush = { at: now, day: day }; put_('players', q2); } }
  });
}
function cronTick() {
  const lock = LockService.getScriptLock();
  try {
    if (!lock.tryLock(5000)) return;   // 玩家正在用就讓路，10 分鐘後再來
    resetCache_();
    CRON_DEADLINE_ = Date.now() + 40000;
    const now = Date.now(), houses = all_('houses'), pets = all_('pets');
    spawnDrops_(houses);
    houses.forEach(h => spawnPoops_(h, pets.filter(p => p.houseId === h.id).length, now));
    seenSince_(); demonCheck_(now);
    rank_();
    try { jobTick_(now); } catch (e) {}
    try { thiefTick_(now); } catch (e) {}
    pushChecks_(now);
  } finally { flushSafe_(); try { lock.releaseLock(); } catch (x) {} }
}
// ★ 換成這份之後執行一次：上方函式選「setupPush」→ 執行
function setupPush() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'cronTick').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('cronTick').timeBased().everyMinutes(10).create();
  Logger.log(pushKey_() ? '✅ 推播設定完成，已找到 OneSignal 金鑰' : '⚠️ 定時檢查已建立，但還沒找到金鑰：試算表新增「設定」分頁，A1 打 ONESIGNAL_KEY、B1 貼金鑰');
}
// 測試：推一則通知給島主自己，並在執行記錄寫出 OneSignal 回了什麼
function testPush() {
  const id = meta_('island').adminId;
  if (!id) return Logger.log('找不到島主，先在 App 登入一次島主後台');
  const key = pushKey_();
  if (!key) return Logger.log('❌ 找不到金鑰：試算表要有「設定」分頁，A1 打 ONESIGNAL_KEY、B1 貼金鑰');
  Logger.log('🔑 找到金鑰：開頭 ' + key.slice(0, 6) + '…，共 ' + key.length + ' 個字' + (/\s/.test(key) ? '（⚠️ 裡面有空白或換行）' : ''));
  Logger.log('👤 島主玩家 ID：' + id);
  try {
    const res = osFetch_([id], '🐾 測試通知：推播設定成功！');
    Logger.log((res.getResponseCode() < 300 ? '✅' : '❌') + ' OneSignal 回應 ' + res.getResponseCode() + '：' + res.getContentText().slice(0, 400));
  } catch (e) { Logger.log('❌ 連不到 OneSignal：' + e); }
}

// ================= 🗄️ 展示間（v49） =================
// h.show = { room, rooms:[買過的裝潢], cabs:{櫃子款式: 數量}, pos:[左,中,右 擺的櫃子], it:[[每個位置 20 格的玩具 id]] }
// 金幣和背包跟其他商店一樣由 App 自己扣，這裡只記擺設
const SHOW_ROOMS_ = { basic: 0, lilac: 800, mint: 800, steel: 1500, space: 1500, pink: 2000, stone: 1500, latte: 800, ufo: 1500, moonblue: 1500, sunny: 800 };   // v57：全部 2000 以內（粉紅公主 3000 → 2000）
// v57：櫃子降價（500→300、800→600、1500→1000、3000→2000），買過的人寄信補差價（econFix_）
const SHOW_CABS_OLD_ = { wood: 500, plain: 800, butter: 800, sky: 800, peach: 800, lilac: 800, steel: 1500, cat: 1500, princess: 1500, noir: 3000, pearl: 3000 , star2: 1500, bow2: 1500, catlilac2: 1500, cloud2: 1500, royal2: 3000, angel2: 3000, catshop2: 3000, garden2: 3000, blackcat2: 1500, space2: 3000, bat2: 1500, game2: 1500};
const SHOW_CABS_ = { wood: 300, plain: 600, butter: 600, sky: 600, peach: 600, lilac: 600, steel: 1000, cat: 1000, princess: 1000, noir: 2000, pearl: 2000 , star2: 1000, bow2: 1000, catlilac2: 1000, cloud2: 1000, royal2: 2000, angel2: 2000, catshop2: 2000, garden2: 2000, blackcat2: 1000, space2: 2000, bat2: 1000, game2: 1000};
const SHOW_ROOM_N_ = { basic: '溫馨木地板', lilac: '薰衣草', mint: '薄荷條紋', steel: '工業風', space: '星空宇宙', pink: '粉紅公主', stone: '奶茶石屋', latte: '拿鐵格紋', ufo: '紫色太空喵', moonblue: '藍色月光', sunny: '奶油黃小舖' };
const SHOW_CAB_N_ = { wood: '木頭腳掌', plain: '簡約原木', butter: '奶油黃', sky: '天空藍', peach: '蜜桃粉', lilac: '薰衣草紫', steel: '不鏽鋼', cat: '貓咪薄荷', princess: '公主蝴蝶結', noir: '黑金星球', pearl: '珍珠白金' , star2: '星星薄荷', bow2: '粉紅蝴蝶結', catlilac2: '紫色貓耳', cloud2: '天空雲朵', royal2: '皇家粉金', angel2: '天使雲朵', catshop2: '貓咪小舖', garden2: '花園小屋', blackcat2: '黑貓', space2: '太空艙', bat2: '蝙蝠骷髏', game2: '遊戲機'};
// v60：櫃子 3 → 5 個。it 的位置：0～2 原本的櫃子、3～4 層板、5 壁櫃、6～7 新的兩個櫃子（櫃子位置 3、4）
const SHOW_N_ = 20, SHOW_POS_ = 5, SHOW_CAB_MAX_ = 30, SHOW_IT_ = 8;
const cabIt_ = p => p < 3 ? p : p + 3;
const WSH_P_ = {"wood": 1000, "white": 1000, "metal": 1000, "checker": 1500, "cherry": 1500, "cloud": 1500, "drip": 1500, "holo": 1500, "lamp": 1500, "moon": 1500, "mushroom": 1500, "navy": 1500, "neon": 1500, "pinkbow": 1500, "pinkglass": 1500, "pipe": 1500, "planet": 1500, "rail": 1500, "scallop": 1500, "snow": 1500, "ufo": 1500, "cloud2": 1000, "bow2": 1000, "bear2": 1000, "skycloud2": 1000, "star2": 1000, "blackcat2": 1000, "creampaw3": 1500, "sagebow3": 1500, "terrazzo3": 1000, "gingham3": 1500, "creammoon3": 1500, "sprinkle3": 1000, "pinkdrip3": 1000, "redpaw3": 1500, "rainbow3": 1500, "saturn3": 1500, "angelcat3": 1500, "cherrymint3": 1500, "angelheart3": 1500}, WFR_P_ = {"wood": 300, "gold": 300, "moon": 800, "game": 800, "catring": 800, "calico": 800, "game2": 800, "globe": 800, "mecha": 800, "polaroid": 800, "chainheart": 800, "cattv": 800, "starchain": 800, "clapper": 800, "navybow": 800, "navywave": 800, "porthole": 800, "creamwave": 800, "creamarch": 800, "creamring": 800, "pinkarch": 800, "pinkcat": 800, "pinkheart": 800, "cloud2": 800, "wings2": 800, "catlilac2": 800, "space2": 800, "star2": 800, "gamer2": 800, "tabby2": 800, "moon2": 800, "headset2": 800, "ufo2": 800, "rainbow2": 800, "tv2": 800}, WCB_P_ = {"cat": 1500, "purple": 1500, "shop": 1500}, WCB_N_ = {"cat": 9, "purple": 6, "shop": 6};
const NEON_C_ = ['pink', 'blue', 'yellow', 'purple', 'mint', 'white'];
// 島主上傳的展示間背景（rooms 裡類別 SH）
function shRoom_(id) { return roomsView_().find(r => r.id === id && r.r === 'SH') || null; }
const wallCap_ = (s, p) => p >= 6 ? (s.pos[p - 3] ? SHOW_N_ : 0) : p < 3 ? (s.pos[p] ? SHOW_N_ : 0) : p < 5 ? (s.wsh[p - 3] ? 5 : 0) : (s.wcb ? WCB_N_[s.wcb] : 0);
const has_ = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
function showNorm_(s) {
  s = s && typeof s === 'object' ? s : {};
  const okR = r => has_(SHOW_ROOMS_, r) || !!shRoom_(r);
  if (!okR(s.room)) s.room = 'basic';
  s.rooms = Array.isArray(s.rooms) ? s.rooms.filter(okR) : [];
  if (s.rooms.indexOf('basic') < 0) s.rooms.unshift('basic');
  s.cabs = s.cabs && typeof s.cabs === 'object' && !Array.isArray(s.cabs) ? s.cabs : {};
  s.pos = Array.isArray(s.pos) ? s.pos.slice(0, SHOW_POS_) : []; while (s.pos.length < SHOW_POS_) s.pos.push('');
  s.pos = s.pos.map(c => has_(SHOW_CABS_, c) ? c : '');
  s.it = Array.isArray(s.it) ? s.it.slice(0, SHOW_IT_) : []; while (s.it.length < SHOW_IT_) s.it.push([]);
  s.it = s.it.map(a => { a = Array.isArray(a) ? a.slice(0, SHOW_N_) : []; while (a.length < SHOW_N_) a.push(''); return a.map(x => x ? String(x) : ''); });
  s.wo = s.wo && typeof s.wo === 'object' && !Array.isArray(s.wo) ? s.wo : {};
  const two = (a, D, n) => { n = n || 2; a = Array.isArray(a) ? a.slice(0, n) : []; while (a.length < n) a.push('');   // v63：相框 2 → 4 個（右半邊也能掛）
  return a.map(x => has_(D, x) ? x : ''); };
  s.wsh = two(s.wsh, WSH_P_); s.wcb = has_(WCB_P_, s.wcb) ? s.wcb : ''; s.wfr = two(s.wfr, WFR_P_, 4);
  s.wfp = Array.isArray(s.wfp) ? s.wfp.slice(0, 4).map(x => String(x || '')) : []; while (s.wfp.length < 4) s.wfp.push('');
  s.wfa = Array.isArray(s.wfa) ? s.wfa.slice(0, 4).map(x => Number(x) || 0) : []; while (s.wfa.length < 4) s.wfa.push(0);
  {  // v70：二樓牆面，每個位置是 'sh:款式' 或 'fr:款式' 或空的
    const f = s.f2 && typeof s.f2 === 'object' ? s.f2 : {};
    const ok = x => { const p = String(x || '').split(':'); return p[0] === 'sh' && has_(WSH_P_, p[1]) ? 'sh:' + p[1] : ''; };
    const arr = (a, fn) => { a = Array.isArray(a) ? a.slice(0, F2_N_) : []; while (a.length < F2_N_) a.push(''); return a.map(fn); };
    s.f2 = { w: arr(f.w, ok), fp: arr(f.fp, x => String(x || '').slice(0, 40)), fa: arr(f.fa, x => Number(x) || 0) };
  }
  s.neon = s.neon && typeof s.neon === 'object' && s.neon.t ? { t: String(s.neon.t).slice(0, 12), c: NEON_C_.indexOf(s.neon.c) >= 0 ? s.neon.c : 'pink' } : null;
  s.hon = Array.isArray(s.hon) ? s.hon.slice(0, 30) : [];
  return s;
}
// v57：櫃子、壁櫃降價 → 已經買的家寄一封補差價的信（全家共用一份，第一個打開的家人領）；只跑一次
function econFix_() {
  const isl = meta_('island');
  if (Number(isl.econV) >= 57) return;
  isl.econV = 57; put_('meta', isl);
  const P = all_('players');
  all_('houses').forEach(h => {
    const own = Array.isArray(h.owned) ? h.owned : [];
    let f2back = ['f2shop_xmas', 'f2shop_ghost', 'f2shop_space'].filter(k => own.indexOf(k) >= 0).length * 1000;   // 二樓裝潢 3000 → 2000
    if (!h.show || typeof h.show !== 'object') { if (f2back) econLetter_(h, f2back, P); return; }
    const s = h.show, cabs = s.cabs && typeof s.cabs === 'object' ? s.cabs : {}, wo = s.wo && typeof s.wo === 'object' ? s.wo : {};
    let back = 0;
    Object.keys(cabs).forEach(k => { if (has_(SHOW_CABS_OLD_, k) && has_(SHOW_CABS_, k)) back += (Number(cabs[k]) || 0) * Math.max(0, SHOW_CABS_OLD_[k] - SHOW_CABS_[k]); });
    Object.keys(wo).forEach(k => { if (k.indexOf('cb:') === 0 && has_(WCB_P_, k.slice(3))) back += (Number(wo[k]) || 0) * Math.max(0, 2500 - WCB_P_[k.slice(3)]); });
    if (Array.isArray(s.rooms) && s.rooms.indexOf('pink') >= 0) back += 1000;   // 粉紅公主 3000 → 2000
    econLetter_(h, back + f2back, P);
  });
}
function econLetter_(h, back, P) {
  const mem = P.filter(p => p.houseId === h.id).map(p => p.id);
  if (back <= 0 || !mem.length) return;
  put_('letters', { id: uid_(), to: 'h:' + h.id, mem: mem, one: 1, title: '🏷️ 降價補差價', at: Date.now(),
    body: `展示櫃、裝潢降價了，現在全部都在 🪙2000 以內！你們家之前用原價買的，差價一共 🪙${back}，全部退給你們 🙏\n\n（全家共用一份，第一個打開的家人領）`,
    coins: back, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
}
Object.assign(ACTIONS, {
  showEdit(req) {
    const h = mustFam_(req);
    if (!h.show || typeof h.show !== 'object') throw new Error('這個家還沒有展示間');
    const s = showNorm_(h.show), op = String(req.op || ''), id = String(req.id || ''), pos = Math.floor(Number(req.pos)), i = Math.floor(Number(req.i));
    const okPos = () => { if (!(pos >= 0 && pos < SHOW_POS_)) throw new Error('沒有這個位置'); };
    const okSlot = () => { if (!(pos >= 0 && pos < SHOW_IT_)) throw new Error('沒有這個位置'); const cap = wallCap_(s, pos); if (!cap) throw new Error(pos < 3 ? '這裡還沒有櫃子' : '這裡還沒有層板'); if (!(i >= 0 && i < cap)) throw new Error('沒有這一格'); };
    const W = { sh: WSH_P_, cb: WCB_P_, fr: WFR_P_ }, kind = String(req.kind || ''), row = Math.floor(Number(req.row)), busy = p => s.it[p].some(Boolean);
    const wFree = (k, wid, ex, exF2) => (Number(s.wo[k + ':' + wid]) || 0) - (k === 'sh' ? s.wsh : k === 'fr' ? s.wfr : [s.wcb]).filter((x, r) => x === wid && r !== ex).length - s.f2.w.filter((x, r) => x === k + ':' + wid && r !== exF2).length;
    const shBusy2 = r => (Array.isArray(h.toys2) ? h.toys2 : []).some(t => t.w !== undefined && t.w !== null && t.w !== '' && Number(t.w) === r);
    const free = (cid, except) => (Number(s.cabs[cid]) || 0) - s.pos.filter((c, k) => c === cid && k !== except).length;
    let brag = '', shelf = null;
    if (op === 'buyRoom') {
      const cr = shRoom_(id);
      if (!has_(SHOW_ROOMS_, id) && !(cr && !cr.off)) throw new Error('沒有這款裝潢');
      if (s.rooms.indexOf(id) >= 0) throw new Error('已經有這款裝潢了');
      s.rooms.push(id); s.room = id;
      if (SHOW_ROOMS_[id] >= 1500) brag = `✨ 「${h.name}」的展示間換上了「${SHOW_ROOM_N_[id]}」裝潢！`;
    } else if (op === 'room') {
      if (s.rooms.indexOf(id) < 0) throw new Error('還沒有這款裝潢');
      s.room = id;
    } else if (op === 'buyCab') {
      if (!has_(SHOW_CABS_, id)) throw new Error('沒有這款櫃子');
      if (Object.keys(s.cabs).reduce((a, k) => a + (Number(s.cabs[k]) || 0), 0) >= SHOW_CAB_MAX_) throw new Error('倉庫放不下了');
      s.cabs[id] = (Number(s.cabs[id]) || 0) + 1;
      if (pos >= 0 && pos < SHOW_POS_ && !s.pos[pos]) s.pos[pos] = id; else { const e = s.pos.indexOf(''); if (e >= 0) s.pos[e] = id; }
      if (SHOW_CABS_[id] >= 1000) brag = `✨ 「${h.name}」的展示間添了一座「${SHOW_CAB_N_[id]}」展示櫃！`;
    } else if (op === 'sellCab') {   // v57：倉庫裡沒擺出去的櫃子可以賣給毛二街（金幣由 App 加，跟其他東西一樣）
      if (!has_(SHOW_CABS_, id)) throw new Error('沒有這款櫃子');
      if (free(id, -1) <= 0) throw new Error('這款櫃子都擺出去了，先收起來才能賣');
      s.cabs[id] = (Number(s.cabs[id]) || 0) - 1; if (s.cabs[id] <= 0) delete s.cabs[id];
      shelf = { t: 'cab', item: id };
    } else if (op === 'sellW') {   // v57：層板、壁櫃、相框也可以賣（沒掛出去的）
      if (!W[kind] || !has_(W[kind], id)) throw new Error('沒有這個商品');
      if (wFree(kind, id, -1) <= 0) throw new Error('這款都掛出去了，先收起來才能賣');
      const wk = kind + ':' + id; s.wo[wk] = (Number(s.wo[wk]) || 0) - 1; if (s.wo[wk] <= 0) delete s.wo[wk];
      shelf = { t: 'w', item: wk };
    } else if (op === 'cab') {
      okPos();
      if (!id) { if (s.it[cabIt_(pos)].some(x => x)) throw new Error('櫃子裡還有東西，先收回背包才能收起來'); s.pos[pos] = ''; }
      else { if (!has_(SHOW_CABS_, id)) throw new Error('沒有這款櫃子'); if (s.pos[pos] !== id && free(id, pos) <= 0) throw new Error('這款櫃子都擺出去了'); s.pos[pos] = id; }
    } else if (op === 'put') {
      okSlot();
      if (s.it[pos][i]) throw new Error('這格已經有東西了');
      if (!/^[a-z0-9_]{1,20}$/i.test(String(req.item || ''))) throw new Error('這不是玩具');
      s.it[pos][i] = String(req.item);
    } else if (op === 'take') {
      okSlot();
      if (!s.it[pos][i]) throw new Error('這格是空的');
      s.it[pos][i] = '';
    } else if (op === 'buyW') {
      if (!W[kind] || !has_(W[kind], id)) throw new Error('沒有這個商品');
      if (Object.keys(s.wo).reduce((a, k) => a + (Number(s.wo[k]) || 0), 0) >= 60) throw new Error('倉庫放不下了');
      s.wo[kind + ':' + id] = (Number(s.wo[kind + ':' + id]) || 0) + 1;
      if (kind === 'sh' && !s.wcb) { const e = s.wsh.indexOf(''); if (e >= 0) s.wsh[e] = id; }
      else if (kind === 'cb' && !s.wcb && !busy(3) && !busy(4)) { s.wsh = ['', '']; s.wcb = id; }
      else if (kind === 'fr') { const e = s.wfr.indexOf(''); if (e >= 0) s.wfr[e] = id; }
      if (W[kind][id] >= 1500) brag = `✨ 「${h.name}」的展示間牆上多了新裝飾！`;
    } else if (op === 'setW') {
      if (!W[kind]) throw new Error('不知道要放什麼');
      if (id && !has_(W[kind], id)) throw new Error('沒有這一款');
      if (kind === 'sh') {
        if (!(row === 0 || row === 1)) throw new Error('沒有這一排');
        if (!id) { if (busy(3 + row)) throw new Error('層板上還有東西，先收回背包'); s.wsh[row] = ''; }
        else {
          if (wFree('sh', id, row) <= 0) throw new Error('這款層板都掛出去了');
          if (s.wcb) { if (busy(5)) throw new Error('壁櫃裡還有東西，先收回背包才能換成層板'); s.wcb = ''; }
          s.wsh[row] = id;
        }
      } else if (kind === 'cb') {
        if (!id) { if (busy(5)) throw new Error('壁櫃裡還有東西，先收回背包'); s.wcb = ''; }
        else {
          if (wFree('cb', id, 0) <= 0) throw new Error('你還沒有這款壁櫃');
          if (busy(3) || busy(4)) throw new Error('層板上還有東西，先收回背包才能換成壁櫃');
          if (s.wcb !== id && busy(5)) throw new Error('壁櫃裡還有東西，先收回背包');
          s.wsh = ['', '']; s.wcb = id;
        }
      } else {
        if (!(row >= 0 && row < 4)) throw new Error('沒有這個位置');
        if (id && wFree('fr', id, row) <= 0) throw new Error('這款相框都掛出去了');
        s.wfr[row] = id; if (!id) { s.wfp[row] = ''; s.wfa[row] = 0; }
      }
    } else if (op === 'f2W') {   // v70：二樓牆面的一個位置掛層板或相框（id 空的＝收起來）
      if (!Number(h.floor2)) throw new Error('這個家還沒有二樓');
      if (!(row >= 0 && row < F2_N_)) throw new Error('沒有這個位置');
      const cur = s.f2.w[row];
      if (!id) { if (cur.indexOf('sh:') === 0 && shBusy2(row)) throw new Error('層板上還有玩具，先收回背包'); s.f2.w[row] = ''; s.f2.fp[row] = ''; s.f2.fa[row] = 0; }
      else {
        if (kind !== 'sh' || !has_(WSH_P_, id)) throw new Error('二樓只能掛層板');
        if (cur !== kind + ':' + id && wFree(kind, id, -1, row) <= 0) throw new Error('這款都掛出去了');
        s.f2.w[row] = 'sh:' + id;
      }
    } else if (op === 'f2Pet') {
      if (!(row >= 0 && row < F2_N_) || s.f2.w[row].indexOf('fr:') !== 0) throw new Error('這裡還沒有相框');
      s.f2.fp[row] = String(req.pet || '').slice(0, 40); s.f2.fa[row] = Date.now();
    } else if (op === 'frPet') {
      if (!(row >= 0 && row < 4) || !s.wfr[row]) throw new Error('這裡還沒有相框');
      s.wfp[row] = String(req.pet || '').slice(0, 40); s.wfa[row] = Date.now();
    } else if (op === 'neon') {
      const t = String(req.t || '').trim().slice(0, 12), c = String(req.c || '');
      if (!t) throw new Error('招牌要寫字');
      if (NEON_C_.indexOf(c) < 0) throw new Error('沒有這個顏色');
      if (!s.neon) brag = `✨ 「${h.name}」的展示間亮起了霓虹招牌「${t}」！`;
      s.neon = { t: t, c: c };
    } else if (op === 'honor') {
      const old = JSON.stringify(s.hon); s.hon = honorOf_(h.id);
      if (JSON.stringify(s.hon) === old) return { show: s };
    } else throw new Error('不知道要做什麼');
    h.show = s; put_('houses', h);
    if (brag) feed_(brag);
    if (shelf) {   // 賣掉的展示櫃、牆面裝飾放上毛二街的二手架，別人可以半價撿便宜
      const me = get_('players', req.playerId), sh = shop_(), stock = Array.isArray(sh.stock) ? sh.stock : [];
      stock.push({ id: uid_(), item: shelf.item, t: shelf.t, at: Date.now(), src: 'p', by: me ? me.nick : '' }); sh.stock = shopTrim_(stock, sh); put_('houses', sh);
    }
    return { show: s };
  }
});

// ================= 🎁 盲盒店（v50） =================
// 稀有度：N 普通、R 稀有、S 超稀有、H 隱藏。每隻的機率（%）看系列是 1 隻還是 2 隻隱藏版
const BB_ODDS_ = { h1: { N: 14, R: 9.5, S: 5, H: 1 }, h2: { N: 14, R: 10, S: 9, H: 0.5 } };
const BB_PITY_ = 150, BB_DONE_COINS_ = 1000;
const BB_SERIES_ = [{"id": 1, "o": "h1", "r": "NNNSSNRNRH", "n": ["太空橘貓", "青蛙外星貓", "潮流耳機貓", "星星魔法師", "天使奶油貓", "鯊魚橘貓", "冰淇淋黑貓", "恐龍貓", "蛋殼小貓", "UFO 貓"], "name": "喵星派對"}, {"id": 2, "o": "h1", "r": "NNNRNSRSNH", "n": ["草莓蛋糕貓", "奶油泡芙貓", "草莓甜甜圈貓", "蜂蜜鬆餅貓", "可頌貓", "藍莓塔貓", "櫻桃卷貓", "葡萄馬卡龍貓", "吐司小貓", "草莓烘焙師"], "name": "甜點喵咪烘焙所"}, {"id": 3, "o": "h2", "r": "NNNNRSHRNH", "n": ["ACE PILOT", "SHADOW CAT", "NIGHT RIDER", "STREET DJ", "MOON WIZARD", "ANGEL ZERO", "SLIME X", "LITTLE DEMON", "ROBOT KID", "UNKNOWN"], "name": "夜行少年團"}, {"id": 4, "o": "h2", "r": "NNNRNNRSHH", "n": ["ZIPP", "PUFF", "BLAZE", "PAWBOY", "PINKY", "SNOWBALL", "MOOSE", "GOTH", "UFO KID", "DINO BUD"], "name": "怪咖小鎮"}, {"id": 5, "o": "h2", "r": "NNNRNHRNSH", "n": ["AVIATOR", "BEAT BEAR", "HOOD", "LILAC", "PANDA CLUB", "UFO BEAR", "PINK PUFF", "SKATER", "STAR KING", "ANGEL JELLY"], "name": "潮熊俱樂部"}, {"id": 6, "o": "h2", "r": "NNNSRNRHNH", "n": ["Momo Pilot", "Teddy Punk", "Midnight", "Witchy", "Space Baby", "Berry", "Dino Boo", "Moo Moo", "Cookie Chef", "Angel Puff"], "name": "毛茸茸俱樂部", "off": 1}, {"id": 7, "o": "h2", "r": "NRNNSNNRHH", "n": ["招財喵", "黑曜喵", "櫻花喵", "宇宙喵", "舞獅喵", "森林喵", "電玩喵", "鯛魚燒喵", "福氣喵", "財神喵"], "name": "招財喵俱樂部"}, {"id": 8, "o": "h2", "r": "NNNNRNRHSH", "n": ["BUBBLE", "KITTY", "FROGGY", "CHEF P", "COSMO", "STRAWBY", "SHARKY", "HIP-HOP", "SWEETIE", "MAGIC"], "name": "胖胖豬俱樂部"}, {"id": 9, "o": "h2", "r": "NNNSNRHNRH", "n": ["ZAP", "BUBBLES", "DINER DOT", "DOC", "CHILL", "ARTSY", "STARRY", "SCOUT", "NEKO GAMER", "ROCKY"], "name": "陽光小鎮"}, {"id": 10, "o": "h2", "r": "NNNRSRNHNH", "n": ["ALOHA", "MONDAY", "SPA DAY", "QUACK", "PUNK", "CHOMP", "HOWDY", "CLOWNY", "DINO PUP", "SPACE PUP"], "name": "吉娃娃暴走團"}, {"id": 11, "o": "h2", "r": "NNNRNSNHRH", "n": ["SKATE", "BUBBLE", "INK", "MONSTER", "NO.23", "LEO", "BONES", "FLUFF", "BEATS", "JUICE"], "name": "厭世男孩"}, {"id": 12, "o": "h2", "r": "NNRNNRHSNH", "n": ["SUNNY", "NOISE", "LOLLI", "LEOPARD", "KITTEN", "POP", "ANGEL", "BOW", "FLUFFY", "CAMO"], "name": "厭世女孩"}, {"id": 13, "o": "h2", "r": "NNNNRRSHSH", "n": ["領巾寶寶", "飛行員", "小青蛙", "藝術家", "耳機控", "小精靈", "萬聖小幽靈", "小天使", "太空人", "小巫師"], "name": "瑪爾濟斯散步團"}, {"id": 14, "o": "h2", "r": "NNNRRHSRSH", "n": ["泡泡妹", "星星酷妹", "草莓甜心", "貓耳電音", "飛行少女", "天使藍藍", "黑貓雙馬尾", "黑兔帽T", "信差貝蕾", "小惡魔"], "name": "大眼女孩團"}, {"id": 15, "o": "h2", "r": "NNNNRSRSHH", "n": ["莓果魔女", "月光學霸", "葉子魔女", "兔兔魔女", "精靈飛行員", "瞌睡銀髮", "蘋果魔女", "星星糖", "水晶法師", "黑貓魔女"], "name": "魔法小屋"}, {"id": 16, "o": "h2", "r": "NNNNRSHRSH", "n": ["熊熊背包客", "飛行員小粉", "恐龍探險家", "草帽嚮導", "觸角電波妹", "企鵝飛行員", "電視機器人", "捲角綿羊", "蘑菇小子", "小樹人"], "name": "冒險森林"}, {"id": 17, "o": "h2", "r": "NNNRRHSSRH", "n": ["紅帽菇菇", "花花菇妹", "飛行菇菇", "書蟲菇菇", "背包菇菇", "魔法師爺爺", "樹墩爺爺", "麵包師傅", "雲朵菇菇", "夜光菇"], "name": "蘑菇村"}, {"id": 18, "o": "h2", "r": "NNNNRRSHSH", "n": ["紅星高筒", "粉紅愛心", "軍綠老爹鞋", "紫色波浪", "黑星魔鬼氈", "火焰板鞋", "骷髏黑鞋", "天使翅膀", "小花雛菊", "貓耳肉球"], "name": "潮鞋實驗室"}, {"id": 19, "o": "h2", "r": "NNNNRRSHSH", "n": ["豹紋貓耳", "護目鏡辣妹", "豹紋漁夫帽", "星星包包頭", "泡泡糖耳機", "紫髮遮陽帽", "豹紋髮帶", "白貓毛毛帽", "粉紅墨鏡", "星星棒球帽"], "name": "豹紋辣妹"}, {"id": 20, "o": "h2", "r": "NNNNRRSHSH", "n": ["白髮小惡魔", "黑帽T惡魔", "紫髮惡魔", "尖刺頭帶", "紅髮蝙蝠翼", "耳機惡魔", "金髮十字", "毛毛帽惡魔", "熊熊惡魔", "天使惡魔"], "name": "小惡魔俱樂部"}, {"id": 21, "o": "h2", "r": "NRNNRHNSSH", "n": ["吐舌頭", "金項鍊大哥", "頭頂魚", "紙箱貓", "鯊魚裝", "吐司貓", "趴趴貓", "耳機貓", "抱魚驚嚇", "獅子裝"], "name": "厭世橘貓"}, {"id": 22, "o": "h2", "r": "NNNRSHNRHS", "n": ["小丑帽寶寶", "高帽紳士", "蝴蝶結妹妹", "氣球狗小丑", "紫髮厭世丑", "皇冠小丑王", "派對帽妹妹", "兔耳小丑", "撲克魔術師", "星星眼鏡"], "name": "馬戲團小丑"}, {"id": 23, "o": "h2", "r": "NNNNRRSHSH", "n": ["貓耳耳機", "愛心墨鏡", "外星帽小子", "護目鏡綠髮", "星星小巫師", "太空貓耳", "骷髏帽T", "狐狸裝", "天使小白", "像素惡魔"], "name": "像素小隊"}, {"id": 24, "o": "h2", "r": "NNNNRSRHSH", "n": ["棋盤笑臉", "粉紅火焰", "像素貓咪", "雲朵星星", "豹紋愛心", "銀色閃光", "塗鴉皇冠", "鐳射幻彩", "星球宇宙", "像素蘑菇"], "name": "滑板俱樂部"}, {"id": 25, "o": "h2", "r": "NNNNRRSHSH", "n": ["橘虎斑", "灰白貓", "三花貓", "小黑", "蝴蝶結白貓", "暹羅貓", "瞇眼虎斑", "賓士貓", "長毛三花", "玳瑁貓"], "name": "像素貓咪"}, {"id": 26, "o": "h2", "r": "NNNNRRSHSH", "n": ["兔兔寶寶", "熊熊寶寶", "綿羊寶寶", "虎斑貓寶寶", "草莓寶寶", "恐龍寶寶", "企鵝寶寶", "耳機寶寶", "星星寶寶", "月亮寶寶"], "name": "奶嘴寶寶"}, {"id": 27, "o": "h2", "r": "NNNNRRSHSH", "n": ["天線隊長", "貓耳隊員", "星星隊員", "護目鏡隊員", "土星隊員", "橘貓太空人", "機器人", "熊熊太空人", "熊貓太空人", "兔兔太空人"], "name": "太空小隊"}, {"id": 28, "o": "h2", "r": "NNNNRRSHSH", "n": ["綠色小外星", "粉紅章魚", "三眼怪", "翅膀外星人", "飛碟寶寶", "水母", "雲朵怪", "豆芽太空人", "星空法師", "獨眼惡魔"], "name": "外星人派對"}];
Object.assign(ACTIONS, {
  bbDraw(req) {
    const me = resident_(req), sid = Number(req.sid), S = BB_SERIES_.find(x => x.id === sid) || bbxSeries_(sid);
    if (!S || S.off) throw new Error('這個系列還沒開賣');
    const bb = me.bb && typeof me.bb === 'object' ? me.bb : {};
    bb.p = bb.p && typeof bb.p === 'object' ? bb.p : {}; bb.d = bb.d && typeof bb.d === 'object' ? bb.d : {};
    const R = S.r.split(''), hid = R.map((r, i) => r === 'H' ? i : -1).filter(i => i >= 0);
    const n = (Number(bb.p[sid]) || 0) + 1;
    let i;
    if (n >= BB_PITY_) i = hid[Math.floor(Math.random() * hid.length)];   // 保底
    else {
      // v57 防重複：已經有的那隻（隱藏版除外）機率減半；前兩盒同一隻的話，這盒不會再是牠
      const own = Array.isArray(bb.d[sid]) ? bb.d[sid] : [], L2 = bb.l && Array.isArray(bb.l[sid]) ? bb.l[sid] : [], ban = L2.length >= 2 && L2[0] === L2[1] ? Number(L2[0]) : -1;
      const odds = BB_ODDS_[S.o] || BB_ODDS_.h2, X = S.x || [], hn = S.o === 'x' ? Math.max(1, hid.length) : 1, w = R.map((r, k) => X.indexOf(k) >= 0 || k === ban ? 0 : (r === 'H' ? (odds.H || 0) / hn : (odds[r] || 0) * (Number(own[k]) > 0 ? 0.5 : 1))), sum = w.reduce((a, b) => a + b, 0);
      let x = Math.random() * sum; i = 0;
      while (i < w.length - 1 && x >= w[i]) { x -= w[i]; i++; }
    }
    const r = R[i], NF = Math.max(10, R.length), d = Array.isArray(bb.d[sid]) ? bb.d[sid].slice(0, NF) : [];   // v57：島主自訂系列最多 12 隻，原本只記 10 隻（第 11、12 隻每次都算新的）
    while (d.length < NF) d.push(0);
    { const bag = me.game && me.game.bag && typeof me.game.bag === 'object' ? me.game.bag : {};   // v63：紀錄不見時，用背包裡有的公仔補回來（集滿獎勵才不會重複拿）
      for (let k = 0; k < NF; k++) if (!(Number(d[k]) > 0) && Number(bag['bb' + sid + '_' + String(k + 1).padStart(2, '0')]) > 0) d[k] = 1; }
    const fresh = !(Number(d[i]) > 0);
    d[i] = (Number(d[i]) || 0) + 1; bb.d[sid] = d;
    bb.p[sid] = r === 'H' ? 0 : n; bb.n = (Number(bb.n) || 0) + 1;
    bb.l = bb.l && typeof bb.l === 'object' ? bb.l : {}; bb.l[sid] = [i].concat(Array.isArray(bb.l[sid]) ? bb.l[sid] : []).slice(0, 2);
    const complete = fresh && d.every((x, k) => (S.x || []).indexOf(k) >= 0 || Number(x) > 0);
    me.bb = bb; put_('players', me);
    if (r === 'H') {
      feed_(`🌟 ${me.nick} 從「${S.name}」抽到了隱藏版「${S.n[i]}」！`);
      notify_(all_('players').filter(p => p.houseId && p.id !== me.id).map(p => p.id), 'rank', `🌟 ${me.nick} 抽到了隱藏版「${S.n[i]}」！`);
    }
    if (complete) feed_(`🏆 ${me.nick} 集滿了「${S.name}」全系列！`);
    return { i: i, r: r, pity: bb.p[sid], complete: complete, bonus: complete ? BB_DONE_COINS_ : 0 };
  },
  // ---------- 🛋️ 裝潢目錄：二樓背景（金幣由 App 扣，跟其他商店一樣） ----------
  decoBuy(req) {
    const h = mustFam_(req), id = String(req.id || '');
    if (String(req.kind) !== 'f2room' || !has_(DECO_F2_, id)) throw new Error('沒有這個商品');
    if (!Number(h.floor2)) throw new Error('要先擴建二樓才能買二樓背景');
    const o = ownedOf_(h);
    if (o.indexOf(id) >= 0) throw new Error('你家已經有這間了');
    o.push(id); h.owned = o; put_('houses', h);
    return { owned: o };
  }
});
const DECO_F2_ = { f2shop_pig: 1500, f2shop_xmas: 2000, f2shop_ghost: 2000, f2shop_space: 2000, f2shop_loftblack: 2000, f2shop_loftgreen: 2000, f2shop_daisy: 1500, f2shop_creampaw: 1500, f2shop_spacewhite: 2000, f2shop_spacemint: 2000, f2shop_princess2: 2000, f2shop_crystal2: 2000, f2shop_mine: 2000, f2shop_fairyforest: 2000 };   // v57：3000 → 2000（買過的補差價，見 econFix_）

// ================= 🎁 島主上傳的盲盒系列（v51） =================
// meta bbx.list = [{ id(101 起), n, en, c, off, box, f: [{ n, img, r: N/R/S/H }] }]
function bbxList_() { const m = get_('meta', 'bbx'); return m && Array.isArray(m.list) ? m.list : []; }
// 給玩家看的：名字、圖、哪幾格是隱藏版、店面亮哪 3 隻普通款（不給其他稀有度）
function bbxView_() {
  return bbxList_().map(x => ({ id: x.id, n: x.n, en: x.en || '', c: x.c || '#7f9671', off: x.off ? 1 : 0, box: x.box || '',
    f: x.f.map(y => y.n), img: x.f.map(y => y.img), h: x.f.map((y, i) => y.r === 'H' ? i : -1).filter(i => i >= 0),
    t: x.f.map((y, i) => y.r === 'N' ? i : -1).filter(i => i >= 0).slice(0, 3) }));
}
// 抽獎用：轉成跟內建系列一樣的格式；隱藏版合計 1%
function bbxSeries_(sid) {
  const x = bbxList_().find(y => Number(y.id) === Number(sid));
  if (!x) return null;
  return { id: x.id, name: x.n, n: x.f.map(y => y.n), r: x.f.map(y => y.r).join(''), o: 'x', off: x.off ? 1 : 0 };
}
BB_ODDS_.x = { N: 14, R: 10, S: 9, H: 1 };
Object.assign(ACTIONS, {
  adminBbGet(req) {
    isAdmin_(req);
    const x = bbxList_().find(y => Number(y.id) === Number(req.id));
    if (!x) throw new Error('找不到這個系列');
    return { series: x };
  },
  adminBbSave(req) {
    isAdmin_(req);
    const x = req.series || {}, list = bbxList_();
    const name = String(x.n || '').trim().slice(0, 16);
    if (!name) throw new Error('幫系列取個名字');
    const f = (Array.isArray(x.f) ? x.f : []).slice(0, 12).map(y => ({ n: String(y.n || '').trim().slice(0, 16), img: String(y.img || '').slice(0, 400), r: ['N', 'R', 'S', 'H'].indexOf(y.r) >= 0 ? y.r : 'N' }));
    if (f.length < 4) throw new Error('一套至少 4 隻');
    if (f.some(y => !y.n || !/^https:\/\//.test(y.img))) throw new Error('每一隻都要有名字和圖');
    if (!f.some(y => y.r === 'H')) throw new Error('至少要有 1 隻隱藏版');
    if (!f.some(y => y.r !== 'H')) throw new Error('不能全部都是隱藏版');
    let o = x.id ? list.find(y => Number(y.id) === Number(x.id)) : null;
    if (!o) { o = { id: list.reduce((a, y) => Math.max(a, Number(y.id) || 0), 100) + 1, at: Date.now() }; list.push(o); }
    const wasOff = !!o.off;
    o.n = name; o.en = String(x.en || '').trim().slice(0, 24); o.c = /^#[0-9a-f]{6}$/i.test(String(x.c || '')) ? x.c : '#7f9671';
    o.off = x.off ? 1 : 0; o.box = /^https:\/\//.test(String(x.box || '')) ? String(x.box).slice(0, 400) : ''; o.f = f;
    put_('meta', { id: 'bbx', list: list });
    if (wasOff && !o.off || !x.id && !o.off) feed_(`🎁 毛二街盲盒店上新貨了：「${o.n}」！`);
    return { list: bbxView_() };
  }
});

// ================= 🎄 小麋鹿豆豆的聖誕禮物（v52） =================
// 找禮物、猜謎都在 App 算（跟星寶一樣）；這裡記：送到哪一家（那家收到小禮物）、全島總數、領獎
const XMAS_COINS_ = 5000, XMAS_ALL_ = 100, XMAS_ALL_COINS_ = 300, XMAS_GIFT_COINS_ = 30, XMAS_GIVE_DAY_ = 6;
function xmasView_() { const m = get_('meta', 'xmas'); return m && Number(m.start) ? { start: Number(m.start), end: Number(m.end), total: Number(m.total) || 0 } : null; }
function xmasOn_() { const v = xmasView_(), t = Date.now(); return !!(v && t >= v.start && t < v.end); }
function xmasEnd_(t) {   // 今年 12/25 晚上 23:59（台灣）；已經過了就從現在算兩週
  const y = new Date(t + TW_).getUTCFullYear(), e = Date.UTC(y, 11, 25, 23, 59, 59) - TW_;
  return e > t + DAY_ ? e : t + 14 * DAY_;
}
Object.assign(ACTIONS, {
  adminXmas(req) {
    isAdmin_(req);
    const t = Date.now(), m = meta_('xmas');
    if (req.on) {
      m.start = t; m.end = xmasEnd_(t); m.total = 0; m.bonus = ''; put_('meta', m);
      feed_('🦌 小麋鹿豆豆的聖誕禮物被風吹散了，掉進大家家裡！');
      notify_(residents_().map(p => p.id), 'letter', '🦌 小麋鹿豆豆迷路了！牠的聖誕禮物掉進大家家裡，快去幫忙找');
    } else { m.end = t; put_('meta', m); }
    return xmasView_();
  },
  xmasGive(req) {
    const me = resident_(req);
    if (!xmasOn_()) throw new Error('聖誕活動已經結束了');
    const h = get_('houses', req.toHouseId);
    if (!h || isSpecialId_(h.id)) throw new Error('找不到這個家');
    if (h.id === me.houseId) throw new Error('不能送給自己家');
    const day = twDay_(), g = me.xmg && me.xmg.day === day ? me.xmg : { day: day, n: 0 };
    if (g.n >= XMAS_GIVE_DAY_) throw new Error('今天送太多了，明天再送');
    g.n++; me.xmg = g; put_('players', me);
    const mem = all_('players').filter(p => p.houseId === h.id).map(p => p.id);
    if (mem.length) {
      put_('letters', { id: uid_(), to: 'h:' + h.id, mem: mem, title: '🎁 豆豆的聖誕禮物', body: `${me.nick} 幫小麋鹿豆豆把一份聖誕禮物送到你家了！裡面有一點金幣，聖誕快樂 🎄`,
        at: Date.now(), coins: XMAS_GIFT_COINS_, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
      notify_(mem, 'letter', `🎁 ${me.nick} 幫豆豆送了一份聖誕禮物到你家！`);
    }
    const m = meta_('xmas'); m.total = (Number(m.total) || 0) + 1;
    if (m.total >= XMAS_ALL_ && !m.bonus) {
      m.bonus = Date.now();
      put_('letters', { id: uid_(), to: '*', title: '🎄 全島一起送了 100 份禮物！', body: `大家一起幫豆豆送出了 ${XMAS_ALL_} 份聖誕禮物！這是豆豆給全島的謝禮，聖誕快樂 🦌`,
        at: Date.now(), coins: XMAS_ALL_COINS_, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
      feed_(`🎄 全島一起送出了 ${XMAS_ALL_} 份聖誕禮物！每個人都收到豆豆的謝禮 🪙${XMAS_ALL_COINS_}`);
      notify_(residents_().map(p => p.id), 'letter', `🎄 全島送滿 ${XMAS_ALL_} 份禮物！豆豆寄了 🪙${XMAS_ALL_COINS_} 給大家`);
    }
    put_('meta', m);
    return { total: m.total };
  },
  xmasNote(req) {
    const me = resident_(req);
    if (!xmasOn_() || Number(req.n) !== 5 || Number(me.xmasHalf)) return false;
    me.xmasHalf = Date.now(); put_('players', me);
    feed_(`🎁 ${me.nick} 已經幫豆豆送出一半的禮物了！`);
    return true;
  },
  xmasClaim(req) {
    const me = resident_(req);
    if (!xmasOn_()) throw new Error('聖誕活動已經結束了');
    if (Number(me.xmasDone)) throw new Error('你已經領過豆豆的禮物了');
    const d = req.d || {};
    if (!(Number(d.r) >= 4 && Number(d.g) >= 4 && Number(d.y) >= 2)) throw new Error('禮物還沒送完喔');
    me.xmasDone = Date.now(); put_('players', me);
    feed_(`🎄 ${me.nick} 幫小麋鹿豆豆送完了所有聖誕禮物！`);
    notify_(residents_().filter(p => p.id !== me.id).map(p => p.id), 'star', `🎄 ${me.nick} 幫豆豆送完了所有禮物！你送了幾份？`);
    return { coins: XMAS_COINS_ };
  }
});

// ================= 🔄 公仔交換（v53） =================
// 背包在玩家手機上，所以交換時「提出的那隻」先交給這裡保管：
// 提出 → 對方答應（對方手機當下扣掉要的那隻、拿到提出的那隻）→ 提出的人下次同步領回換到的那隻（tradeClaim）
// 婉拒／取消／3 天沒回 → 提出的人領回原本那隻
const TRADE_FIG_ = /^bb\d+_\d{2}$/, TRADE_DAYS_ = 3, TRADE_OPEN_MAX_ = 3;
function tradeFix_(t, now) {
  if (t.st === 'wait' && now - Number(t.at) > TRADE_DAYS_ * DAY_) { t.st = 'exp'; t.doneAt = now; put_('trades', t); }
  return t;
}
function tradesFor_(pid) {
  const now = Date.now();
  return all_('trades').filter(t => t.from === pid || t.to === pid).map(t => tradeFix_(t, now))
    .filter(t => t.st === 'wait' || (t.from === pid && !Number(t.fromDone)) || now - Number(t.doneAt || t.at) < 2 * DAY_)
    .sort((a, b) => b.at - a.at).slice(0, 30)
    .map(t => ({ id: t.id, from: t.from, fromNick: t.fromNick, to: t.to, toNick: t.toNick, give: t.give, want: t.want, at: Number(t.at), st: t.st, fromDone: Number(t.fromDone) || 0 }));
}
function tradeName_(id) {
  const m = /^bb(\d+)_(\d{2})$/.exec(String(id)); if (!m) return '公仔';
  const sid = Number(m[1]), i = Number(m[2]) - 1, S = BB_SERIES_.find(x => x.id === sid) || bbxSeries_(sid);
  return S && S.n && S.n[i] ? S.n[i] : '公仔';
}
Object.assign(ACTIONS, {
  tradeOffer(req) {
    const me = resident_(req), to = get_('players', req.to);
    if (!to || !to.houseId) throw new Error('找不到這位島民');
    if (to.id === me.id) throw new Error('不能跟自己交換');
    const give = String(req.give || ''), want = String(req.want || '');
    if (!TRADE_FIG_.test(give) || !TRADE_FIG_.test(want)) throw new Error('只能交換盲盒公仔');
    if (give === want) throw new Error('兩隻一樣，不用換啦');
    const now = Date.now(), open = all_('trades').filter(t => t.from === me.id).map(t => tradeFix_(t, now)).filter(t => t.st === 'wait');
    if (open.length >= TRADE_OPEN_MAX_) throw new Error(`同時最多 ${TRADE_OPEN_MAX_} 個交換邀請，等對方回覆或先取消一個`);
    if (open.some(t => t.to === to.id && t.want === want)) throw new Error('你已經跟他提過換這隻了');
    const t = { id: uid_(), from: me.id, fromNick: me.nick, to: to.id, toNick: to.nick, give: give, want: want, at: now, st: 'wait', fromDone: 0 };
    put_('trades', t);
    notify_([to.id], 'note', `🔄 ${me.nick} 想用「${tradeName_(give)}」換你的「${tradeName_(want)}」`);
    return { trade: t };
  },
  tradeAnswer(req) {
    const me = resident_(req), t = get_('trades', req.id);
    if (!t || t.to !== me.id) throw new Error('找不到這個交換邀請');
    tradeFix_(t, Date.now());
    if (t.st !== 'wait') throw new Error(t.st === 'exp' ? '這個邀請已經過期了' : t.st === 'cancel' ? '對方已經取消了' : '這個邀請已經處理過了');
    t.st = req.ok ? 'ok' : 'no'; t.doneAt = Date.now(); put_('trades', t);
    if (req.ok) {
      feed_(`🔄 ${t.fromNick} 和 ${t.toNick} 交換了公仔！「${tradeName_(t.give)}」⇄「${tradeName_(t.want)}」`);
      notify_([t.from], 'note', `🔄 ${t.toNick} 答應交換了！你拿到了「${tradeName_(t.want)}」`);
    } else notify_([t.from], 'note', `🔄 ${t.toNick} 這次不想換「${tradeName_(t.want)}」，你的公仔退回背包了`);
    return { trade: t };
  },
  tradeCancel(req) {
    const me = resident_(req), t = get_('trades', req.id);
    if (!t || t.from !== me.id) throw new Error('找不到這個交換邀請');
    if (t.st !== 'wait') return { trade: t };
    t.st = 'cancel'; t.doneAt = Date.now(); put_('trades', t);
    return { trade: t };
  },
  // 提出的人領回結果（換到的那隻，或退回原本那隻），每個邀請只領一次
  tradeClaim(req) {
    const me = resident_(req), t = get_('trades', req.id);
    if (!t || t.from !== me.id) throw new Error('找不到這個交換邀請');
    tradeFix_(t, Date.now());
    if (t.st === 'wait') throw new Error('對方還沒回覆');
    if (Number(t.fromDone)) return { trade: t, already: true };
    t.fromDone = Date.now(); put_('trades', t);
    return { trade: t, item: t.st === 'ok' ? t.want : t.give };
  }
});

// ================= 🏆 榮譽牆（v54）：從全家人的紀錄自動算 =================
function honorOf_(houseId) {
  const M = all_('players').filter(p => p.houseId === houseId), out = [], add = k => { if (out.indexOf(k) < 0) out.push(k); };
  const ser = BB_SERIES_.map(x => x.id).concat(bbxList_().map(x => Number(x.id)));
  let hid = false, lv = 0;
  M.forEach(p => {
    const bb = p.bb && typeof p.bb === 'object' ? p.bb : {}, d = bb.d && typeof bb.d === 'object' ? bb.d : {};
    ser.forEach(sid => {
      const S = BB_SERIES_.find(x => x.id === sid) || bbxSeries_(sid), D = Array.isArray(d[sid]) ? d[sid] : null;
      if (!S || !D) return;
      const R = String(S.r || '').split(''), X = S.x || [];
      if (R.length && R.every((r, k) => X.indexOf(k) >= 0 || Number(D[k]) > 0)) add('set:' + sid);
      if (R.some((r, k) => r === 'H' && Number(D[k]) > 0)) hid = true;
    });
    lv = Math.max(lv, Number((p.game || {}).lv) || 0);
    if (Number(p.starDone)) add('star');
    if (Number(p.xmasDone)) add('xmas');
  });
  if (hid) add('hid');
  if (lv >= 20) add('lv20');
  if (lv >= 40) add('lv40');
  const ids = M.map(p => p.id);
  if (all_('trades').some(t => t.st === 'ok' && (ids.indexOf(t.from) >= 0 || ids.indexOf(t.to) >= 0))) add('trade');
  return out;
}

// ================= 🎪 玩個毛：打地鼠每週排行榜（v55） =================
// 代幣、票券、娃娃機都在 App 裡算（跟其他商店一樣）；這裡只記每個人這週的最高分
const ARC_MAX_ = 300, ARC_GAP_ = 25000, ARC_WIN_ = [1000, 750, 500];   // v66：打地鼠每週前三名 🪙1000／750／500
function arcade_() {
  const m = meta_('arcade'), wk = weekKey_();
  m.s = m.s && typeof m.s === 'object' ? m.s : {};
  if (m.wk !== wk) {
    if (m.wk) {   // 結算上週
      const tops = Object.keys(m.s).map(k => ({ id: k, v: Number(m.s[k]) || 0 })).filter(x => x.v > 0).sort((a, b) => b.v - a.v).slice(0, ARC_WIN_.length);
      const MED = ['🥇 冠軍', '🥈 第二名', '🥉 第三名'];
      tops.forEach((top, i) => {
        const p = get_('players', top.id), nick = p ? p.nick : '', win = ARC_WIN_[i];
        if (i === 0) m.last = { id: top.id, nick: nick, v: top.v, wk: m.wk };
        if (!p) return;
        put_('letters', { id: uid_(), to: p.id, title: `${MED[i].slice(0, 2)} 打地鼠週${MED[i].slice(3)}！`, body: `上週你在玩個毛的打地鼠拿到 ${top.v} 分，是全島${MED[i].slice(3)}！這是獎金 🎉`,
          at: Date.now(), coins: win, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
        if (i === 0) feed_(`🏆 ${nick} 是上週玩個毛的打地鼠冠軍（${top.v} 分），拿走 🪙${win}！`);
        notify_([p.id], 'letter', `🏆 你是上週打地鼠${MED[i].slice(3)}！獎金 🪙${win} 寄給你了`);
      });
    }
    m.wk = wk; m.s = {}; put_('meta', m);
  }
  return m;
}
function arcTop_(m) {
  const P = all_('players');
  return Object.keys(m.s).map(k => ({ id: k, v: Number(m.s[k]) || 0 })).filter(x => x.v > 0).sort((a, b) => b.v - a.v).slice(0, 10)
    .map(x => ({ nick: (P.find(p => p.id === x.id) || {}).nick || '島民', v: x.v, me: 0, id: x.id }));
}
Object.assign(ACTIONS, {
  arcadeScore(req) {
    const me = resident_(req), sc = Math.floor(Number(req.score));
    if (!(sc >= 0 && sc <= ARC_MAX_)) throw new Error('分數怪怪的');
    const now = Date.now();
    if (now - (Number(me.arcAt) || 0) < ARC_GAP_) throw new Error('打太快了，休息一下');
    me.arcAt = now; put_('players', me);
    const m = arcade_(), old = Number(m.s[me.id]) || 0, best = Math.max(old, sc);
    if (best !== old) { m.s[me.id] = best; put_('meta', m); }
    const top = arcTop_(m), rank = Object.keys(m.s).filter(k => (Number(m.s[k]) || 0) > best).length + 1;
    if (sc > old && rank === 1 && top.length > 1) feed_(`🔨 ${me.nick} 在玩個毛的打地鼠打出 ${sc} 分，登上本週第一！`);
    return { best: best, rank: rank, newBest: sc > old };
  },
  arcadeTop(req) {
    resident_(req);
    const m = arcade_();
    return { top: arcTop_(m).map(x => ({ nick: x.nick, v: x.v })), last: m.last || null };
  }
});

// ================= 🦹 玩具小偷・📹 寵物監視器（v57） =================
// 小偷：全島一天 2～3 次（什麼時間都可能），闖進某一家的一樓或二樓，一次偷 2～4 個地上的玩具
//       待 15 分鐘（那層有租監視器就待 30 分鐘）；家裡有高冷的毛孩會叫 → 少偷一個、早 5 分鐘走
//       時間到沒人報警：玩具一半拿去毛二街賣、一半不見，然後一半機率換一家繼續偷（最多再換 2 家）
//       報警：本人家 → 玩具拿回來＋小偷留下的獎品；幫別人家 → 良民獎金 🪙200，玩具還給主人
// 監視器：一樓、二樓分開租，🪙500 七天（金幣由 App 扣）；有小偷、有掉錢就推播（每人每天最多 5 則，不佔一般推播的 10 則）
const THIEF_STAY_ = 15 * 60000, THIEF_STAY_CAM_ = 30 * 60000, THIEF_BARK_ = 5 * 60000, THIEF_HOPS_ = 2, THIEF_HERO_ = 200;
const THIEF_SAFE_ = /^(t_teepee|t_astro|t_ufo|crown|starlamp|rainbow|castle|xmastree|crystal|unicorn|balloonair|gacha|bb\d.*|xm_.*)$/;   // 限定、生日、公仔不偷
const CAM_DAYS_ = 7, CAM_PUSH_MAX_ = 5;
const flName_ = fl => Number(fl) === 2 ? '二樓' : '一樓';
function camOn_(h, fl) { return !!(h && h.cam && typeof h.cam === 'object' && Number(h.cam['f' + (Number(fl) === 2 ? 2 : 1)]) > Date.now()); }
function camNotify_(h, fl, kind) {
  if (!camOn_(h, fl) || isQuiet_()) return 0;   // 半夜 11 點～早上 8 點不吵人
  const now = Date.now(), day = twDay_(), send = [];
  all_('players').filter(p => p.houseId === h.id).forEach(p => {
    if (now - (Number(p.on) || 0) < ONLINE_MS_) return;   // 正在玩就不推（畫面上看得到）
    let c = p.camPush && typeof p.camPush === 'object' ? p.camPush : {};
    if (c.day !== day) c = { day: day, n: 0 };
    if ((Number(c.n) || 0) >= CAM_PUSH_MAX_) return;
    c.n = (Number(c.n) || 0) + 1; p.camPush = c; put_('players', p); send.push(p.id);
  });
  const msg = kind === 'thief' ? `📹 毛很多寵物監視器通知：監測到你家${flName_(fl)}疑似有人入侵！快回家看看 🚨`
    : `📹 毛很多寵物監視器通知：你家${flName_(fl)}地上出現一袋錢！💰 快回去撿～`;
  if (send.length) pushSend_(send, msg);
  return send.length;
}
function thief_() { const m = meta_('thief'); m.plan = Array.isArray(m.plan) ? m.plan : []; m.n = Number(m.n) || 0; return m; }
function thiefView_() {
  const c = thief_().cur;
  return c && Number(c.until) > Date.now() ? { id: c.id, houseId: c.houseId, fl: Number(c.fl) === 2 ? 2 : 1, until: Number(c.until), x: c.x, y: c.y, n: (c.loot || []).length } : null;
}
function thiefSpawn_(m, now, hops, skip) {
  const pets = all_('pets');
  const cands = [];
  all_('houses').filter(h => !isSpecialId_(h.id) && !isOut_(h) && h.id !== skip).forEach(h => {
    [1, 2].forEach(fl => {
      if (fl === 2 && !Number(h.floor2)) return;
      const L = (Array.isArray(h[fl === 2 ? 'toys2' : 'toys']) ? h[fl === 2 ? 'toys2' : 'toys'] : []).filter(t => !THIEF_SAFE_.test(String(t.item || '')));
      if (L.length) cands.push({ h: h, fl: fl, n: L.length });
    });
  });
  if (!cands.length) { m.cur = null; return null; }
  const c = cands[Math.floor(Math.random() * cands.length)], h = c.h, key = c.fl === 2 ? 'toys2' : 'toys';
  const bark = pets.some(p => p.houseId === h.id && p.trait === '高冷');
  let k = Math.min(c.n, 2 + Math.floor(Math.random() * 3));
  if (bark) k = Math.max(1, k - 1);
  const all = Array.isArray(h[key]) ? h[key] : [], ok = shuffle_(all.filter(t => !THIEF_SAFE_.test(String(t.item || '')))).slice(0, k), ids = ok.map(t => t.id);
  h[key] = all.filter(t => ids.indexOf(t.id) < 0); put_('houses', h);
  const stay = (camOn_(h, c.fl) ? THIEF_STAY_CAM_ : THIEF_STAY_) - (bark ? THIEF_BARK_ : 0);
  m.cur = { id: uid_(), houseId: h.id, fl: c.fl, at: now, until: now + stay, loot: ok, hops: hops, bark: bark ? 1 : 0,
    x: Math.round((0.2 + Math.random() * 0.6) * 1000) / 1000, y: Math.round((0.2 + Math.random() * 0.6) * 1000) / 1000 };
  feed_(`🦹 有小偷闖進「${h.name}」的${flName_(c.fl)}！${bark ? '家裡的毛孩一直叫！' : ''}快去抓！`);
  try { camNotify_(h, c.fl, 'thief'); } catch (e) {}
  return m.cur;
}
// 時間到沒人報警：玩具一半去毛二街、一半不見；一半機率換一家繼續偷
function thiefLeave_(m, now) {
  const c = m.cur; m.cur = null;
  if (!c) return;
  const h = get_('houses', c.houseId), loot = Array.isArray(c.loot) ? c.loot : [], sold = [];
  if (loot.length) {
    const s = shop_(), stock = Array.isArray(s.stock) ? s.stock : [];
    loot.forEach(t => { if (Math.random() < 0.5) { sold.push(t.item); stock.push({ id: uid_(), item: String(t.item), t: 'item', at: now, src: 'p', by: '🦹 神秘人' }); } });
    if (sold.length) { s.stock = shopTrim_(stock, s); put_('houses', s); }
  }
  if (h) {
    feed_(`🦹 小偷帶著 ${loot.length} 個玩具從「${h.name}」溜走了……`);
    const mem = all_('players').filter(p => p.houseId === h.id).map(p => p.id);
    if (mem.length && loot.length) put_('letters', { id: uid_(), to: 'h:' + h.id, mem: mem, one: 1, title: '🦹 家裡遭小偷了……', at: now,
      body: `${flName_(c.fl)}被偷走了 ${loot.length} 個玩具 😭${sold.length ? `\n\n聽說毛二街的二手架上，最近多了 ${sold.length} 個很眼熟的東西……去看看說不定買得回來！` : ''}\n\n租「寵物監視器」的話，小偷一來就會通知你喔 📹`,
      coins: 0, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
  }
  if ((Number(c.hops) || 0) < THIEF_HOPS_ && Math.random() < 0.5) thiefSpawn_(m, now, (Number(c.hops) || 0) + 1, c.houseId);
}
function thiefTick_(now) {
  const m = thief_(), day = twDay_(now);
  let ch = false;
  if (m.day !== day) {   // 每天排 2～3 次小偷出現的時間（第一次啟用時從現在開始排）
    const start = Math.max(now, Date.parse(day + 'T00:00:00Z') - TW_), end = Date.parse(day + 'T00:00:00Z') - TW_ + DAY_, k = 2 + (Math.random() < 0.5 ? 1 : 0);
    m.day = day; m.n = 0; m.plan = []; for (let i = 0; i < k; i++) m.plan.push(Math.round(start + Math.random() * (end - start)));
    m.plan.sort((a, b) => a - b); ch = true;
  }
  if (m.cur && now >= Number(m.cur.until)) { thiefLeave_(m, now); ch = true; }
  else if (!m.cur && m.n < m.plan.length && now >= m.plan[m.n]) { m.n++; thiefSpawn_(m, now, 0, ''); ch = true; }
  if (ch) put_('meta', m);
}
Object.assign(ACTIONS, {
  // 🚨 報警抓小偷（誰都可以抓；本人家拿回玩具＋獎品，幫別人抓拿良民獎金）
  thiefReport(req) {
    const me = resident_(req), m = thief_(), c = m.cur, now = Date.now();
    if (!c || c.id !== req.thiefId || now >= Number(c.until)) throw new Error('慢了一步，小偷已經跑掉了 💨');
    const h = get_('houses', c.houseId);
    if (!h) { m.cur = null; put_('meta', m); throw new Error('這個家不見了'); }
    const key = Number(c.fl) === 2 ? 'toys2' : 'toys', loot = Array.isArray(c.loot) ? c.loot : [];
    h[key] = (Array.isArray(h[key]) ? h[key] : []).concat(loot); put_('houses', h);
    m.cur = null; m.last = { id: c.id, by: me.id, at: now }; put_('meta', m);
    const own = me.houseId === h.id, coins = own ? 100 + Math.floor(Math.random() * 21) * 10 : THIEF_HERO_;
    feed_(own ? `🚨 ${me.nick} 在自己家抓到小偷，${loot.length} 個玩具都拿回來了！` : `🚨 ${me.nick} 幫「${h.name}」抓到小偷！好市民 👏`);
    if (!own) {
      const mem = all_('players').filter(p => p.houseId === h.id).map(p => p.id);
      if (mem.length) put_('letters', { id: uid_(), to: 'h:' + h.id, mem: mem, one: 1, title: '🚨 有人幫你抓到小偷了！', at: now,
        body: `剛剛有小偷闖進你家${flName_(c.fl)}，還好 ${me.nick} 路過報警，被偷的 ${loot.length} 個玩具都放回原位了 🙏\n\n記得跟 ${me.nick} 說聲謝謝喔！`,
        coins: 0, tickets: 0, item: '', n: 0, read: [], claimed: [], hidden: [] });
    }
    return { own: own, coins: coins, n: loot.length, toys: loot, fl: Number(c.fl) === 2 ? 2 : 1, houseId: h.id };
  },
  // 📹 租寵物監視器（一樓、二樓分開租，一次 7 天，可以續租）
  camRent(req) {
    const h = mustFam_(req), fl = Number(req.fl) === 2 ? 2 : 1;
    if (fl === 2 && !Number(h.floor2)) throw new Error('這個家還沒有二樓');
    const cam = h.cam && typeof h.cam === 'object' ? h.cam : {}, k = 'f' + fl, now = Date.now();
    cam[k] = Math.max(now, Number(cam[k]) || 0) + CAM_DAYS_ * DAY_; h.cam = cam; put_('houses', h);
    return { cam: cam };
  }
});
