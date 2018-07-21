const date = require('../js/date');
const assert = require('assert');


describe('testing date', () => {
    it('Debe devolver true para "12,18"', () => {
        assert.equal(date("12","18"),true);
    });
    // mes trece mm/aa
    it('Debe devolver false para "13,18"', () => {
        assert.equal(date("13","18"),false);
    });
    //año anterior al actual Date()
    it('Debe devolver false para "4,16"', () => {
        assert.equal(date("4","16"),false);
    });
    // letras
    it('Debe devolver false para "aa,16"', () => {
        assert.equal(date("a1","16"),false);
    });
})

