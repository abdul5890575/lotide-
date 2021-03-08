const assert = require('chai').assert;
const without= require('../without');

describe("#Without", () => {
    it("returns Array with the elements fron the second array", () => {
        assert.deepEqual(without ([1,2,3,4,5,6],[1,2,3]),[4,5,6]);
    });
});

