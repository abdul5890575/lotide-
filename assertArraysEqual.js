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
    
const assertArraysEqual = function(array1, array2) {
  const value = eqArrays(array1, array2)
  if (value === true) {
    return console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${array} !== ${array2}`);
  }
};

