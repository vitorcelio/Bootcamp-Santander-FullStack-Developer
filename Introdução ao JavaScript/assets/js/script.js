var numeroHtml = document.getElementById('numero');
var numero = 0;

function subtrair() {
    numero = numero - 1;
    color(numero);
    numeroHtml.innerHTML = numero;
}

function somar() {
    numero = numero + 1;
    color(numero);
    numeroHtml.innerHTML = numero;
}

function color(numero) {
    if (numero < 0) {
        numeroHtml.style.color = 'red';
    } else if (numero > 0) {
        numeroHtml.style.color = 'green';
    }
}