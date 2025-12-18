document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) {
    console.warn('Form not found');
    return;
  }

  // 🔑 ОБЯЗАТЕЛЬНО
  emailjs.init('-fxlEiaaEB8sP79Pk');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // honeypot
    if (form.company && form.company.value.trim() !== '') {
      return;
    }

    console.log('Form submit triggered'); // 👈 ДИАГНОСТИКА

    emailjs
      .sendForm(
        'service_hoy596e',
        'template_8lnxegd',
        form
      )
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Send failed');
      });
  });
});
