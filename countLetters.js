const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const countLetters = function(string) {
  let result = {}
  
  for (letter of string) {
      if (!result[letter] && letter !== ' '){
        result[letter] = 1; 
      } else if (letter !== ' ') {
          result[letter]++;
      }
  }
  console.log(result)
  return result;
}

