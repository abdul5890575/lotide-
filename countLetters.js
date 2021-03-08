// count the occurance of letter in a string and returns an object
const countLetters = function(string) {
  let result = {}
  
  for (letter of string) {
      if (!result[letter] && letter !== ' '){
        result[letter] = 1; 
      } else if (letter !== ' ') {
          result[letter]++;
      }
  }
  return result;
}

module.exports = countLetters;