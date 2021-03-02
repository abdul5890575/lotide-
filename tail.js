const tail = function(array) {
  if (array === []) {
    return undefined; 
  } else { 
    const newArray = [...array].slice(1,array.length);
    return newArray;
  }
};
 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual === undefined) {
    return console.log('Array undefined');
  } else if (actual !== expected) {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 
};  
 
