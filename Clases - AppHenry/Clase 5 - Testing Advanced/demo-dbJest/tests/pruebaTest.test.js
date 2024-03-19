const { calcularTotal } = require("../index");
//* Requerimos la función calcularTotal de index.js

const dbMock = jest.fn(() => {
  return [
    { name: "ProductoA", price: 10, quantity: 2 },
    { name: "ProductoB", price: 5, quantity: 3 },
  ];
});
//* Hacemos una copia de la "base de datos" cómo una función imitadora, así no necesita comunicarse con la "base de datos" real (recordar que a los que llamamos base de datos es una función en un archivo haciendose pasar por una base de datos)

describe("En la funcion calcular total", () => {
  it("La función getItems que se pasó cómo parametro se debió haber ejecutado al menos una vez", () => {
    calcularTotal(dbMock);
    //* Llamamos a la función teniendo como parametro a la "base de datos" siendo igual que como anteriormente la llamamos poniendole de argumento la verdadera base de datos
    expect(dbMock).toHaveBeenCalled();
    //* Después de llamarla le preguntamos al código si fue llamado para verificar que lo recibió correctamente.
  });
  //* Hcemos un test para verificar si recibió los valores correctamente.
});
