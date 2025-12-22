import i18next from './i18n.js';

function updateContent() {
  // 1️⃣ обычный текст (БЕЗ HTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.dataset.i18n);
  });

  // 2️⃣ HTML-контент (span, strong, br и т.п.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = i18next.t(el.dataset.i18nHtml);
  });

  // 3️⃣ placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = i18next.t(el.dataset.i18nPlaceholder);
  });
}

// ⏳ ждать инициализации i18n
document.addEventListener('i18nReady', () => {
  updateContent();

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang).then(() => {
        updateContent();
      });
    });
  });
});




// import i18next from './i18n.js';

// function updateContent() {
//   document.querySelectorAll('[data-i18n]').forEach(el => {
//     el.textContent = i18next.t(el.dataset.i18n);
//   });

//   document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
//     el.placeholder = i18next.t(el.dataset.i18nPlaceholder);
//   });
// }

// // ждать инициализации i18n
// document.addEventListener('i18nReady', () => {
//   updateContent();

//   document.querySelectorAll('[data-lang]').forEach(btn => {
//     btn.addEventListener('click', () => {
//       i18next.changeLanguage(btn.dataset.lang).then(updateContent);
//     });
//   });
// });




// const DEFAULT_LANG = 'en';
// let translations = {};

// async function loadLanguage(lang) {
//   const res = await fetch(`./lang/${lang}.json`);
//   translations = await res.json();

//   applyTranslations();
//   localStorage.setItem('lang', lang);
//   setActiveLang(lang);
// }

// function applyTranslations() {
//   // обычный текст
//   document.querySelectorAll('[data-i18n]').forEach(el => {
//     const key = el.dataset.i18n;
//     if (translations[key]) {
//       el.textContent = translations[key];
//     }
//   });

//   // html (h1, span и т.д.)
//   document.querySelectorAll('[data-i18n-html]').forEach(el => {
//     const key = el.dataset.i18nHtml;
//     if (translations[key]) {
//       el.innerHTML = translations[key];
//     }
//   });

//   // placeholder
//   document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
//     const key = el.dataset.i18nPlaceholder;
//     if (translations[key]) {
//       el.placeholder = translations[key];
//     }
//   });
// }

// function setActiveLang(lang) {
//   document.querySelectorAll('.lang-btn').forEach(btn => {
//     btn.classList.toggle('active', btn.dataset.lang === lang);
//   });
// }

// window.setActiveLang = loadLanguage;

// document.addEventListener('DOMContentLoaded', () => {
//   const lang = localStorage.getItem('lang') || DEFAULT_LANG;
//   loadLanguage(lang);
// });

