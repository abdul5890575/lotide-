
const head = function(array) {
   if (array === []){
    return undefined 
   } else { 
    return array[0];
   }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual === undefined) {
    return console.log('Array undefined')
  } else if (actual !== expected) {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 
};  

