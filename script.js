window.addEventListener('load', function () {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 700);
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.textContent = '¡Mensaje enviado!';
    form.reset();

    setTimeout(() => {
      button.textContent = 'Enviar mensaje';
    }, 2200);
  });
}
