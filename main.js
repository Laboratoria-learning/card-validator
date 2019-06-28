
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



