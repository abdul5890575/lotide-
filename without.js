// Returns Array with the elements fron the second array
const without = function(array1, arrayexclude) {
  let indexArray = [];
  for(let j = 0; j < arrayexclude.length; j++) {
    for(let i = 0; i < array1.length; i++) {
      if (array1[i] === arrayexclude[j]) {
        indexArray.push(i);
      } 
    }
  }
  indexArray.sort();
  let newArray = [...array1]
  for (let k = 0; k < indexArray.length; k++) {
    newArray.splice(indexArray[k],1)
    for (let l = 0; l < indexArray.length; l++) {
        indexArray[l]-=1;
    }
  }  
  return newArray
};

module.exports = without;
