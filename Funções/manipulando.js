//CALL (o valor do objeto passado no parametro do "call" é identificado com 
//"this" e substitui para dentro do método que chamou o objeto)
const pessoa = {
    nome: 'Vítor'
}

const animal = {
    nome: 'Dax'
};

function mostrarNome() {
    console.log(this.nome);
}

mostrarNome.call(pessoa);
mostrarNome.call(animal);

const obj = {
    num1: 3,
    num2: 6
};

function soma (a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(obj, 1, 5);

//APPLY (os argumentos do apply são mandados dentro de um array)
soma.apply(obj, [1,5]);

//BIND (clona a estrutura da função onde é chamada e aplica 
//o valor do objeto passado como parametro)
const retornaNomes = function() {
    return this.nome;
};

let vitor = retornaNomes.bind({nome: 'Vítor'});
console.log(vitor());