// Returns key for the object value
const findKey= function(object,callback) {
  for (key in object) {
      if (callback(object[key])){
        console.log(key)  
        return key;
      }
  }
};

module.exports = findKey;
