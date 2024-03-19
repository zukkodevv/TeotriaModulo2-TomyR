const express = require("express");
const router = require("./routes/");
const morgan = require("morgan");
//* Acá vamos a usar el middleware "Morgan"
const cors = require("cors");
//* Requerimos el middleware "Cors"

const app = express();

//^ Aplicamos los middlewares

app.use(morgan("dev"));
//* El método use() le indica al código que la solicitud debe pasar por el lugar que esta entre parentésis. En este caso le indicamos que pase por el middleware pre-built morgan para que nos de información de la solicitud en formato "dev".

app.use(cors());
//* le indicamos a la solicitud que pase por el middleware "Cors" para así darle más seguridad a nuestro servidor, rechazando solicitudes de otras aplicaciones que quieran conectarse.

app.use(express.json);
//* Por último cuándo ya se hayan implementado los dos anteriores middlewares, le indicamos a la solicitud (recordar que siempre son formato JSON) que pase por el middleware incorporado con express que transforma la solicitud de formato JSON a objetos de javascript.

// Recordar: Las middlewares estan preparadas para que cuándo pase la solicitud por su lógica, integrar el objeto next para que continuen su camino, en el próximo ejemplo essto lo deberemos hacer a mano ya que lo estamos escribiendoun middleware personalizado.

app.use((req, res, next) => {
  console.log("Pasamos por mi propio");
  next();
});

//^ Ya se aplicaron middlewares, se continúa con el flujo de la solicitud.

app.use(router);
//* Le indicamos al código que la solicitud debe pasar por el router. (Redirigimos la solicitud al router para continúar con el flujo normal de la solicitud) App > Router > Controller > Services

module.exports = app;
