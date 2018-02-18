(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const validateInput = require('./src/validateInput');
const validate = require('./src/validate');

// const config = {
//   cardNumber: document.getElementById('minumero'),
//   expDate: document.getElementById('exp'),
//   CVV: document.getElementById('cvv'),
//   cardName: document.getElementById('cname'),
//   subButton: document.getElementById('button')
// };
//
// module.exports = config;

},{"./src/validate":2,"./src/validateInput":3}],2:[function(require,module,exports){
const Validate = {};
let letters = /\D/;
let num = /[0-9]/g;

Validate.cardNumber = function(cardNumber) {
  let stringNumber = cardNumber;
  if (cardNumber === null || cardNumber === undefined) {
    return false;
  }

  if (typeof(stringNumber) === typeof (42)) {
    stringNumber = String(stringNumber);
  }
  let sum = 0;
  const LEN = stringNumber.length;
  if (LEN === 0 || letters.test(stringNumber)) {
    return false;
  } else {
    for (let i = 0; i < LEN; i++) {
      let intVal = parseInt(stringNumber.substr(i, 1));
      if (i % 2 === 0) {
        intVal *= 2;
        if (intVal > 9) {
          intVal = 1 + (intVal % 10);
        }
      }
      sum += intVal;
    }
    return (sum % 10) === 0;
  }
};

Validate.CVV = function(cvv) {
  let stringCVV = cvv;
  if (typeof(cvv) === typeof (42)) {
    stringCVV = String(cvv);
  }
  if (letters.test(stringCVV) || stringCVV.length !== 3) {
    return false;
  } else {
    return true;
  }
};

Validate.expDate = function(ExpDate) {
  let date = /\d{2}\/\d{2}/;
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let finalDate = currentYear + '-' + currentMonth;

  if (date.test(ExpDate)) {
    let month = ExpDate.substring(0, 2);
    let year = ExpDate.substring(3, 5);
    let inputDate = 20 + year + '-' + month;
    if (new Date(finalDate) <= new Date(inputDate)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

Validate.cardName = function(cardName) {
  if (typeof(cardName) === typeof (42)) {
    return false;
  }
  if (cardName === null || cardName === undefined) {
    return false;
  }
  if (num.test(cardName) || /^ *$/.test(cardName) || cardName.length === 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = Validate;

},{}],3:[function(require,module,exports){
const Validate = require('./validate.js');
// const config = require('../index.js');

const subButton = config.subButton;
subButton.addEventListener('click', validateInput);


function validateInput() {
  let cardNumber = Validate.cardNumber(config.cardNumber.value);
  let cvv = Validate.CVV(config.CVV.value);
  let exp = Validate.expDate(config.expDate.value);
  let cardName = Validate.cardName(config.cardName.value);
  if (cardNumber && cvv && exp && cardName) {
    console.log('datos válido... enviar...');
    return true;
  } else {
    console.log('datos inválidos');
    return false;
  }
};

// module.exports = validateInput;

},{"./validate.js":2}]},{},[1]);
