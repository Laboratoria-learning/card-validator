'use strict';

// Validar nombre que solo contenga letras
const validateName = (name) => {
  return /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(name);
}

module.exports = validateName;
