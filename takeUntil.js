const eqArrays = function(array1, array2) {
    let check = true;
    
      if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) { 
          if (array2[i] !== array1[i]) {
              check = false;
          }
        }
      }  else {
        check=false   
      }
      return check
};
    
const assertArraysEqual = function(array1, array2) {
  const value = eqArrays(array1, array2)
  if (value === true) {
    return console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const takeUntil = function(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            console.log(array[i])
            result.push(array[i]);
        } else {
            return result;
        }
   }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);