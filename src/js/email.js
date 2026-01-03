import emailjs from '@emailjs/browser';

// ✅ init один раз
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');

  if (!form) {
    console.error('Form #contact-form not found');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🛡 honeypot
    if (form.company?.value) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form
      )
      .then(() => {
        // ✅ успех
        const successMessage = document.getElementById('form-success');
        if (successMessage) {
          successMessage.hidden = false;
        }
      })
      .catch((error) => {
        // ❌ ошибка
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        // 🔁 всегда
        form.reset();
      });
  });
});




