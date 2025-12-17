document.addEventListener("DOMContentLoaded", () => {
  // 1. ИНИЦИАЛИЗАЦИЯ EmailJS (ОБЯЗАТЕЛЬНО)
  emailjs.init("YOUR_PUBLIC_KEY"); // ← сюда вставь Public Key из EmailJS

  // 2. Форма
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Form #contact-form not found");
    return;
  }

  // 3. Отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hoy596e",     // Service ID
        "template_8lnxegd",    // Template ID
        this
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Error sending message. Please try again.");
        }
      );
  });
});
