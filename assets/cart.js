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

  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2200);
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
