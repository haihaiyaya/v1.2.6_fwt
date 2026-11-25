/* ===== 圖標 ===== */
const ICONS = {
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  sparkle:'<path d="M12 2.6l2.1 5.4 5.4 2.1-5.4 2.1L12 17.6 9.9 12.2 4.5 10.1l5.4-2.1z"/><path d="M18.8 15.6l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
  calendar:'<rect x="3.5" y="5" width="17" height="14.5" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/><path d="M12 13v4M10 15h4"/>',
  wifi:'<path d="M5 12.6a11 11 0 0 1 14 0"/><path d="M1.4 9a16 16 0 0 1 21.2 0"/><path d="M8.5 16.1a6 6 0 0 1 7 0"/><path d="M12 20h.01"/>',
  box:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7L12 12l8.7-5"/><path d="M12 22V12"/>',
  door:'<path d="M14 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5"/><path d="M9 12h11"/><path d="M13.5 8l4 4-4 4"/>',
  tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z"/>',
  chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 12.5h5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/>',
  home:'<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-7h6v7"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  cart:'<path d="M3 4h2l2.8 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6l1.8-7.4H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>',
  camera:'<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.4"/>',
  edit:'<path d="M4 20h4l10-10-4-4-10 10z"/><path d="M13.5 6.5l4 4"/>',
  trash:'<path d="M4 7h16"/><path d="M9 7V5h6v2"/><path d="M6.5 7l.8 12a1 1 0 0 0 1 1h7.4a1 1 0 0 0 1-1l.8-12"/>',
  gear:'<path d="M3.5 7h9M17 7h3.5M3.5 12h4M11.5 12h9M3.5 17h9M17 17h3.5"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="15" cy="17" r="2"/>',
  star:'<path d="M12 3.4l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8z"/>',
  bell:'<path d="M18 16.5V10a6 6 0 0 0-12 0v6.5L4 20h16z"/><path d="M9.5 20a2.5 2.5 0 0 0 5 0"/>',
  check:'<path d="M5 12.5l4.6 4.5L19 7"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 21v-4h6v4"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2"/>',
  shield:'<path d="M12 21.5s7.5-3.5 7.5-9V5.5L12 2.8 4.5 5.5v7c0 5.5 7.5 9 7.5 9z"/><path d="M9 12l2 2 4-4"/>',
  receipt:'<path d="M5 3h14v18l-3.5-2-3.5 2-3.5-2L5 21z"/><path d="M9 8h6M9 12h6"/>',
  clipboard:'<rect x="5" y="4.5" width="14" height="17" rx="2"/><path d="M9 3h6v3H9z"/><path d="M8.5 11h7M8.5 15h4"/>',
  arrowUp:'<path d="M12 19V5"/><path d="M6 11l6-6 6 6"/>',
  back:'<path d="M15 4L7 12l8 8"/>',
  steer:'<path d="M21 12a9 9 0 1 1-9-9"/><path d="M21 5v7h-7"/>',
  dots:'<circle cx="6" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="18" cy="12" r="1.4"/>',
  code:'<path d="M8 6L3 12l5 6"/><path d="M16 6l5 6-5 6"/>',
};
function ic(name, style){
  const p = ICONS[name] || '';
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"' + (style ? ' style="' + style + '"' : '') + '>' + p + '</svg>';
}

/* ===== 共用片段 ===== */
const statusbar = (onImg) => `<div class="statusbar ${onImg ? 'onImg' : ''}">
  <span>14:20</span>
  <span class="sicons">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 18v-3M9 18v-7M14 18v-11M19 18v-15" stroke-linecap="round"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 9.5a12 12 0 0 1 16 0"/><path d="M7.5 13.5a7.2 7.2 0 0 1 9 0"/><path d="M11 17.6a2.4 2.4 0 0 1 2 0"/></svg>
    <svg width="24" height="12" viewBox="0 0 26 13" fill="none" stroke="currentColor" stroke-width="1.3"><rect x=".8" y=".8" width="20" height="11.4" rx="3"/><rect x="3" y="3" width="13" height="8" rx="1.6" fill="currentColor" stroke="none"/><path d="M23 4.5v4" stroke-width="1.6"/></svg>
  </span>
</div>`;

const capsule = (onImg) => `<div class="capsule ${onImg ? 'onImg' : ''}"><span class="dots"><b></b><b></b><b></b></span><i></i><span class="tg"></span></div>`;

const navbar = (title) => `<div class="navbar">
  <div class="back" data-go="__back">${ic('back')}</div>
  <div class="title">${title}</div>
</div>`;

const tabbar = (active) => `<div class="tabbar">
  <a class="tb ${active === 'home' ? 'on' : ''}" data-go="home">${ic('home')}<span>首頁</span></a>
  <div class="mid"><div class="ring"><img src="assets/mascot-small.png"></div></div>
  <a class="tb ${active === 'me' ? 'on' : ''}" data-go="me">${ic('user')}<span>我的</span><b class="badge">8</b></a>
</div>`;

const qa = (go, name, color, bg, label, toast) => `<a class="qa" ${toast ? `data-toast="${toast}"` : `data-go="${go}"`}><span class="qico" style="color:${color};background:${bg}">${ic(name)}</span><span>${label}</span></a>`;

/* ===== 畫面資料 ===== */
const S = {};

