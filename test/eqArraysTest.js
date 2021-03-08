const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//Test1
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

//Test2
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

//Test3
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);