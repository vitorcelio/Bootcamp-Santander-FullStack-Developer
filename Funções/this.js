const pessoa = {
    id: 25,
    nome: 'Vítor',
    sobrenome: 'Célio',
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    },
    getId: function() {
       return this.id;
    }
}

console.log(pessoa.nomeCompleto());