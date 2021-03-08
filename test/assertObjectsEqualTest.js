const assert = require('chai').assert;
const assertObjectsEqual= require('../assertObjectsEqual');

const a = { a: '1', b: 2 } 
const b = { b: 2, a: '1' }

describe("#ObjectsEqual", () => {
    it("returns a = { a: '1', b: 2 } === b = { b: 2, a: '1' }", () => {
        assertObjectsEqual(a,b)
    });

});


