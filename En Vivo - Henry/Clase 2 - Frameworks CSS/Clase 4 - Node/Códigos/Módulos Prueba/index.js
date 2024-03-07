//^^ var hola = "Hola";

//* El otro modulo "OtroModulo" no conoce nada sobre esta variable hola, para que pueda conocerla se debe utilizar "module.exports" (Exportar módulo).

//^^ module.exports = hola;
//* Module es un objeto especial individual de cada objeto, exports es la propiedad de module que hace referencia a un objeto.

//! Ejemplo para el Homework
//^^ Vamos a hacer que index.js exporte funcionalidades para los módulos data.js y funciones.js;

//*  Vamos a hacer una prueba del homework ahora:

const { suma, usuario, frutas } = require("./funciones");
//* Requerimos las funciones y los valores de suma y usuario

const { a, b, user } = require("./data");
//* Requerimos los valores de a, b y user del módulo data

suma(a, b);
//* Realizamos una suma usando la función requerida de funciones: "suma" y los valores requeridos de data: "a y b"
usuario(user);
//* Realizamos un console log del usuario requeriendo una función de "funciones.js" y con el parametro de user cómo el valor user requerido de "data.js"

console.log(frutas);
//* Se hace un console log de la función de frutas requerido de "funciones.js"

// 17, damian, ['nispero', 'tamarindo', 'papaya', 'manzana']
