const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  

const findKeyByValue = function(object, value) {
  for(let key in object) {
    if (object[key] === value) {
        console.log(key);
        return key;
    } 
  }
};

