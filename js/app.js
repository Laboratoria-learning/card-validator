$(document).ready(begin);

function begin() {
  $('#input-cvv').cvvValidation($('#input-cvv'));
  $('#input-name').nameValidation($('#input-name'));
  $('#num-card').isValidCard($('#num-card'), $('#img-card'));
  $('#form').dateExpiration($('#month'), $('#year'));
  $('#form').userValidation($('#btn-validation'));
}
