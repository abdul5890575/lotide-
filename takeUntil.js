// takes all the values of array and store it in a new array until callback condition is met
const takeUntil = function(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            result.push(array[i]);
        } else {
            return result;
        }
   }
}

module.exports = takeUntil;
