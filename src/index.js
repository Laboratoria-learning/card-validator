$('document').ready(begin);

function begin() {
  let validThree = false;
  let validFour = false;
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
