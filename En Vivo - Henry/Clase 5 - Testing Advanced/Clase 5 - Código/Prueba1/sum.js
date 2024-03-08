function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }
  return a + b;
}

module.exports = sum;
//^^ Exportamos la función para que el test lo pueda reconocer
