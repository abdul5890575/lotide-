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



const middle = function(array) {
  let middle =  0;
  let middleArray = [];

  if (array.length <= 2) {
      console.log(middleArray)
      return middleArray;
  } else if (array.length  % 2 !== 0) {
    middle = Math.ceil(array.length / 2);
    console.log(middle)
    return middle;
  } else {
    middle = array.lenght / 2;
    middleArray.push((array.length / 2));
    middleArray.push((array.length / 2) + 1);
    console.log(middleArray)
    return middleArray;
  }
};


