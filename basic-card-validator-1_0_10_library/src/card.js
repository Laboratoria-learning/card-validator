'use strict';
// const validateNumCard = (creditNumber) => {
//   return  /^([0-9]){16}$/.test(creditNumber);
// }


  // Validar los numeros de tarjeta por Lunm
  const isValidCard = (creditNumber) => {
    let creditNumberReverse = (String(creditNumber).split("")).reverse();
    let pairNumbers = [];
    let testCreditNumber = /^([0-9]){16}$/.test(creditNumber);
  
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
    
    if (numberValidate % 10 === 0 && testCreditNumber === true) {
      return true;
    } else {
      return false
    }
  }
    module.exports = isValidCard;


