const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else if(actual === undefined) {
      return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} === undefined`);
    } else {
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
      } else {
        check=false   
      }
      return check
};
  
  
  
const eqObjects = function(object1, object2) {
  let equal = true
  
  for(let key in object1) {
    if (Array.isArray(object1[key])  && Array.isArray(object2[key])) {
      equal = eqArrays(object1[key],object2[key]) 
    } else if (object1[key] !== object2[key] || Object.keys(object1).length !== Object.keys(object2).length) {
        console.log(equal + ' inside second if')
        equal = false ;
    } 
  }
  console.log(equal)
  return equal;
};


