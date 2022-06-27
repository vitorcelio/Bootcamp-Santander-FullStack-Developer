const ele = document.getElementById('bola');

function esconder() {
    ele.classList.toggle('esconder');
}

function verde() {
    ele.classList.remove('azul');
    ele.classList.add('verde');
}