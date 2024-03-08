const getProducts = require("./getProducts");

function calcularTotal(getProducts) {
  const items = getProducts();
  if (items.length === 0) {
    throw Error("Factura Inválida");
  }
  let total = 0;

  for (const item of items) {
    total = item.price * item.quantity;
    //* Decimos que el precio es igual al precio multiplicado a la cantidad de items y se guarda el resultado en el total
  }
  return total;
}

module.exports = calcularTotal;
