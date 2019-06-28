'use strict';

(function () {

  // Validar nombre que solo contenga letras
  const validateName = (name) => {
    return /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(name);
  }

  if (typeof window == "undefined") {
    console.log("consola");
    module.exports = validateName;
  } else {
    console.log("navegador");
    window.validateName = validateName;
  }

})();
