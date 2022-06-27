let botao = document.getElementById('botao') as HTMLButtonElement;
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function soma(a: number = 0, b: number = 0) {
    return a + b;
}

botao.addEventListener('click', () => {
    soma(Number(input1.value), Number(input2.value));
});

//Lidando com objetos, enum e interface
interface IPessoa {
    nome: string,
    idade: number,
    profissao: EProfissao
}

enum EProfissao {
    Dev, Analista, Engenheiro
}

const pessoa: IPessoa = {
    nome: 'Vítor',
    idade: 19,
    profissao: EProfissao.Analista
}

const vitor: {nome: string, idade: number, profissao: string} = {
    nome: 'Vítor',
    idade: 19,
    profissao: 'Dev'
}

//tipos personalizados

type input = number | string; //O input pode ter valor de número ou string

//Incluindo callbacks em funçoes

function somarValores(num1: number, num2: number, callback: (numero: number) => number) {
    let resultado = num1 + num2;
    callback(resultado);
}

function validarSoma(numero: number) {
    return numero;
}

somarValores(1,4, validarSoma);

//Métodos não finalizados por algum motivo e que não retornam nada
function erro(erro: string, codigo: number) : never {
    throw {error: erro, code: codigo}
}