(function() {
  // Funciones que habilita el boton del formulario
  function activeButton(btn) {
    btn.attr('disabled', false);
  }

  // Funcion que desabilita el boton del formulario
  function desactiveButton(btn) {
    btn.attr('disabled', true);
  }

  // Funcion que valida la longitud del input ingresado por el usuario
  function longitud(input) {
    if (input.trim().length === 16) {
      return input;
    }
  }

  // Funcion que valida la longitud del input ingresado por el usuario
  function soloNumeros(input) {
    var regex = /^[0-9]+$/;
    if (regex.test(input)) {
      return input;
    }
  }
  var x = 0;
  var objeto = {
    isValidCreditCard: function(numberCard, btn) {
      var creditCardNumber = soloNumeros(longitud(numberCard));
      if (creditCardNumber !== undefined) {
        var arr = [];
        var sumaTotal = 0;
        for (var index = creditCardNumber.length - 1; index >= 0; index--) {
          arr.push(creditCardNumber[index]);
        }
        for (var index = 1; index < arr.length; index = index + 2) {
          arr[index] = arr[index] * 2;
          if (arr[index] >= 10) {
            arr[index] = arr[index] - 9;
          }
        }

        for (var index = 0; index < arr.length; index++) {
          sumaTotal = sumaTotal + parseInt(arr[index]);
        }

        if (sumaTotal % 10 === 0) {
          console.log('Es una tarjeta valida');
          activeButton(btn);
        } else {
          console.log('No es un numero valido');
          desactiveButton(btn);
        }
      } else {
        console.log('Verifique el numero de su tarjeta');
        desactiveButton(btn);
      }
    },
    getX: function() {
      return x;
    },
    incrementar: function() {
      x++;
      return this;
    }
  };
  if (typeof window.objeto === 'undefined') {
    window.objeto = window._ = objeto;
  } else {
    console.log('Ya existe libreria');
  }
})();
