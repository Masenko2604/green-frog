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
    'YOUR_SERVICE_ID',
    'YOUR_MAIN_TEMPLATE_ID',
    form
  )
  .then(() => {
    // 📨 автоответ клиенту
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'AUTO_REPLY_TEMPLATE_ID',
      form
    );

    alert('Message sent successfully!');
    form.reset();
  })
  .catch((error) => {
    console.error('EmailJS error:', error);
    alert('Send failed');
  });

  });
});
