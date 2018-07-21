'use strict';
// validar que la tarjeta solo sean numeros y 16 numeros
const validateNumCard = (creditNumber) => {
    creditNumber = creditNumber.replace(' ','');
    return  /^([0-9]){16}$/.test(creditNumber);
  }
  
  // Validar los numeros de tarjeta por Lunm
  const isValidCard = (creditNumber) => {
    let creditNumberReverse = (creditNumber.split("")).reverse();
    let pairNumbers = [];
  
    for (let i = 0; i < creditNumberReverse.length; i++) {
      if (i % 2 !== 0) {
        let multiplication = creditNumberReverse[i] * 2;
        if (multiplication >= 10) {
          let sum = 0;
          while (multiplication) {
            sum += multiplication % 10;
            multiplication = Math.floor(multiplication / 10)
          }
          pairNumbers.push(sum)
        } else {
          pairNumbers.push(multiplication);
        }
      } else
        pairNumbers.push(parseInt(creditNumberReverse[i]));
    }
    let numberValidate = 0;
    for (let j = 0; j < pairNumbers.length; j++) {
      numberValidate += pairNumbers[j];
    }
    if (numberValidate % 10 === 0) {
      return true;
    } else {
      return false
    }
  }

  module.exports = validateNumCard;

