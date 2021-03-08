//Compares two objects
const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;



  