S.home = {
  nav:false, tab:true, top:0, dark:true, capsuleOnImg:true,
  notes:['「前台電話」改為 <b>接待處電話</b>；「呼叫打掃」改為 <b>房間清潔</b>；「Wifi」寫成 <b>Wi-Fi</b>。',
         '「一鍵吐槽」在港不通用，改為 <b>意見反饋</b>；「催單」改為 <b>催辦</b>；量詞「1 條服務」改「1 項服務」。',
         '酒店資料整段重寫為香港地址與交通，貨幣由 ¥ 改 <b>HK$</b>，日期統一 DD/MM/YYYY。'],
  body:`
  <div class="hero"></div>
  <div class="card hcard">
    <div class="hcardRow">
      <div class="hinfo">
        <h1>星煥九號酒店</h1>
        <div class="room">0502 房間</div>
        <p class="desc">坐落於尖沙咀海濱，鄰近維港文化匯與天星碼頭，步行至尖東站約 5 分鐘，是一家結合商務與休閒的城市度假酒店…</p>
      </div>
      <img class="hthumb" src="assets/web-room.jpg">
    </div>
  </div>
  <div class="card qgrid">
    ${qa('tel','phone','#0E86F2','#E4F1FF','接待處電話','原型示意：將喚起撥號介面')}
    ${qa('clean','sparkle','#12B886','#E2FAF6','房間清潔')}
    ${qa('home-renew','calendar','#F97316','#FFEFE4','續住服務')}
    ${qa('home-wifi','wifi','#0E86F2','#E4F1FF','Wi-Fi 密碼')}
    ${qa('goods','box','#F97316','#FFEFE4','客房送物')}
    ${qa('exit','door','#64748B','#EEF1F6','一鍵退房','原型示意：退房確認流程')}
    ${qa('repair','tool','#EF4444','#FEE9E9','設施報修')}
    ${qa('feedback','chat','#3B82F6','#E7F0FF','意見反饋')}
  </div>
  <div class="svc">
    <div class="svcTop"><img class="svcBot" src="assets/mascot-small.png"><span>您現有 <b>1</b> 項服務</span><a class="link" data-go="orders">查看全部服務 ›</a></div>
    <div class="svcItem"><span class="dot"></span><span class="txt">客房送物　共 1 件物品<span class="ovd">已超時 5 日 23 小時</span></span><a class="miniBtn" data-go="service-detail">催辦</a></div>
  </div>
  <div class="card tabsCard">
    <div class="tabs">
      <span class="on">客房服務</span><span>設施政策</span><span>房型介紹</span><span>設施展示</span>
    </div>
    <a class="lrow" data-go="clean">房間清潔<span class="chev"></span></a>
    <a class="lrow" data-go="home-renew">房間續住<span class="chev"></span></a>
    <a class="lrow" data-go="home-wifi">Wi-Fi 連接<span class="chev"></span></a>
    <a class="lrow" data-go="guide">服務指南<span class="chev"></span></a>
  </div>
  <div style="height:26px"></div>`,
  overlay:`<a class="fab" data-go="feedback">${ic('chat')} 意見反饋</a>`
};

S.clean = {
  title:'房間清潔', top:88, bar:true,
  notes:['「呼叫打掃」「清掃」統一改為 <b>房間清潔</b>；時段寫法改為 07:00–23:00。',
         '「清潔人員將盡快到達」→ <b>清潔員將盡快到場</b>，語氣改港式書面語。',
         '備註提示語重寫，避免「注意事項」這種內地公文腔。'],
  body:`
  <div class="card">
    <h2 class="sec">請選擇服務類型</h2>
    <p class="hint">清潔服務時段為 07:00–23:00，非服務時段暫無法安排</p>
    <div class="opt on"><span class="oico">${ic('sparkle')}</span><div class="tx"><b>即時清潔</b><span>清潔員將盡快到場</span></div></div>
    <a class="opt" data-go="clean2" style="text-decoration:none;color:inherit"><span class="oico">${ic('clock')}</span><div class="tx"><b>預約清潔</b><span>請選擇合適時段</span></div></a>
  </div>
  <div class="card">
    <h2 class="sm">備註</h2>
    <div class="ta"><span class="ph">如需於其他時段清潔或有特別事項，請填寫於備註</span><span class="count">0/200</span></div>
  </div>
  <div style="height:20px"></div>`,
  bar:`<div class="btnbar"><a class="btn pri" data-toast="已提交清潔請求，接待處已收到">確認提交</a></div>`
};

S.clean2 = Object.assign({}, S.clean, {
  notes:['預約時段以 24 小時制顯示，符合香港習慣（不寫「下午 2 點」）。',
         '同一頁面切換狀態，避免多開一屏，減少繁簡兩套文案的維護量。'],
  body:`
  <div class="card">
    <h2 class="sec">請選擇服務類型</h2>
    <p class="hint">清潔服務時段為 07:00–23:00，非服務時段暫無法安排</p>
    <a class="opt" data-go="clean" style="text-decoration:none;color:inherit"><span class="oico">${ic('sparkle')}</span><div class="tx"><b>即時清潔</b><span>清潔員將盡快到場</span></div></a>
    <div class="opt on"><span class="oico">${ic('clock')}</span><div class="tx"><b>預約清潔</b><span>請選擇合適時段</span></div></div>
  </div>
  <div class="card">
    <h2 class="sm">請選擇預約時間</h2>
    <div class="field"><span>14:30–15:30</span><span class="chev"></span></div>
  </div>
  <div class="card">
    <h2 class="sm">備註</h2>
    <div class="ta fill">請於 15:30 前完成，謝謝<span class="count">17/200</span></div>
  </div>
  <div style="height:20px"></div>`,
});

S['home-renew'] = Object.assign({}, S.home, {
  notes:['確認彈窗文字改為「確定要辦理續住服務嗎？」，按鈕維持「取消／確定」。',
         '實際流程應帶出續住日期與房費，香港客人習慣先看報價再確認，示範版從簡。'],
  overlay: S.home.overlay + `<div class="mask"><div class="dialog">
    <div class="dtxt">確定要辦理續住服務嗎？</div>
    <div class="dacts"><a data-go="home">取消</a><a class="pri" data-toast="已提交續住申請，接待處將與您確認房費">確定</a></div>
  </div></div>`
});

