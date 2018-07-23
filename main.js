
const btnSend = document.getElementById("btnSend");

btnSend.addEventListener("click",function(){
    let isValidCard = require('card');
    let valInput = document.getElementById("creditNumber").value;

    if (isValidCard(valInput)=== true){
        document.getElementById("resul").innerHTML = " es Valido ";
    } else {
        alert("Error");
    }
});


  


// console.log(cardFunction(4152313380623160));//true
// console.log(nameFunction("Dulce Lemus"));//true
// console.log(cvvFunction(123)); //true
// console.log(dateFunction(12,18));//true



