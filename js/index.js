$('document').ready(begin);

function begin() {
  let validOne = false; //
  let validTwo = false; //
  let validThree = false;
  let validFour = false;
  
  /* VALIDAR NÚMERO DE TARJETA DE CRÉDITO
  ---------------------------------------------------------------------------------*/
  let isValidCard = () => {
    // Ingresamos número de tarjeta Ejemplo:(4551038207641635) validar (usando algoritmo de Luhn), 
    let numCard = $('#num-card'); // 1° llamo a la etiqueta input
    let numCardVal = numCard.val(); // 2° guarda el valor del input 
    let numArray = numCardVal.split(''); 
    let numReverse = numArray.reverse(); 
    // variable donde estara almacenado temporalmente el nuevo número convertido a entero 
    let numInteger = 0; 
    let sumPar = 0; 
    let sumImpar = 0; 
    // Se creara un for para iterar cada número de la tarjeta ingresada 
    for (let i = 0; i < numReverse.length; i++) { 
      numInteger = parseInt(numReverse[i]); 
      if ((i + 1) % 2 === 0) { 
        if ((numInteger * 2) >= 10) { 
          sumPar += (((numInteger * 2) % 10) + Math.trunc((numInteger * 2) / 10)); 
        } else { 
          sumPar += numInteger * 2; 
        } 
      } else { 
        sumImpar += numInteger; 
      } 
    } 
    // validar longitud 16 digitos
    let sumTotal = ((sumPar + sumImpar) % 10) === 0 ? true : false; 
    if (sumTotal === true && numCardVal.length === 16) {
      validOne = true;
      console.log('Número de tarjeta valida');
    } else {
      console.log('Número de tarjeta invalida');
    }
  }; 
  // llamamos a la función para validar el número de tarjeta
  $('#num-card').keyup(isValidCard);

  /* VALIDAR FECHA DE EXPIRACIÓN
  ----------------------------------------------------------------------------*/
  let dateExpiration = () => {
    let $inputExpiration = $('#date-expiration');
    let $dateExpirationVal = parseInt(inputExpiration.val());
    if ($dateExpirationVal.length === 7) {
      validTwo = true;
      $inputExpiration.addClass('success');
      $inputExpiration.removeClass('error');

      let month = parseInt($dateExpirationVal.substr(0, 2));
      let year = parseInt($dateExpirationVal.substr(3, 4));

      if ((year <= 9999) && (month > 0 && month <= 12)) {
        validTwo = true;
        console.log('Fecha correcta');
      } else {
        validTwo = false;
        console.log('Fecha incorrecta');
      }
  };

  /* VALIDAR CVV
  ----------------------------------------------------------------------------*/
  let cvvValidation = () => {
    let $input = $('#input-cvv');
    let $inputVal = $('#input-cvv').val();
    let regex = /^[0-9]+$/;
    let testInput = regex.test($inputVal);
    if (testInput === true && $inputVal.length === 3) {
      validThree = true;
      console.log(validThree);
    } else if ($inputVal.length > 3 || testInput === false) {
      validThree = false;
      console.log(validThree);
      $input.val('');
      alert(`
        * No debes de exceder los 3 dígitos.
        * No debe ingresar texto.
        `);
    } else {
      validThree = false;
      console.log(validThree);
    }
  };

  /* VALIDAR NOMBRE
  ----------------------------------------------------------------------------*/
  let nameValidation = () => {
    let $input = $('#input-name');
    let $inputVal = $('#input-name').val();
    let regex = /^([a-z]{1}[a-zñáéíóú]+[\s]*)+$/;
    let testInput = regex.test($inputVal);
    if (testInput === true && $inputVal.length > 2) {
      validFour = true;
      console.log(validFour);
    } else {
      validFour = false;
      console.log(validFour);
    }
  };
  $('#input-name').keyup(nameValidation);
  $('#input-cvv').keyup(cvvValidation);
}
