'use strict';
const btnSend = document.getElementById('btnSend');

btnSend.addEventListener("click", () => {
  let digMonth = document.getElementById('selectMonth').selectedIndex;
  console.log(digMonth);

  
  if (digMonth == null || digMonth == 0) {
    alert('ERROR: Debe seleccionar una opcion del combo box');
    return false;
  }

})