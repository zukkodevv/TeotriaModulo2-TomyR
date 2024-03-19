const axios = require("axios");
//* Requerimos la libreria axios para poder tener sus metodos y realizar peticiones del protocolo HTTP.

// const miPromesaBien = new Promise((resolve, reject) => {
//  resolve("promesa resuelta");
//});
//* Definimos una promesa refiriendonos a ella con la constante miPromesaBien y la definimos para que devuelva un resolve con el valor del string

//const miPromesaMal = new Promise((resolve, reject) => {
//   reject("razon de rechazo");
// });
//* Definimos una promesa refiriendonos a ella con la constante miPromesaMal y la definimos para que devuelva un reject con el valor del string
//
//const peliculas = axios.get("https://students-api.2.us-1.fl0.io/movies");
//* Definimos la constante peliculas para definirnos a la información obtenido del protocolo con el método get a nuestra API de peliculas (devuelve un JSON).
////*
//
//console.log(peliculas);
////* Esto nos devuelve una promesa pendiente, ya que es en lo que esta basado axios, para que así podamos trabajar mejor en la //respuesta que nos de.

//promise;
//  //.then((res) => {
// //* Con el método exclusivo de promesas .then le indicamos que hacer si la promesa sale bien, es llamado "succeshandler" y en el parametro que indicamos res, la promesa predeterminadamente usa el parametro para darle como valor la respuesta de la promesa.
//  console.log(res.data);
//  //* Hacemos un console log de los datos de la respuesta de la promesa.
//})
//.catch((err) => {
//  //* De igual forma que con el then declaramos su contraparte, un "errorhandler" quien manejara en caso de error con la lógica que definiremos, toma el parametro de err predeterminadamente cómo la respuesta que da la promesa de porque se produjo el error.
//  console.log(err);
//});

const fetchMovies = async () => {
  try {
    //* Le indicamos al código que queremos a hacer esto y que mientras todo pase correctamente seguir con el proceso de ejecucción.
    const data = await axios.get("https://students-api.up.railway.app/movies");
    //* Await espera la resolución de la promesa de axios (recordemos que axios se basa en promesas) y una vez que sea resuelta el valor se almacena en la variable data.
    const movies = data.data;
    //* Axios trae los datos y los almacena en la variable data, pero esos datos no son el array de películas, el array viene en una propiedad de axios llamada data que contiene toda la información de la API que se obtuvó, osea el array, por lo que le decimos que nos de eso y lo almacene en la variable movies.

    console.log(movies);
    //* Hacemos un console.log de la variable movies con el array almacenado.
  } catch (error) {
    //* Le decimos al código que sí en el catch en cualquier parte de su lógica hubo una falla, se cancele su ejecucción y salte a ejecutar esta lógica en su lugar, que toma de parametro el error recibido y le hace un console.log (error se puede llamar de cualquier forma, ya que por defecto el parametro recibe el error).

    console.log(error);
    //* Hacemos un console.log del error.
  }
};

fetchMovies();
