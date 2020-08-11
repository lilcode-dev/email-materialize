const btnSendEmail = document.querySelector('#enviar');
  
const sendEmail = () => {
  var template_params = {
  "toEmail": email.value,
  "fromName": fromName.value,
  "asunto": asunto.value,
  "mensaje": mensaje.value,
  }

  var service_id = "default_service";
  var template_id = "template_fB0hLMlp";
  emailjs.send(service_id, template_id, template_params);
  // console.log(fromName.value,toEmail.value, asuntoEmail.value, mensajeEmail.value);
}
btnSendEmail.addEventListener('click', sendEmail);
