const name = require('../js/name');
const assert = require('assert');


describe('testing name', () => {
    it('Debe devolver true para "Dulce Lemus"', () => {
        assert.equal(name("Dulce Lemus"),true);
    });
    it('Debe devolver false para "Dulce Lemus 9"', () => {
        assert.equal(name("Dulce Lemus 9"),false);
    });
    it('Debe devolver false para "1234567890"', () => {
        assert.equal(name("1234567890"),false);
    });
})

