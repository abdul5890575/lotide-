// compares and returns the number of times an element occurs in a object from a given list
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
  return result;
}; 

module.exports = countOnly;

