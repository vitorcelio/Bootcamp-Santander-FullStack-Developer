var texto = document.getElementById('h1');
var idAtual = document.getElementById('idAtual');
var numero = 4;

function anterior() {
    if (numero > 4) {
        numero = numero - 10;
        formIdTransfer(numero);
        idAtual.innerHTML = numero;
    }

    getTransfer(numero);
}

function proximo() {
    numero = numero + 10;
    idAtual.innerHTML = numero;
    formIdTransfer(numero);

    getTransfer(numero);
}

function formIdTransfer(id = 4) {
    return `https://transfer-vt.herokuapp.com/transfer/${id}`;
}

const getTransfer = async (numero) => {
    const data = await fetch(formIdTransfer(numero))
        .then(res => res.json())
        .catch(e => console.log(e));
    texto.innerText = `Transfer: ${data.embarque} para ${data.desembarque} custa R$ ${data.preco}`;
};

getTransfer();