S['home-wifi'] = Object.assign({}, S.home, {
  notes:['「WiFi名稱／密碼」改為 <b>網絡名稱／密碼</b>。',
         '「联系服务员上门帮助」改為 <b>聯絡服務員上門協助</b>，用「聯絡」而非「联系」。'],
  overlay: S.home.overlay + `<div class="mask"><div class="modalCard">
    <div class="mh">Wi-Fi 資訊</div>
    <div class="mb">
      <div class="mrow"><span>網絡名稱：</span><b>STAR9-Guest</b></div>
      <div class="mrow"><span>密碼：</span><b>Star9@2026</b></div>
    </div>
    <div style="padding:0 0 6px"><a class="btn pri" style="display:flex" data-toast="已複製密碼，正在前往系統設定">複製密碼並前往連接</a></div>
    <div class="tip"><a data-go="repair">連接不上？聯絡服務員上門協助 ›</a></div>
  </div></div>`
});

S.goods = {
  title:'客房送物', top:88, bar:true,
  notes:['「一次性牙刷」→ <b>即棄牙刷</b>（港人慣用「即棄」）；「電吹風」→ <b>風筒</b>；「特產」→ <b>手信</b>。',
         '「¥0」改為 <b>HK$0</b>；「配送費」改為 <b>送遞費</b>；「選好了」改為 <b>完成選購</b>。',
         '價格顯示要保留「免費」語意，酒店可改為贈送品或收費品，兩地定價策略可分開設定。'],
  body:`
  <div class="searchbar">
    <div class="sb">${ic('search')}<span>請輸入您需要的物品</span></div>
    <a class="sbtn" data-toast="原型示意：搜尋物品">搜尋</a>
  </div>
  <div class="goodsWrap">
    <div class="cat"><span class="on">日常用品</span><span>茶具・手信</span><span>飲品</span></div>
    <div class="items">
      <div class="catTitle">日常用品</div>
      <div class="item"><img src="assets/web-toothbrush.jpg"><div class="it"><b>即棄牙刷</b><span class="price">HK$0</span><div class="stepper"><i class="minus">−</i><em>1</em><i class="plus">+</i></div></div></div>
      <div class="item"><img src="assets/web-towel.jpg"><div class="it"><b>毛巾</b><span class="price">HK$0</span><div class="stepper"><i class="plus">+</i></div></div></div>
      <div class="item"><img src="assets/web-slipper-white.jpg"><div class="it"><b>即棄拖鞋</b><span class="price">HK$0</span><div class="stepper"><i class="plus">+</i></div></div></div>
      <div class="item"><img src="assets/web-slipper-blue.jpg"><div class="it"><b>布藝拖鞋</b><span class="price">HK$0</span><div class="stepper"><i class="plus">+</i></div></div></div>
      <div class="item"><img src="assets/web-bathtowel.jpg"><div class="it"><b>浴巾</b><span class="price">HK$0</span><div class="stepper"><i class="plus">+</i></div></div></div>
      <div class="item"><img src="assets/web-hanger.jpg"><div class="it"><b>衣架</b><span class="price">HK$0</span><div class="stepper"><i class="plus">+</i></div></div></div>
      <div class="item"><img src="assets/web-dryer.jpg"><div class="it"><b>風筒</b><span class="price">HK$0</span><div class="stepper"><i class="plus">+</i></div></div></div>
      <div style="height:6px"></div>
    </div>
  </div>`,
  bar:`<div class="cartbar">
    <div class="cart">${ic('cart')}<b>1</b></div>
    <div class="tot"><div class="l1">合計：<b>HK$0</b></div><div class="l2">含送遞費 HK$0</div></div>
    <a class="go" data-go="checkout">完成選購</a>
  </div>`,
  barStyle:'padding:10px 16px 18px',
  barH:74
};

S.checkout = {
  title:'確認訂單', bg:true, bar:true, barH:84,
  notes:['「商品總價／實際支付」改為 <b>物品總額／實付金額</b>。',
         '付款方式改為信用卡（Visa •••• 4242）；香港客人的收款通道與內地微信支付分開，需獨立對賬。',
         '「信息備註」改為 <b>備註資料</b>，「立即下單」保留（港人也用「落單」，正式介面用「下單」較穩妥）。'],
  body:`
  <div class="card tight" style="display:flex;align-items:center;gap:12px">
    <span style="width:44px;height:44px;border-radius:10px;background:var(--blue);display:flex;align-items:center;justify-content:center;color:#fff">${ic('doc','stroke:#fff')}</span>
    <div style="flex:1"><div style="font-size:17px;font-weight:600">房間號：0502</div><div style="font-size:12.5px;color:#8B929D;margin-top:3px">星煥九號酒店（香港）</div></div>
    <span style="color:var(--blue)">${ic('edit')}</span>
  </div>
  <div class="card">
    <div style="display:flex;gap:12px">
      <img src="assets/web-toothbrush.jpg" style="width:74px;height:74px;border-radius:8px;object-fit:cover">
      <div style="flex:1;display:flex;flex-direction:column;justify-content:space-between">
        <div style="display:flex;justify-content:space-between;font-size:15px"><b style="font-weight:500">即棄牙刷</b><span>×1</span></div>
        <div style="color:#FF3B30;font-size:15px">HK$0</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="rowline"><span>物品總額</span><b>HK$0</b></div>
    <div class="rowline"><span>送遞費</span><b>HK$0</b></div>
    <div class="rowline" style="border:none"><span>實付金額</span><b>HK$0</b></div>
  </div>
  <div class="card" style="padding-bottom:14px">
    <h2 class="sm">備註資料</h2>
    <div class="ta" style="min-height:150px"><span class="ph">如有特別需要可於此備註</span></div>
  </div>
  <div style="height:10px"></div>`,
  bar:`<div style="display:flex;align-items:center;gap:10px">
    <div style="font-size:13px;color:#7E8794">共 1 件　合計：<b style="color:#FF3B30;font-size:17px">HK$0.00</b></div>
    <a style="margin-left:auto;background:var(--blue);color:#fff;height:44px;padding:0 26px;border-radius:8px;display:flex;align-items:center;font-size:15px;text-decoration:none" data-toast="已下單，可於「我的訂單」查看進度">立即下單</a>
  </div>`,
  barStyle:'padding:10px 16px 20px',
  barH:74
};

