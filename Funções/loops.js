//SWITCH
function switchCase(a) {
    switch (a) {
        case 2:
            a += 2;
            break;
        case 3:
            a *= 2;
            break;
        default:
            return a -= a;
    }

    return a;
}


console.log(switchCase(1));

//FOR
function mult(array) {
    let multiplicados = [];
    for (let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2);
    }

    return multiplicados;
}

const multiplicados = [2, 3, 4, 5, 6, 7];

console.log(mult(multiplicados));

//FOR IN (objetos)
function mostrarPropriedades(object) {
    for (prop in object) {
        console.log(`${prop}: ${object[prop]}`);
    }
}

const pessoa = {
    nome: 'Vítor',
    sobrenome: 'Célio'
}

mostrarPropriedades(pessoa);

//FOR OF (arrays e strings)
function mostrarLetra(palavra) {
    for (letra of palavra) {
        console.log(letra);
    }
}

var nome = 'Vítor';
mostrarLetra(nome);

//WHILE
function ehTalNumero(num) {
    while (num <= 8) {
        console.log(num);
        num++;
    }
}

ehTalNumero(4);
console.info("-------")
//DO-WHILE
function ehTalNumero2(num) {
    do {
        console.log(num);
        num++;
    } while (num <= 4);
}

ehTalNumero2(5);