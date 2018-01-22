const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});


function validateCardDetails(form) {
  var cardNumber = form[0].value;
  var sum = 0;
  
  for (var i = 0; i < cardNumber.length; i++) {
    var intVal = parseInt(cardNumber.substr(i, 1));
    if (i % 2 === 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return (sum % 10) === 0;
};
