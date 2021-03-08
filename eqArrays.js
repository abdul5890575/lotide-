//Checks if 2 Arrays are equal
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

module.exports = eqArrays;