//Returns the first element of the array
const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length === 0) {
    console.log('Array is Undefined')
  } else {
    return array[0];
  }
};
module.exports = head;