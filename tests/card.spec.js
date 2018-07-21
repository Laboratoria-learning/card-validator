const card = require('../js/card');
const assert = require('assert');


describe('testing card', () => {
    it('Debe devolver true para "4152313380623160"', () => {
        assert.equal(card("4152313380623160"),true);
    });
    // Menos de 16 digitos
    it('Debe devolver false para "41523133806231"', () => {
        assert.equal(card("41523133806231"),false);
    });
    // mas de 16 digitos
    it('Debe devolver false para "415231338062316030"', () => {
        assert.equal(card("415231338062316030"),false);
    });
    // letras
    it('Debe devolver false para "41523133806231aa"', () => {
        assert.equal(card("41523133806231aa"),false);
    });
})

