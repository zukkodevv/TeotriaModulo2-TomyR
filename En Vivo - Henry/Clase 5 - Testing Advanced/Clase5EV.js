//? CODE REVIEW - Node

//^^ En esta clase estsamos viendo cómo es que hicimos una petición http para una API y iterarla para que cumpla la funión que ahora cumple tempData=

$http.get("API", (data) => {
  return renderCards(data);
});

//* Cómo se ve esta API esta tomando la función que antes tenía getMovies y tempData a la vez, obteniendo la información de la API con el http get y iteradolo nombrando cada iteración como "data" y esa data conteniendo todos los objetos de la pelicula que después serán pasados cómo parametros para la función renderCards() osea toma los parametros de renderCards de todos los objetos.

//^^ Posteriormente a ver esto repasamos la modularización con la función getFilms() y renderFilms()

//* Principalmente al modularizar únicamente con node el código funciona totalmente bien pero al correrlo en el navegador todo se rompe ya que el navegador no entiende node y no puede correrlo, por lo que es necesario webpack/webpack CLI para poder hacer un archivo js que pueda convertir todos los nodos en un archivo javascript que conecte todo en un solo archivo, una especie de traducción para el navegador hecha de forma automática.

//* Después de descargar webpack/webpack CLI cómo dependecias via npm, configuramos nuestro package.json para añadirle una nueva script, "build" que tiene el valor "webpack" pero para esto primero se requiere que se cree el archivo webpack.config.js para configurar nuestra modularización, dónde va a estar el archivo js de entrada que va a traducir toda la modularización y el archivo de salida dónde se creara el archivo bundle que contendra la traducción al ejecutar el script.

//^^ module.exports{
//^^    mode: "development",
//^^        entry: "./scripts/index.js"
//* Desde el entry le indicamos que con el modo de desarollo tome las modularizaciones que haya en index.js esto convierte index.js en nuestra entrada, ahí deberían estar todas las llamadas a las modularizaciones para que webpack las traduzca.
//^^        output: {
//^^        path: __dirname + "/browser",
//^^            filename: "bundle.js"
//^^   }
//* En la salida le indicamos con dirname el nombre del directorio "/browser" el mismo paquete lo creara cuándo ejecutemos el script "build"
//^^}

//! LECTURE - TESTING ADVANCED

//^^ Para comenzar vamos a ver algunas herramientas de testing y cómo funcionand, comenzando con Jest

//* Jest es una herramienta de testeo utilizado para pruebas simples, tiene las caracteristicas de ser rápido y paralelizable, tener funciones mock y el snapshot testing, el snapshot testing nos sirve  para ver cambios en el código de testeo que tenemo.

//^^ Instalación de Jest

//* Generalmente para instalar Jest solo debemos ejecutar el comando en consola "npm install --save-dev jest", este código permite instalarlo como dependencia de desarrollo para prubeas, y luego en nuestra configuración de package.json en los scripts creamos el script test con el valor "jest" esto hara siempre una prueba al archivo en el que estemos ubicados cada vez que pongamos el comando "npm test" ---> Información detallada en la documentación, también se puede instalar con "npm install -D jest" para instalarlo cómo dependencia de desarrollador.

//^^ Implementación de expects

//* Creamos un archivo .test.js en la carpeta de practica del código

//^^ Mocks Functions

//* Son funciones que imitan comportamientos de código, con ella podemos simular por ejemplo el comportamiento de una función si pasara cada situación, si recibe muchos parametros, si recibe un parametro que no se espera, etc.

//* Más detallado en los archivos de código

//^^ Matchers utilizados

//* .toBe() sirve para esperar que el resultado sea un tipo de dato primitivo especifico.
//* .toEqual() sirve para esperar que el resultado sea igual a un comparador.

//^^ Metodología TDD

//* La metodología TDD pide que primero exista el test y luego en base a este se cree el código y integren las funcionalidades.
