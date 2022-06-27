//NAMED EXPORTS
//maneira 1 
export function mostrarIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostrarCidade(pessoa) {
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

//maneira 2
function mostrarHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

function mostrarRua(pessoa) {
    return `A rua de ${pessoa.nome} é ${pessoa.rua}`;
}

export {
    mostrarHobby,
    mostrarRua
}

//DEFAULT EXPORTS (SÓ PODE TER UM POR ARQUIVO)
function mostrarPadrao(pessoa) {
    return `Ficha completa: 
    nome: ${pessoa.nome},
    idade: ${pessoa.idade},
    cidade: ${pessoa.cidade},
    hobby: ${pessoa.hobby},
    rua: ${pessoa.rua}`;
}

export default mostrarPadrao;