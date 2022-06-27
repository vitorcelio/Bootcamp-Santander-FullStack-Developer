interface Pessoa {
    idade: number;
    name: string;
    profissao: Profissao;
}

enum Profissao {
    Atriz,
    Padeiro,
    Dev
}

const pessoa1: Pessoa = {
    name: 'Vítor',
    idade: 19,
    profissao: Profissao.Dev
}

const pessoa2: Pessoa = {
    name: 'Ilaysa',
    idade: 19,
    profissao: Profissao.Atriz
}
