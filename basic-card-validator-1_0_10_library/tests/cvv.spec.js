const cvv = require('../src/cvv');
const assert = require('assert');


describe('testing cvv number', () => {
    it('Debe devolver true para 415', () => {
        assert.equal(cvv(415),true);
    });
    it('Debe devolver false para "abc"', () => {
        assert.equal(cvv("abc"),false);
    });
})
