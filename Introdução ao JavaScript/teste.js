function mulherOuHomem(pessoa){
    if(pessoa.sexo === 'M') {
        console.log(`${pessoa.nome} é uma mulher!`);
    } else {
        console.log(`${pessoa.nome} é um homem!`);
    }
}

class Pessoa {
    sexo;
    nome;
}

pessoa = new Pessoa();
pessoa.sexo = 'H';
pessoa.nome = 'Vítor';

mulherOuHomem(pessoa);