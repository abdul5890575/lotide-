//Returns an object with position of each letter in the sentence
const letterPositions = function(sentence) {
    const results = {};
    let index = 0;
    for (let letter of sentence) {
        if (!results[letter] && letter !== ' '){
            results[letter] = [index]; 
          } else if (letter !== ' ') {
              results[letter].push(index);
          }
        index ++;  
    }
    return results;
};
letterPositions('hello')

module.exports = letterPositions;