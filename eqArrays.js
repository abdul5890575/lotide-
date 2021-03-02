const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else if (actual === undefined) {
      return console.log('Array undefined');
    } else if (actual !== expected) {
      return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    } 
  };  

const eqArrays = function(array1, array2) {
let check = true;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) { 
      if (array2[i] !== array1[i]) {
          check = false;
      }
    }
  }
  return check
};
