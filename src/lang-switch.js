const DEFAULT_LANG = 'en';
let translations = {};

async function loadLanguage(lang) {
  const response = await fetch(`${import.meta.env.BASE_URL}lang/${lang}.json`);

  translations = await response.json();

  applyTranslations();
  localStorage.setItem('lang', lang);
  setActiveLangButton(lang);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[key]) {
      el.placeholder = translations[key];
    }
  });
}

function setActiveLangButton(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// делаем функцию доступной из HTML
window.setActiveLang = loadLanguage;

// автозагрузка при старте
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || DEFAULT_LANG;
  loadLanguage(savedLang);
});




