# Valida datos de tarjetas de crédito

El validador de tarjetas se encargara de confirmar que los datos entregados
de las tarjetas sean correctos, para validar la tarjeta se solicitaran los siguientes datos.

+ Número de tarjeta, verifica por algoritmo de Luhn y que el correspondan a 16 catacteres numericos.

+ Fecha de Vencimiento, verifica que la fecha tenga el formato correcto y que no esté expirada.

+ Número CVV, verifica que se ingresen datos númericos de 3 caracteres.

+ Nombre Completo, verifica que solo se ingresen caracteres alfabeticos

### Dependencias

[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![npm](https://img.shields.io/badge/Javascript-ES6-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/mocha--jsdom-1.1-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/mocha-5.5.1-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/chai-4.1.2-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/browserify-15.2.0-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/jsdom-11.6.1-brightgreen.svg)]()

### Modo de Uso

+ CDN


https://cdn.rawgit.com/IreeRodriguez/card-validator/hipermegared/lib/main.min.js

+ NPM

npm install cardvalidatoriv

+ Descarga

Decargar archivo main.js de este github 



Para usar esta libreria hay que ingresar el siguiente script, el objeto se deben incluir las Id que se han usado en el formulario


``` js 
<script type="text/javascript">
  const config = {
    cardNumber: cardNumberId,
    expDate: expDateId,
    CVV: cvvId,
    cardName: nameId,
    subButton: buttonId
  };
</script>
```

+ Ejemplo de HTML 

``` html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cardNumberId" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="expDateId" name="exp" />
   </div>
   <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvvId" name="cvv" />
   </div>
   <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="nameId" name="name" />
  </div>
  <input id="buttonId" type="submit" value="Pagar" />
</form>
```


