let validOne = false;
let validTwo = false;
let validThree = false;
let validFour = false;
let verifiedNumCard;
let verifiedMonth;
let verifiedYear;
let verifiedCvv;
let verifiedName;
/*


// VALIDAR FECHA DE EXPIRACIÓN
//----------------------------------------------------------------------------
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
  }
};
*/
(function($){
  $.fn.extend({
    isValidCard : function(inputOne) {
      // Ingresamos número de tarjeta Ejemplo:(4551038207641635) validar (usando algoritmo de Luhn),
      let $numCard = inputOne; // 1° llamo a la etiqueta input
      $numCard.keyup(() => {
        let $numCardVal = $numCard.val(); // 2° guarda el valor del input
        let $numArray = $numCardVal.split('');
        let $numReverse = $numArray.reverse();
        // variable donde estara almacenado temporalmente el nuevo número convertido a entero
        let numInteger = 0;
        let sumPar = 0;
        let sumImpar = 0;
        // Se creara un for para iterar cada número de la tarjeta ingresada
        for (let i = 0; i < $numReverse.length; i++) {
          numInteger = parseInt($numReverse[i]);
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
        if (sumTotal === true && $numCardVal.length === 16) {
          validOne = true;
          verifiedNumCard = $numCardVal;
          console.log('Número de tarjeta valida');
        } else {
          console.log('Número de tarjeta invalida');
        }
      })
    }
  });
  $.fn.extend({
    dateExpiration : function(inputTwoMonth, inputTwoYear) {
      let $inputExpirationMonth = inputTwoMonth;
      let $inputExpirationYear = inputTwoYear;
      let validationMonth = () => {
        let $monthExpirationVal = $inputExpirationMonth.val();
        if ($monthExpirationVal > 0 && $monthExpirationVal <= 12) {
          validTwo = true;
          verifiedMonth = $monthExpirationVal;
          console.log('Fecha correcta');
        } else {
          validTwo = false;
          console.log('Fecha incorrecta');
        }
      };
      let validationYear = () => {
        let $yearExpirationVal = $inputExpirationYear.val();
        if ($yearExpirationVal.length === 4 && $yearExpirationVal >= 2018) {
          validTwo = true;
          verifiedYear = $yearExpirationVal;
          console.log('Fecha correcta');
        } else {
          validTwo = false;
          console.log('Fecha incorrecta');
        }
      };
      $inputExpirationMonth.keyup(validationMonth);
      $inputExpirationYear.keyup(validationYear);
    }
  });
  $.fn.extend({
    cvvValidation : function(inputThree) {
      let $input = inputThree;
      let $father = $input.parent();
      $input.keyup(() => {
        let $inputVal = $input.val();
        let regex = /^[0-9]+$/;
        let testInput = regex.test($inputVal);
        if (testInput === true && $inputVal.length === 3) {
          validThree = true;
          verifiedCvv = $inputVal;
          console.log(validThree);
        } else if ($inputVal.length > 3 || testInput === false) {
          validThree = false;
          console.log(validThree);
          $input.val('');
          $father.append(`
            <p id="message" class="right message">Solo debe ingresar números. / No debes de exceder los 3 dígitos.</p>
            `);
        } else {
          validThree = false;
          console.log(validThree);
        }
      })
    }
  });
  $.fn.extend({
    nameValidation : function(inputFour) {
      let $input = inputFour;
      $input.keyup(() => {
        let $inputVal = $input.val();
        let regex = /^([a-z]{1}[a-zñáéíóú]+[\s]*)+$/;
        let testInput = regex.test($inputVal);
        if (testInput === true && $inputVal.length > 2) {
          validFour = true;
          verifiedName = $inputVal;
          console.log(validFour);
        } else {
          validFour = false;
          console.log(validFour);
        }
      })
    }
  });
  $.fn.extend({
    userValidation : function(btnValidation) {
      let $btnValidation = btnValidation;
      let completeValidation = () => {
        if (validOne && validTwo && validThree && validFour) {
          console.log('DATOS CORRECTOS')
          console.log(verifiedNumCard, verifiedMonth, verifiedYear, verifiedCvv, verifiedName);
          
        } else {
          console.log('ERROR');
        }
      };
      $btnValidation.on('click', completeValidation);
    }
  });
})(jQuery);
