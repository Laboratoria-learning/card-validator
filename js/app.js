'use strict';


// DATE
const monthFunct = (month, year) => {
  let today = new Date();
  let year4Dig = today.getFullYear();
  let year2Dig = year4Dig.toString().substr(-2);

  let num2DigMonthTest = /^[0-9]{2}$/.test(month);
  let num2DigYearTest = /^[0-9]{2}$/.test(year);
  
  // months
  if (num2DigMonthTest === true && month < 13) {
    return true;
  } else {
    return false;
  }
  // years
  if (num2DigYearTest === false && year < year2Dig) {
    return false;
  } else {
    return true;
  }
}
console.log(monthFunct(12,18));
console.log(monthFunct(13,17));
console.log(monthFunct("12","18"));
console.log(monthFunct("13","17"));




