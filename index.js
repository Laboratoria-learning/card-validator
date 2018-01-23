const form = document.querySelector('form');
/*
form.addEventListener('submit', (event) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});*/

form.cn.addEventListener('keypress', function(event) {
  if (!onlyNumber(event)) {
    event.preventDefault();
  } else {
    var cnVal = form.cn.value();
    var cn = form.cn;
    if (cn >= 15 && cn <= 18) {

    } else {

    }
  }
});
form.cvv.addEventListener('keypress', function(event) {
  if (!onlyNumber(event)) {
    event.preventDefault();
  }
});
// Solo permite introducir numeros.
function onlyNumber(event) {
  var key = event.charCode;
  return key >= 48 && key <= 57;
}
// Algoritmo
