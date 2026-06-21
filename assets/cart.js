/* ALPENZO — basit sepet (localStorage). Backend yok; sipariş altyapısı sonra bağlanır. */
(function () {
  const KEY = 'ALPENZO_CART';
  const get  = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } };
  const save = (c) => localStorage.setItem(KEY, JSON.stringify(c));

  const count = () => get().reduce((n, i) => n + i.qty, 0);
  const total = () => get().reduce((s, i) => s + i.price * i.qty, 0);

  function updateCount() {
    document.querySelectorAll('#cartCount').forEach(el => el.textContent = count());
  }

  function add(item) {                 // {id,name,price,color,size,img,qty}
    const c = get();
    const key = item.id + '|' + (item.size || '');
    const ex = c.find(i => (i.id + '|' + (i.size || '')) === key);
    if (ex) ex.qty += item.qty; else c.push({ ...item });
    save(c); updateCount();
  }
  function setQty(idx, q) { const c = get(); if (c[idx]) { c[idx].qty = Math.max(1, q); save(c); updateCount(); } }
  function removeAt(idx) { const c = get(); c.splice(idx, 1); save(c); updateCount(); }
  function clear() { save([]); updateCount(); }

  const fmt = (n) => '<span class="lira">₺</span>' + n.toLocaleString('tr-TR') + ',00';

  function toast(msg, icon) {
    if (!document.getElementById('alp-toast-style')) {
      const s = document.createElement('style'); s.id = 'alp-toast-style';
      s.textContent =
        '.alp-toast{position:fixed;left:50%;bottom:28px;z-index:9993;' +
        'transform:translateX(-50%) translateY(14px) scale(.97);display:flex;align-items:center;gap:11px;' +
        'max-width:min(90vw,440px);background:#0c0c0c;color:#f2efe8;font-family:"Schibsted Grotesk",sans-serif;' +
        'font-size:13.5px;line-height:1.4;letter-spacing:.01em;padding:13px 19px 13px 15px;border-radius:14px;' +
        'border:1px solid rgba(200,160,74,.32);box-shadow:0 18px 50px rgba(0,0,0,.42);opacity:0;pointer-events:none;' +
        'transition:opacity .22s ease, transform .5s cubic-bezier(.23,1,.32,1);}' +    /* enter: strong ease-out, transform+opacity only */
        '.alp-toast.show{opacity:1;transform:translateX(-50%) translateY(0) scale(1);}' +
        '.alp-toast__ico{display:inline-flex;align-items:center;justify-content:center;width:21px;height:21px;flex:0 0 auto;' +
        'border-radius:50%;background:rgba(200,160,74,.16);color:#c8a04a;}' +
        '.alp-toast__ico svg{width:13px;height:13px;}';
      document.head.appendChild(s);
    }
    let t = document.querySelector('.alp-toast');
    if (!t) { t = document.createElement('div'); t.className = 'alp-toast'; document.body.appendChild(t); }
    const check = '<span class="alp-toast__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>';
    t.innerHTML = (icon === 'check' ? check : '') + '<span>' + msg + '</span>';
    t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');   // restart so rapid adds re-animate
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2600);
  }

  function markActiveNav() {
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.topbar__nav a').forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href && href === here) a.classList.add('active');
    });
  }

  window.ALPENZO = { get, save, add, setQty, removeAt, clear, count, total, fmt, toast };
  document.addEventListener('DOMContentLoaded', () => { updateCount(); markActiveNav(); });
})();

