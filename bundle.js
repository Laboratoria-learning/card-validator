(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const btnSend = document.getElementById("btnSend");

btnSend.addEventListener("click",function(){
    let isValidCard = require('card');
    let valInput = document.getElementById("creditNumber").value;

    if (isValidCard(valInput)=== true){
        document.getElementById("resul").innerHTML = "Numero de tarjeta: " + creditNumber + " es Valido ";
    } else {
        alert("Error");
    }
});


  


// const cardFunction = basicCardValidator.card;
// const nameFunction = basicCardValidator.name;
// const cvvFunction = basicCardValidator.cvv;
// const dateFunction = basicCardValidator.date;

// console.log(cardFunction(4152313380623160));//true
// console.log(nameFunction("Dulce Lemus"));//true
// console.log(cvvFunction(123)); //true
// console.log(dateFunction(12,18));//true




},{"card":2}],2:[function(require,module,exports){
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



},{}]},{},[1]);