S.orders = {
  title:'我的訂單', bg:true,
  notes:['「待收貨」改為 <b>待送達</b>；「訂單號」改為 <b>訂單編號</b>。',
         '金錢一律兩位小數並前置 HK$；日期為 DD/MM/YYYY。',
         '篩選項「待支付」保留，但香港實際走信用卡預授權，文案建議改「待付款」。'],
  body:`
  <div class="seg wide" style="padding-top:0"><a class="on">全部</a><a>待付款</a><a>待送達</a><a>已完成</a><a>已取消</a></div>
  <div class="olist">
    <div class="ocard" data-go="order-detail">
      <div class="top"><span>訂單編號：1923191958048768</span><span class="st blue">待送達</span></div>
      <div class="mid"><img src="assets/web-toothbrush.jpg"><div class="amt"><span>共 1 件</span><b>HK$0.00</b></div></div>
      <div class="bot"><span>房間號：0502</span><span>20/09/2026 14:12</span></div>
    </div>
    <div class="ocard">
      <div class="top"><span>訂單編號：1914718580969472</span><span class="st gray">已完成</span></div>
      <div class="mid"><div class="amt" style="margin-left:auto"><span>共 1 件</span><b>HK$0.00</b></div></div>
      <div class="bot"><span>房間號：0502</span><span>14/09/2026 14:32</span></div>
    </div>
    <div class="ocard">
      <div class="top"><span>訂單編號：1914716440973312</span><span class="st blue">待送達</span></div>
      <div class="mid"><div class="amt" style="margin-left:auto"><span>共 1 件</span><b>HK$0.00</b></div></div>
      <div class="bot"><span>房間號：0502</span><span>14/09/2026 14:30</span></div>
    </div>
    <div class="ocard">
      <div class="top"><span>訂單編號：1869238126809088</span><span class="st gray">已完成</span></div>
      <div class="mid"><img src="assets/web-towel.jpg"><div class="amt"><span>共 1 件</span><b>HK$0.00</b></div></div>
      <div class="bot"><span>房間號：0502</span><span>13/08/2026 11:27</span></div>
    </div>
    <div class="ocard">
      <div class="top"><span>訂單編號：1869231051476992</span><span class="st gray">已完成</span></div>
      <div class="mid"><div class="amt" style="margin-left:auto"><span>共 1 件</span><b>HK$0.00</b></div></div>
      <div class="bot"><span>房間號：0502</span><span>13/08/2026 11:20</span></div>
    </div>
  </div>`
};

S['order-detail'] = {
  title:'訂單詳情', bg:true,
  notes:['狀態文案「商品已在安排送物」改為 <b>物品正在安排送遞</b>。',
         '付款方式改信用卡；香港常見為信用卡預授權或八達通／PayMe，需按實際通道調整。'],
  body:`
  <div class="card" style="display:flex;gap:12px;align-items:flex-start">
    <span class="statIco"><b></b><b></b><b></b></span>
    <div class="statTx"><h3>待送達</h3><p>物品正在安排送遞，請稍候片刻</p></div>
    <a class="link" data-go="service-detail" style="margin-top:4px">查看進度 ›</a>
  </div>
  <div class="card">
    <div style="display:flex;gap:12px">
      <img src="assets/web-toothbrush.jpg" style="width:74px;height:74px;border-radius:8px;object-fit:cover">
      <div style="flex:1;display:flex;flex-direction:column;justify-content:space-between">
        <div style="display:flex;justify-content:space-between;font-size:15px"><b style="font-weight:500">即棄牙刷</b><span>×1</span></div>
        <div style="display:flex;justify-content:flex-end;color:#111;font-size:15px"><b>HK$0.00</b></div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="rowline"><span>訂單編號</span><b>1923191958048768</b></div>
    <div class="rowline"><span>下單時間</span><b>20/09/2026 14:12:01</b></div>
    <div class="rowline"><span>付款方式</span><b>信用卡（Visa •••• 4242）</b></div>
    <div class="rowline"><span>物品總額</span><b>HK$0.00</b></div>
    <div class="rowline"><span>送遞費</span><b>HK$0.00</b></div>
    <div class="rowline"><span>訂單備註</span><b>無</b></div>
    <div class="rowline" style="border:none"><span>送遞房間</span><b>0502</b></div>
  </div>
  <div style="height:20px"></div>`
};

S.repair = {
  title:'設施報修', bg:true, bar:true, barH:82,
  notes:['「故障反饋」改為 <b>設施報修</b>，更貼近酒店行業說法。',
         '「上傳問題照片」改為 <b>上載問題相片</b>，「立即提交」保留。',
         '報修單要自動帶房號與可聯絡時間，香港客房部習慣先致電再上門。'],
  body:`
  <div class="card">
    <h2 class="sec">問題描述<span style="color:#FF3B30">*</span></h2>
    <div class="ta" style="margin-top:12px;min-height:190px"><span class="ph">您好，請簡要描述您的問題</span><span class="count">0/200</span></div>
    <h2 class="sm" style="margin-top:18px">上載問題相片</h2>
    <div class="upload">${ic('camera')}</div>
  </div>
  <div style="height:20px"></div>`,
  bar:`<div class="btnbar"><a class="btn pri" data-toast="已提交，工程部將於 15 分鐘內到房檢查">立即提交</a></div>`
};

