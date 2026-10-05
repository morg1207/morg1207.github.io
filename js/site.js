import { projects } from './projects-DATA.js';

const grid = document.getElementById('project-grid');
const dialog = document.getElementById('project-dialog');
const dlgTitle = document.getElementById('dlg-title');
const dlgBody = document.getElementById('dlg-body');

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function card(p) {
  const media = p.preview
    ? `<video class="card-media" muted loop playsinline preload="none" poster="${p.poster}" data-src="${p.preview}"></video>`
    : `<img class="card-media" src="${p.poster}" alt="${esc(p.title)}" loading="lazy">`;
  const links = p.links.map((l) =>
    `<a class="btn btn-ghost btn-sm" href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('');
  return `
    <article class="card${p.featured ? ' is-featured' : ''}" data-tags="${p.tags.join(' ')}">
      <div class="card-media-wrap">
        ${media}
        <span class="badge">${esc(p.status)}</span>
      </div>
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p class="role">${esc(p.role)}</p>
        <p>${esc(p.summary)}</p>
        <p class="tags">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</p>
        <div class="card-actions">
          <button class="btn btn-primary btn-sm" data-open="${p.id}">Details</button>
          ${links}
        </div>
      </div>
    </article>`;
}

grid.innerHTML = projects.map(card).join('');

// Play each loop only while it is on screen; load it the first time it appears.
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const v = e.target;
    if (e.isIntersecting) {
      if (!v.src) v.src = v.dataset.src;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }
}, { threshold: 0.35 });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  grid.querySelectorAll('video[data-src]').forEach((v) => io.observe(v));
}

// Filters
document.querySelectorAll('.filters .chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filters .chip').forEach((c) => c.classList.toggle('is-on', c === chip));
    const f = chip.dataset.filter;
    grid.querySelectorAll('.card').forEach((c) => {
      c.hidden = f !== 'all' && !c.dataset.tags.split(' ').includes(f);
    });
  });
});

// Project detail dialog (markdown)
async function openProject(id) {
  const p = projects.find((x) => x.id === id);
  if (!p) return;
  dlgTitle.textContent = p.title;
  dlgBody.innerHTML = '<p class="muted">Loading…</p>';
  dialog.showModal();
  history.replaceState(null, '', `#${p.id}`);
  try {
    const res = await fetch(p.md);
    if (!res.ok) throw new Error(res.status);
    const html = marked.parse(await res.text());
    dlgBody.innerHTML = html;
    dlgBody.querySelector('h1')?.remove(); // the title is already in the header
    dlgBody.querySelectorAll('video').forEach((v) => { v.preload = 'metadata'; v.setAttribute('playsinline', ''); });
    dlgBody.querySelectorAll('img').forEach((i) => { i.loading = 'lazy'; i.removeAttribute('width'); i.removeAttribute('height'); });
    dlgBody.querySelectorAll('a[href^="http"]').forEach((a) => { a.target = '_blank'; a.rel = 'noopener'; });
  } catch (err) {
    dlgBody.innerHTML = `<p class="muted">Could not load the project details (${esc(err.message)}).</p>`;
  }
  dlgBody.scrollTop = 0;
}

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-open]');
  if (btn) openProject(btn.dataset.open);
});

function closeDialog() {
  dialog.querySelectorAll('video').forEach((v) => v.pause());
  dialog.close();
}
document.getElementById('dlg-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', (e) => { if (e.target === dialog) closeDialog(); });
dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video').forEach((v) => v.pause());
  if (location.hash && projects.some((p) => `#${p.id}` === location.hash)) history.replaceState(null, '', location.pathname);
});

// Deep link: morg1207.github.io/#rb1 opens that project
const hash = location.hash.slice(1);
if (projects.some((p) => p.id === hash)) openProject(hash);

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : !matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

document.getElementById('year').textContent = new Date().getFullYear();
