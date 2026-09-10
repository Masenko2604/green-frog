import emailjs from '@emailjs/browser';

// ⚠️ public key

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');

  if (!form) {
    console.error('Form #contact-form not found');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // honeypot
    if (form.company.value !== '') return;

    // 1️⃣ письмо админу (как было — НЕ ТРОГАЕМ)
    emailjs      
      .sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form
)
     
      .then(() => {

        // 2️⃣ автоответ пользователю (ДОБАВЛЕНО)
        // return emailjs.send(
        //   'service_hoy596e',          // SERVICE_ID (тот же)
        //   'template_6jrqzqr', // 👈 ВСТАВИ СЮДА
        //   {
        //     user_name: form.user_name.value,
        //     user_email: form.user_email.value,
        //     message: form.message.value,
        //   }
        // );
      })
      .then(() => {
  form.reset();

  const successMessage = document.getElementById('form-success');
  if (successMessage) {
    successMessage.hidden = false;
  }
})

      .catch(error => {
        console.error('EmailJS error:', error);
      });
  });
});




