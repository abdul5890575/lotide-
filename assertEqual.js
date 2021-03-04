const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if(actual === undefined) {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} === undefined`);
  } else {
    return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

