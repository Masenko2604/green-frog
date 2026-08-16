

import i18next from './i18n.js';

function updateContent() {
  // Обычный текст
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.dataset.i18n);
  });

  // HTML-контент
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = i18next.t(el.dataset.i18nHtml);
  });

  // Placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = i18next.t(el.dataset.i18nPlaceholder);
  });
}


// ========================================
// i18n
// ========================================

document.addEventListener('i18nReady', () => {
  updateContent();
});


// ========================================
// LANGUAGE SWITCHER
// ========================================

// Клик по глобусу
document.addEventListener('click', event => {

  const globeButton = event.target.closest(
    '.lang-switcher > .lang-btn'
  );

  if (globeButton) {
    event.stopPropagation();

    const langSwitcher = globeButton.closest('.lang-switcher');

    if (langSwitcher) {
      langSwitcher.classList.toggle('open');
    }

    return;
  }


  // Выбор языка
  const languageButton = event.target.closest(
    '.lang-menu [data-lang]'
  );

  if (languageButton) {

    const language = languageButton.dataset.lang;
    const langSwitcher = languageButton.closest('.lang-switcher');

    i18next.changeLanguage(language)
      .then(() => {

        updateContent();

        document.dispatchEvent(
          new Event('languageChanged')
        );

        if (langSwitcher) {
          langSwitcher.classList.remove('open');
        }

      })
      .catch(error => {
        console.error('Language change error:', error);
      });

    return;
  }


  // Клик вне переключателя
  if (!event.target.closest('.lang-switcher')) {
    document
      .querySelectorAll('.lang-switcher.open')
      .forEach(switcher => {
        switcher.classList.remove('open');
      });
  }

});



















