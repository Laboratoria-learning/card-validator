const assert= require('chai').assert; 
const isValidCard= require('../index.js'); 

//primer test para funcion de validacion de numero de tarjeta de credito 
describe('isValidCard()', ()=>{
	it('valida tarjeta', ()=>{
		assert.equal(true, isValidCard('4083952015263'))
		assert.equal(true, isValidCard('4220554436511572'))
	}); 

	it('no valida tarjeta', ()=>{
		assert.equal(false, isValidCard('11111111111111'))
		assert.equal(false, isValidCard('45678234502842'))
	})
}); 


