// main.js: clean script to fetch `site.json` and render sections
async function loadSite() {
  const root = document.getElementById('root');
  try {
    const res = await fetch('site.json');
    if (!res.ok) {
      if (root) root.textContent = 'Failed to load site.json';
      return;
    }
    const data = await res.json();

    // Sections intentionally not rendered on homepage (hero is primary content)
    // Footer is now static HTML (see site.html) and is not overwritten here.
  } catch (err) {
    console.error(err);
    if (root) root.textContent = 'Error loading site.';
  }
}

loadSite();
