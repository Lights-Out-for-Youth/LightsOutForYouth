// Minimal script to fetch `site.json` and render sections + footer only
async function loadSite() {
  const root = document.getElementById('root');
  try {
    const res = await fetch('site.json');
    if (!res.ok) {
      if (root) root.textContent = 'Failed to load site.json';
      return;
    }
    const data = await res.json();

    // Sections (rendered from JSON). Nav and title are static in the HTML.
    if (Array.isArray(data.sections)) {
      data.sections.forEach(sec => {
        const section = document.createElement('section');
        if (sec.id) section.id = sec.id;
        const h = document.createElement('h2');
        h.textContent = sec.heading || '';
        const p = document.createElement('p');
        p.textContent = sec.content || '';
        section.appendChild(h);
        section.appendChild(p);
        root.appendChild(section);
      });
    }

    // Footer
    const footer = document.getElementById('site-footer');
    if (footer) footer.textContent = data.footer || '';
  } catch (err) {
    console.error(err);
    if (root) root.textContent = 'Error loading site.';
  }
}

loadSite();
// Minimal script to fetch `site.json` and render sections + footer only
async function loadSite() {
  const root = document.getElementById('root');
  try {
    const res = await fetch('site.json');
    if (!res.ok) {
      if (root) root.textContent = 'Failed to load site.json';
      return;
    }
    const data = await res.json();

    // Sections (rendered from JSON). Nav and title are static in the HTML.
    if (Array.isArray(data.sections)) {
      data.sections.forEach(sec => {
        const section = document.createElement('section');
        if (sec.id) section.id = sec.id;
        const h = document.createElement('h2');
        h.textContent = sec.heading || '';
        const p = document.createElement('p');
        p.textContent = sec.content || '';
        section.appendChild(h);
        section.appendChild(p);
        root.appendChild(section);
      });
    }

    // Footer
    const footer = document.getElementById('site-footer');
    if (footer) footer.textContent = data.footer || '';
  } catch (err) {
    console.error(err);
    if (root) root.textContent = 'Error loading site.';
  }
}

loadSite();
// Minimal script to fetch `site.json` and render sections + footer only
async function loadSite() {
  const root = document.getElementById('root');
  try {
    const res = await fetch('site.json');
    if (!res.ok) {
      if (root) root.textContent = 'Failed to load site.json';
      return;
    }
    const data = await res.json();

    // Sections (rendered from JSON). Nav and title are static in the HTML.
    if (Array.isArray(data.sections)) {
      data.sections.forEach(sec => {
        const section = document.createElement('section');
        if (sec.id) section.id = sec.id;
        const h = document.createElement('h2');
        h.textContent = sec.heading || '';
        const p = document.createElement('p');
        p.textContent = sec.content || '';
        section.appendChild(h);
        section.appendChild(p);
        root.appendChild(section);
      });
    }

    // Footer
    const footer = document.getElementById('site-footer');
    if (footer) footer.textContent = data.footer || '';
  } catch (err) {
    console.error(err);
    if (root) root.textContent = 'Error loading site.';
  }
}

loadSite();
async function loadSite() {
  const root = document.getElementById('root');
  try {
    const res = await fetch('site.json');
    if (!res.ok) {
      root.textContent = 'Failed to load site.json';
      return;
    }
    const data = await res.json();
    }
}

loadSite();
