   // Example starter JavaScript for disabling form submissions if there are invalid fields
   (function(){
    'use strict';
    window.addEventListener('load', function(){
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form){
        form.addEventListener('submit', function(event){
          if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
 


var $buttonNext = $('#next');
var $inputCard = $('#cn');
$inputCard.on('input', function(event) {
  event.preventDefault();
  var nroinput = $inputCard.val();
  localStorage.input = $inputCard.val();
  objeto.isValidCreditCard($(this).val().trim(), $buttonNext);
  $buttonNext.on('click', function(event) {
    event.preventDefault();
    $(location).attr('href', 'views/datosUsuario.html');
  });
});
console.log(localStorage.input);
