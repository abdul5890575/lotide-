const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else if(actual === undefined) {
      return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} === undefined`);
    } else {
      return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
const findKey= function(object,callback) {
  for (key in object) {
      if (callback(object[key])){
        console.log(key)  
        return key;
      }
  }
};

// findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 2 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2) 