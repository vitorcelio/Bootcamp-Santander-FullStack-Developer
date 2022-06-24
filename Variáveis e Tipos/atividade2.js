function substituir(array) {
    for (let i = 0; i <= array.length; i++) {
        if(array.length === 0) {
           return -1;
        } else {
            if (array[i] % 2 === 0 && (array[i] !== 0)) {
                array[i] = 0;
            }
        }
    }
    
    return array;
}

let array1 = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituir(array1));

let array2 = [];
console.log(substituir(array2));