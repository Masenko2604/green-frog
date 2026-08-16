// import i18next from './i18n.js';

// function updateContent() {
//   // 1️⃣ обычный текст
//   document.querySelectorAll('[data-i18n]').forEach(el => {
//     el.textContent = i18next.t(el.dataset.i18n);
//   });

//   // 2️⃣ HTML-контент
//   document.querySelectorAll('[data-i18n-html]').forEach(el => {
//     el.innerHTML = i18next.t(el.dataset.i18nHtml);
//   });

//   // 3️⃣ placeholder
//   document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
//     el.placeholder = i18next.t(el.dataset.i18nPlaceholder);
//   });
// }

// // ⏳ ждать инициализации i18n
// document.addEventListener('i18nReady', () => {
//   updateContent();

//   document.querySelectorAll('[data-lang]').forEach(btn => {
//     btn.addEventListener('click', () => {
//       i18next.changeLanguage(btn.dataset.lang).then(() => {
//         updateContent();

//         // ✅ ВАЖНО: сообщаем, что язык сменился
//         document.dispatchEvent(new Event('languageChanged'));
//       });
//     });
//   });
// });
// const langSwitcher = document.querySelector('.lang-switcher');

// if (langSwitcher) {
//   const globeButton = langSwitcher.querySelector('.lang-btn:not([data-lang])');
//   const langMenu = langSwitcher.querySelector('.lang-menu');

//   if (globeButton && langMenu) {

//     globeButton.addEventListener('click', (event) => {
//       event.stopPropagation();
//       langSwitcher.classList.toggle('open');
//     });

//     document.addEventListener('click', (event) => {
//       if (!langSwitcher.contains(event.target)) {
//         langSwitcher.classList.remove('open');
//       }
//     });

//     langMenu.querySelectorAll('[data-lang]').forEach(button => {
//       button.addEventListener('click', () => {
//         langSwitcher.classList.remove('open');
//       });
//     });
//   }
// }

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



















// import i18next from './i18n.js';

// function updateContent() {
//   // 1️⃣ обычный текст (БЕЗ HTML)
//   document.querySelectorAll('[data-i18n]').forEach(el => {
//     el.textContent = i18next.t(el.dataset.i18n);
//   });

//   // 2️⃣ HTML-контент (span, strong, br и т.п.)
//   document.querySelectorAll('[data-i18n-html]').forEach(el => {
//     el.innerHTML = i18next.t(el.dataset.i18nHtml);
//   });

//   // 3️⃣ placeholder
//   document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
//     el.placeholder = i18next.t(el.dataset.i18nPlaceholder);
//   });
// }

// // ⏳ ждать инициализации i18n
// document.addEventListener('i18nReady', () => {
//   updateContent();

//   document.querySelectorAll('[data-lang]').forEach(btn => {
//     btn.addEventListener('click', () => {
//       i18next.changeLanguage(btn.dataset.lang).then(() => {
//         updateContent();
//       });
//     });
//   });
// });




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

