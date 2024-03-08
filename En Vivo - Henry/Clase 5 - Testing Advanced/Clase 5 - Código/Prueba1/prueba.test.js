const sum = require("./sum.js");

it("Debería siempre ser true", () => {
  expect(true).toBe(true);
});

//* Indicamos con it lo que el código que debería hacer, nada más que una descripción y con la arrow function implementamos el expect ('lo que testeamos') y que esperamos que sea el resultado con .toBe() en este caso toBe(true) lo que es verdad porque true es igual a true.

//! Con la configuración del JSON "jest --watchAll" vemos en vivo los cambios cuándo guardamos sin necesidad de ejecutar el comando npm test más de una vez

describe("funcion de suma", () => {
  it("Debería devolver false en caso de que el retorno no sea un número", () => {
    expect(sum("hola", 5)).toBe(false);
    expect(sum(true, 10)).toBe(false);
    expect(sum("salsa", "picadillo")).toBe(false);
  });

  //* De por sí esta función no devuelve nada porque no existe la función sum en forma de archivo .js por lo que procedemos a crear el archivo suma.js

  //* Luego de crear el archivo suma.js, agregarle una función de suma simple, exportarlo y requerirlo podemos hacer el testeo, por lo que el código de testing ed arriba, en todas se califica cómo "passed" ya que se espera lo que queríamos que espere.

  it("Debería retornar 15 cuándo coloque 10 y 5 como argumentos", () => {
    expect(sum(10, 5)).toBe(15);
  });
  //* Hacemos un código simple que con el it indica que es lo qu debería hacer y con el callback indica que debe esperar que cuándo la función exportada "sum()" recibe los paraemtros 10 y 5 debe retornar 15, lo que resulta en un "passed" ya es lo que devuelve.

  it("Debería retornar 20 cuándo coloque 10 y 10 cómo parametros", () => {
    expect(sum(10, 10)).toBe(20);
  });
  //* Igual que el anterior, se describe con it, se declara con expect que la función importada sum con los parametros 10 y 10 debe devolver 20.
});

//^^ Todo esto cuándo ejecutamos el comando "npm run cover" anteriormente configurado en los scripts de package.json, podemos ver cuántas funciones del código se cubren con los tests, en este caso 100% porque solo hay una función que es en la cuál trabajamos ya.
