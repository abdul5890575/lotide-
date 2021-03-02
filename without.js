const eqArrays = function(array1, array2) {
    let check = true;
    
      if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) { 
          if (array2[i] !== array1[i]) {
              check = false;
          }
        }
      }  
      else {
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



const without = function(array1, arrayexclude) {
  let indexArray = [];
  for(let j = 0; j < arrayexclude.length; j++) {
    for(let i = 0; i < array1.length; i++) {
      if (array1[i] === arrayexclude[j]) {
        indexArray.push(i);
      } 
    }
  }
  indexArray.sort();
  let newArray = [...array1]
  for (let k = 0; k < indexArray.length; k++) {
    newArray.splice(indexArray[k],1)
    for (let l = 0; l < indexArray.length; l++) {
        indexArray[l]-=1;
    }
  }  
  console.log(newArray);
  return newArray
};
