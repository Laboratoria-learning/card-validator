# VALIDADOR DE TARJETAS
Plugin capaz de verificar la validez de cualquier tarjeta a partir del nombre, número de tarjeta, fecha de expiración y código de validación.

El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

Al hacer las validaciones, la librería añade la clase `.error` a los `<input>`s que no pasen la validación, o la clase `.success` en caso de que sí pase.

## El Reto

Desarrollar una libreria Javascript que permita verificar la validez de una tarjeta

## Requerimientos Técnicos

El proyecto está realizado con las siguientes dependencias NPM:

+ Dependencias de Desarrollo
	- Babel ~v.6.26.0
	- esLint ~v.4.15.0

## Levantamiento ambiente de desarrollo


+ Clonar repositorio.
+ Posicionado en nuestro proyecto hacer correr `npm install` para descargar e instalar todas las dependencias utilizadas.






