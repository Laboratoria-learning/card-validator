$('document').ready(begin);

function begin() {
  let validOne = false; //
  let validTwo = false; //
  let validThree = false;
  let validFour = false;
  
  // validar número de tarjeta crédito
  let isValidCard = () => {
    // Ingresamos numero de tarjeta Ejemplo:(4551038207641635) validar metodo lungt
    let numCard = $('#num-card'); // 1° llamo a la etiqueta input
    let numCardVal = numCard.val(); // 2° guarda el valor del input 
    let numArray = numCardVal.split(''); 
    let numReverse = numArray.reverse(); 
    // variable donde estara almacenado temporalmente el nuevo numero convertido a entero 
    let numInteger = 0; 
    let sumPar = 0; 
    let sumImpar = 0; 
    // Se creara un for para iterar cada numero de la tarjeta ingresada 
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
    // valido longitud 16 digitos
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

  //  validar fecha de expiración

  //  validar cvv
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

  //  validar nombre
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
