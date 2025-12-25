function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ❗️убираем старые триггеры
  ScrollTrigger.getAll().forEach(t => t.kill());

  document.querySelectorAll('.animated').forEach((el) => {
    let fromX = -225;

    if (el.classList.contains('from-right')) {
      fromX = 225;
    }

    gsap.fromTo(
      el,
      { x: fromX, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// 🔹 обычная загрузка
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// 🔹 КЛЮЧЕВО: после смены языка
document.addEventListener('languageChanged', () => {
  setTimeout(initScrollAnimations, 50);
});


// gsap.registerPlugin(ScrollTrigger);

// document.querySelectorAll('.animated').forEach((section, i) => {
//   const fromX = i % 2 === 0 ? -225 : 225;
//   gsap.fromTo(
//     section,
//     { x: fromX, opacity: 0 },
//     {
//       x: 0,
//       opacity: 1,
//       duration: 1.4,
//       ease: 'power2.out',
//       scrollTrigger: {
//         trigger: section,
//         start: 'top 90%',
//         end: 'bottom 15%',
//         toggleActions: 'play none none none',
//       },
//     }
//   );
// });