//* Aclaración: Al ejecutar el comando "Jest" mediante el script "test" jest busca cualquier archivo .test y ejecuta los tests en su interior, ahora vamos a crear esos tests;

//^ describe("Una función que debe pasar siempre", () => {
//^   it("función verdadera", () => {
//^     expect(true).toBe(true);
//^   });
//^ });
//* Declaramos una función y la describimos con "describe", luego le damos un callback para definir lo que debe ir dentro, dentro creamos una función más que describimos con un it, luego le pasamos un callback para declarar lo que debe ir dentro, dentro ponemos la aserción expect() que se espera el valor true entre parentesis y con el matcher toBe le decimos que se espera que el valor true sea true, lo cuál siempre es cierto.

//* Para la primera se usa describe porque describe el conjunto de funciones, ya que las descritas con it generalmente son varias que desrciben que debería pasar si la función recibe tal valor en varios casos, pero siempre la misma función.

//^ Ahora comenzaremos a prácticar con la función "sumar" alojada en el index.js, por lo que comentaremos la función anterior.

const { sumar } = require("../index"); // <-- Explicado en línea 24.

//^ describe("función de suma", () => {
//^   it("Debe devolver null si algun parametro no es núemrico", () => {
//^     expect(sumar(1, true)).toBe(null);
//^     expect(sumar(false, 10)).toBe(null);
//^     expect(sumar("hola", "chau")).toBe(null);
//^   });

//* Definimos una función con varios tests que simulan resultados en ciertos casos, en estos verificamos que retorne null cuándo alguno de los parametros de sumar no sea un número.

//^  it("Debe retornar la suma correctamente", () => {
//^    expect(sumar(10, 15)).toBe(25);
//^    expect(sumar(0, 0)).toBe(0);
//^    expect(sumar(-8, 8)).toBe(0);
//^    expect(sumar(-20, -30)).toBe(-50);
//^  });
//* Acá definimos otro tests para verificar que el resultado sea retornado correctamente cuándo los parametros seaan correctos.
//^ });

//Escrito antes de requerir el archivo index.js
//* Acá es cuándo nuestro código explota, pues cómo en los módulos debemos exportar las funciones para que el archivo de testing las reconozca, con module.exports en index.js y require en este archivo, por lo que ahora hacemos eso.

const mockSumar = jest.fn(sumar);
//* Acá estamos realizando un clon de la función sumar que llamaremos por la constante mockSumar, ahora realizamoremos todas las pruebas que hicimos anteriormente pero con esta función en vez de la original.

describe("función de suma", () => {
  it("Debe devolver null si algun parametro no es núemrico", () => {
    expect(mockSumar(1, true)).toBe(null);
    expect(mockSumar(false, 10)).toBe(null);
    expect(mockSumar("hola", "chau")).toBe(null);
  });
  it("Debe retornar la suma correctamente", () => {
    expect(mockSumar(10, 15)).toBe(25);
    expect(mockSumar(0, 0)).toBe(0);
    expect(mockSumar(-8, 8)).toBe(0);
    expect(mockSumar(-20, -30)).toBe(-50);
    console.log(mockSumar.mock);
    //* Acá le decimos al código que haga un console log de mockSumar con el atributo mock, esto devolvera todos los procesos que siguieron los tests, los valores que se mandaron y otras cosas.
  });
});

//* Esto nos devuelve exactamente lo mismo que antes ya que hacemos una copia de la función y la testeamos, acá no hay diferencia pero en códigos grandes con funciones interconectadas es realmente algo muy útil.
