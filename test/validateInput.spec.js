const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!doctype html><html><body><form id="form"><div class="form-group"><label for="cn">Número de tarjeta</label><input id="minumero" name="cn" value="4556474324418380" /></div><div class="form-group"><label for="exp">Fecha de vencimiento</label><input id="exp" name="exp" value="05/19"/> </div><div class="form-group"><label for="cvv">CVV</label><input id="cvv" name="cvv" value="749" /></div><div class="form-group"><label for="name">Nombre completo</label><input id="cname" name="name" value="Juan Perez" /></div><input id="button" type="submit" value="Pagar" /></form>  <script id="script" type="text/javascript"> const config = { cardNumber: minumero, expDate: exp, CVV: cvv, cardName: cname, subButton: button};</script></body></html>');
const { window } = dom;
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

const validateInput = require('../src/validateInput');
const validate = require('../index.js');


describe('validateInput()', () => {
  it('Debe funcion lee dom con valores validos', () => {
    // document.getElementById('minumero').value = '4556474324418380';
    chai.assert.equal(validateInput(), true);
  });
  it('Debe funcion lee dom con valores invalidos', () => {
    document.getElementById('minumero').value = '1234';
    chai.assert.equal(validateInput(), false);
  });

  it('Debe existir input para numero de tarjeta', () => {
    chai.expect(validateInput).to.exist;
  });
});
