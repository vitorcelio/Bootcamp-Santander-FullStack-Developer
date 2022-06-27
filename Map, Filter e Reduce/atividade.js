function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const maca = {
    value: 2,
}
const pera = {
    value: 3,
}
const uva = {
    value: 5,
}

const nums = [1, 2];

console.log('Objeto maça: ', mapComThis(nums, maca));
console.log('Objeto pera: ', mapComThis(nums, pera));
console.log('Objeto uva: ', mapComThis(nums, uva));

console.log("---------")

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums2 = [1, 2];

console.log(mapSemThis(nums2));

