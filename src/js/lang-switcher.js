const DEFAULT_LANG = 'en';
let translations = {};

async function loadLanguage(lang) {
  const res = await fetch(`./lang/${lang}.json`);
  translations = await res.json();

  applyTranslations();
  localStorage.setItem('lang', lang);
  setActiveLang(lang);
}

function applyTranslations() {
  // обычный текст
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  // html (h1, span и т.д.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[key]) {
      el.placeholder = translations[key];
    }
  });
}

function setActiveLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

window.setActiveLang = loadLanguage;

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || DEFAULT_LANG;
  loadLanguage(lang);
});

