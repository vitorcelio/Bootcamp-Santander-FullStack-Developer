function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const numeros = [1,2,3,4,5,6,12,34,45,65,76];
console.log(filtraPares(numeros));