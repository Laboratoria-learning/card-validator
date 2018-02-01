$(document).ready(begin);

function begin() {
  $('#input-cvv').cvvValidation($('#input-cvv'));
  $('#input-name').nameValidation($('#input-name'));
}
