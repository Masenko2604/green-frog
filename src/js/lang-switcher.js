function updateContent() {
  // 1️⃣ обычный текст (БЕЗ HTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.dataset.i18n);
  });

  // 2️⃣ HTML-контент (СПЕЦИАЛЬНО помеченный)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = i18next.t(el.dataset.i18nHtml);
  });

  // 3️⃣ placeholder — безопасно
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute(
      'placeholder',
      i18next.t(el.dataset.i18nPlaceholder)
    );
  });
}
