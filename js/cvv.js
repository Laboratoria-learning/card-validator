'use strict';
// validar cvv solo sean numeros y 3 digitos
const validateNumCvv = (cvv) => {
    cvv = cvv.replace(' ','');
    return  /^([0-9]){3}$/.test(cvv);
  }

  module.exports = validateNumCvv;