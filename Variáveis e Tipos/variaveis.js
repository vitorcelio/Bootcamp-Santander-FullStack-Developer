var a = 1;
var b = 2;

if (a === 1) {
    var a = 11;
    let b = 22; /*let é uma variavel de bloco, fora do escopo ela não é válida*/

    console.log(`valor de a = ${a}, valor de b = ${b}`);
}

console.log(`valor de a = ${a}, valor de b = ${b}`);

numberOne = 1;