S.feedback = {
  title:'意見反饋', bg:true, bar:true, barH:82,
  notes:['「一鍵吐槽」在港屬網絡用語，正式入口改 <b>意見反饋</b>。',
         '問題類型新增 <b>私隱問題</b>，對應香港《個人資料（私隱）條例》的投訴分類。',
         '「其它問題」改為 <b>其他問題</b>，避免港人覺得用字不規範。'],
  body:`
  <div class="card">
    <h2 class="sec">問題類型<span style="color:#FF3B30">*</span></h2>
    <div class="chips" style="margin-top:14px">
      <a class="on">私隱問題</a><a>安全問題</a><a>食品問題</a>
      <a>洗滌問題</a><a>用水問題</a><a>清潔問題</a>
      <a>日用品問題</a><a>其他問題</a><a style="background:transparent"></a>
    </div>
    <h2 class="sec" style="margin-top:22px">問題描述<span style="color:#FF3B30">*</span></h2>
    <div class="ta" style="margin-top:12px;min-height:160px"><span class="ph">您好，請簡要描述您的問題和意見</span><span class="count">0/200</span></div>
    <h2 class="sm" style="margin-top:18px">上載問題相片</h2>
    <div class="upload">${ic('camera')}</div>
  </div>
  <div style="height:20px"></div>`,
  bar:`<div class="btnbar"><a class="btn pri" data-toast="已提交，值班經理將於 30 分鐘內跟進">立即提交</a></div>`
};

S.guide = {
  title:'服務指南', bg:true,
  notes:['這一屏的截圖必須用繁體版重拍，不能把簡體截圖直接放進來——這是最常見的翻車點。',
         '「前台」統一改 <b>接待處</b>；步驟文案改為港式書面語。'],
  body:`
  <div style="background:#fff;box-shadow:0 1px 0 #EDEFF4"><div class="tabs" style="padding:0 10px">
    <span class="on">房間續住</span><span>Wi-Fi 連接</span><span>退房服務</span><span>接待處熱線</span><span>送物服務</span>
  </div></div>
  <div class="guide">
    <div class="step"><div class="no">01.</div><div class="tx">點擊「續住服務」</div></div>
    <div class="mock">
      <div class="mockGrid">
        <div>${ic('phone')}接待處電話</div>
        <div>${ic('sparkle')}房間清潔</div>
        <div>${ic('bell')}請勿打擾</div>
        <div>${ic('calendar')}續住服務</div>
        <div>${ic('wifi')}Wi-Fi 密碼</div>
        <div>${ic('box')}客房送物</div>
        <div>${ic('door')}一鍵退房</div>
        <div>${ic('chat')}意見反饋</div>
      </div>
      <div class="focus" style="left:73.5%;top:8px;width:25%;height:47px"></div>
    </div>
    <div class="step"><div class="no">02.</div><div class="tx">確認後，酒店接待處便會收到您的續住需求</div></div>
    <div class="mock" style="padding:12px 10px 14px;position:relative">
      <div style="background:#EDEFF3;border-radius:8px;height:148px;display:flex;align-items:center;justify-content:center">
        <div style="width:80%;background:#fff;border-radius:8px;padding:16px 8px 0;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,.12)">
          <div style="font-size:11.5px;margin-bottom:16px">確定要辦理續住服務嗎？</div>
          <div style="display:flex;border-top:1px solid #E6E9EE;padding:9px 0;font-size:11.5px"><span style="flex:1">取消</span><span style="flex:1;color:var(--blue)">確定</span></div>
        </div>
      </div>
      <div class="focus" style="left:4px;right:4px;top:6px;bottom:8px"></div>
    </div>
    <div style="height:30px"></div>
  </div>`
};

S.ai = {
  tab:true, tabActive:'ai', nav:false, top:44,
  bgcolor:'#F1F6FD',
  notes:['機械人名字與話術改港式書面語：用「聯絡」「查詢」「致電」，不用「联系」「查询」「打电话」。',
         '提及的證件改為 <b>香港身份證／護照／往來港澳通行證</b>；「總機」保留，但接聽方叫接待處。',
         'AI 必須帶 locale 參數，強制以繁體、港式用詞作答，並禁止中英混排與簡體字。'],
  body:`
  <div class="aiHead">
    <img src="assets/mascot-small.png">
    <div><div class="nm">雲居管家 AI 助手</div><div class="aisub">送物、清潔都可以找我</div></div>
  </div>
  <div class="aiChips">
    <a class="aiChip">${ic('building')}設施政策</a>
    <a class="aiChip">${ic('shield')}保安說明</a>
    <a class="aiChip">${ic('doc')}預訂政策</a>
    <a class="aiChip">${ic('clipboard')}租期說明</a>
  </div>
  <div class="chat">
    <div class="msg u"><div class="b">設施政策</div></div>
    <div class="msg a"><div class="b">您好！關於您提到的服務或設施，我需要為您核實才能提供準確資訊。為確保無誤，請您直接致電酒店總機，聯絡接待處同事，他們將為您查詢並解答。謝謝！</div></div>
    <div class="msg u"><div class="b">保安說明</div></div>
    <div class="msg a"><div class="b">您好！安全方面請放心，24 小時都有保安當值，大門設有密碼門禁，公共區域和升降機亦 24 小時監控，晚歸也不必擔心～<br>溫馨提示：出入時請留意門禁狀態，確保門鎖正常關上。<br>如需更多協助，可點擊右下角通話按鈕致電酒店總機聯絡接待處同事。祝您入住愉快！</div></div>
    <div class="msg u"><div class="b">預訂政策</div></div>
    <div class="msg a"><div class="b">您好！預訂需提供身份證明文件（香港身份證／護照／往來港澳通行證）副本及錄取通知書副本／工作證明。預訂按金為 2 個月租金，入住時將自動轉為租金／住宿按金。<br>溫馨提示：預訂一經完成，如取消預訂，已支付的按金將不獲退還。<br>如需更多協助，可點擊右下角通話按鈕致電酒店總機聯絡接待處同事。祝您入住愉快！</div></div>
    <div style="height:96px"></div>
  </div>`,
  overlay:`<div class="aiInputWrap" style="bottom:76px;padding-bottom:2px">
    <div class="aiInput"><span class="ph">請輸入需求或問題，我來為您解答～</span><span class="snd">${ic('arrowUp')}</span><span class="tel">${ic('phone')}</span></div>
    <div class="aiDisc">回答內容均由 AI 生成</div>
  </div>`,
  extraBot:6
};

