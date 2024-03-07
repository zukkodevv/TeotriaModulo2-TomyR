//^^ const { a, b, user } = require("./data");
//* Se requiere el módulo data con rquiere
//^^ console.log(data);
//* Al ejecutarlo con node funciones.js no reconoce el mmódulo data

//^^ console.log(a, b);
//* Se usa para hacer una prueba

// ---------------------------- EJEMPLO DE MODULACIÓN PARA LA HOMEWORK -------------------------------*//

const suma = (a, b) => console.log(a + b);
//* Utilizamos una funcion de suma simple para poder usarlo más tarde en otros módulos

const usuario = (user) => console.log(user);
//* Se crea una función que va a tomar el parametro "user" que posteriormente va a ser requerido por el módulo data y se hace una función de console.log de este parametro, esta función luego la exportaremos.

const frutas = ["nispero", "tamarindo", "papaya", "manzana"];
//* Creamos un array para poder aplicarle una función que exportaremos.

function frutal() {
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
}
//* Usamos un bucle que nos sirva para que haga un console log de cada una de las frutas individualmente y lo exportamos

module.exports = { usuario, frutas, frutal, suma };
//* Exportamos las funciones = "usuario", los valores del array "frutas", la función "frutal" y la función "suma"
