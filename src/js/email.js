import emailjs from '@emailjs/browser';

// ⚠️ ОБЯЗАТЕЛЬНО: public key
emailjs.init('-fxlEiaaEB8sP79Pk');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');

  if (!form) {
    console.error('Form #contact-form not found');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

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
      .catch(error => {
        console.error('EmailJS error:', error);
      });
  });
});




// import emailjs from '@emailjs/browser';

// emailjs.init('YOUR_PUBLIC_KEY');

// const form = document.querySelector('#contact-form');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   emailjs.sendForm(
//     'YOUR_SERVICE_ID',
//     'YOUR_TEMPLATE_ID',
//     form
//   )
//   .then(() => {
//     alert('Message sent!');
//     form.reset();
//   })
//   .catch(err => {
//     console.error('EmailJS error:', err);
//   });
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contact-form');
//   if (!form) {
//     console.warn('Form not found');
//     return;
//   }

//   // 🔑 ОБЯЗАТЕЛЬНО
//   emailjs.init('-fxlEiaaEB8sP79Pk');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // honeypot
//     if (form.company && form.company.value.trim() !== '') {
//       return;
//     }

//     console.log('Form submit triggered'); // 👈 ДИАГНОСТИКА

//    emailjs
//   .sendForm(
//     'YOUR_SERVICE_ID',
//     'YOUR_MAIN_TEMPLATE_ID',
//     form
//   )
//   .then(() => {
//     // 📨 автоответ клиенту
//     emailjs.sendForm(
//       'YOUR_SERVICE_ID',
//       'AUTO_REPLY_TEMPLATE_ID',
//       form
//     );

//     alert('Message sent successfully!');
//     form.reset();
//   })
//   .catch((error) => {
//     console.error('EmailJS error:', error);
//     alert('Send failed');
//   });

//   });
// });
