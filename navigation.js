const navigation = document.querySelector('.top-nav');
const menuButton = navigation.querySelector('.nav-toggle');
const compactLayout = window.matchMedia('(max-width: 64rem)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});

navigation.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMenu();
  }
});

document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target)) {
    closeMenu();
  }
});

compactLayout.addEventListener('change', closeMenu);
menuButton.hidden = false;
