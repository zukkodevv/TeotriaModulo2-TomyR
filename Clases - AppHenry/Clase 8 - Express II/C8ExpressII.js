//! T1 - INTRODUCCIÓN

//* Durante esta clase continuación a Express vamos a empezar a desarrollar servidores con funciones un poco más complejas, implementando middlewares (ya los veremos) y validaciones de nuestro servidor así cómo implementación de herramientas, frameworks muy interesantes.

//! T2 - SERVICIOS

//^ ¿Qué son?
//* Los servicios son representaciones de segmentos especificos con lógica de negocios, o partres esenciales de la aplicación que "dan un servicio", puede pensarse  cómo las capas que tiene una cebolla, cada servicio representa una capa que hace algo, una puede gestionar solicitudes de usuario, otro puede encargarse de la autenticación y así. Pero esto también lo hacen los controladores, que los diferencia entonces?

//^ Diferencias entre controladores y servicios
//* Los controladores literalmente "controlan" las solicitudes y respuestas del servidor, en cambio un servicio manejara una lógica amplia que abarca desde la obtención de la información en la base de datos hasta la autenticación, mientras que el controlador solo responserá a una solicitud especifica a una ruta.

//! T2 - MIDDLEWARES A PROFUNDIDAD

//^ ¿Que son?
//* Los middlewares son funciones que tienen acceso a los objetos (req, res) y al objeto next, estás funciones se ubican entre la solicitud y el controlador en el flujo de código, esta posición no es casualidad, ya que el controlador se comunica con el servidor que tiene información sensible, hay que asegurarse que la petición no contenga ningún código malicioso o algo que pueda comprometer nuestro servidor.

//^ ¿Para que sirven?

//* Además del ejemplo más común que describimos recién, los middlewares tienen la capcacidad de realizar cambios globales antes  de que la solicitud llegue a su destino, por lo que son muy flexibles en cuánto lo que pueden hacer, pueden añadir a la solicitud información adicional para que sea más detallada, pueden hacer que la solicitud cambie algún dato y etc.

//^ Middlewares pre-built

//* Casí como la palabra lo dice, los middlewares pre-built son middlewares creados previamente por otros usuarios para que se usen a modo de herramientas para simplificar mucho más la creación de middlewares y otras funciones realcionadas a ellos cómo validaciones. Entre los que existen en clase usaremos 3:

// MORGANA:
//* Es un middleware especializado en peticiones HTTP, con el podremos ver en detalle de dónde vienen, de cuándo son y otros detalles de peticiones HTTP que se realizan a nuestro servidor.

// EXPRESS.JSON()
//* Es un middleware que nos ayudara a trabajar con las peticiones, transformandolas de formato JSON a objetos de javascript, para así poder manejarlas con mayor eficacia y menos errores.

// CORS
//* CORS es nu middleware de seguridad, restringe o autoriza el acceso a nuestro servidor, así solo quienes nosotros digamos podrán tener acceso a nuestra API.

//^ Middlewares personalizados

//* Estos son middlewares que nosotros mismos creamos, funciones o conjuntos de funciones que adaptan el flujo de las solicitudes según nuestras necesidades. Su existencia tiene varios motivos: La reutilización, adaptabilidad y escalabilidad, ya que con un middleware especializado en funciones objetivas es más fácil reutilizar el módulo propio en el futuro, adaptarlo más a las necesidades de la aplicación y además hacerlo más fácil de mantener.

//! T3 - VALIDACIONES Y SU IMPORTANCIA

//^ La importancia de las validaciones

//* Las validaciones no son más que funciones que confirman el formato de la información ingresada, sí un string debe ingresarse debe haber un validador que confirme que es un string y que su formato sea el correcto, esto se hace con cualquier sistema que tenga comunicacion con una base de datos para poder garantizar su integridad y seguridad.
