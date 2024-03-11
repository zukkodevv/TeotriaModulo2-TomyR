const axios = require("axios");
//* Requerimos la libreria axios para poder tener sus metodos y realizar peticiones del protocolo HTTP.

const miPromesaBien = new Promise((resolve, reject) => {
  resolve("promesa resuelta");
});
//* Definimos una promesa refiriendonos a ella con la constante miPromesaBien y la definimos para que devuelva un resolve con el valor del string

const miPromesaMal = new Promise((resolve, reject) => {
  reject("razon de rechazo");
});
//* Definimos una promesa refiriendonos a ella con la constante miPromesaMal y la definimos para que devuelva un reject con el valor del string

const peliculas = axios.get("https://students-api.2.us-1.fl0.io/movies");
//* Definimos la constante peliculas para definirnos a la información obtenido del protocolo con el método get a nuestra API de peliculas (devuelve un JSON).
//*

console.log(peliculas);
//* Esto nos devuelve una promesa pendiente, ya que es en lo que esta basado axios, para que así podamos trabajar mejor en la respuesta que nos de.