S.me = {
  title:'我的', nav:false, tab:true, tabActive:'me', bg:true, top:44, navTop:44,
  notes:['「我的發票」改為 <b>我的收據</b>——香港酒店沒有內地式增值稅發票。',
         '手機號改 <b>+852</b> 並按香港 8 位號碼遮罩；房間號標籤保留。',
         '「客需」這類內部簡稱不出現在客人端，改為 <b>服務</b>。'],
  body:`
  <div class="meHead">
    <div class="avatar">歐</div>
    <div>
      <div class="nm">歐陽<span class="roomTag">房間號：0502 ›</span></div>
      <div class="tel">+852 9123 ****</div>
    </div>
    <div class="gear">${ic('gear')}</div>
  </div>
  <div class="quattro" style="margin-top:0">
    <a class="q4" data-go="service-detail">${ic('doc')}服務進度</a>
    <a class="q4" data-go="orders">${ic('box')}我的訂單</a>
    <a class="q4" data-go="receipt-title">${ic('receipt')}我的收據</a>
    <a class="q4" data-go="messages">${ic('chat')}訊息通知<b>8</b></a>
  </div>
  <div class="inSvc">
    <div class="hd"><h3>進行中服務（2）</h3><a class="link" data-go="orders">查看更多 ›</a></div>
    <div class="svcRow" data-go="service-detail">
      <div class="l1">${ic('box')}<span>0502-客房送物</span><span class="pill blue">處理中</span></div>
      <div class="l2">提交時間：20/09/2026 14:12:01<br>送物清單：<em>即棄牙刷 ×1</em></div>
    </div>
    <div class="svcRow">
      <div class="l1">${ic('box')}<span>0502-客房送物</span><span class="pill orange">待處理</span></div>
      <div class="l2">提交時間：14/09/2026 14:30:17<br>送物清單：<em>即食麵 ×1</em></div>
    </div>
  </div>
  <div style="height:20px"></div>`
};

S['receipt-title'] = {
  title:'收據', bg:true, bar:true, barH:86,
  notes:['「發票」整條線改為 <b>收據</b>：抬頭→<b>抬頭</b>（保留港式寫法）、稅號→<b>商業登記號（BRN）</b>、增值稅發票→<b>酒店正式收據</b>。',
         '「發票報銷」是內地財務概念，改為 <b>抬頭管理</b>；「新增抬頭」保留。',
         '若日後要對接公司客報銷，建議加「月結賬戶」而非發票功能。'],
  body:`
  <div class="segctl" style="margin:12px"><a>我的收據</a><a class="on">抬頭管理</a></div>
  <div class="tipBanner" style="margin-top:0"><i>i</i><div>開立收據如需特別安排，請於申請時填寫備註，或聯絡接待處人手處理。</div></div>
  <div class="titleCard">
    <div class="tt">星煥酒店管理有限公司（香港）</div>
    <div class="ck">${ic('check')}</div>
    <div class="rr">類型：公司</div>
    <div class="rr">商業登記號：62345678</div>
    <div class="acts">
      <a data-toast="原型示意：刪除抬頭">${ic('trash')}刪除</a>
      <a data-toast="原型示意：編輯抬頭">${ic('edit')}編輯</a>
    </div>
  </div>
  <div style="height:20px"></div>`,
  bar:`<div style="display:flex;gap:10px">
    <a class="btn ghost" data-toast="原型示意：新增抬頭">新增抬頭</a>
    <a class="btn pri" data-toast="原型示意：提交開立收據申請">申請收據</a>
  </div>`,
  barStyle:'padding:10px 16px 20px',
  barH:78
};

S['receipt-list'] = {
  title:'收據', bg:true,
  notes:['審核拒絕→<b>已退回</b>，語氣較中性；金額顯示 HK$250.00。',
         '列表時間戳改 DD/MM/YYYY HH:mm。'],
  body:`
  <div class="segctl" style="margin:12px"><a class="on">我的收據</a><a>抬頭管理</a></div>
  <div class="recList" style="padding-top:0">
    <div class="recCard" data-go="receipt-detail">
      <div class="top"><b>星煥酒店管理有限公司（香港）</b><span class="st">已退回</span></div>
      <div class="rr">開立金額：--</div>
      <div class="rr">開立時間：26/06/2026 17:07</div>
    </div>
    <div class="recCard" data-go="receipt-detail">
      <div class="top"><b>星煥酒店管理有限公司（香港）</b><span class="st">已退回</span></div>
      <div class="rr">開立金額：HK$250.00</div>
      <div class="rr">開立時間：24/06/2026 11:39</div>
    </div>
  </div>`
};

S['receipt-detail'] = {
  title:'收據詳情', bg:true,
  notes:['「增值稅普通發票」→ <b>酒店正式收據</b>；「納稅人識別號」→ <b>商業登記號</b>。',
         '「電子郵箱」改 <b>電郵地址</b>；香港收據一般不必填開戶銀行，改為選填。'],
  body:`
  <div class="card">
    <div class="steps">
      <div class="n on"><i></i>提交成功</div><div class="bar"></div>
      <div class="n"><i></i>審核中</div><div class="bar"></div>
      <div class="n"><i></i>開立成功</div>
    </div>
  </div>
  <div class="card">
    <div class="rowline"><span>收據金額</span><b>--</b></div>
    <div class="rowline"><span>收據類型</span><b>酒店正式收據</b></div>
    <div class="rowline"><span>收據內容</span><b>住宿及客房服務</b></div>
    <div class="rowline"><span>抬頭</span><b>星煥酒店管理有限公司（香港）</b></div>
    <div class="rowline"><span>商業登記號</span><b>62345678</b></div>
    <div class="rowline"><span>電郵地址</span><b>oy@star9hk.com</b></div>
    <div class="rowline"><span>地址</span><b>無</b></div>
    <div class="rowline"><span>開戶銀行</span><b>無</b></div>
    <div class="rowline" style="border:none"><span>銀行賬號</span><b>無</b></div>
  </div>
  <div style="height:20px"></div>`
};

