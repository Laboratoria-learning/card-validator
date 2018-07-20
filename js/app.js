// validar que la tarjeta solo sean numeros y 16 numeros
const validateNumCard = (creditNumber) => {
  creditNumber = creditNumber.replace(' ','');
  return  /^([0-9]){16}$/.test(creditNumber);
}

// validar cvv solo sean numeros y 3 digitos
const validateNumCvv = (cvv) => {
  cvv = cvv.replace(' ','');
  return  /^([0-9]){3}$/.test(cvv);
}

// Validar nombre que solo contenga letras
const validateName = (name) => {
  return /^[a-zA-Z]*$/.test(name);
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

console.log(validateNumCard("4152313380623160"));
console.log(validateNumCvv("415"));
console.log(validateName("Elizabeth"));
console.log(isValidCard("4152313380623160"));
// 4152313380623160
