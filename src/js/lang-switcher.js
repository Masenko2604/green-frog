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


// =========================
// I18N
// =========================

document.addEventListener('i18nReady', () => {
  updateContent();

  // Переключение языка
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang).then(() => {
        updateContent();

        document.dispatchEvent(new Event('languageChanged'));

        // Закрываем меню после выбора языка
        const langSwitcher = document.querySelector('.lang-switcher');

        if (langSwitcher) {
          langSwitcher.classList.remove('open');
        }
      });
    });
  });

  // =========================
  // LANGUAGE SWITCHER
  // =========================

  const langSwitcher = document.querySelector('.lang-switcher');

  if (!langSwitcher) return;

  const globeButton = langSwitcher.querySelector('.lang-btn:not([data-lang])');
  const langMenu = langSwitcher.querySelector('.lang-menu');

  if (!globeButton || !langMenu) return;

  // Открыть / закрыть меню
  globeButton.addEventListener('click', (event) => {
    event.stopPropagation();

    langSwitcher.classList.toggle('open');
  });

  // Клик вне меню — закрыть
  document.addEventListener('click', (event) => {
    if (!langSwitcher.contains(event.target)) {
      langSwitcher.classList.remove('open');
    }
  });
});


















