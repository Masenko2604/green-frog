import './js/i18n';
import './js/lang-switcher';
import './js/mobile-menu';
import './js/carousel-settings';
import './js/animation';
import './js/email';
import './css/cookie-banner.css';

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '#application-form') {
    setTimeout(() => {
      const formSection = document.getElementById('application-form');

      if (formSection) {
        formSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
});







