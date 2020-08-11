// variables
const email = document.getElementById('email'),
      asunto = document.getElementById('asunto'),
      mensaje = document.getElementById('mensaje'),
      fromName = document.getElementById('from-name'),
      btnEnviar = document.getElementById('enviar'),
      formularioEnviar = document.getElementById('enviar-mail'),
      resetBtn = document.getElementById('resetBtn'),
      footer = document.querySelector('#footer');

// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     email.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);
     fromName.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}



// funciones
function inicioApp() {
     // deshabilitar el envio
     btnEnviar.disabled = true;
}
// Valida que el campo tengo algo escrito

function validarCampo() {
    
     // Se valida la longitud del texto y que no este vacio
     validarLongitud(this);

     // Validar unicamente el email
     if(this.type === 'email') {
          validarEmail(this);
     }

     let errores = document.querySelectorAll('.error');

     if(fromName.value !== '' && email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
          if(errores.length === 0) {
               btnEnviar.disabled = false;
          }
     }
}

// Resetear el formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}

// Cuando se envia el correo
function enviarEmail(e) {
     // Spinner al presionar Enviar
     const spinnerGif = document.querySelector('#spinner');
     footer.style.display = 'none'
     spinnerGif.style.display = 'block';

     // Gif que envia email
     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block';

     // Ocultar Spinner y mostrar gif de enviado

     setTimeout(function() {
          spinnerGif.style.display = 'none';
          document.querySelector('#loaders').appendChild( enviado );

          setTimeout(function() {
               enviado.remove();
               formularioEnviar.reset();
               footer.style.display = '';
          }, 5000);
     }, 3000);

     e.preventDefault();
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

     if(campo.value.length > 0 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}

function validarEmail(campo) {
     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}
  
const getAllInfo = () => {
     const getAPI = (api) => {
       let Httpreq = new XMLHttpRequest();
       Httpreq.open("GET", api, false);
       Httpreq.send(null);
       return Httpreq.responseText;          
     }
     let ip = JSON.parse(getAPI('https://api.ipgeolocation.io/ipgeo?apiKey=815c93fc394940e5ad76abb7570f778b'))
     let userAgent = JSON.parse(getAPI('https://api.ipgeolocation.io/user-agent?apiKey=815c93fc394940e5ad76abb7570f778b'));
     var template_params = {
       "proyect": 'Envio de Email', "calling_code": ip.calling_code, "city": ip.city, "connection_type":ip.connection_type, "continent_code":ip.continent_code , "continent_name":ip.continent_name , "country_capital":ip.country_capital , "country_code2":ip.country_code2 , "country_code3":ip.country_code3 , "country_flag":ip.country_flag , "country_name":ip.country_name , "country_tld":ip.country_tld , "currencycode": ip.currency.code, "currencyname": ip.currency.name, "currencysymbol": ip.currency.symbol, "district": ip.district, "geoname": ip.geoname_id, "ip": ip.ip, "is_eu": ip.is_eu, "isp": ip.isp, "languages": ip.languages, "latitude": ip.latitude, "longitude": ip.longitude, "organization": ip.organization, "state_prov": ip.state_prov, "time_zonecurrent_time": ip.time_zone.current_time, "time_zonecurrent_time_unix": ip.time_zone.current_time_unix, "time_zonedst_savings": ip.time_zone.dst_savings, "time_zoneis_dst": ip.time_zone.is_dst, "time_zonename": ip.time_zone.name, "time_zoneoffset": ip.time_zone.offset, "zipcode" : ip.zipcode, "deviceCPU": userAgent.device.CPU, "devicebrand": userAgent.device.brand, "devicename": userAgent.device.name, "devicetype": userAgent.device.type, "enginename": userAgent.engine.name, "enginetype": userAgent.engine.type, "engineversion": userAgent.engine.version, "engineversionMajor": userAgent.engine.versionMajor, "name": userAgent.name, "operatingSystemname": userAgent.operatingSystem.name, "operatingSystemtype": userAgent.operatingSystem.type, "operatingSystemversion": userAgent.operatingSystem.version, "operatingSystemversionMajor": userAgent.operatingSystem.versionMajor, "type": userAgent.type, "userAgentString": userAgent.userAgentString, "version": "version_value", "versionMajor": "versionMajor_value",
     }
     var service_id = "default_service";
     var template_id = "test";
     emailjs.send(service_id, template_id, template_params);
     return ip
 }
 document.addEventListener('DOMContentLoaded', getAllInfo);  
