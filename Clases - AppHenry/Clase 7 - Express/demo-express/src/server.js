const express = require("express");
//* Requerimos express para tenerlo disponible.

const router = require("./routes/rIndex");
//* Requerimos el enrutador para poder usarlo y acoplarlo al servidor cómo el siguiente paso del flujo de código, de otra forma app no sabe de la existencia de router ni esta vinculado.

const app = express();
//* Definimos app cómo constancia de express y disponga de todas sus funciones.

app.use(router);
//* Le decimos a app que router es parte del servidor y se puede usar.

module.exports = app;
//* Exportamos la constancia de express que va a servir para definir y levantar el servidor en el módulo principal del servidor, index.js
