const toEmail = document.querySelector('#email'),
      asuntoEmail = document.querySelector('#asunto'),
      mensajeEmail = document.querySelector('#mensaje'),
      btnSendEmail = document.querySelector('#enviar');
const sendEmail = () => {
  var template_params = {
  "toEmail": toEmail.value,
  "asunto": asuntoEmail.value,
  "mensaje": mensajeEmail.value,
  }

  var service_id = "default_service";
  var template_id = "template_fB0hLMlp";
  emailjs.send(service_id, template_id, template_params);
  console.log(toEmail.value, asuntoEmail.value, mensajeEmail.value);
}
btnSendEmail.addEventListener('click', sendEmail);