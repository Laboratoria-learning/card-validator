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
