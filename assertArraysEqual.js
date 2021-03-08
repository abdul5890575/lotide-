// Compare 2 Arrays
const eqArrays = require('./eqArrays');
    
const assertArraysEqual = function(array1, array2) {
  const value = eqArrays(array1, array2)
  if (value === true) {
    return console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

