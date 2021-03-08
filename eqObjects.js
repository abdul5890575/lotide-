// Compares two objects  
const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  let equal = true
  
  for(let key in object1) {
    if (Array.isArray(object1[key])  && Array.isArray(object2[key])) {
      equal = eqArrays(object1[key],object2[key]) 
    } else if (object1[key] !== object2[key] || Object.keys(object1).length !== Object.keys(object2).length) {
        equal = false ;
    } 
  }
  return equal;
};

module.exports = eqObjects;