S.messages = {
  title:'訊息通知', bg:true,
  notes:['「客需完成」是內部術語，客人端改 <b>服務已完成</b>；「消息通知」改 <b>訊息通知</b>（港人只用「訊息」）。',
         '稱謂「尊敬的住客」保留，但句子改為港式書面語。'],
  body:`
  <div class="seg" style="padding:12px 12px 8px;background:var(--bg)"><a class="on">全部</a><a>服務完成</a><a>評價通知</a></div>
  <div class="mlist">
    <div class="mcard" data-go="review">
      <div class="hd"><span class="hi" style="background:#FFF6E3;color:#F5A21B">${ic('star')}<b></b></span>待評價</div>
      <div class="bd">尊敬的住客，您本次的送物服務已完成，期待您留下真實評價，協助我們優化服務體驗！</div>
      <div class="ft"><span>立即評價</span><span class="chev"></span></div>
    </div>
    <div class="mcard" data-go="service-detail">
      <div class="hd"><span class="hi" style="background:#E8F3FF;color:var(--blue)">${ic('bell')}<b></b></span>服務已完成</div>
      <div class="bd">尊敬的住客，您提交的送物服務已由服務員處理完成，可前往查看服務結果，祝您入住愉快～</div>
      <div class="ft"><span>查看詳情</span><span class="chev"></span></div>
    </div>
    <div class="mcard" data-go="review">
      <div class="hd"><span class="hi" style="background:#FFF6E3;color:#F5A21B">${ic('star')}<b></b></span>待評價</div>
      <div class="bd">尊敬的住客，您本次的清潔服務已完成，期待您留下真實評價，協助我們優化服務體驗！</div>
      <div class="ft"><span>立即評價</span><span class="chev"></span></div>
    </div>
    <div class="mcard" data-go="service-detail">
      <div class="hd"><span class="hi" style="background:#E8F3FF;color:var(--blue)">${ic('bell')}<b></b></span>服務已完成</div>
      <div class="bd">尊敬的住客，您提交的清潔服務已由服務員處理完成，可前往查看服務結果，祝您入住愉快～</div>
      <div class="ft"><span>查看詳情</span><span class="chev"></span></div>
    </div>
  </div>`
};

S.review = {
  title:'服務評價', bg:true, bar:true, barH:82,
  notes:['「體驗超讚」→ <b>體驗極佳</b>，「服務好」保留；表情選項沿用。',
         '「我希望夸夸」→ <b>我還想讚賞</b>，避免簡體「夸」與內地網絡語。'],
  body:`
  <div class="revHero">
    <div class="tx"><h2>留下您的<em>真實評價</em></h2><p>協助我們優化服務，持續提升入住體驗！</p></div>
    <div class="art"><span class="a1"></span><span class="a2">${ic('check')}</span></div>
  </div>
  <div class="revCard">
    <h3>本次服務如何？</h3>
    <div class="emos">
      <a class="emo"><span class="e">😖</span>不滿意</a>
      <a class="emo on"><span class="e">🥰</span>滿意</a>
    </div>
    <div class="quote">「體驗極佳，非常滿意本次服務」</div>
    <div class="tags"><a class="on">很好</a><a>很滿意</a><a>服務好</a></div>
    <div class="ta" style="min-height:130px;background:#F7F8FA"><span class="ph">我還想讚賞～</span><span class="count">0/200</span></div>
  </div>
  <div style="height:20px"></div>`,
  bar:`<div class="btnbar"><a class="btn pri" data-toast="感謝您的評價，已提交">提交評價</a></div>`
};

S['service-detail'] = {
  title:'服務詳情', bg:true,
  notes:['「工單」對外一律稱 <b>服務單／服務進度</b>，客人不需要知道內部工單概念。',
         '「已安排服务人员送物」→ <b>已安排服務員送物</b>；時間軸統一 DD/MM/YYYY。'],
  body:`
  <div class="card">
    <div class="statCard">
      <span class="statIco"><b></b><b></b><b></b></span>
      <div class="statTx"><h3>處理中</h3><p>已安排服務員送物</p></div>
    </div>
    <div class="steps" style="padding-top:18px">
      <div class="n on"><i></i>處理中</div><div class="bar"></div><div class="n"><i></i>已完成</div>
    </div>
  </div>
  <div class="card">
    <div style="display:flex;align-items:center;gap:8px;font-size:16px;font-weight:600;margin-bottom:14px">星煥九號酒店（香港）<span style="color:var(--blue)">${ic('phone')}</span></div>
    <h2 class="sm" style="margin-top:6px">物品清單</h2>
    <div style="display:flex;justify-content:space-between;font-size:14px;color:#2A3038">即棄牙刷<span style="color:#7E8794">×1</span></div>
    <h2 class="sm" style="margin-top:18px">提交時間</h2>
    <div style="font-size:14px;color:#2A3038">20/09/2026 14:12:01</div>
    <h2 class="sm" style="margin-top:18px">服務進度</h2>
    <div class="timeline">
      <div class="tl"><span class="ax"></span><div class="tx"><div class="t">20/09/2026 14:12:01</div><div class="d">成功下單：客房送物</div></div></div>
      <div class="tl act"><span class="ax"></span><div class="tx"><div class="t">處理中<em>20/09/2026 14:12:01</em></div><div class="d">已安排服務員送物</div></div></div>
    </div>
  </div>
  <div style="height:20px"></div>`
};

/* ===== 渲染 ===== */
const ORDER = ['home','clean','clean2','home-renew','home-wifi','goods','checkout','orders','order-detail','repair','feedback','guide','ai','me','receipt-title','receipt-list','receipt-detail','messages','review','service-detail'];
const TITLES = {home:'首頁',clean:'房間清潔',clean2:'房間清潔・預約',goods:'客房送物','home-renew':'首頁・續住確認','home-wifi':'首頁・Wi-Fi','checkout':'確認訂單',orders:'我的訂單','order-detail':'訂單詳情',repair:'設施報修',feedback:'意見反饋',guide:'服務指南',ai:'AI 助手',me:'我的','receipt-title':'收據・抬頭管理','receipt-list':'收據列表','receipt-detail':'收據詳情',messages:'訊息通知',review:'服務評價','service-detail':'服務詳情'};

