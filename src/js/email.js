document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Form #contact-form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hoy596e",
        "template_8lnxegd",
        this
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Error sending message.");
        }
      );
  });
});
