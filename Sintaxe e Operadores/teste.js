function numeros(num1, num2) {
    var res = num1 === num2;
    var soma = num1 + num2;
    var frase = `Os números ${num1} e ${num2} `;

    if(res){
        frase += 'são iguais. ';
    } else {
        frase += 'não são iguais. ';
    }

    frase += `Sua soma é ${soma}, `;

    if(soma > 10) {
        frase += 'que é maior que 10 ';
    } else if(soma === 10){
        frase += 'que é igual a 10 '
    }else {
        frase += 'que é menor que 10 ';
    }

    if(soma > 20) {
        frase += 'e maior que 20.';
    } else if(soma === 20) {
        frase += 'e igual a 20.'
    }else {
        frase += 'e menor que 20.';
    }

    console.log(frase);
}

numeros(5, 5);