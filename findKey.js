// Returns key for the object value according to callback condition we provide
const findKey= function(object,callback) {
  for (key in object) {
      if (callback(object[key])){
        console.log(key)  
        return key;
      }
  }
};

module.exports = findKey;
