const meuArray = [1,1,2,3,4,5,5,7,8,9,9];
const set =  new Set(meuArray);
console.log(set);

set.add(6);
console.log(set);

console.log('tem o numero 1: ', set.has(1));
console.log('tem o numero 10: ', set.has(10));

set.delete(7);
console.log(set);