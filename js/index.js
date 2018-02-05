let validOne = false;
let validTwo = false;
let validThree = false;
let validFour = false;
let verifiedNumCard;
let verifiedMonth;
let verifiedYear;
let verifiedCvv;
let verifiedName;
let $numCard;
let $inputExpirationMonth;
let $inputExpirationYear;
let $inputCvv;
let $inputName;
let typeVisa = /^4[0-9]{6,}$/;
let typeMasterCard = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
let typeAmericanExpress = /^3[47][0-9]{5,}$/;
let typeDinnersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/;
let typeDiscover = /^6(?:011|5[0-9]{2})[0-9]{3,}$/;

(function($) {
  $.fn.extend({
    isValidCard: function(inputOne, inputImage) {
      // Ingresamos número de tarjeta Ejemplo:(4551038207641635) validar (usando algoritmo de Luhn),
      $numCard = inputOne; // 1° llamo a la etiqueta input
      $numCard.attr('maxlength', 16);
      let $father = $numCard.parent();
      if ($numCard.val() === '') {
        $father.children().last().hide();
      }
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
          verifiedNumCard = parseInt($numCardVal);
          $father.children().last().hide();
          console.log('Número de tarjeta valida');
          if ($numCard.val().match(typeVisa)) {
            console.log('Es tarjeta visa');
            inputImage.attr('src', 'assets/images/visa.png');
          } else if ($numCard.val().match(typeMasterCard)) {
            console.log('Es tarjeta MasterCard');
            inputImage.attr('src', 'assets/images/masterCard.jpg');
          } else if ($numCard.val().match(typeDiscover)) {
            console.log('Es tarjeta Discover');
            inputImage.attr('src', 'assets/images/discover.png');
          } else if ($numCard.val().match(typeAmericanExpress)) {
            console.log('Es tarjeta AmericanExpress');
            inputImage.attr('src', 'assets/images/americanExpress.png');
          } else if ($numCard.val().match(typeDinnersClub)) {
            console.log('Es tarjeta DinnerClub');
            inputImage.attr('src', 'assets/images/dinnerClub.png');
          }
        } else {
          console.log('Número de tarjeta invalida');
          $father.children().last().show();
          $('.check').remove();
          // colocar imagen por default de tarjeta
          inputImage.attr('src', 'assets/images/card-icon.png');
        }
      });
    }
  });
  $.fn.extend({
    dateExpiration: function(inputTwoMonth, inputTwoYear) {
      $inputExpirationMonth = inputTwoMonth;
      $inputExpirationYear = inputTwoYear;
      $inputExpirationMonth.attr('maxlength', 2);
      $inputExpirationYear.attr('maxlength', 4);
      let $fatherOne = $inputExpirationMonth.parent();
      let $fatherTwo = $inputExpirationYear.parent();
      if ($inputExpirationMonth.val() === '' && $inputExpirationYear.val() === '') {
        $fatherOne.children().last().hide();
        $fatherTwo.children().last().hide();
      }
      let validationMonth = () => {
        let $monthExpirationVal = $inputExpirationMonth.val();
        if ($monthExpirationVal > 0 && $monthExpirationVal <= 12) {
          validTwo = true;
          verifiedMonth = parseInt($monthExpirationVal);
          $fatherOne.children().last().hide();
          console.log('Fecha correcta');
        } else {
          validTwo = false;
          console.log('Fecha incorrecta');
          $fatherOne.children().last().show();
          $('.check').remove();
        }
      };
      let validationYear = () => {
        let $yearExpirationVal = $inputExpirationYear.val();
        if ($yearExpirationVal.length === 4 && $yearExpirationVal >= 2018) {
          validTwo = true;
          verifiedYear = parseInt($yearExpirationVal);
          $fatherTwo.children().last().hide();
          console.log('Fecha correcta');
        } else {
          validTwo = false;
          console.log('Fecha incorrecta');
          $fatherTwo.children().last().show();
          $('.check').remove();
        }
      };
      $inputExpirationMonth.keyup(validationMonth);
      $inputExpirationYear.keyup(validationYear);
    }
  });
  $.fn.extend({
    cvvValidation: function(inputThree) {
      $inputCvv = inputThree;
      $inputCvv.attr('maxlength', 3);
      let $father = $inputCvv.parent();
      if ($inputCvv.val() === '') {
        $father.children().last().hide();
      }
      $inputCvv.keyup(() => {
        let $inputVal = $inputCvv.val();
        let regex = /^[0-9]+$/;
        let testInput = regex.test($inputVal);
        if (testInput === true && $inputVal.length === 3) {
          validThree = true;
          verifiedCvv = parseInt($inputVal);
          console.log(validThree);
          $father.children().last().hide();
        } else if (testInput === false) {
          validThree = false;
          console.log(validThree);
          $father.children().last().show();
        } else {
          validThree = false;
          console.log(validThree);
          $father.children().last().hide();
          $('.check').remove();
        }
      });
    }
  });
  $.fn.extend({
    nameValidation: function(inputFour) {
      $inputName = inputFour;
      let $father = $inputName.parent();
      if ($inputName.val() === '') {
        $father.children().last().hide();
      }
      $inputName.keyup(() => {
        let $inputVal = $inputName.val().toUpperCase();
        let regex = /^[a-zA-Z ]*$/;
        let testInput = regex.test($inputVal);
        if (testInput === true && $inputVal.length > 2) {
          validFour = true;
          verifiedName = $inputVal.toUpperCase();
          console.log(validFour);
          $father.children().last().hide();
        } else {
          validFour = false;
          console.log(validFour);
          $father.children().last().show();
          $('.check').remove();
        }
      });
    }
  });
  $.fn.extend({
    userValidation: function(btnValidation) {
      $btnValidation = btnValidation;
      let $father = $btnValidation.parent();
      let completeValidation = () => {
        if (validOne && validTwo && validThree && validFour) {
          console.log(verifiedNumCard, verifiedMonth, verifiedYear, verifiedCvv, verifiedName);
          let user = data.filter((user) => user.numCard === verifiedNumCard);
          let month = user.map((item) => item.month)[0];
          let year = user.map((item) => item.year)[0];
          let cvv = user.map((item) => item.cvv)[0];
          let name = user.map((item) => item.name)[0];
          console.log(month, year, cvv, name);
          if (verifiedMonth === month && verifiedYear === year && verifiedCvv === cvv && verifiedName === name) {
            $numCard.val('');
            $inputExpirationMonth.val('');
            $inputExpirationYear.val('');
            $inputCvv.val('');
            $inputName.val('');
            console.log('DATOS CORRECTOS');
            validOne = false;
            validTwo = false;
            validThree = false;
            validFour = false;
            $('.check').remove();
            $father.append(`
              <p class="check check-green">Todos los datos son correctos <br> Tarjeta valida.</p>
            `);
          } else if (verifiedMonth !== month || verifiedYear !== year || verifiedCvv !== cvv || verifiedName !== name) {
            console.log('ERROR');
            $('.check').remove();
            $father.append(`
              <p class="check check-red">Los datos ingresados no coinciden.</p>
            `);
            // alert('Los datos no coinciden');
            $numCard.val('');
            $inputExpirationMonth.val('');
            $inputExpirationYear.val('');
            $inputCvv.val('');
            $inputName.val('');
          }
        }
      };
      $btnValidation.on('click', completeValidation);
    }
  });
})(jQuery);
