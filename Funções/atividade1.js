function resultado(alunos, media) {
    let alunosAprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        if(mostrarNota.call(alunos[i]) >= media) {
            alunosAprovados.push(alunos[i]);
        }
    }

    return alunosAprovados;
}

function mostrarNota() {
    return this.nota;
}

function dadosAlunos() {
    return `${this.nome} com ${this.nota}`;
}

let alunos = [
    vitor = {
        nome: 'Vítor',
        nota: 7.8
    },
    ilaysa = {
        nome: 'Ilaysa',
        nota: 8.0
    },
    marcia = {
        nome: 'Márcia',
        nota: 9.0
    },
    celio = {
        nome: 'Célio',
        nota: 5.2
    },
    marquin = {
        nome: 'Marquin',
        nota: 3.5
    }
];

console.log(resultado(alunos, 6.0));