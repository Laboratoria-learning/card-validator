'use strict';
// validar que la tarjeta solo sean numeros y 16 numeros
(function () {

  // Validar los numeros de tarjeta por Lunm
  const isValidCard = (creditNumber) => {
    let creditNumberReverse = (creditNumber.toString().split("")).reverse();
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
    if (parseint(numberValidate) % 10 === 0) {
      return true;
    } else {
      return false
    }
  }

  if (typeof window == "undefined") {
    console.log("consola");
    module.exports = isValidCard;
  } else {
    console.log("navegador");
    window.isValidCard = isValidCard;
  }
})();

