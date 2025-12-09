// export const translations = {
//   en: {
//     heroTitle: "Services",
//     heroSubtitle: "Company formation, accounting...",
//     contactUs: "Contact Us",
//     footerText: "All rights reserved.",
//   },
//   ru: {
//     heroTitle: "О нас",
//     heroSubtitle: "Регистрация бизнеса, бухгалтерия...",
//     contactUs: "Контакты",
//     footerText: "Все права защищены.",
//   },
//   ua: {
//     heroTitle: "Про нас",
//     heroSubtitle: "Реєстрація компанії, бухгалтерія...",
//     contactUs: "Контакти",
//     footerText: "Усі права захищені.",
//   }
// };

// Управление активной кнопкой + вызов applyTranslations()

export function setActiveLang(lang) {
  // снять active со всех кнопок
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.remove('active')
  );

  // активировать выбранную
  const btn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (btn) btn.classList.add('active');

  // Вызов существующей функции перевода
  if (typeof applyTranslations === "function") {
    applyTranslations(lang);
  } else {
    console.warn("applyTranslations() не найдена");
  }
}

// Устанавливаем язык по умолчанию при загрузке
document.addEventListener("DOMContentLoaded", () => {
  setActiveLang("en"); // 👉 можно поменять
});

