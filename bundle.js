(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const btnSend = document.getElementById("btnSend");

btnSend.addEventListener("click",function(){
    // se manda a llamar cada uno de los modulos de basic-card-validator
    let isValidCard = require('card');
    let validateNumCvv = require('cvv');
    let validateName = require('name');
    let dateFunct = require('date');
    //card
    let valInputCard = document.getElementById("creditNumber").value;

    if (isValidCard(valInputCard)=== true){
        document.getElementById("resulCard").innerHTML = " es Valido ";
    } else {
        alert("Error");
    }
    // cvv
    let valInputCvv = document.getElementById("cvv").value;

    if (validateNumCvv(valInputCvv)=== true){
        document.getElementById("resulCvv").innerHTML = " es Valido ";
    } else {
        alert("Error");
    }

    // name
    let valInputName= document.getElementById("name").value;

    if (validateName(valInputName)=== true){
        document.getElementById("resulName").innerHTML = " es Valido ";
    } else {
        alert("Error");
    }

    // date
    let month = document.getElementById("select-month").value;
    let year = document.getElementById("select-year").value;

    if (dateFunct(month,year)=== true){
        document.getElementById("resulDate").innerHTML = " es Valido ";
    } else {
        alert("Error");
    }

});


  


// console.log(cardFunction(4152313380623160));//true
// console.log(nameFunction("Dulce Lemus"));//true
// console.log(cvvFunction(123)); //true
// console.log(dateFunction(12,18));//true




},{"card":2,"cvv":3,"date":4,"name":5}],2:[function(require,module,exports){
'use strict';
// const validateNumCard = (creditNumber) => {
//   return  /^([0-9]){16}$/.test(creditNumber);
// }


  // Validar los numeros de tarjeta por Lunm
  const isValidCard = (creditNumber) => {
    let creditNumberReverse = (String(creditNumber).split("")).reverse();
    let pairNumbers = [];
    let testCreditNumber = /^([0-9]){16}$/.test(creditNumber);
  
    for (let i = 0; i < creditNumberReverse.length; i++) {
      if (i % 2 !== 0) {
        let multiplication = creditNumberReverse[i] * 2;
        if (multiplication >= 10) {
          let sum = 0;
          while (multiplication) {
            sum += multiplication % 10;
            multiplication = Math.floor(multiplication / 10)
          }
          pairNumbers.push(sum)
        } else {
          pairNumbers.push(multiplication);
        }
      } else
        pairNumbers.push(parseInt(creditNumberReverse[i]));
    }
    
    let numberValidate = 0;
    for (let j = 0; j < pairNumbers.length; j++) {
      numberValidate += pairNumbers[j];
    }
    
    if (numberValidate % 10 === 0 && testCreditNumber === true) {
      return true;
    } else {
      return false
    }
  }
    module.exports = isValidCard;



},{}],3:[function(require,module,exports){
'use strict';
// validar cvv solo sean numeros y 3 digitos
const validateNumCvv = (cvv) => {
    return  /^([0-9]){3}$/.test(cvv);
  }

  module.exports = validateNumCvv;

},{}],4:[function(require,module,exports){
'use strict';


// DATE
const dateFunct = (month, year) => {
  let today = new Date();
  let year4Dig = today.getFullYear();
  let year2Dig = year4Dig.toString().substr(-2);

  let num2DigMonthTest = /^[0-9]$/.test(month);
  let num2DigYearTest = /^[0-9]{2}$/.test(year);

  // months
  if (num2DigMonthTest === true && month < 13) {
    return true;
  } else {
    return false;
  }
  // years
  if (num2DigYearTest === true && year >= year2Dig) {
    return true;
  } else {
    return false;
  }
}

module.exports = dateFunct;
},{}],5:[function(require,module,exports){
'use strict';

// Validar nombre que solo contenga letras
const validateName = (name) => {
  return /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(name);
}

module.exports = validateName;

},{}]},{},[1]);
