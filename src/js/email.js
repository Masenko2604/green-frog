import emailjs from '@emailjs/browser';

// init ОДИН РАЗ
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');

  if (!form) {
    console.error('Form #contact-form not found');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 🍯 honeypot (input name="company")
    if (form.company?.value) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form
      )
      .then(() => {
        console.log('Email sent successfully');
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });
  });
});
console.log('PUBLIC', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log('SERVICE', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('TEMPLATE', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);