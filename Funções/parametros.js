//Spread
function soma(...numbers){
    var soma = 0;
    numbers.forEach(element => {
        soma += element;
    });
    return soma;
}

const numbers = [1,2,3,4,5,6,9];
console.log(soma(...numbers));

//Rest
function conferetamanho(...args) {
    console.log(args.length);
}

conferetamanho(1,2,3,4,5,6,7,8,9,0,0);

//Object Destructuring
const user = {
    id: 1,
    username: 'vitucelio',
    nomeCompleto: {
        nome: 'Vítor',
        sobrenome: 'Célio'
    },
    idade: 19
}

function userId({id}) {
    return id;
}

function nomeCompleto({nomeCompleto: {nome: n, sobrenome: s}}){
    return `${n} ${s}`;
}

console.log(userId(user));
console.log(nomeCompleto(user));