(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuOverlay = document.querySelector('.js-menu-overlay');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list');

  // ⛔ если нужных элементов нет — просто выходим
  if (!mobileMenu || !mobileMenuOverlay || !openMenuBtn || !closeMenuBtn) {
    return;
  }

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true';

    openMenuBtn.setAttribute('aria-expanded', String(!isMenuOpen));
    mobileMenu.classList.toggle('is-open');
    mobileMenuOverlay.classList.toggle('is-open');

    // защита от отсутствия bodyScrollLock
    if (window.bodyScrollLock) {
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';

      bodyScrollLock[scrollLockMethod](document.body);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // ссылки в мобильном меню
  if (mobileMenuLinks.length) {
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();

        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          toggleMenu();
        }
      });
    });
  }

  // закрытие меню при ресайзе
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;

    mobileMenu.classList.remove('is-open');
    mobileMenuOverlay.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');

    if (window.bodyScrollLock) {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  });
})();


