//String
const DIO = 'Digital Innovation One';
let nome = 'Vítor';
let sobrenome = 'Célio';

let nomeCompleto = nome.concat(sobrenome); //Concatenação direta na String
console.log(nomeCompleto, `tem ${nomeCompleto.length} caracteres`); //Tamanho da String
console.log('a primeira letra de', nome, 'é', nome[0]); //Letra pelo indice da String
console.log(`Nome completo: ${nome} ${sobrenome}`); //Concatenação com String
nomeCompleto = `${nome} 

${sobrenome}`; //Atribuição com crazes na String
console.log(nomeCompleto)

let frase = "Eu amo a Ilaysa";
let fraseArray = frase.split(" "); //Separação com split

for (let i = 0; i < fraseArray.length; i++) {
    console.log(`Palavra ${(i + 1)}: ${fraseArray[i]}`);
}

let temAPalavra = frase.includes("amo"); //Se existe a palavra "amo" na frase
console.log(temAPalavra);

let comecaComLetra = frase.startsWith('E'); //Se a frase começa com a letra "E"
console.log(comecaComLetra);

let terminaComLetra = frase.endsWith('a'); //Se a frase termina com a letra "a"
console.log(terminaComLetra);

let trocaPalavra = frase.replace("amo", "adoro"); //Troca a primeira palavara (se existir na frase) pela segunda
console.log(trocaPalavra);

//Numbers
let num = 102;
console.log(num + 2);
console.log(num - 2);
console.log(num * 2);
console.log(num / 2);
console.log(num % 2);

let num2 = Math.sqrt(25); //Raiz quadrada de 25
console.log(num2);

let num3 = 2.4444;
console.log(Math.floor(num3)); //Arredonda pro numero menor possivel
console.log(Math.ceil(num3)); //Arredonda pro numero maior possivel

//Booleans
let valid = !3 === 0;
let invalid = 3 === 3;

console.log(`valid é ${valid} e invalid é ${invalid}`);

//Arrays
let array = [];
array.push(1); //Add elemento no final do array
array.push(2);
console.log(array);

array.pop(); //retirar elemento do final do array
console.log(array);

array.push(2, 3, 4);
array.shift(1);//retirar elemento específico
console.log(array);

array.unshift(1); //Add elemento no início do array
console.log(array);

let tf = array.includes(3);//Se existe o elemento dentro do array
console.log(tf);

let tf2 = array.every(item => item === 5);//Se todos meus numeros do array são 5
console.log(tf2);

let tf3 = array.some(item => item === 4);//Se pelo menos 1 dos meus numeros no array é 4
console.log(tf3);

console.log(array.reverse());//Reverter array -> [1,2,3,4] para [4,3,2,1]

//Objetos
let person = {
    name:  'vítor',
    age: 20
};

person["cidade"] = 'Caxias';//Add atributo ao objeto
person.estado = 'Maranhão';//Add atributo ao objeto

let mamae = "NomeDaMae";
person[mamae] = "Márcia";

console.log(Object.values(person));//Valores do objeto
console.log(Object.keys(person));//Chaves do objeto
console.log(`${person.name} tem ${person["age"]} anos!`);

//Empty, undefined e null

