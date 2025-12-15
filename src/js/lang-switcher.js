import i18next from './i18n';

console.log('lang-switcher loaded');

function updateContent() {
  // обычный текст + HTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = i18next.t(el.dataset.i18n);
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute(
      'placeholder',
      i18next.t(el.dataset.i18nPlaceholder)
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // первый рендер при загрузке
  updateContent();

  // при смене языка
  i18next.on('languageChanged', updateContent);

  // кнопки переключения языка
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      i18next.changeLanguage(lang);
    });
  });
});


