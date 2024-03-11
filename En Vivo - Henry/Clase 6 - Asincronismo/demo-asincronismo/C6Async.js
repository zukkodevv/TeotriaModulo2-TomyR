// setTimeout(() => {
//   function sumar(a, b) {
//     return console.log(a + b);
//   }
//   sumar(5, 2);
// }, 3000);
//* Hacemos una función de suma sencilla para poder simular un código asincrono.

const statusCode = 200;
//* Declaramos una constante que va a simular una respuesta de servidor con el código 200 (OK)

//? Creamos la promesa

// const miPromesa = new Promise((resolve, reject) => {
//   //* Creamos una promesaque va a recibir los parametros resolve en caso de exito y reject en caso de falla
//   setTimeout(() => {
//     //* Le ponemos un setTimeOut para simular el asincronismo el tiempo que tardaría en resolverse la operación asincrona y pasarle la resolución a la promesa.
//     if (statudCode < 400) resolve("Mi primer promesa resuelta");
//     //* Le indicamos que sí la promesa resuelve un código por debajo de 400 (códigos afirmativos) le ponga de valor a resolve el string entre parentesis y lo devuelva.
//     else reject("Esta promesa ha sido rechazada");
//     //* Le indicamos que sí el código es mayor a los códigos 400 (códigos negativos) le ponga el valor a reject del string entre parentesis y lo devuelva.
//   }, 2000);
// });
//
// console.log(miPromesa);
//
// async function miPromesaAsync() {
//   try {
//     console.log("iniciando llamada asincrona");
//     const result = await miPromesa;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// miPromesaAsync();

//^ Uso de Axios

//* Comenazamos a utilizar axios y empezamos a ver su sintaxis.

//const axios = require("axios");
////* Requerimos a axios para poder usar sus métodos después
//
//const obtenerUsuarios = async () => {
//  try {
//    const users = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//    console.log(users.data);
//  } catch (error) {
//    console.log(error.response.message);
//  }
//};
//
//^ Leyendo archivos con FS

const fs = require("fs");
function leerArchivo() {
  fs.readFile("./archivo.txt", "utf-8", (error, data) => {
    if (error) throw Error("Error al recibir el archivo");
    console.log("Contenido generado exitosamente: ", data);
  });
}

leerArchivo();

const escribirArchivo = () => {
  const contenido = "Debí elegir historia del arte cuándo pude :";

  fs.writeFile("nuevoArchivo.pdf", "utf-8");
};
