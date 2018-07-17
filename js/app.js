const isValidCard = () => {

  let creditNumber = document.getElementById('creditNumber').value
  console.log(creditNumber);
  let noValido = /\s/;
  if (noValido.test(creditNumber)) {
    creditNumber = prompt("Ingresa el numero de tarjeta sin spacios");
  }
  let creditNumberReverse = (creditNumber.split("")).reverse();
  let pairNumbers = [];

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
  if (numberValidate % 10 === 0) {
    document.getElementById("resul").innerHTML = "Numero de tarjeta: " + creditNumber + " es Valido ";
  } else {
    document.getElementById("resul").innerHTML = "Numero de tarjeta: " + creditNumber + " es Invalido ";
  }
}