/* ── premium page transitions (cross-fade) ── */
(function () {
  if (typeof document === 'undefined') return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DUR = 440;   // cover hold before navigating (exit a touch quicker than the reveal)

  const style = document.createElement('style');
  style.textContent =
    '.pgfade{position:fixed;inset:0;z-index:9999;background:#0c0c0c;display:flex;flex-direction:column;' +
    'align-items:center;justify-content:center;gap:16px;opacity:1;pointer-events:auto;' +
    'transition:opacity .56s cubic-bezier(.32,.72,0,1);}' +
    '.pgfade.hide{opacity:0;pointer-events:none;}' +
    '.pgfade__mark{font-family:"Bricolage Grotesque",sans-serif;font-weight:800;text-transform:uppercase;' +
    'font-size:clamp(19px,3.6vw,28px);letter-spacing:.42em;padding-left:.42em;color:#f2efe8;' +
    'opacity:0;transform:translateY(10px);' +
    'transition:opacity .5s ease,transform .62s cubic-bezier(.32,.72,0,1);}' +
    '.pgfade__line{width:0;height:1px;background:#c8a04a;opacity:.9;' +
    'transition:width .62s cubic-bezier(.32,.72,0,1);}' +
    '.pgfade:not(.hide) .pgfade__mark{opacity:.96;transform:translateY(0);}' +
    '.pgfade:not(.hide) .pgfade__line{width:56px;}';
  document.head.appendChild(style);

  const ov = document.createElement('div');
  ov.className = 'pgfade';
  ov.innerHTML = '<div class="pgfade__mark">ALPENZO</div><div class="pgfade__line"></div>';

  function reveal() {
    if (!ov.isConnected) document.body.appendChild(ov);
    if (reduce) { ov.remove(); return; }
    requestAnimationFrame(() => ov.classList.add('hide'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', reveal);
  else reveal();

  // restored from back/forward cache → make sure the overlay isn't stuck covering
  window.addEventListener('pageshow', (e) => { if (e.persisted || !ov.classList.contains('hide')) reveal(); });

  function go(href) {
    if (reduce) { location.href = href; return; }
    ov.classList.remove('hide');
    setTimeout(() => { location.href = href; }, DUR);
  }
  window.pageGo = go;

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href[0] === '#' || /^https?:|^mailto:|^tel:/.test(href) || a.target === '_blank') return;
    if (!href.endsWith('.html')) return;
    e.preventDefault();
    go(href);
  });
})();

