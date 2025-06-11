const btn = document.getElementById('EnviarReclamo');

document.getElementById('formReclamo')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Enviando...';

   const serviceID = 'service_6u66reu'; // Ejemplo: 'service_abc123'
   const templateID = 'template_iwnphst';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Enviar';
      alert('¡Formulario enviado con éxito!');
      this.reset();
    }, (err) => {
      btn.textContent = 'Enviar';
      alert('Error al enviar: ' + JSON.stringify(err));
    });
});



