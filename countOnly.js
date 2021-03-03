const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  

const countOnly = function(allItems, itemsToCount) {
  let arrayTrueValues = [];
  let result = {};
  for (const key of Object.keys(itemsToCount)) {
      if( itemsToCount[key] === true){
        arrayTrueValues.push(key);
      } 
  }
  console.log(arrayTrueValues)
  let count = 0;
  for (let i = 0; i < arrayTrueValues.length; i++) {
    for (let j = 0; j < allItems.length; j++) {
      if ( arrayTrueValues[i] === allItems[j]) {
        count += 1;
        result[arrayTrueValues[i]] = count ;
      }
    }
    count = 0
  }
  console.log(result)
  return result;
}; 

