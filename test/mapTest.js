const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe("#MAP", () => {
    it("returns array with first letter of each element", () => {
        assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
    });

});
