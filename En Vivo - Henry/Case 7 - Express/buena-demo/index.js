const server = require("./src/server");
//* Se requiere el método de server con el que trabajamos las configuraciones de axios en el archivo server.js

server.listen(3000, () => console.log("Server escuchando"));
//* Montamos el servidor indicando que use el componente de axios y le aplique el método de listen, este nos requerira una respuesta del servidor y un puerto que escuchar.
