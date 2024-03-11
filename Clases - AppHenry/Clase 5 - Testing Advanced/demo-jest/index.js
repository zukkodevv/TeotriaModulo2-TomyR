const sumar = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return null;
  const sumar = a + b;
  return sumar;
};
//* Declaramos una función de suma sencilla con un arrow function con validadores que retornen null en caso de que la función reciba valores que no sean números como parametros. Esta función es ahora la que testearemos.

const calcularTotal = (items) => {
  //* Creamos una función calcularTotal llamada atraves de una constante que toma de parametro "items"

  if (!items.length) throw Error("Factura invalida");
  //* Sí no existe length de items (osea es igual a 0) retornar un error con el string entre parentesis.

  let total = 0;
  //* Se inicializa una variable designada a almacenar el total de los productos.

  for (let item of items) {
    total += item.quantity * item.price;
    //* Se crea un bucle para iterar los items pasados que son un array de objetos y a cada objeto, multiplicar el valor de su precio por el valor de la cantidad.
  }
  return total;
};

module.exports = {
  sumar,
  calcularTotal,
};
//* Exportamos la función sumar para que el archivo de testing la reconozca.
//* Luego lo declaramos cómo un objeto para exportar ambas funciones.

//^ Cómo requerirlo de esta forma?

//* Para requerir una función especifica de un módulo con varias funciones exportandose el cosntante del require debe estar transformado en un objeto, ya que lo que ahora recibe le require es un objeto, y ese objeto constante debe tener el nombre de lo que se desea importar, por ej: const {sumar} = require('./index.js').
