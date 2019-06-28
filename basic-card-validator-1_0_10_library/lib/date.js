'use strict';
(function () {

    // DATE
    const dateFunct = (month, year) => {
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
        if (num2DigYearTest === true && year >= year2Dig) {
            return true;
        } else {
            return false;
        }
    }

    if (typeof window == "undefined") {
        console.log("consola");
        module.exports = dateFunct;
    } else {
        console.log("navegador");
        window.dateFunct = dateFunct;
    }

})();

