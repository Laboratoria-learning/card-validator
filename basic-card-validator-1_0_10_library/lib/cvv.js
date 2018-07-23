'use strict';
// validar cvv solo sean numeros y 3 digitos
(function () {

const validateNumCvv = (cvv) => {
    return  /^([0-9]){3}$/.test(cvv);
  }

  if (typeof window == "undefined") {
    console.log("consola");
    module.exports = validateNumCvv;
  } else {
    console.log("navegador");
    window.validateNumCvv = validateNumCvv;
  }
  
})();
