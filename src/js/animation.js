// Защита: если GSAP или ScrollTrigger не подключены — выходим
if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
  console.warn('GSAP or ScrollTrigger not loaded');
} else {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll('.animated');

  // Если нет элементов для анимации — просто ничего не делаем
  if (!sections.length) {
    console.info('No .animated elements found');
  } else {
    sections.forEach((section, i) => {
      const fromX = i % 2 === 0 ? -225 : 225;

      gsap.fromTo(
        section,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 15%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }
}
