const app = require('../src/validate.js');
const assert = require('chai').assert;

describe('validate.cardNumber()', () => {
  it('debería devolver true para tarjeta valida', ()=> {
    assert.equal(app.cardNumber('30569309025904'), true);
  });
  it('debería devolver false para cualquier numero menor de 16 caracteres', ()=> {
    assert.equal(app.cardNumber('1259'), false);
  });
  it('deberia devolver false si tiene letras', ()=> {
    assert.equal(app.cardNumber('ashad123'), false);
  });
  it('deberia devolver false si tiene mas de 16 caracters', ()=> {
    assert.equal(app.cardNumber('146085708962158766'), false);
  });
  it('deberia devolver false con numeros negativos', ()=> {
    assert.equal(app.cardNumber('-30569309025904'), false);
  });
  it('deberia devolver true con numeros reales validos', ()=> {
    assert.equal(app.cardNumber(30569309025904), true);
  });
  it('deberia devolver false con numeros reales invalidos', ()=> {
    assert.equal(app.cardNumber(30569325904), false);
  });
  it('deberia devolver false con NaN', ()=> {
    assert.equal(app.cardNumber(NaN), false);
  });
  it('deberia devolver false string vacio', ()=> {
    assert.equal(app.cardNumber(''), false);
  });
  it('deberia devolver false con null', ()=> {
    assert.equal(app.cardNumber(null), false);
  });
  it('deberia devolver false con undefined', ()=> {
    assert.equal(app.cardNumber(undefined), false);
  });
});

describe('validate.CVV()', () => {
  it('deberia devolver false con null', ()=> {
    assert.equal(app.CVV(null), false);
  });
  it('deberia devolver false con undefined', ()=> {
    assert.equal(app.CVV(undefined), false);
  });
  it('deberia devolver false para numeros de mas de 4 digitos', ()=> {
    assert.equal(app.CVV(5974), false);
  });
  it('deberia devolver false para string de mas de 4 digitos', ()=> {
    assert.equal(app.CVV('1584'), false);
  });
  it('deberia devolver false para string menor de 3 digitos', ()=> {
    assert.equal(app.CVV('18'), false);
  });
  it('deberia devolver false strings con letras', ()=> {
    assert.equal(app.CVV('tsting'), false);
  });
  it('deberia devolver false strings vacios', ()=> {
    assert.equal(app.CVV(''), false);
  });
  it('deberia devolver true para numeros de 3 digitos', ()=> {
    assert.equal(app.CVV(254), true);
  });
  it('deberia devolver true para strings de numeros de 3 digitos', ()=> {
    assert.equal(app.CVV('856'), true);
  });
});

describe('validate.expDate()', () => {
  it('deberia devolver true para strings de numeros de 5 digitos con un / en el medio correspondiente a una fecha mayor a la actual', ()=> {
    assert.equal(app.expDate('12/20'), true);
  });
  it('deberia devolver false para fechas con valores del mes mayores a 12', ()=> {
    assert.equal(app.expDate('13/20'), false);
  });
  it('deberia devolver false para numeros enteros', ()=> {
    assert.equal(app.expDate(4921), false);
  });
  it('deberia devolver false para fechas que no sigan el formato mm/yy', ()=> {
    assert.equal(app.expDate('2/2019'), false);
  });
  it('deberia devolver false para fechas negativas', ()=> {
    assert.equal(app.expDate('-2/20'), false);
  });
  it('deberia devolver false para fechas con -', ()=> {
    assert.equal(app.expDate('10-22'), false);
  });
  it('deberia devolver false para fechas mas antiguas que la actual', ()=> {
    assert.equal(app.expDate('09/08'), false);
  });
  it('deberia devolver false para fechas vacias', ()=> {
    assert.equal(app.expDate(''), false);
  });
  it('deberia devolver false para fechas null', ()=> {
    assert.equal(app.expDate(null), false);
  });
  it('deberia devolver false para fechas undefined', ()=> {
    assert.equal(app.expDate(undefined), false);
  });
});

describe('validate.cardName', () => {
  it('deberia devolver false para undefined', ()=> {
    assert.equal(app.cardName(undefined), false);
  });
  it('deberia devolver false para null', ()=> {
    assert.equal(app.cardName(null), false);
  });
  it('deberia devolver false para string vacios', ()=> {
    assert.equal(app.cardName(''), false);
  });
  it('deberia devolver false para string de espacios', ()=> {
    assert.equal(app.cardName('  '), false);
  });
  it('deberia devolver false para string con numeros', ()=> {
    assert.equal(app.cardName('Juan 4856S'), false);
  });
  it('deberia devolver false para numeros enteros', ()=> {
    assert.equal(app.cardName(764189), false);
  });
  it('deberia devolver true para string de letras ', ()=> {
    assert.equal(app.cardName('Juan Perez'), true);
  });
});
