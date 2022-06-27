function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Os valores não foram enviados!');
        if (typeof arr !== 'object') throw new TypeError('Envie um elemento do tipo Array!');
        if (typeof num !== 'number') throw new TypeError('Envie um elemento do tipo Number');
        if (arr.length !== num) throw new RangeError('Tamanho do Array inválido!');
    }catch(erro) {
        if(erro instanceof ReferenceError){
            console.error('ReferenceError: ', erro.stack);
        } else if(erro instanceof TypeError) {
            console.error('TypeError: ', erro.stack);
        } else {
            console.error('RangeError: ', erro.stack);
        }
    }

}

console.log(validaArray(2, 2));

