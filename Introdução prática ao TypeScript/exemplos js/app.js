let botao = document.getElementById('botao');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

function somar(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
}

botao.addEventListener('click', () => {
    console.log(somar(parseInt(input1.value), parseInt(input2.value)));
});