function devHTML(id, mini){
  const s = S[id] || S.home;
  const top = s.top === undefined ? 88 : s.top;
  const barH = s.bar ? (s.barH || 82) : 0;
  const tabH = s.tab ? 68 : 0;
  const bot = barH + tabH + (s.extraBot || 0);
  return `<div class="dev" data-screen="${id}">
    ${statusbar(s.dark)}
    ${s.nav === false ? '' : navbar(s.title)}
    <div class="page ${s.bg ? 'bg' : ''}" style="top:${top}px;bottom:${bot}px;${s.bgcolor ? 'background:' + s.bgcolor + ';' : ''}">${s.body}</div>
    ${s.overlay || ''}
    ${s.bar ? `<div class="bbar" style="${s.barStyle || 'padding:10px 16px 24px'}">${s.bar}</div>` : ''}
    ${s.tab ? tabbar(s.tabActive || 'home') : ''}
    ${s.capsule === false ? '' : capsule(s.capsuleOnImg)}
  </div>`;
}

let cur = 'home', hist = [], gridMode = true, noteMode = false;

function render(){
  const stage = document.getElementById('stage');
  const gw = document.getElementById('gridWrap');
  if (gridMode){
    stage.style.display = 'none';
    gw.style.display = 'block';
    gw.innerHTML = '<div style="max-width:1500px;margin:0 auto;padding:6px 24px 60px;display:flex;flex-wrap:wrap;gap:26px 22px;justify-content:flex-start">' +
      ORDER.map(id => `<div style="width:125px"><div style="width:125px;height:270px;position:relative;overflow:hidden"><div style="position:absolute;left:0;top:0;width:390px;height:844px;transform:scale(.32);transform-origin:top left">${devHTML(id, true)}</div></div>
        <div style="font-size:11px;color:#8B929D;margin-top:7px;text-align:center">${TITLES[id]}</div></div>`).join('') + '</div>';
    gw.querySelectorAll('.dev').forEach(d => d.addEventListener('click', () => openScreen(d.dataset.screen)));
    return;
  }
  gw.style.display = 'none';
  stage.style.display = 'flex';
  const left = noteMode ? `<div class="side"><div class="panel">
      <h3>本地化標註 · ${TITLES[cur] || ''}</h3>
      <ul>${(S[cur].notes || ['—']).map(n => `<li>${n}</li>`).join('')}</ul>
    </div></div>` : '';
  stage.innerHTML = `
    ${left}
    <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
      <div id="devHolder">${devHTML(cur)}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:390px">
        ${ORDER.map(id => `<a data-jump="${id}" style="font-size:11px;padding:5px 9px;border-radius:6px;text-decoration:none;border:1px solid ${id===cur?'#0E86F2':'#DDE2EA'};color:${id===cur?'#fff':'#6B7480'};background:${id===cur?'#0E86F2':'#fff'}">${TITLES[id]}</a>`).join('')}
      </div>
    </div>`;
  bind();
}

function bind(){
  document.querySelectorAll('[data-jump]').forEach(el => el.onclick = () => openScreen(el.dataset.jump));
  document.querySelectorAll('.dev a, .dev [data-go], .dev [data-toast]').forEach(el => {
    el.onclick = (e) => {
      e.stopPropagation();
      const go = el.dataset.go, toast = el.dataset.toast;
      if (toast){ showToast(toast); return; }
      if (!go) return;
      if (go === '__back'){ back(); return; }
      openScreen(go);
    };
  });
}

function openScreen(id){
  if (gridMode){ gridMode = false; document.getElementById('btnGrid').classList.remove('on'); document.getElementById('btnGrid').textContent = '全部頁面'; }
  if (id !== cur) hist.push(cur);
  cur = id; render();
}

function back(){
  if (hist.length) cur = hist.pop();
  render();
}

let toastTimer;
function showToast(msg){
  let t = document.getElementById('toast');
  if (!t){
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;left:50%;bottom:120px;transform:translateX(-50%);background:rgba(24,30,38,.9);color:#fff;font-size:13px;padding:11px 18px;border-radius:8px;z-index:99;max-width:320px;text-align:center;line-height:1.5;transition:opacity .2s';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = 1;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.style.opacity = 0, 1800);
}

document.getElementById('btnGrid').onclick = function(){
  gridMode = !gridMode;
  this.classList.toggle('on', gridMode);
  this.textContent = gridMode ? '全部頁面' : '單頁瀏覽';
  render();
};
document.getElementById('btnNote').onclick = function(){
  noteMode = !noteMode;
  this.classList.toggle('on', noteMode);
  if (gridMode){ gridMode = false; document.getElementById('btnGrid').classList.remove('on'); document.getElementById('btnGrid').textContent = '全部頁面'; }
  render();
};
document.addEventListener('keydown', (e) => {
  if (gridMode) return;
  const i = ORDER.indexOf(cur);
  if (e.key === 'ArrowRight') openScreen(ORDER[Math.min(i + 1, ORDER.length - 1)]);
  if (e.key === 'ArrowLeft') openScreen(ORDER[Math.max(i - 1, 0)]);
});

/* 單屏截圖模式：?s=home */
const SHOT = new URLSearchParams(location.search).get('s');
(function(){
  if (!SHOT) return;
  document.querySelector('.topbar').style.display = 'none';
  document.body.style.background = '#fff';
  const st = document.getElementById('stage');
  st.style.padding = '0'; st.style.display = 'block';
  st.innerHTML = '<div style="width:390px;height:844px;overflow:hidden">' + devHTML(SHOT) + '</div>';
  const d = document.querySelector('.dev');
  d.style.boxShadow = 'none'; d.style.borderRadius = '0';
  const gw = document.getElementById('gridWrap'); if (gw) gw.remove();
})();

if (!SHOT) render();
