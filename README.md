# Valida datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

## Ejemplo

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

## Snippets

* Función para validar código de validación de 3 dígitos
 : La siguiente función se encarga de validar mediante condiciones de longitud
   y tipo de datos que él usuario sólo ingrese 3 números. Si el usuario ingresa
   3 números la variable `validThree` tendrá como valor `true`, si ingresa menos
   números o algo diferente a lo que se le solicita la variable `validThree`
   será igual a `false` y si sobrepasa la longitud de `3` dígitos se disparará
   un `alert` con el mensaje `No debe exceder los 3 dígitos`.

   Snippets:
   ~~~
   inputCvvElement.val() //  '586'

   inputCvvElement.keyup(cvvValidation);

   //  validThree = true
   ~~~

   ~~~
   inputCvvElement.val() //  '58'

   inputCvvElement.keyup(cvvValidation);

   //  validThree = false
   ~~~

   * Función para validar nombre completo
    : La siguiente función se encarga de validar mediante condiciones dónde
      se testean los datos y se verifica la longitud del mismo. Si el usuario
      ingresa alguna palabra no menos a `3` letras, la variable `validFour`
      tendrá como valor `true`, si ingresa menos letras o algo diferente
      a lo que se le solicitó la variable `validFour` será igual a `false`.

      Snippets:
      ~~~
      inputNameElement.val() //  'Ana Torres Paredes'

      inputNameElement.keyup(nameValidation);

      //  validFour = true
      ~~~

      ~~~
      inputNameElement.val() //  'An'

      inputNameElement.keyup(nameValidation);

      //  validFour = false
      ~~~

      ~~~
      inputNameElement.val() //  '4255'

      inputNameElement.keyup(nameValidation);

      //  validFour = false
      ~~~
