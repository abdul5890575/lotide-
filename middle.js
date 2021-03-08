// Gives middle elements of an array
const middle = function(array) {
  let middle =  0;
  let middleArray = [];

  if (array.length <= 2) {
      return middleArray;
  } else if (array.length  % 2 !== 0) {
    middle = Math.ceil(array.length / 2 - 1);
    middleArray.push(array[middle]);
    return middleArray;
  } else {
    middle = array.lenght / 2;
    middleArray.push((array[(array.length / 2) -1]));
    middleArray.push(array[(array.length / 2)]);
    return middleArray;
  }
};

module.exports = middle;
