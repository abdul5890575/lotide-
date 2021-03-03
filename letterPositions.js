const eqArrays = function(array1, array2) {
    let check = true;
    
      if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) { 
          if (array2[i] !== array1[i]) {
              check = false;
          }
        }
      } else {
        check = false;   
      }
      return check;
};
    
const assertArraysEqual = function(array1, array2) {
  const value = eqArrays(array1, array2)
  if (value === true) {
    return console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
    const results = {};
    let index = 0;
    for (let letter of sentence) {
        if (!results[letter] && letter !== ' '){
            results[letter] = [index]; 
          } else if (letter !== ' ') {
              results[letter].push(index);
          }
        index ++;  
    }
    console.log(results)
    return results;
};

