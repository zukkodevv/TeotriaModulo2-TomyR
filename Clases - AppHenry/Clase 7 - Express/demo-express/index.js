const app = require("./src/server");
//* Se requiere app (Instancia de express con todas sus funciones) de server.js
//* Esta app es en dónde "vive" nuestro servidor ya que con ella podremos llamarlo.

app.listen(3000, console.log("Servidor escuchando en el puerto 3000"));
//* Ejecutamos el método listen de express para indicarle que levante el servidor y empiece escuchar, con el primer parametro siendo el puerto y el segundo
//* Luego ejecutamos una callback que va a realizar una acción al levantar el servidor
