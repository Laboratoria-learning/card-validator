const app = require('../js/app');
const assert = require('assert');


describe('testing evalPolish', () => {
    it('Debe dev olver 3 para "1 2 +"', () => {
        assert.equal(evalPolish("1 2 +"),3);
    });
    it('Debe devolver 10 para "1 2 + 3 4 + +"',() =>{
        assert.equal(evalPolish("1 2 + 3 4 + +"),10);
    });
    it('Debe de lanzar error para "1 2 + 3 4 +"',() =>{
        assert.throws( () => { evalPolish("1 2 + 3 4 +") }, Error );
    });
    it('Debe de lanzar un error para "ola k ase"',() =>{
        assert.throws( () => { evalPolish("ola k ase") }, Error );
    });
    it('Debe de lanzar error para "1 2 3 4 5"',() =>{
        assert.throws( () => { evalPolish("1 2 3 4 5") }, Error );
    });// faltan cosas en la pila
    it('Debe de lanzar error para "+ + + + +"',()=>{
        assert.throws( () => { evalPolish("+ + + + +") }, Error );
    });//sobran cosas en la pila
})
