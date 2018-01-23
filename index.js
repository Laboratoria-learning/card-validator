window.onload = function () {
  document.getElementById("submitb").addEventListener("click", isValidName);
}


function isValidCard(){
  var numberCar= document.getElementById("cardnumber").value;
  if (numberCar.length === 0) {
      alert('Ingrese un número');
    } else {
      var arr = [];
      for (var i = 0; i < numberCar.length; i++) {
        arr.push(numberCar[i]);
      } for (var elem = 0; elem < arr.length; elem++) {
        var item = arr.pop();
        arr.splice(elem, 0, item);
        var num = [];
      } for (var x = 0; x < arr.length; x++) {
        num.push(parseInt(arr[x]));
        var pairPosition = [];
        var impairPosition = 0;
        var result;
      // Separar los números en posiciones pares
      } for (var p = 0; p < num.length; p ++) {
        if ([ p + 1] % 2 === 0) {
          pairPosition.push((num[p]) * 2);
        } else if ([p + 1] % 2 !== 0)
          impairPosition += (num[p]);
        var pairPositionLess = 0;
        var pairPositionHigth = [];
      } for (var s = 0; s < pairPosition.length; s++) {
        if (pairPosition[s] < 10) {
          pairPositionLess += (pairPosition[s]);
        } else {
          pairPositionHigth.push(pairPosition[s]);
          var pairString = pairPositionHigth.join('');
          var sum = 0;
          for (var y = 0; y < pairString.length; y++) {
            sum += parseInt(pairString[y]);
          }
        }
      }
    }result = sum + impairPosition + pairPositionLess;
    if (result % 10 === 0) {
      return true; 
      alert('Tarjeta Válida');
    } else {
      return false; 
      alert('Tarjeta Inválida');
    }
  isValidDate();
}

function isValidDate(){
  var month = document.getElementById('expirationm').value;
  var year = document.getElementById('expirationy').value;
  if ( (month > 13 || month < 1) && (year > 2017 || year < 2007)){
    alert('Ingrese Mes y Año Válido')
  } else {
    return alert('fecha valida');
  }isValidCVV();
}


function isValidCVV(){
  var cvv = document.getElementById('cvv').value;
  if ( cvv.length !== 3 ){
    alert('Ingresa una cvv válida')
  } else {
    return alert('CVV valida');
  }isValidName();
}

function isValidName(){
var str = document.getElementById('name').value;
var patt = new RegExp("[0-9]");
var res = patt.test(str);
if (res === false){
  alert('nombre válido')
}else {
  alert('nombre inválido')
}
}


module.exports = isValidCard;

