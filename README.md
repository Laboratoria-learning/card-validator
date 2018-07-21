## Objetivo
El objetivo principal de la la herramienta será validar los distintos campos de una tarjeta convencional de credito tales como: numero de tarjeta, CVV, fecha de expiracion(mm/aa) y nombre del titular.

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

## Aplicación

### Valida el número de tarjeta
Las validaciones correspondientes a este campo serán las siguientes:
- El usuario solo podra ingresar 16 digitos.
- El campo solo acepta numeros.
- El campo acepta espacios pero no son tomados en cuenta para el array de validacion.

### Valida CVV 
Validaciones del campo:
- El usuario solo podrá ingresar 3 digitos.
- El campo solo acepta numeros.

### Valida Fecha Expiración
Campo será dividido en dos secciones: Mes y Año.

**Año**

- Tendrá formato "aa".
- En caso de que sea menor al año en curso, se retornará un false el cual indicaria que la tarjeta esta expirada.
- Solo acepta numeros.

**Mes**

- Tendrá formato "mm". 
- Solo acepta numeros en el rango de 1 al 12


### Valida nombre
El usuario ingresa nombre y apellidos tal y como se encuentra plasmado en su identifiacion oficial o tarjeta de crédito.
El campo solo permite qué el usuario:
- Ingrese un maximo de 50 carácteres.
- Los carácteres deben de estar constituidos solo por letras.
- Se permite el uso de espacios.

## DEMO

Una manera de utilizar la libreria.

