//* Vamos a hacer una función que pueda calcular una factura con un solo item, con varios items, manejar las facturas si no tiene items y aplicar un descuento.

const calcularTotal = require(".");

//* Para aplicar los principios de TDD primero hicimos nuestras propuestas, ahora crearemos los test para cada propuesta y luego haremos el archivo js.
const calcularTotal = require("./index");

const mockGetProduct = jest.fn(() => {
  return [{ name: "ProductoA", price: 10, quantity: 2 }];
});

const mockGetProducts = jest.fn(() => {
  return [
    { name: "productoA", price: 10, quantity: 2 },
    { name: "productoB", price: 40, quantity: 5 },
    { name: "productoC", price: 15, quantity: 4 },
  ];
});

const mockEmptyProduct = jest.fn(() => []);
describe("la funnción para calcular un total", () => {
  it("la función callback debería ejecutarse al menos una vez", () => {
    calcularTotal(mockGetProduct);
    expect(mockGetProduct).toHaveBeenCalled();
  });
  //* Comprobador para verificar que la función callback por lo menos se ejecutó una vez

  it("debería calcular el total con un solo item", () => {
    expect(calcularTotal(mockGetProduct)).toBe(20);
  });
  //* Se define con it lo que debe hacer y luego con la arrow function se indica con expect que la función calcularTotal con los parametros mockGetProduct tenga cómo salida 20.

  it("debería calcular el total con un varios items", () => {
    expect(calcularTotal(mockGetProducts)).toBe(280);
  });
  //* Testing para verificar que el resultado de la función importada calcularTotal con los parametros definidos anteriormente como mockGetProducts sea igual a 280 con el metodo .toBe()

  it("debería lanzar un error si no hay items", () => {
    expect(() => calcularTotal(mockEmptyProduct)).toThrow("Factura Inválida");
  });
});

//* Creamos el archivo total.js con las funciones para exportar y testear
