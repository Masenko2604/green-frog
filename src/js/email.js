document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // 🔑 Инициализация EmailJS
  emailjs.init('-fxlEiaaEB8sP79Pk');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 🛑 Honeypot — защита от ботов
    if (form.company && form.company.value.trim() !== '') {
      return; // бот — просто молча выходим
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      await emailjs.sendForm(
        'service_hoy596e',
        'template_8lnxegd',
        form
      );

      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Error sending message');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send';
    }
  });
});

