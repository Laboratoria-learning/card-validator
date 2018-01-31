const Validate = require('./validate');
const config = require('../index.js');

// const subButton = config.subButton;
// subButton.addEventListener('click', validateInput);

function validateInput() {
  let cardNumber = Validate.cardNumber(config.cardNumber.value);
  let cvv = Validate.CVV(config.CVV.value);
  let exp = Validate.expDate(config.expDate.value);
  let cardName = Validate.cardName(config.cardName.value);
  if (cardNumber && cvv && exp && cardName) {
    console.log('datos válido... enviar...');
    return true;
  } else {
    console.log('datos inválidos');
    return false;
  }
};

module.exports = validateInput;
