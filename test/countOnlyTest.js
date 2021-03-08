const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)
  
describe("#CountOnly", () => {
    it("returns result1['Jason'] to be 1", () => {
        assert.strictEqual(result1["Jason"], 1);
    });

    it("returns result1['Jason'] to be 1", () => {
        assert.strictEqual(result1["Karima"], undefined);
    });

    it("returns result1['Jason'] to be 1", () => {
        assert.strictEqual(result1["Fang"], 2);
    });

});