/* ── mobile hamburger nav (auto-injected on any page with .topbar__nav) ── */
(function () {
  if (typeof document === 'undefined') return;

  function init() {
    const bar = document.querySelector('header.topbar') || document.querySelector('.topbar');
    const stdNav = bar && bar.querySelector('.topbar__nav');
    const nav = stdNav || document.querySelector('.hud.nav');   // homepage fallback nav
    if (!nav) return;                                   // pages without any nav → skip
    if (document.querySelector('.alp-burger')) return;  // already built
    const floating = !stdNav;                           // homepage → floating glass burger over the spiral

    const style = document.createElement('style');
    style.textContent =
      '.alp-burger{display:none;align-items:center;justify-content:center;width:42px;height:42px;margin-left:4px;' +
      'background:none;border:none;cursor:pointer;color:inherit;-webkit-tap-highlight-color:transparent;}' +
      '.alp-burger span,.alp-burger span::before,.alp-burger span::after{display:block;width:22px;height:2px;' +
      'background:currentColor;transition:transform .3s var(--ease,ease),opacity .2s ease;}' +
      '.alp-burger span{position:relative;}' +
      '.alp-burger span::before,.alp-burger span::after{content:"";position:absolute;left:0;}' +
      '.alp-burger span::before{top:-7px;}.alp-burger span::after{top:7px;}' +
      '.alp-burger.open span{background:transparent;}' +
      '.alp-burger.open span::before{transform:translateY(7px) rotate(45deg);}' +
      '.alp-burger.open span::after{transform:translateY(-7px) rotate(-45deg);}' +
      '.alp-burger--float{position:fixed;top:70px;left:34px;z-index:8;width:46px;height:46px;border-radius:999px;' +
      'color:#f5f3ee;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);' +
      'backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:inset 0 1px 1px rgba(255,255,255,.08);}' +
      '.alp-drawer{position:fixed;inset:0;z-index:9990;pointer-events:none;}' +
      '.alp-drawer__scrim{position:absolute;inset:0;background:rgba(12,12,12,.45);opacity:0;transition:opacity .35s ease;}' +
      '.alp-drawer__panel{position:absolute;top:0;right:0;height:100%;width:min(80vw,330px);background:#fff;' +
      'box-shadow:-20px 0 60px rgba(0,0,0,.18);transform:translateX(100%);' +
      'transition:transform .42s cubic-bezier(.32,.72,0,1);display:flex;flex-direction:column;padding:88px 30px 40px;}' +
      '.alp-drawer.open{pointer-events:auto;}' +
      '.alp-drawer.open .alp-drawer__scrim{opacity:1;}' +
      '.alp-drawer.open .alp-drawer__panel{transform:translateX(0);}' +
      '.alp-drawer__panel a{font-family:"Bricolage Grotesque",sans-serif;font-weight:700;font-size:22px;' +
      'letter-spacing:-.01em;color:#111;text-decoration:none;padding:15px 0;border-bottom:1px solid rgba(0,0,0,.08);}' +
      '.alp-drawer__panel a:active{opacity:.5;}' +
      '.alp-drawer__close{position:absolute;top:22px;right:22px;width:42px;height:42px;border:none;background:none;' +
      'cursor:pointer;font-size:30px;line-height:1;color:#111;-webkit-tap-highlight-color:transparent;}' +
      '.alp-drawer--dark .alp-drawer__panel{background:#0c0c0c;}' +
      '.alp-drawer--dark .alp-drawer__panel a{color:#f5f3ee;border-bottom-color:rgba(255,255,255,.1);}' +
      '.alp-drawer--dark .alp-drawer__close{color:#f5f3ee;}' +
      '@media(max-width:900px){.topbar__nav{display:none!important;}.alp-burger:not(.alp-burger--float){display:inline-flex!important;}}' +
      '@media(max-width:640px){.hud.nav{display:none!important;}.alp-burger--float{display:inline-flex!important;}}';
    document.head.appendChild(style);

    const btn = document.createElement('button');
    btn.className = 'alp-burger' + (floating ? ' alp-burger--float' : '');
    btn.setAttribute('aria-label', 'Menü');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span>';
    if (floating) document.body.appendChild(btn);
    else (bar.querySelector('.topbar__utils') || bar).appendChild(btn);

    let links = '';
    nav.querySelectorAll('a').forEach((a) => {
      links += '<a href="' + a.getAttribute('href') + '">' + a.textContent.trim() + '</a>';
    });

    const drawer = document.createElement('div');
    drawer.className = 'alp-drawer' + (floating ? ' alp-drawer--dark' : '');
    drawer.innerHTML =
      '<div class="alp-drawer__scrim"></div>' +
      '<nav class="alp-drawer__panel" aria-label="Mobil menü">' +
        '<button class="alp-drawer__close" aria-label="Menüyü kapat">&times;</button>' +
        links +
      '</nav>';
    document.body.appendChild(drawer);

    const open  = () => { drawer.classList.add('open');  btn.classList.add('open');  btn.setAttribute('aria-expanded', 'true');  document.body.style.overflow = 'hidden'; };
    const close = () => { drawer.classList.remove('open'); btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };

    btn.addEventListener('click', () => drawer.classList.contains('open') ? close() : open());
    drawer.querySelector('.alp-drawer__scrim').addEventListener('click', close);
    drawer.querySelector('.alp-drawer__close').addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    drawer.querySelectorAll('.alp-drawer__panel a').forEach((a) => a.addEventListener('click', close));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ── storefront extras: announcement bar · cookie consent · trust line · SSS link · icon cleanup ── */
(function () {
  if (typeof document === 'undefined') return;

  function init() {
    // hide placeholder utility icons (search / account / favorites) — single-product store
    const cleanup = document.createElement('style');
    cleanup.textContent =
      '.search{display:none!important;}' +
      '.iconbtn[aria-label="Hesabım"],.iconbtn[aria-label="Favoriler"]{display:none!important;}';
    document.head.appendChild(cleanup);

    const style = document.createElement('style');
    style.textContent =
      '.alp-annc{background:#0c0c0c;color:#e9e4d9;text-align:center;font-family:"Schibsted Grotesk",sans-serif;' +
      'font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;padding:9px 16px;' +
      'border-bottom:1px solid rgba(200,160,74,.28);}' +
      '.alp-annc b{color:#c8a04a;font-weight:600;padding:0 .55em;}' +
      '.alp-annc--fixed{position:fixed;top:0;left:0;right:0;z-index:45;}' +
      '.alp-cookie{position:fixed;left:16px;right:16px;bottom:18px;margin:0 auto;max-width:560px;z-index:9994;' +
      'background:#0c0c0c;color:#cfcabf;border:1px solid rgba(200,160,74,.3);border-radius:14px;padding:18px 20px;' +
      'display:flex;flex-wrap:wrap;gap:12px 18px;align-items:center;justify-content:space-between;' +
      'box-shadow:0 24px 60px rgba(0,0,0,.45);font-family:"Schibsted Grotesk",sans-serif;font-size:13px;line-height:1.5;' +
      'opacity:0;transform:translateY(16px);transition:opacity .5s ease,transform .5s cubic-bezier(.32,.72,0,1);}' +
      '.alp-cookie.show{opacity:1;transform:none;}' +
      '.alp-cookie__txt{flex:1;min-width:210px;}' +
      '.alp-cookie__txt a{color:#c8a04a;text-decoration:underline;}' +
      '.alp-cookie__btns{display:flex;gap:8px;}' +
      '.alp-cookie button{font-family:inherit;font-size:12px;letter-spacing:.06em;padding:9px 17px;border-radius:999px;' +
      'cursor:pointer;border:1px solid rgba(255,255,255,.2);background:transparent;color:#e9e4d9;' +
      '-webkit-tap-highlight-color:transparent;transition:transform .16s ease;}' +
      '.alp-cookie button:active{transform:scale(.97);}' +
      '.alp-cookie__ok{background:#c8a04a;border-color:#c8a04a;color:#0c0c0c;font-weight:600;}';
    document.head.appendChild(style);

    // announcement bar (limited-drop message)
    const annc = document.createElement('div');
    annc.className = 'alp-annc';
    annc.innerHTML = 'Sınırlı Seri<b>·</b>Sadece 100 Adet Üretildi<b>·</b>Created for Elevation';
    const isHome = !!document.querySelector('#scene');
    if (isHome) annc.classList.add('alp-annc--fixed');
    document.body.insertBefore(annc, document.body.firstChild);
    if (isHome) {                              // push the homepage's fixed top UI below the bar
      const h = annc.offsetHeight;
      const off = document.createElement('style');
      off.textContent =
        '.hud.brand{top:' + (28 + h) + 'px;}.topicons{top:' + (24 + h) + 'px;}' +
        '.alp-burger--float{top:' + (70 + h) + 'px;}';
      document.head.appendChild(off);
    }

    // footer trust line (replaces the generic card list)
    document.querySelectorAll('.footer__pay').forEach((el) => {
      el.textContent = 'Güvenli ödeme · Visa · Mastercard · Troy';
    });

    // SSS link into the footer "Yardım" column
    document.querySelectorAll('.footer h4, .fcol h4').forEach((h) => {
      if (/yard[ıi]m/i.test(h.textContent) && !h.parentElement.querySelector('a[href="sss.html"]')) {
        const a = document.createElement('a');
        a.href = 'sss.html'; a.textContent = 'SSS';
        h.parentElement.appendChild(a);
      }
    });

    // cookie / KVKK consent
    if (!localStorage.getItem('ALPENZO_COOKIE')) {
      const c = document.createElement('div');
      c.className = 'alp-cookie';
      c.innerHTML =
        '<span class="alp-cookie__txt">Deneyimini geliştirmek için çerez kullanıyoruz. ' +
        'Detaylar için <a href="privacy.html">Gizlilik Politikası</a>.</span>' +
        '<span class="alp-cookie__btns">' +
        '<button class="alp-cookie__reject" type="button">Reddet</button>' +
        '<button class="alp-cookie__ok" type="button">Kabul et</button></span>';
      document.body.appendChild(c);
      requestAnimationFrame(() => c.classList.add('show'));
      const done = (v) => { try { localStorage.setItem('ALPENZO_COOKIE', v); } catch (e) {} c.classList.remove('show'); setTimeout(() => c.remove(), 500); };
      c.querySelector('.alp-cookie__ok').addEventListener('click', () => done('accepted'));
      c.querySelector('.alp-cookie__reject').addEventListener('click', () => done('rejected'));
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
