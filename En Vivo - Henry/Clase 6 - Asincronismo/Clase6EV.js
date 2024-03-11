const miPromesa = require("./demo-asincronismo/C6Async");
//! CODE REVIEW - TESTING ADVANCED

//* Comenzamos repasando la actividad y homework de testing, con los puntos a seguir y cómo debiamos hacerlo.

//* Tarea hecha casi totalmente de forma práctica en nuestro proyecto.

//! LECTURE - ASINCRONISMO

//^ Práctica de peticiones HTTP, operaciones asincronias, Promesas, Async/Await y Axios serán algunos de los temas de hoy.

//* Empezamos repasando la realción cliente servior, haciendo enfasis que cada vez que el cliente realice una petición, el servidor SIEMPRE devuelve una respuesta, positiva, informativa o negativa pero siempre la devuelve.

//^ ¿Qué es HTTP?

//* HTTP es el protocolo de comunicación entre cliente y servidor, el cliente siempre es quién solicita un recurso del servidor y el servidor quien SIEMPRE responde  a esta petición mediante la base de datos.

//? ¿Que herramientas podemos usar para esto?

//* Hay varias aplicaciones que sirven para poder simular un cliente pidiendo una información/petición, algunas de estas herramientas son Postman, Insomnia o Thunderclient que realizan peticiones a las Rutas HTTP.

//* Vemos la solicitudes que realiza el navegador para empezar a ir comprendiendo esto, el navegador solo hace peticiones de tipo GET al servidor.

//* Realizamos una petición GET mediante thunderclient a nuestra API de peliculas "https://students-api.2.us-1.fl0.io/movies" y recibimos el JSON exitosamente.

//* Repasamos también la asincronia que ya conocemos, su uso y función, cómo podemos usar la asincronia en las funciones con grandes grados de incertidumbre y para evitar tiempos de espera largos al realizar operaciones que puedan llevar un tiempo al realizarlas de forma asincrona mientras otras tareas se realzan, habiendo repasado esto nos adentramos en las promesas, una caracteristica clave de la asincronia.

//^ Promesas

//* Las promesas en javascript son objetos, son eventuales resultados de operaciones asincronas, osea los resultadosde una operacion asincrona al momento de resolverse, y casi cómo los estados del servidor puede evaluarse cómo éxito o fracaso, se decidira que hacer con la operación de acuerdo la resultado que devuelva la promesa.

//* De esta forma las promesas nos ayudan mucho a controlar el flujo de una operación asincrona, al poder controlar que hacer si falla y que hacer sí es exitosa, de esa manera podremos tener mejores resultados en nuestro código pudiendo imprimir errores si no funciona o el codigo normal en caso contrario.

//* SINTAXIS

const prommesa = new Promise((resolve, reject) => {});
//* Definimos una constante para referirnos a la promesa cómo "promesa" luego creamos una promesa con new Promise y le asignamos una arrow function con los dos parametros para referirnos si es exitosa "resolve" y sí es negativa "reject" para poder manejar cada situación.

console.log(prommesa); // Promise || <pending>

//^ Los estasdos de la promesa

//* La promesa cómo lo acabaos de ver en su sintaxis, devuelve un estado, en ese ejemplo "pending" o pendiente, se mantiene así hasta que la operación asincrona se ejecute y se encuentran en ese estado couándo la operación asincrona todavía no se completo.

//* El segundo estado "fullfilled" significa que se completo de manera exitosa, y devuelve valor cómo parametro "resolve".

//* El último estado posible es "rejected" indica que la promesa fallo y la promesa debe devolver una justificación de la falla, y lo adjunta cómo valor del parametro "reject".

//* Resolve y reject son los parametros que toman los valores dependiendo que devuelva la promesa, sí devuelve un error se adjunta cómo valor de parametro reject y si adjunta la petición asincrona que se pedía con éxito se adjunta al valor del parametro "resolve".

//* Luego de estos estados deben usarse métodos especiales de promesa para poder definir que hacer con estos resultados (resolve, reject).

//^ Valores de reject y resolve

//* Cuándo se devuelve una respuesta a la promesa los parametros resolve y reject mutan de valores, por valor la promesa tiene un estado y un resolve, por defecto tiene estado con el valor <pending> y resolve cómo undefined, cuándo no se realizó la operación asincrona todavía, luego en caso de error y exito:

//* En caso de exito el estado pasa a ser <fullfilled> y resolve tiene el valor requerido, ya sea un JSON o la información que hayamos requerido. Se devuelve Resolve(value)

