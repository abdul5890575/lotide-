const assert = require('chai').assert;
const findKey= require('../findKey');

const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 4 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) 

describe("#FindKey", () => {
    it("returns noma for the first 2 star", () => {
        assert.strictEqual(result, 'noma');
    });

});