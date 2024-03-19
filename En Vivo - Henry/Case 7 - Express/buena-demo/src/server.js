const express = require("express");
//* Se requiere el módulo de express para tener a disposición sus funciones y componentes leugo de llamarlo.
const router = require("./routes/rIndex");

const server = express();
//* Se crea una instancia de express a la que nos referiremos cómo "server", en esta configuraraemos todo lo relacionado a express.

server.use(router);
//* Se usa el método use() para poder montar el router importado, osea que todas las solicitudes del servidor primero pasaran por el router.

module.exports = server;
