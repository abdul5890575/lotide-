//Returns all the elements of the array except first
const tail = function(array) {
  if (array.length === 0) {
    console.log('Array undefined');
  } else {
    const newArray = [...array].slice(1,array.length);
    return newArray;
  }
};

module.exports = tail;

