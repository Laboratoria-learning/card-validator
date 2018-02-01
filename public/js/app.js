$(document).ready(() => {
  $inputCardNumber = $('#cn');
  $inputName = $('#name');
  $inputExpiryDate = $('#exp');
  $inputSecurityCode = $('#cvv');
  $buttonPay = $('#button-pay');
  
  const areAllValidationsPassing = () => {  
    validateName(name, $(event.target)) && 
    validateNumberCard(cn, $(event.target), $typeCard) && 
    validateDate(exp, $(event.target), $message) && 
    validateCode(cvv, $(event.target));
  };
  
  const formStateEvent = () => {
    $buttonPay.prop('disabled', false);
  };

  $inputCardNumber
    .focus()
    .on('keyup', () => {
      $typeCard = $('#type-card');
      let cn = $(event.target).val();

      /* Llamamos a la funcion, para validar el número de tarjeta, 
      agregar una clase de error y success al input y la imagen que
      corresponda segun el numero que escriba */
      validateNumberCard(cn, $(event.target), $typeCard);
    })
    .on('keyup', formStateEvent);

  $inputName
    .on('keyup', () => {
      let name = $inputName.val();
      validateName(name, $(event.target));
    })
    .on('keyup', formStateEvent);

  $inputExpiryDate
    // .on('keypress', onlyNumber(event))
    .on('keyup', () => {
      $message = $('#message');
      let exp = $inputExpiryDate.val();

      /* Llamamos a la funcion, para validar la fecha de expiración 
      y agregar un mensaje de aprobación o error */
      validateDate(exp, $(event.target), $message);
    })
    .on('keyup', formStateEvent);

  $inputSecurityCode
    .on('keyup', () => {
      let cvv = $inputSecurityCode.val();
      validateCode(cvv, $(event.target));
    })
    .on('keyup', formStateEvent);
});