/* ============================================================
   dev_cheatsheet · app.js
   Render dinámico de categorías, copy-to-clipboard,
   buscador global y filtros. Todo sin frameworks.
   ============================================================ */
(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Toast helper ---------------------------------- */
  const toastEl = $('#appToast');
  const toastMsg = $('#toastMsg');
  const toast = toastEl ? new bootstrap.Toast(toastEl, { delay: 1800 }) : null;
  const showToast = (msg) => {
    if (!toast) return;
    toastMsg.textContent = msg;
    toast.show();
  };

  /* ---------- Copy to clipboard ----------------------------- */
  async function copyCmd(text, btn) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      if (btn) {
        const ico = btn.querySelector('.btn-icon-default');
        const ok = btn.querySelector('.btn-icon-ok');
        btn.classList.add('is-copied');
        ico && (ico.style.display = 'none');
        ok && (ok.style.display = 'inline-block');
        setTimeout(() => {
          btn.classList.remove('is-copied');
          ico && (ico.style.display = '');
          ok && (ok.style.display = 'none');
        }, 1400);
      }
      showToast('✔ Comando copiado al portapapeles');
    } catch (e) {
      showToast('⚠ No se pudo copiar. Selección manual.');
    }
  }

  /* ---------- Syntax highlight "ligero" (estilo monokai) ---- */
  function lightHL(text) {
    const escape = (s) => s.replace(/[&<>]/g, (c) =>
      ({ '&': '&', '<': '<', '>': '>' }[c]));
    let html = escape(text);

    // flags tipo --algo  o -a
    html = html.replace(/(--?[a-zA-Z][\w-]*)/g, '<span class="tk-flag">$1</span>');
    // strings entre comillas
    html = html.replace(/("([^"\\]|\\.)*")/g, '<span class="tk-str">$1</span>');
    // comando inicial (primera palabra antes de espacio)
    html = html.replace(/^(\S+)/, '<span class="tk-cmd">$1</span>');
    // pipes y redirecciones
    html = html.replace(/([|&;])/g, '<span class="tk-op">$1</span>');
    return html;
  }

  /* ---------- Render: card de comando ----------------------- */
  function cmdCard(cmd, catId, idx) {
    const id = `cmd-${catId}-${idx}`;
    return `
      <article class="cmd-card" data-cat="${catId}" data-label="${cmd.label.toLowerCase()}" data-cmd="${cmd.cmd.replace(/"/g, '"')}">
        <div class="cmd-card-head">
          <span class="cmd-label">${cmd.label}</span>
          <button class="btn-copy" type="button"
                  data-copy="${cmd.cmd.replace(/"/g, '"')}"
                  aria-label="Copiar comando ${cmd.label}"
                  title="Copiar al portapapeles">
            <i class="bi bi-clipboard btn-icon-default"></i>
            <i class="bi bi-check2-circle btn-icon-ok" style="display:none"></i>
          </button>
        </div>
        <pre class="cmd-block"><code id="${id}" class="lang-bash"><span class="tk-prompt">$</span> ${lightHL(cmd.cmd)}</code></pre>
      </article>
    `;
  }

  /* ---------- Render: card de categoría --------------------- */
  function catCard(cat, cmdsPreview = 5) {
    const total = cat.commands.length;
    const preview = cat.commands.slice(0, cmdsPreview).map((c, i) => cmdCard(c, cat.id, i)).join('');
    const remaining = total - cmdsPreview;

    return `
      <div class="col-md-6 col-xl-4">
        <div class="cat-card h-100" data-cat="${cat.id}" style="--cat-color:${cat.color}">
          <div class="cat-head">
            <div class="cat-icon"><i class="${cat.icon}"></i></div>
            <div>
              <h3 class="cat-title">${cat.title}</h3>
              <p class="cat-desc">${cat.description}</p>
            </div>
          </div>

          <div class="cat-cmds">
            ${preview}
          </div>

          <div class="cat-foot d-flex justify-content-between align-items-center">
            <span class="cat-count">
              <i class="bi bi-stack"></i>
              ${total} comandos
              ${remaining > 0 ? `<span class="cat-extra">+${remaining}</span>` : ''}
            </span>
            <button class="btn btn-ghost btn-sm" data-showmore="${cat.id}" type="button">
              Ver todos <i class="bi bi-arrow-down-short"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------- Render: listado completo ---------------------- */
  function fullListItem(cmd, catId, idx) {
    return `
      <li class="all-item" data-cat="${catId}" data-label="${cmd.label.toLowerCase()}" data-cmd="${cmd.cmd.replace(/"/g, '"')}">
        <span class="all-bullet" style="background:${getCatColor(catId)}"></span>
        <span class="all-label">${cmd.label}</span>
        <button class="btn-copy btn-copy-inline" type="button"
                data-copy="${cmd.cmd.replace(/"/g, '"')}"
                aria-label="Copiar ${cmd.label}"
                title="Copiar">
          <i class="bi bi-clipboard btn-icon-default"></i>
          <i class="bi bi-check2-circle btn-icon-ok" style="display:none"></i>
        </button>
        <pre class="all-cmd"><code><span class="tk-prompt">$</span> ${lightHL(cmd.cmd)}</code></pre>
      </li>
    `;
  }

  let dataCache = null;
  function getCatColor(id) {
    return dataCache?.categories.find(c => c.id === id)?.color || '#f8f8f2';
  }

  /* ---------- Tabs de filtro -------------------------------- */
  function buildTabs(categories) {
    const wrap = $('#filterTabs');
    if (!wrap) return;
    wrap.innerHTML = `
      <button class="filter-tab is-active" data-filter="all" type="button">
        <i class="bi bi-collection"></i> Todos
      </button>
      ${categories.map(c => `
        <button class="filter-tab" data-filter="${c.id}" type="button"
                style="--cat-color:${c.color}">
          <i class="${c.icon}"></i> ${c.title}
        </button>
      `).join('')}
    `;
  }

  /* ---------- Buscador -------------------------------------- */
  function setupSearch(categories) {
    const btn = $('#searchToggle');
    const panel = $('#searchPanel');
    const input = $('#searchInput');
    const close = $('#searchClose');
    const results = $('#searchResults');
    const fromHero = $('#scrollSearch');

    const open = () => {
      panel.classList.add('search-panel--visible');
      panel.setAttribute('aria-hidden', 'false');
      setTimeout(() => input.focus(), 100);
    };
    const closeSearch = () => {
      panel.classList.remove('search-panel--visible');
      panel.setAttribute('aria-hidden', 'true');
      input.value = '';
      results.innerHTML = '';
    };

    btn?.addEventListener('click', () =>
      panel.classList.contains('search-panel--visible') ? closeSearch() : open()
    );
    close?.addEventListener('click', closeSearch);
    fromHero?.addEventListener('click', () => {
      open();
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    });

    /* Atajos: Ctrl+K / Cmd+K */
    document.addEventListener('keydown', (e) => {
      const isMod = e.ctrlKey || e.metaKey;
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (panel.classList.contains('search-panel--visible')) closeSearch(); else open();
      }
      if (e.key === 'Escape' && panel.classList.contains('search-panel--visible')) closeSearch();
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        open();
      }
    });

    const all = categories.flatMap(c =>
      c.commands.map(cmd => ({ ...cmd, catId: c.id, catTitle: c.title, catColor: c.color, catIcon: c.icon }))
    );

    const renderResults = (q) => {
      if (!q) { results.innerHTML = ''; return; }
      const ql = q.toLowerCase();
      const matches = all.filter(it =>
        it.cmd.toLowerCase().includes(ql) || it.label.toLowerCase().includes(ql) || it.catTitle.toLowerCase().includes(ql)
      ).slice(0, 12);

      if (!matches.length) {
        results.innerHTML = `<div class="search-empty">Sin resultados para "<strong>${q}</strong>"</div>`;
        return;
      }
      results.innerHTML = matches.map(m => `
        <button class="search-hit" data-copy="${m.cmd.replace(/"/g, '"')}" type="button">
          <span class="hit-tag" style="--cat-color:${m.catColor}">
            <i class="${m.catIcon}"></i> ${m.catTitle}
          </span>
          <span class="hit-label">${m.label}</span>
          <code class="hit-cmd"><span class="tk-prompt">$</span> ${lightHL(m.cmd)}</code>
          <i class="bi bi-clipboard ms-2"></i>
        </button>
      `).join('');
    };

    input?.addEventListener('input', (e) => renderResults(e.target.value.trim()));
    results?.addEventListener('click', (e) => {
      const hit = e.target.closest('.search-hit');
      if (!hit) return;
      const cmd = hit.dataset.copy;
      copyCmd(cmd.replace(/"/g, '"'), hit);
    });
  }

  /* ---------- Filtros tabs ---------------------------------- */
  function setupFilters() {
    const tabs = $('#filterTabs');
    const list = $('#allList');
    if (!tabs || !list) return;

    tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;
      $$('.filter-tab', tabs).forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const filter = tab.dataset.filter;

      $$('.all-group', list).forEach(g => {
        const match = filter === 'all' || g.dataset.cat === filter;
        g.style.display = match ? '' : 'none';
      });
    });
  }

  /* ---------- Eventos delegados ----------------------------- */
  function bindGlobalEvents() {
    // copy buttons
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-copy]');
      if (!btn) return;
      const cmd = btn.dataset.copy.replace(/"/g, '"');
      copyCmd(cmd, btn);
    });

    // show more per category
    document.addEventListener('click', (e) => {
      const more = e.target.closest('[data-showmore]');
      if (!more) return;
      const catId = more.dataset.showmore;
      const allTab = $('.filter-tab[data-filter="' + catId + '"]');
      if (allTab) allTab.click();
      document.getElementById('todos')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- To top ---------------------------------------- */
  function setupToTop() {
    const btn = $('#toTop');
    if (!btn) return;
    const toggle = () => {
      if (window.scrollY > 600) btn.removeAttribute('hidden');
      else btn.setAttribute('hidden', '');
    };
    window.addEventListener('scroll', toggle, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    toggle();
  }

  /* ---------- Año dinámico en footer ------------------------ */
  function setYear() {
    const el = $('#yearNow');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Smooth scroll para anchors --------------------- */
  function setupSmoothScroll() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = a.getAttribute('href');
      if (!target || target === '#') return;
      const el = document.querySelector(target);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }

  /* ---------- Theme switch ----------------------------------- */
  function setupTheme() {
    const html = document.documentElement;
    const btns = $$('.theme-btn');

    // Restore saved theme
    const saved = localStorage.getItem('devcs-theme');
    if (saved && (saved === 'monokai' || saved === 'amber')) {
      html.setAttribute('data-theme', saved);
      btns.forEach(b => {
        const match = b.dataset.theme === saved;
        b.classList.toggle('is-active', match);
        b.setAttribute('aria-checked', match);
      });
      // Update meta theme-color
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = saved === 'amber' ? '#0d0a08' : '#272822';
    }

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        if (theme === html.getAttribute('data-theme')) return;

        html.setAttribute('data-theme', theme);
        btns.forEach(b => {
          const match = b.dataset.theme === theme;
          b.classList.toggle('is-active', match);
          b.setAttribute('aria-checked', match);
        });
        localStorage.setItem('devcs-theme', theme);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = theme === 'amber' ? '#0d0a08' : '#272822';
      });
    });
  }

  /* ---------- Boot ------------------------------------------ */
  async function init() {
    try {
      const res = await fetch('js/comandos.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('No se pudo cargar comandos.json');
      dataCache = await res.json();
    } catch (err) {
      console.error(err);
      $('#catGrid').innerHTML =
        `<div class="col-12"><div class="alert alert-danger">
          <i class="bi bi-exclamation-triangle me-2"></i>
          No se pudo cargar <code>js/comandos.json</code>. Asegúrate de servir la página por HTTP (no file://).
        </div></div>`;
      return;
    }

    const cats = dataCache.categories;

    // Categorías
    $('#catGrid').innerHTML = cats.map(c => catCard(c)).join('');

    // Listado completo, agrupado por categoría
    $('#allList').innerHTML = cats.map(c => `
      <section class="all-group" data-cat="${c.id}">
        <h3 class="all-group-title">
          <span class="dot-color" style="background:${c.color}"></span>
          ${c.title}
        </h3>
        <ul class="all-list-clean">
          ${c.commands.map((cmd, i) => fullListItem(cmd, c.id, i)).join('')}
        </ul>
      </section>
    `).join('');

    buildTabs(cats);
    setupFilters();
    setupSearch(cats);
    setupTheme();
    setupToTop();
    setupSmoothScroll();
    bindGlobalEvents();
    setYear();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
