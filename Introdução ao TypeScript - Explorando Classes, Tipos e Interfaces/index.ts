function soma(a: number, b: number) {
    return a + b;
}

console.log(soma(12, 238));

//types e interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;

}

interface IPessoa extends IAnimal {
    nome: string,
    cor: 'branco' | 'negro' | 'amarelo' | 'pardo',
    profissao: 'Dev' | 'Engenheiro' | 'Cientista';
}

type TAnimal = IFelino | IPessoa;

const animal: TAnimal = {
    nome: 'Vítor',
    tipo: 'terrestre',
    cor: 'branco',
    profissao: 'Dev',
}


//TRATANDO A TAG INPUT
const input = document.getElementById('input') as HTMLInputElement; //Dizendo ao typeScript que o elemento é input


//Evento de pesquisa
input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})

//GENERIC TYPES
function preencheLista<T>(array: any[], valor: T) {
    return array.map(item => item + valor);
}

console.log(preencheLista([1,2,3], 5));
console.log(preencheLista(['0','1','2'], '3'));

//COndicionais por parametros
interface IUser {
    id: number;
    email: string;
}

interface IAdmin extends IUser {
    cargo?: 'gerente' | 'coordenador' | 'supervisor'; //O "?" é para dizer que o campo é opcional
}

function redirecione(user: IUser | IAdmin) {
    if('cargo' in user) {
        //redireciona p/ área de ADM
    } else {
        //redireciona p/ área de user
    }
}

//propriedade readonly e private
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroLeitura ={
    readonly [K in keyof Cachorro]-?: Cachorro[K]; //Criado para ler algum objeto. O "-?" é pra forçar os itens opcionais a serem obrigatórios
}

class MeuCachorro implements CachorroLeitura{
    private _nome: string;
    private _idade: number;
    private _parqueFavorito: string;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    
    public get nome() : string {
        return this._nome;
    }

    
    public get idade() : number {
        return this._idade;
    }
    
    
    public get parqueFavorito() : string {
        return this._parqueFavorito;
    }
    
}

const nobel = new MeuCachorro('nobel', 12);
console.log(nobel);

//IMPLEMENTAR BIBLIOTECAS
import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou');
    }
});

$('body').novaFuncao();

//Omit (modifica a interface ou tipo existente)
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const br: Brasileiro = {
    nome: 'Vítor',
    idade: 19
}

console.log(br);