//* En caso de fracaso el estado pasa a ser <rejected> y el parametro resolve toma el valor de "error" y se devuelve en el parametro reject la razón del rechazo. Se devuelve Reject(reason).

//^ Métodos especiales de Promesas

//* Para poder manejar las respuestas de fracaso y éxito tenemos los métodos especiales de Promesas ".then" y ".catch"

//* .then se ejecuta cuándo la promesa se resuelve exitosamente, osea nos permitira manejar el código y que hacer con el valor resuelto con la lógica que incluiremos entre sus llaves (.then{'logica'})

//* .catch se ejecutará cuándo la promesa es rechazada, haciendo que entre llaves podamos manejar el error.

//^ Método Fetch()

//* En javascrpt existe la promesa que ya viene hecha de forma nativa, sin que nosotros la creemos, tiene una sintaxis mucho más sencilla:

fetch("https://students-api.2.us-1.fl0.io/moviess")
  .then((response) => response.json())
  // el método para parcearlo a json devuelve otra promesa, por eso luego se vuelve a usar el then para poder manejar esa promesa ya parceada generada.
  //* Acá le hacemos una petición a la API y dependiendo del resultado, sí es exitoso se ejecuta el valor de response y se le aplica a lo que este dentro de la lógica entre luego de la arrow function. En este ejemplo luego de la arrow function, cómo la respuesta es JSON lo transformamos a json con el método .json()

  .then((data) => console.log(data))
  //* Acá le decimos que además de hacer lo anterior cuándo sea exitosa, también al valor adjuntado cómo respuesta (osea el valor que devuelve la petición, en este caso el JSON de peliculas) refiriendonos a ese valor cómo data y dicendole que haga un console log de esa data.

  .catch((error) => console.log(error));
//* Acá indicamos que hara en caso de que sea rechazada la petición, refiriendonos al valor devuelto cómo err, y diciendonos que nos devuelva err.message ya que al devolvernos los valores, entre los métodos que devuelve existe una propiedad message que contiene toda la información del error, algo propio de las promesas.

//^ Async/Await

//*Async/Await esta basado en promesas y sirve para simplificar y mejorar la legibilidad de nuestro código, nos ofrece una forma más resumida de procesar una resolución a una petición de una promesa.

//* SINTAXIS

async function miFuncionAsync() {
  //* Anteponemos a la función la palabra reservada async para indicarle al código que es una función asincronica y que no detenga la ejecucción del resto del código.

  const response = await fetch("API");
  //* Le indicamos con await que se espera con el fetch obtener el valor de la API y referirnos a ella cómo respuesta.
  const data = await response.json();
  //* Luego parceamos el valor obtenido de la API cómo .json ya que lo necesitamos así, esto crea un nuevo objeto del valor parceado y nos referimos a el cómo data
  console.log(data);
  //* hacemos un console log del valor de la API parceado a json (data)
}

//^ Manejo de errores con Async/Await

//* Cómo async/await es una nueva forma más sencilla de declaración de promesas, también tiene su forma de definir acciones apartir de una respuesta de rechazo o exito.

//* Estos manejadores son el try y el catch, try es el código que se ejecutara si se ejecuta exitosamente la promesa fetch, cómo el then.

//* el catch "atrapa" los errores, y maneja el código en caso de ser rechazada la petición, en verdad es casi el mismo que usamos antes.

//^ Axios

//* Axios es una libreria que nos facilita el realizar solciitudes HTTP en javascript, es preferido por su sintasis simple y consistente, manejo conveniente, funciones avanzadas y facilitar la integración del async/await u el manejo de errores, gracias a que esta basado en promesas.

//? Uso de axios

//* axios usa varios métodos, cómo axios.get(url) que envia una solicitud tipo get a la url entre paretesis, axios.post(url) que envía datos al cuerpo a la url entre parentesis, axios.put(url) que envía datos al servidor de la url entre parentesis y axios.delete(url) que elimina algo dentro de la url entre parentesis.

//^ Otras operaciones asincronas con archivos

//* Vamos a ver unos ejemplos de operaciones a asincronas para que podamos conocer un poco más de esta naturaleza, algunas de estas son: la lectura de archivos su creación y varios más relacionados a archivos.

//* Para poder trabajar con archivos podemos requerir el modulo "fs"  que es nativo de node (no hace falta instalarlo) y con el podremos ver los archivos, modificarlos con comandos.

//* todo esto se realiza mediante un código asincrono, con try, catch al ser una operación asincrona, para poder leer un archivo txt ecesitamos una petiión, una promesa, 
