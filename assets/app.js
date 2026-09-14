/* 桌面操作系统风格个人作品集 —— 交互与渲染 */
(function () {
  'use strict';

  var S = window.SITE;
  var ICONS = window.ICONS || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  /* ---------- 工具 ---------- */
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function icon(name, size, weight) {
    var set = ICONS[name];
    if (!set) return '';
    if (set.svg) return '<svg class="ui-symbol" xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (weight === 'duotone' ? '1.85' : '1.65') +
      '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + set.svg + '</svg>';
    var w = set[weight] || set.regular || set[Object.keys(set)[0]] || [];
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" focusable="false">' +
      w.map(function (p) {
        return '<path d="' + p.d + '"' + (p.op ? ' opacity="' + p.op + '"' : '') + '></path>';
      }).join('') + '</svg>';
  }

  // 按标点断句，每句一行（对应 .sentence-line）
  function sentences(text) {
    var s = String(text == null ? '' : text);
    var m = s.match(/[^，。,.]*[，。,.]+|[^，。,.]+$/gu) || [s];
    return m.map(function (x) {
      return '<span class="sentence-line">' + esc(x.trim()) + '</span>';
    }).join('');
  }

  function pad2(n) { return String(n).padStart(2, '0'); }

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* ---------- 视图渲染 ---------- */
  var TITLES = { product: 'AI 产品案例', stack: '能力与技术栈' };

  function titlebar(view) {
    return '<div class="window-titlebar" aria-hidden="true">' +
      '<div class="traffic-lights"><span class="traffic-light red"></span>' +
      '<span class="traffic-light yellow"></span><span class="traffic-light green"></span></div>' +
      '<span class="window-path">' + esc(TITLES[view] || ('~/portfolio/' + view)) + '</span>' +
      '<span class="window-minimize">—</span></div>';
  }

  function portraitRig() {
    return '<div class="portrait-rig" aria-label="' + esc(S.profile.name) + '个人照片">' +
      '<svg class="portrait-rope" aria-hidden="true" focusable="false"><path></path></svg>' +
      '<div class="portrait-drag-layer">' +
      '<figure class="portrait-card">' +
      icon('Paperclip', 24, 'duotone').replace('<svg', '<svg class="portrait-clip"') +
      '<img src="' + S.profile.portrait + '" alt="' + esc(S.profile.name) + '职业照" draggable="false">' +
      '<figcaption>LH · AI PM</figcaption>' +
      '</figure></div></div>';
  }

  function aboutView() {
    return '<div class="workspace-view about-view">' +
      '<section class="identity-panel" aria-labelledby="profile-name">' +
      portraitRig() +
      '<p class="section-kicker">HELLO, I\'M</p>' +
      '<h1 id="profile-name">' + esc(S.profile.name) + '</h1>' +
      '<p class="role-title">' + esc(S.profile.role) + '</p>' +
      '<span class="identity-rule" aria-hidden="true"></span>' +
      '<p class="hero-statement">' + sentences(S.profile.tagline) + '</p>' +
      '<p class="proof-line">' + icon('CheckCircle', 17, 'fill') + esc(S.profile.proof) + '</p>' +
      '<p class="handwritten-formula" aria-label="1 Person plus AI equals 1 Team">' +
      '<span>1 Person</span><b>+</b><span>AI</span><b>=</b><span>1 Team</span></p>' +
      '<div class="hero-actions">' +
      '<button class="primary-action" type="button" data-goto="product">查看产品案例 ' + icon('ArrowRight', 18, 'bold') + '</button>' +
      '<button class="text-action" type="button" data-goto="stack">查看能力与技术栈 ' + icon('ArrowRight', 16, 'bold') + '</button>' +
      '</div></section>' +
      decisionSystem() + '</div>';
  }

  function decisionSystem() {
    var lanes = S.decisionLanes.map(function (n, i) {
      var tone = n.tone === 'blue' ? '' : ' lane-' + n.tone;
      return '<button class="decision-lane' + tone + '" type="button" data-lane="' + i + '" aria-pressed="false" style="--lane-index:' + i + '">' +
        '<span class="map-node input-node"><span class="node-icon">' + icon(n.inputIcon, 25, 'duotone') + '</span>' +
        '<span><small>INPUT 0' + (i + 1) + '</small><strong>' + esc(n.input) + '</strong></span></span>' +
        '<span class="signal-path path-in" aria-hidden="true">' + icon('ArrowRight', 16, 'bold') + '</span>' +
        '<span class="core-spacer" aria-hidden="true"></span>' +
        '<span class="signal-path path-out" aria-hidden="true">' + icon('ArrowRight', 16, 'bold') + '</span>' +
        '<span class="map-node output-node"><span class="node-icon">' + icon(n.outputIcon, 25, 'duotone') + '</span>' +
        '<span><small>OUTPUT 0' + (i + 1) + '</small><strong>' + esc(n.output) + '</strong></span></span>' +
        '</button>';
    }).join('');

    return '<section class="decision-system" aria-labelledby="decision-title">' +
      '<div class="system-heading"><span></span><h2 id="decision-title">PRODUCT DECISION SYSTEM</h2><span></span></div>' +
      '<div class="decision-network">' +
      '<div class="decision-core" aria-label="产品定义与决策">' + icon('Target', 31, 'duotone') +
      '<strong>产品定义与决策</strong><small>DEFINE · PRIORITIZE · ALIGN</small></div>' +
      lanes + '</div>' +
      '<div class="decision-explainer">' + icon('CheckCircle', 18, 'fill') +
      '<p>' + sentences(S.decisionLanes[1].detail) + '</p></div>' +
      '</section>';
  }

  function linkHtml(url, label, cls) {
    if (!url) return '';
    var ext = /^https?:/i.test(url);
    return '<a href="' + esc(url) + '"' + (ext ? ' target="_blank" rel="noreferrer"' : '') + '>' +
      esc(label) + ' ' + icon(ext ? 'ArrowUpRightSquare' : 'ArrowRight', 15, 'regular') + '</a>';
  }

  function workCard(w) {
    if (w.kind === 'product') {
      var cover = '<div class="work-product-cover"><img src="' + esc(w.cover) + '" alt="' + esc(w.title) + '界面预览"></div>';
      return '<article class="work-showcase-card work-product-card">' + cover +
        '<div class="work-card-copy"><small>' + esc(w.meta) + '</small><h2>' + esc(w.title) + '</h2>' +
        '<p>' + esc(w.copy) + '</p>' +
        '<span class="work-access-note">' + esc(w.status) + '</span>' +
        '<div class="project-actions">' + linkHtml(w.githubUrl, w.githubLabel || 'GitHub', '') +
        '<button type="button" data-preview="' + esc(w.id) + '">演示效果 ' + icon('PhotoStack', 16, 'regular') + '</button>' +
        '</div>' +
        '</div></article>';
    }
    // work / stack / 其它无封面卡片
    var kicker = [w.meta, w.index].filter(Boolean).join(' · ');
    return '<article class="work-showcase-card work-tool-card' + (w.tone ? ' tone-' + w.tone : '') + '">' +
      '<div class="work-card-symbol">' + icon(w.symbol || 'GithubLogo', 42, 'duotone') + '</div>' +
      '<div class="work-card-copy"><small>' + esc(kicker) + '</small>' +
      '<h2>' + esc(w.title) + '</h2><p>' + sentences(w.copy) + '</p>' +
      linkHtml(w.url, w.action || '了解更多', '') +
      '</div></article>';
  }

  function openProjectPreview(id) {
    var project = S.works.find(function (w) { return w.id === id; });
    var dialog = $('#projectPreview');
    if (!project || !dialog) return;
    dialog.innerHTML = '<div class="preview-heading"><div><small>PROJECT DEMO</small><h2 id="previewTitle">' + esc(project.title) + '</h2></div>' +
      '<form method="dialog"><button class="preview-close" aria-label="关闭演示">' + icon('Xmark', 18, 'regular') + '</button></form></div>' +
      '<p class="preview-note">' + esc(project.demoNote) + '</p>' +
      '<div class="preview-gallery">' + project.previews.map(function (shot) {
        return '<figure><img src="' + esc(shot.src) + '" alt="' + esc(shot.caption) + '"><figcaption>' + esc(shot.caption) + '</figcaption></figure>';
      }).join('') + '</div><div class="project-actions">' + linkHtml(project.githubUrl, project.githubLabel || 'GitHub', '') + '</div>';
    dialog.showModal();
  }

  function carousel(list, cardHtml, extraClass) {
    return '<div class="workspace-view work-showcase ' + (extraClass || '') + '">' +
      '<div class="work-carousel-rail">' +
      list.map(function (item, i) {
        var off = i, dist = Math.abs(off);
        return '<div class="work-carousel-slot" style="--work-offset:' + off + ';--work-distance:' + dist + '" data-slot="' + i + '" tabindex="-1">' + cardHtml(item) + '</div>';
      }).join('') +
      '</div>' +
      '<button class="work-carousel-nav work-carousel-prev" type="button" aria-label="上一张卡片">' + icon('ChevronLeft', 19, 'regular') + '</button>' +
      '<button class="work-carousel-nav work-carousel-next" type="button" aria-label="下一张卡片">' + icon('ChevronRight', 19, 'regular') + '</button>' +
      '<p class="work-carousel-hint"><span>01</span> / ' + pad2(list.length) + ' · ← →</p>' +
      '</div>';
  }

  function workView(kind) {
    var list = S.works.filter(function (w) { return w.kind === kind; });
    return carousel(list, workCard, '');
  }

  function contactView() {
    return '<div class="workspace-view detail-view contact-view">' +
      '<div class="contact-copy">' +
      '<p class="section-kicker">CONTACT</p>' +
      '<h1>' + sentences('联系我，或继续查看公开作品。') + '</h1>' +
      '<p>' + sentences('邮箱、GitHub 与小红书都可直接联系，也欢迎就 AI 产品与 Agent 工程化交流。') + '</p>' +
      '</div>' +
      '<div class="contact-status" aria-label="联系方式">' +
      '<div class="contact-status-heading">' + icon('EnvelopeSimple', 28, 'duotone') + '<span>CHANNELS OPEN</span></div>' +
      '<div class="contact-channels">' +
      S.channels.map(function (c) {
        return '<a href="' + c.href + '"' + (c.external ? ' target="_blank" rel="noreferrer"' : '') + '>' +
          '<span class="channel-icon">' + icon(c.icon, 21, 'duotone') + '</span>' +
          '<span><small>' + esc(c.label) + '</small><strong>' + esc(c.value) + '</strong></span>' +
          icon(c.external ? 'ArrowUpRight' : 'ArrowRight', 16, 'bold') + '</a>';
      }).join('') +
      '</div></div></div>';
  }

  function viewHtml(view) {
    if (view === 'about') return aboutView();
    if (view === 'contact') return contactView();
    var list = S.works.filter(function (w) { return w.kind === view; });
    if (list.length) return carousel(list, workCard, '');
    return aboutView();
  }

  /* ---------- 应用状态 ---------- */
  var state = { view: 'about', lane: 1 };

  var shell = $('#mainView');
  var stage = $('#stage');
  var sidebar = $('#sidebar');
  var osContext = $('#osContext');
  var titlebarHost = $('#titlebarHost');

  function renderSidebar() {
    sidebar.innerHTML = S.nav.map(function (n) {
      var active = n.id === state.view;
      return '<button type="button" class="' + (active ? 'is-active' : '') + '" data-nav="' + n.id + '"' +
        (active ? ' aria-current="page"' : '') + '>' +
        '<span class="nav-icon">' + icon(n.icon, 26, active ? 'duotone' : 'regular') + '</span>' +
        '<span>' + n.label + '</span></button>';
    }).join('');
  }

  var cleanups = [];
  function clearView() {
    while (cleanups.length) { try { cleanups.pop()(); } catch (e) {} }
  }

  function setView(view) {
    clearView();
    state.view = view;
    var active = S.nav.filter(function (n) { return n.id === view; })[0];
    osContext.textContent = active ? active.label : 'ABOUT';
    titlebarHost.innerHTML = titlebar(view);
    renderSidebar();
    stage.innerHTML = viewHtml(view);
    // 重新触发进场动画
    stage.style.animation = 'none';
    void stage.offsetWidth;
    stage.style.animation = '';
    bindView();
  }

  /* ---------- 视图内交互 ---------- */
  function bindView() {
    // ABOUT 决策系统
    var lanes = stage.querySelectorAll('.decision-lane');
    var explainer = $('.decision-explainer', stage);

    function paintLanes() {
      Array.prototype.forEach.call(lanes, function (b, i) {
        var on = i === state.lane;
        b.classList.toggle('is-selected', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      if (explainer) {
        explainer.querySelector('p').innerHTML = sentences(S.decisionLanes[state.lane].detail);
        explainer.style.animation = 'none';
        void explainer.offsetWidth;
        explainer.style.animation = '';
      }
    }
    if (lanes.length) {
      paintLanes();
      Array.prototype.forEach.call(lanes, function (b) {
        b.addEventListener('click', function () {
          state.lane = +b.getAttribute('data-lane');
          paintLanes();
        });
      });
    }

    // 首页按钮跳转
    Array.prototype.forEach.call(stage.querySelectorAll('[data-goto]'), function (b) {
      b.addEventListener('click', function () { setView(b.getAttribute('data-goto')); });
    });

    // 悬挂照片拖拽
    var rig = $('.portrait-rig', stage);
    if (rig) bindPortrait(rig);

    Array.prototype.forEach.call(stage.querySelectorAll('[data-preview]'), function (button) {
      button.addEventListener('click', function () { openProjectPreview(button.getAttribute('data-preview')); });
    });

    // 3D 卡片轮播
    var rail = $('.work-carousel-rail', stage);
    if (rail) bindCarousel(rail);
  }

  /* ---------- 悬挂照片（绳子物理） ---------- */
  function bindPortrait(rig) {
    var layer = $('.portrait-drag-layer', rig);
    var path = $('.portrait-rope path', rig);
    var svg = $('.portrait-rope', rig);
    if (!layer || !path) return;

    var st = { pointerId: null, startX: 0, startY: 0, x: 0, y: 0, vx: 0, vy: 0, lastX: 0, lastY: 0, lastTime: 0, raf: null, timer: null };

    function apply(x, y, rot, vx, vy) {
      rot = rot || 0; vx = vx || 0; vy = vy || 0;
      layer.style.setProperty('--portrait-x', x + 'px');
      layer.style.setProperty('--portrait-y', y + 'px');
      layer.style.setProperty('--portrait-rotation', rot + 'deg');
      var u = layer.offsetWidth / 2, d = -84;
      var fx = u + x, fy = 4 + y;
      var m = Math.hypot(fx - u, fy - d);
      var h = Math.max(-56, Math.min(56, x * 0.18 + vx * 0.025));
      var g = Math.max(-18, Math.min(18, vy * 0.012));
      var c1x = u + h * 0.16, c1y = d + m * 0.34;
      var c2x = fx - h * 0.72, c2y = fy - m * 0.31 + g;
      path.setAttribute('d', 'M ' + u + ' ' + d + ' C ' + c1x + ' ' + c1y + ', ' + c2x + ' ' + c2y + ', ' + fx + ' ' + fy);
      if (svg) svg.style.setProperty('--rope-length', m + 'px');
    }

    requestAnimationFrame(function () { apply(0, 0, 0); });

    layer.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      cancelAnimationFrame(st.raf); clearTimeout(st.timer);
      var now = performance.now();
      st.pointerId = e.pointerId; st.startX = e.clientX; st.startY = e.clientY;
      st.x = 0; st.y = 0; st.vx = 0; st.vy = 0;
      st.lastX = e.clientX; st.lastY = e.clientY; st.lastTime = now;
      layer.classList.add('is-dragging');
      try { layer.setPointerCapture(e.pointerId); } catch (err) {}
      e.preventDefault();
    });

    layer.addEventListener('pointermove', function (e) {
      if (st.pointerId !== e.pointerId) return;
      var x = Math.max(-180, Math.min(180, e.clientX - st.startX));
      var y = Math.max(-70, Math.min(170, e.clientY - st.startY));
      var now = performance.now();
      var dt = Math.max((now - st.lastTime) / 1000, 0.008);
      var ivx = Math.max(-1600, Math.min(1600, (e.clientX - st.lastX) / dt));
      var ivy = Math.max(-1600, Math.min(1600, (e.clientY - st.lastY) / dt));
      var vx = st.vx * 0.58 + ivx * 0.42;
      var vy = st.vy * 0.58 + ivy * 0.42;
      var rot = Math.max(-8, Math.min(8, x * 0.032 + vx * 0.0018));
      st.x = x; st.y = y; st.vx = vx; st.vy = vy;
      st.lastX = e.clientX; st.lastY = e.clientY; st.lastTime = now;
      apply(x, y, rot, vx, vy);
    });

    function end(e) {
      if (st.pointerId !== e.pointerId) return;
      st.pointerId = null;
      layer.classList.remove('is-dragging');
      try { if (layer.hasPointerCapture(e.pointerId)) layer.releasePointerCapture(e.pointerId); } catch (err) {}
      if (reducedMotion()) { apply(0, 0, 0); return; }

      var x0 = st.x, y0 = st.y, vx0 = st.vx * 0.15, vy0 = st.vy * 0.15;
      var t0 = performance.now(), damping = 5.5, omega = 8.8;
      var px = x0, py = y0, ph = t0;

      function spring(a, v, t) {
        var e2 = Math.exp(-damping * t);
        return e2 * (a * Math.cos(omega * t) + ((v + damping * a) / omega) * Math.sin(omega * t));
      }
      function step(now) {
        var t = (now - t0) / 1000;
        var dt = Math.max((now - ph) / 1000, 0.008);
        var x = spring(x0, vx0, t), y = spring(y0, vy0, t);
        var vx = (x - px) / dt, vy = (y - py) / dt;
        px = x; py = y; ph = now;
        var rot = Math.max(-8, Math.min(8, x * 0.028 + vx * 0.002));
        apply(x, y, rot, vx, vy);
        if (t >= 1.55 || (Math.abs(x) + Math.abs(y) < 0.35 && Math.abs(vx) + Math.abs(vy) < 3)) {
          apply(0, 0, 0); st.raf = null; clearTimeout(st.timer); st.timer = null; return;
        }
        st.raf = requestAnimationFrame(step);
      }
      st.raf = requestAnimationFrame(step);
      st.timer = setTimeout(function () {
        cancelAnimationFrame(st.raf); st.raf = null; st.timer = null; apply(0, 0, 0);
      }, 1650);
    }
    layer.addEventListener('pointerup', end);
    layer.addEventListener('pointercancel', end);
  }

  /* ---------- 3D 卡片轮播 ---------- */
  function bindCarousel(rail) {
    var view = $('.workspace-view', stage) || rail.parentElement;
    var slots = Array.prototype.slice.call(rail.querySelectorAll('.work-carousel-slot'));
    var prev = $('.work-carousel-prev', view);
    var next = $('.work-carousel-next', view);
    var hint = $('.work-carousel-hint span', view);
    var idx = 0;
    var st = { pointerId: null, startX: 0, dx: 0, moved: false, suppressUntil: 0, wheelLock: 0 };

    function paint() {
      slots.forEach(function (s, i) {
        var off = i - idx, dist = Math.abs(off);
        s.style.setProperty('--work-offset', off);
        s.style.setProperty('--work-distance', dist);
        s.classList.toggle('is-active', off === 0);
        if (off === 0) { s.removeAttribute('role'); s.removeAttribute('tabindex'); s.removeAttribute('aria-label'); }
        else { s.setAttribute('role', 'button'); s.setAttribute('tabindex', '0'); s.setAttribute('aria-label', '查看第 ' + (i + 1) + ' 张卡片'); }
      });
      rail.style.setProperty('--work-drag-x', '0px');
      if (hint) hint.textContent = pad2(idx + 1);
      if (prev) prev.disabled = idx === 0;
      if (next) next.disabled = idx === slots.length - 1;
    }

    function go(i) { idx = Math.max(0, Math.min(slots.length - 1, i)); paint(); }
    paint();

    function setDrag(x) { rail.style.setProperty('--work-drag-x', x + 'px'); }

    rail.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || e.target.closest('a, button')) return;
      st.pointerId = e.pointerId; st.startX = e.clientX; st.dx = 0; st.moved = false;
    });
    rail.addEventListener('pointermove', function (e) {
      if (st.pointerId !== e.pointerId) return;
      st.dx = e.clientX - st.startX;
      if (!st.moved && Math.abs(st.dx) > 4) {
        st.moved = true; rail.classList.add('is-dragging');
        try { rail.setPointerCapture(e.pointerId); } catch (err) {}
      }
      if (st.moved) setDrag(Math.max(-150, Math.min(150, st.dx * 0.68)));
    });
    function up(e) {
      if (st.pointerId !== e.pointerId) return;
      st.pointerId = null;
      rail.classList.remove('is-dragging');
      try { if (rail.hasPointerCapture(e.pointerId)) rail.releasePointerCapture(e.pointerId); } catch (err) {}
      setDrag(0);
      if (st.moved) {
        st.suppressUntil = performance.now() + 320;
        if (st.dx < -54 && idx < slots.length - 1) go(idx + 1);
        else if (st.dx > 54 && idx > 0) go(idx - 1);
      }
    }
    rail.addEventListener('pointerup', up);
    rail.addEventListener('pointercancel', up);

    rail.addEventListener('wheel', function (e) {
      var d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(d) >= 18 && performance.now() >= st.wheelLock) {
        e.preventDefault();
        st.wheelLock = performance.now() + 460;
        if (d > 0 && idx < slots.length - 1) go(idx + 1);
        else if (d < 0 && idx > 0) go(idx - 1);
      }
    }, { passive: false });

    rail.addEventListener('click', function (e) {
      if (performance.now() < st.suppressUntil) { e.preventDefault(); e.stopPropagation(); return; }
      var slot = e.target.closest ? e.target.closest('.work-carousel-slot') : null;
      if (slot) {
        var i = slots.indexOf(slot);
        if (i >= 0 && i !== idx) go(i);
      }
    });

    slots.forEach(function (s, i) {
      s.addEventListener('keydown', function (e) {
        if (i === idx) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(i); }
      });
    });

    function onKey(e) {
      if ($('#projectPreview[open]') || e.target.closest('a, button')) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
    }
    window.addEventListener('keydown', onKey);
    cleanups.push(function () { window.removeEventListener('keydown', onKey); });

    if (prev) prev.addEventListener('click', function () { go(idx - 1); });
    if (next) next.addEventListener('click', function () { go(idx + 1); });
  }

  /* ---------- 开机终端 + 启动动画 ---------- */
  function boot() {
    var term = $('#terminal');
    var bootView = $('#bootView');
    var bootLines = $('#bootLines');
    var cta = $('#bootCta');
    var reduced = reducedMotion();

    var prompt = S.profile.user + '@' + S.profile.host + ' ~ % ';
    var cancelled = false, launched = false, ready = false, dead = false;
    var pending = [];

    function wait(ms) {
      return new Promise(function (res) {
        if (dead || cancelled) return res();
        var id = setTimeout(function () { pending = pending.filter(function (f) { return f !== done; }); res(); }, ms);
        function done() { clearTimeout(id); res(); }
        pending.push(done);
      });
    }
    function skip() {
      if (cancelled) return;
      cancelled = true;
      pending.slice().forEach(function (f) { f(); });
      pending.length = 0;
    }
    function line(html, cls) {
      var d = document.createElement('div');
      d.className = 'term-line ' + (cls || '');
      d.innerHTML = html;
      bootLines.appendChild(d);
      return d;
    }
    function scroll() { bootView.scrollTop = bootView.scrollHeight; }

    function bootHtml(l) {
      if (l.kind === 'title') return '<span class="boot-title">' + esc(l.text) + '</span>';
      if (l.kind === 'ok') return '<span class="boot-ok">[ <span class="term-ok">OK</span> ] ' + esc(l.text) + '</span>';
      if (l.kind === 'login') return '<span class="boot-login">' + esc(l.text) + '</span>';
      return '<span class="term-dim">' + esc(l.text) + '</span>';
    }
    function introHtml(l) {
      if (l.kind === 'blank') return '&nbsp;';
      if (l.kind === 'gold') return '<span class="term-gold">' + esc(l.text) + '</span>';
      return '<span class="term-out">' + esc(l.text) + '</span>';
    }

    async function typeCmd(l) {
      var el = line('', 'intro-line');
      el.dataset.command = l.text;
      el.innerHTML = '<span class="term-prompt">' + esc(prompt) + '</span><span class="term-cmd"></span>' +
        (l.cursor ? '<span class="cursor main-cursor"></span>' : '');
      var cmd = el.querySelector('.term-cmd');
      for (var i = 0; i < l.text.length; i++) {
        if (cancelled) { cmd.textContent = l.text; break; }
        cmd.textContent += l.text[i];
        scroll();
        await wait(30);
      }
      scroll();
      await wait(250);
    }

    async function runBoot() {
      term.classList.remove('power-off');
      await wait(360);
      for (var i = 0; i < S.bootLines.length; i++) {
        line(bootHtml(S.bootLines[i]), 'boot-line');
        scroll();
        await wait(125);
      }
      await wait(360);
      for (var j = 0; j < S.introLines.length; j++) {
        var l = S.introLines[j];
        if (l.kind === 'cmd') await typeCmd(l);
        else { line(introHtml(l), 'intro-line'); scroll(); await wait(l.kind === 'blank' ? 160 : l.kind === 'gold' ? 320 : 230); }
      }
      ready = true;
      cta.classList.add('visible');
    }

    function morph(src, target, text) {
      if (!src || !target) return null;
      var r = src.getBoundingClientRect(), i = target.getBoundingClientRect();
      var a = document.createElement('span');
      a.className = 'morph-token';
      a.textContent = src.textContent;
      a.style.left = r.left + 'px';
      a.style.top = r.top + 'px';
      a.style.width = Math.max(r.width, 52) + 'px';
      a.style.height = r.height + 'px';
      document.body.appendChild(a);
      if (typeof a.animate !== 'function') {
        setTimeout(function () { a.remove(); }, 300);
        return Promise.resolve();
      }
      var anim = a.animate([
        { transform: 'translate3d(0,0,0)', opacity: 1, filter: 'blur(0)' },
        { transform: 'translate3d(' + ((i.left - r.left) * 0.28) + 'px,' + ((i.top - r.top) * 0.18) + 'px,0)', opacity: 1, filter: 'blur(0)', offset: 0.3 },
        { transform: 'translate3d(' + (i.left - r.left) + 'px,' + (i.top - r.top) + 'px,0)', opacity: 0.06, filter: 'blur(0.5px)' }
      ], { duration: 1080, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'forwards' });
      setTimeout(function () {
        a.classList.add('is-changing');
        setTimeout(function () { a.textContent = text; }, 90);
      }, 250);
      return anim.finished.catch(function () {}).then(function () { a.remove(); });
    }

    async function launch() {
      shell.classList.add('is-primed');
      shell.setAttribute('aria-hidden', 'false');
      if (reduced) {
        term.classList.add('gone');
        shell.classList.add('is-live');
        return;
      }
      var jobs = [
        ['whoami', '[data-nav="about"]', 'ABOUT'],
        ['cat stack.md', '[data-nav="stack"]', 'STACK'],
        ['open ' + S.profile.user + '.os', '.os-mark', S.profile.markText]
      ].map(function (t) {
        var src = bootLines.querySelector('[data-command="' + t[0] + '"] .term-cmd');
        return morph(src, document.querySelector(t[1]), t[2]);
      }).filter(Boolean);

      term.classList.add('launching');
      setTimeout(function () { shell.classList.add('is-live'); }, 420);
      await Promise.allSettled(jobs);
      term.classList.add('gone');
    }

    async function enter() {
      if (launched || !ready) return;
      launched = true;
      cta.classList.remove('visible');
      cta.classList.add('hidden');
      var cur = term.querySelector('.main-cursor');
      if (cur) cur.remove();
      line('<span class="term-launch">&gt; Initializing personal operating system...</span>', 'intro-line launch-line');
      scroll();
      await wait(220);
      line('<span class="term-ready">SYSTEM READY</span>', 'intro-line ready-line');
      scroll();
      await wait(180);
      await launch();
    }

    term.classList.add('power-off');
    setView('about');
    runBoot();

    document.addEventListener('keydown', function (e) {
      if (launched) return;
      if (e.key === 'Enter' && ready) enter();
      else if (!ready) skip();
    });
    term.addEventListener('pointerdown', function (e) {
      if (launched) return;
      if (e.target.closest && e.target.closest('#bootCta')) return;
      if (!ready) skip();
    });
    cta.addEventListener('click', enter);
  }

  /* ---------- 身份标识 ---------- */
  function paintIdentity() {
    var p = S.profile;
    $('#osMark').innerHTML = '<span>' + esc(p.markText) + '</span><span class="os-cursor" aria-hidden="true"></span>';
    $('#footerPrompt').innerHTML = '<b>' + esc(p.user) + '@os</b> ~ % open portfolio';
    $('#termTitle').textContent = p.user + '@' + p.host + ' — zsh — 100×30';
    document.title = p.name + ' · ' + p.role;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', p.name + ' · ' + p.role + ' · ' + p.tagline);
  }
  paintIdentity();

  /* ---------- 启动 ---------- */
  $('#osMark').addEventListener('click', function () { setView('about'); });
  sidebar.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-nav]') : null;
    if (btn) setView(btn.getAttribute('data-nav'));
  });
  boot();
})();
