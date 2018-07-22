// Funcion statement autoinvocada, local para encapsular el codigo y ser mas segura
(function() {
  let regex;
  // Usando function expression para validar la cantidad de carácteres que ingresa el usuario como nro de tarjeta
  const lengthCard = (input) => {
    /* condicional para verificar si el campo esta vacío o contiene un nro de longitud correcta
    (si campo esta vacío en  la fase de creación del contexto de ejecución el interprete asigna el valor undefined por default */
    if (input === undefined) {
      return undefined;
    } else if (input.trim().length === 16) {
      return input;
    }
  };

  // función arrown en ES6 y utilizando expresión regular
  const onlyNumbers = (input) => {
    regex = /^[0-9]+$/;
    if (regex.test(input)) {
      return input;
    }
  };

  const onlyLetters = (input) => {
    regex = /[A-Za-z]+$/;
    if (regex.test(input)) {
      return input;
    }
  };
  // validamos fecha usando el metodo Date con ayuda del metodo split(String o literal de cadena que se va a dividir para ser guardado en un array)
  const validateFormatDate = (date) => {
    let dateArr = date.split('-');
    let day = dateArr[2];
    let month = dateArr[1];
    let year = dateArr[0];
    let dateValue = new Date(year, month - 1, day);
    if ((dateValue.getFullYear() == year) && (dateValue.getMonth() == (month - 1)) && (dateValue.getDate() == day)) {
      return date;
    } else {
      return undefined;
    }
  };
  // usuando el metodo trim para quitar espacio en blanco.
  const validateCvv = (cvv) =>{
    if (cvv === undefined) {
      return undefined;
    } else if (cvv.trim().length === 6) {
      return cvv;
    }
  };
  const validateName = (name) => {
    if (name === undefined) {
      return undefined;
    } else if (name.trim().length > 6) {
      return name;
    }
  };
  const lhun = (numberCard) => {
    let creditCardNumber = onlyNumbers(lengthCard(numberCard));
    if (creditCardNumber !== undefined) {
      let arr = [];
      let sumTotal = 0;
      for (let index = creditCardNumber.length - 1; index >= 0; index--) {
        arr.push(creditCardNumber[index]);
      }
      for (let index = 1; index < arr.length; index += 2) {
        arr[index] = arr[index] * 2;
        if (arr[index] >= 10) {
          arr[index] = arr[index] - 9;
        }
      }
      // for (var index = 0; index < arr.length; index++) {
      //   sumTotal = sumTotal + parseInt(arr[index]);
      // } ES5
      /* ES6 usando el medodo map creara un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos*/
      arr.map(function(sumTotal, index) {
        return sumTotal + parseInt(arr[index]);
      });

      if (sumTotal % 10 === 0) {
        console.log('Es una tarjeta valida');
        return true;
      } else {
        console.log('No es un numero valido');
        return false;
      }
    } else {
      console.log('Verifique el numero de su tarjeta');
      return false;
    }
  };
  const validateFields = (name, cvv, date)=> {
    let validaDate = validateFormatDate(date);
    let validarCvv = onlyNumbers(validateCvv(cvv));
    let validarName = onlyLetters(validateName(name));
    let condition = (validaDate !== undefined && validarCvv !== undefined && validarName !== undefined) ? true : false;
    return condition;
  };
  const libraryCard = {
    isValidCreditCard: function(name, numberCard, cvv, date) {
      if (lhun(numberCard) && validateFields(name, cvv, date)) {
        /* El metodo find devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. En cualquier otro caso se devuelve undefined. ES6*/
        if (Object.keys(data).find(i => i === numberCard)) {
          if (data[numberCard].find(i => i === cvv)) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };
  if (typeof window.libraryCard === 'undefined') {
    // personalizando libreria
    window.libraryCard = window.ºº = libraryCard;
  } else {
    console.log('Ya existe libreria');
  }
})();
