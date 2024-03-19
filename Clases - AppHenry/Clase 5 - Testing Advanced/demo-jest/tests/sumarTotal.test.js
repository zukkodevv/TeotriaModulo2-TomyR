//* En este test vamos a verificar qeu todo funcione bien en nuestro archivo calcularTotal.js, por eso es que esta hecho aparte.

const { calcularTotal } = require("../index");
//* Al requerir un archivo con varios exports, se obtiene un objeto, del cuál se selecciona con el const transformado en objeto cuál requerimos.

describe("la función cacularTotal", () => {
  it("debe calcular el total de la factura con un item", () => {
    expect(
      calcularTotal([{ name: "prodcutoA", price: 10, quantity: 2 }])
    ).toEqual(20);
    //* Se espera que al ejecutar la función calcularTotal con este objeto se retorne 20.
  });

  it("debe calcular el total de la factura con varios item", () => {
    expect(
      calcularTotal([
        { name: "productoA", price: 10, quantity: 2 },
        { name: "productoB", price: 20, quantity: 3 },
        { name: "productoC", price: 30, quantity: 4 },
      ])
    ).toEqual(200);
  });

  it("debe arrojar un error 'factura invalida' al recibir un arreglo vacío", () => {
    expect(() => calcularTotal([])).toThrowError("Factura invalida");
    //* Definimos que la función este siendo "abrazada" por otra función para que la ejecute y pueda ejecutarse en caso de error el error "factura invalida".
  });
});
