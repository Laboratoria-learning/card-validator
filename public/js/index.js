function isCardValid(cn, exp, cvv, name) {

  /* Función para comprobar si argumento es una cifra */
  const isNumeric = (number) => {
    if (/^[0-9]+$/.test(number)) {
      return true;
    } else {
      return false;
    }
  };

  /* Función para comprobar si argumento tiene la cantidad de dígitos que corresponde*/
  const isLengthValid = (number, length) => {
    number = number.toString();
    if (number.length === length) {
      return true;
    } else {
      return false;
    }
  };

  /* Función para comprobar que número de tarjeta sea válido según Algoritmo de Luhn */
  const isLuhnValid = (number) => {
    number = number.toString();
    let digits = number.split('').reverse();
    let oddDigits = [];
    let evenDigits = [];

    digits.forEach(function (digit, index) {
      if ((index + 1) % 2 !== 0) {
        oddDigits.push(digit);
      } else {
        evenDigits.push(digit);
      }
    });

    let s1 = oddDigits.reduce(function (sum, value) {
      return parseInt(sum) + parseInt(value);
    });

    let s2 = evenDigits
      .map(function (digit) {
        let multiplication = digit * 2;
        if (multiplication > 9) {
          let separatedDigits = multiplication.toString().split('');
          return (
            parseInt(separatedDigits[0]) + parseInt(separatedDigits[1])
          );
        }
        return multiplication;
      })

      .reduce(function (sum, value) {
        return parseInt(sum) + parseInt(value);
      });

    let result = (s1 + s2).toString();
    if (result.charAt(result.length - 1) === '0') {
      return true;
    } else {
      return false;
    }
  };

  /* Función para validar la fecha de expiración ingresada */
  const isExpDateValid = (date) => {
    if (/^[0-9]{4}$/.test(date)) {
      return true;
    } else {
      return false;
    }
  };

  /* Función para validar el nombre del usuario */
  const isNameValid = (fullname) => {
    if (/[0-9]/.test(fullname) === true) {
      return false;
    } else {
      return true;
    }
  };

  /* Condición para validar todos los datos ingresados */
  if (isNumeric(cn) && isLengthValid(cn, 16) && isLuhnValid(cn) && isExpDateValid(exp) && isNumeric(cvv) &&
    isLengthValid(cvv, 3) && isNameValid(name)) {
      return alert('Los datos ingresados son correctos');
    } else {
      return alert ('Error, por favor revise sus datos nuevamente')
    }
    
  /*   isNumeric(cn);
    isLengthValid(cn, 16);
    isLuhnValid(cn);
    isExpDateValid(date);
    isNumeric(cvv);
    isLengthValid(cvv, 3);
    isNameValid(name); */
}