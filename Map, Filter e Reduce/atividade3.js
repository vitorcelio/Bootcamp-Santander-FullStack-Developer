function somaArray(arr) {
    return arr.reduce(function(prev, current){
        return prev + current;
    });
}

const arr = [2,3,4,5];

console.log(somaArray(arr));

console.log('--------')

function saldoDisp(arr, saldo) {
    const somaList = arr.reduce(function(prev, current) {
        return prev + current;
    });


    return `saldo de ${saldo} menos a soma da lista ${somaList}:  ${saldo - somaList}`;
}
const arr2 = [12,45,65,34,2,3,4,23];

console.log(saldoDisp(arr2,1000));