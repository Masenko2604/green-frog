(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuOverlay = document.querySelector('.js-menu-overlay');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list');

  if (!mobileMenu || !mobileMenuOverlay || !openMenuBtn || !closeMenuBtn) {
    return;
  }

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true';

    openMenuBtn.setAttribute('aria-expanded', String(!isMenuOpen));
    mobileMenu.classList.toggle('is-open');
    mobileMenuOverlay.classList.toggle('is-open');

    if (window.bodyScrollLock) {
      const method = isMenuOpen
        ? 'enableBodyScroll'
        : 'disableBodyScroll';
      bodyScrollLock[method](document.body);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu());
  });
})();



