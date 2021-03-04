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
        equal = false ;
    } 
  }
  console.log(equal)
  return equal;
};


const assertObjectsEqual = function(obj1, obj2) {
    actual= eqObjects(obj1,obj2)
    const inspect = require('util').inspect; // <= add this line
    console.log(`Example label: ${inspect(obj1)}`);
    if (actual === true) {
        return console.log(` ✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
      } else if(actual === undefined) {
        return console.log(` 🛑🛑🛑 Assertion Failed:  ${inspect(obj1)}  === undefined`);
      } else {
        return console.log(` 🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
      }
};

  a = { a: '1', b: 2 } 
  b = { b: 2, a: '1' }

  assertObjectsEqual(a,b)


  
