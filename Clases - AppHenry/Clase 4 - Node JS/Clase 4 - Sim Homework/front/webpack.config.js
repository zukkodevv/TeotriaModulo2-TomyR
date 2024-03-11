//* Se crea esta carpeta para configurar el bundler, webpack.

module.exports = {
  entry: "./scripts/index.js", // Esto es por donde comienza a escanear webpack.
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  // Le indicamos que lo escaneado se refleje en la carpeta "public" que va a crear en la raíz con un archivo "bundle.js" con todo lo escaneado y traducido
};

//* Luego de hacer esto configuramos un scrpit "build" para poder actualizar los módulos que escanea webpack cada vez que cambiemos algo.
