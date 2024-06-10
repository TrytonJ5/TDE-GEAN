let horas = 2;
let minutos = 0;
let segundos = 0;

const horasDiv = document.getElementById('horas');
const minutosDiv = document.getElementById('minutos');
const segundosDiv = document.getElementById('segundos');

function atualizarTemporizador() {

    segundos--;
    if (segundos < 0) {
        segundos = 59;
        minutos--;
        if (minutos < 0) {
            minutos = 59;
            horas--;
            if (horas < 0) {
                clearInterval(intervalo);
                alert("promoção acabou!");
                return;
            }
        }
    }

    horasDiv.innerHTML = horas.toString().padStart(2, '0');
    minutosDiv.innerHTML = minutos.toString().padStart(2, '0');
    segundosDiv.innerHTML = segundos.toString().padStart(2, '0');
}

const intervalo = setInterval(atualizarTemporizador, 1000);

function enviarEmail(){
    (function(){
        emailjs.init("EaSXSWmRrIyPV_OgH");
    })();

    var parametros = {
        nomeCliente: document.querySelector("#contatoNome").value,
        assunto: document.querySelector("#contatoAssunto").value,
        replyTo: document.querySelector("#contatoResponder").value,
        menssagem: document.querySelector("#mensagem").value,
    };

    var serviceID = "service_np7hn8m";

    var templateID = "template_cyes7rt";

    emailjs.send(serviceID,templateID, parametros)
    .then( res => {
        alert("email enviado");
    })
    .catch();
}
