document.querySelectorAll('.animated').forEach((section, i) => {
  let fromX;

  if (section.classList.contains('from-right')) {
    fromX = 225; // стартует справа, выезжает налево
  } else if (section.classList.contains('from-left')) {
    fromX = -225; // стартует слева, выезжает направо
  } else if (section.classList.contains('hero-checkmark-container')) {
    fromX = 225;
  } else {
    fromX = i % 2 === 0 ? -225 : 225;
  }

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