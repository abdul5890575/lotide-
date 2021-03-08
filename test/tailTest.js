const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
    });

    it("returns [4,2,1] for [5,4,2,1]", () => {
        assert.deepEqual(tail([5,4,2,1]), [4,2,1]); 
    });
});

