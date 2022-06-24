//Função anonima
const somaTeste = function(a, b) {
    return a + b;
}
console.log(somaTeste(1,2))

//Função autoinvocável
/*(
    function(){
        let name = "Vítor";
        return name;
    }
)();

(
    function(a,b){
        return a + b;
    }
)(1,3);*/

//Função Callbacks
const calculadora = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}
const subtracao = function(num1, num2) {
    return num1 - num2;
}
const multiplicacao = function(num1, num2) {
    return num1 * num2;
}
const divisao = function(num1, num2) {
    return num1 / num2;
}

let resultado = calculadora(divisao, 4, 6);
console.log(resultado);