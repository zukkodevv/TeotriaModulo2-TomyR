const { getItems } = require("./dbJest");

const calcularTotal = (getItems) => {
  //* Declaramos una función callback cómo parametro, la cuál contiene la "base de datos" de los items, así pudiendo mapearlos después.

  const items = getItems();
  //* Definimos la constante items para poder referirnos a la "base de datos" dentro de getItems

  let total = 0;
  //* Definimos una variable que va a almacenar el total de la compra una vez realizada la función, por ahora solo es un almacen.

  for (let item of items) {
    //* Hacemos un bucle que itere la consatnte items que contiene toda la "base de datos" que le asignamos antes y a cada iteración (objeto/producto) se le refiere cómo item.

    total += item.quantity * item.price;
    //* Le asignamos al valor de total el resultado de el precio del producto (indicado dentro del objeto del producto) multiplicado por su cantidad (también indicada en el objeto).
  }
  return total;
  //* Importante poner el return de total al final, sí no, nos devolvera undefined ya que núnca le dijimos que devuelva el resultado de la operación cuando se realice.
};

module.exports = {
  calcularTotal,
};
