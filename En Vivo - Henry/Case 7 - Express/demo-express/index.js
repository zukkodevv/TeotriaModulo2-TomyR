const server = require("./scaffolding/src/server");
//* Requerimos server para que sus funcionalidades esten presentes (express llamada ahí)

server.listen(3000, () => console.log("Server escuchando en puerto 3000"));
//* Le indicamos a la lógica que levante el servidor y se quede escuchandolas peticiones.
