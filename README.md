# Valida datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***
## Instrucciones generales
El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

### Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});
```

A la hora de hacer las validaciones, la librería debería de añadir la clase
`.error` a los `<input>`s que no pasen la validación, o la clase `.success`
en caso de que sí pase.

***

## Objetivo
El objetivo principal de la la herramienta será validar los distintos campos de una tarjeta convencional de credito tales como: numero de tarjeta, CVV, fecha de expiracion y nombre del titular.

## Requerimientos del proyecto proporcionados por el cliente

Implementar un validador de datos de tarjeta de crédito. La librería debería validar el número de tarjeta de crédito (usando algoritmo de Luhn), fecha de vencimiento, código de verificación (cvv) y nombre completo que aparece en la tarjeta.

- Valida el número de tarjeta
- Valida CVV 
- Valida Fecha Expiración
- Valida nombre 

## Herramientas utilizadas en el proyecto
Para este proyecto se utiliza:
- Javascript ES6
- HTML
- Node JS 
- JQuery
- Mocha
- NPM

## Flujo del programa

El usuario deberá ingresar a la página constituida por un form el cual se muestra a continuación.

....

Se le pedirá al usuario ingrese manualmente los campos de Nombre, CVV, Numero constituido por 16 digitos de la tarjeta de crédito y por ultimo se le pedirá elija en el menu desplegable el año y el mes de expiración de su tarjeta (estos dos campos fueron creados de esta manera para reducir el nivel de errores que se puedan cometer durante el proceso de captura).

### Valida el número de tarjeta
Las validaciones correspondientes a este campo serán las siguientes:
- El usuario solo podra ingresar 16 digitos 
- El campo solo acepta numeros.

### Valida CVV 
Validaciones del campo:
- El usuario solo podrá ingresar 3 digitos
- El campo solo acepta numeros.

### Valida Fecha Expiración
Campo será dividido en dos secciones: Mes y Año.

**Año**

El campo consiste en una lista de 20 años comenzando desde el año en curso (2018) hasta el 2038. Será en formato "aaaa"

**Mes**

El campo consiste en una lista desplegable con los doce meses que integran un año en formato "mm". El usuario solo puede seleccionar uno solo de los numeros. Esta sección esta diseñada de esta manera para reducir el porcentaje de errores.


### Valida nombre
El usuario ingresa nombre y apellidos tal y como se encuentra plasmado en su identifiacion oficial o tarjeta de crédito.
El campo solo permite qué el usuario:
- Ingrese un maximo de 60 carácteres.
- Los carácteres deben de estar constituidos solo por letras.
- Se permite el uso de espacios.
