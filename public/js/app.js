$(document).ready(function() {
  var buttonNext = $('#next');
  var inputCard = $('.inputCard');
  var inputDate = $('.inputDate');
  var inputCvv = $('.inputCvv');
  var inputName = $('.inputName');
  var imgModal = $('#imgModal');
  var nameModal = $('.name');
  var cardModal = $('.ncard');
  var cvvModal = $('.cvv');
  var dateModal = $('.fecha');
  buttonNext.on('click', function(event) {
    debugger;
    if (libraryCard.isValidCreditCard(inputName.val(), inputCard.val(), inputCvv.val(), inputDate.val())) {
      alert('USUARIO VALIDO');
      event.preventDefault();
      buttonNext.attr('data-target', '#exampleModal');
      imgModal.attr('src', data[inputCard.val()][data[inputCard.val()].length - 1]);
      nameModal.text(inputName.val().toUpperCase());
      cardModal.text(inputCard.val());
      cvvModal.text(inputCvv.val());
      dateModal.text(inputDate.val());
    } else {
      alert('Datos no validos');
    }
  });
});
