function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const vitor = {
    nome: 'Vítor',
    idade: 19
};

const ilaysa = {
    nome: 'Ilaysa',
    idade: 19
};

console.log(calculaIdade.call(vitor, 10));
console.log(calculaIdade.apply(ilaysa, [5]));