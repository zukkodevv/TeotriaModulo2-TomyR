//! LECTURE - EXPRESS

//^ Estructura de un servidor

//* los servidores se componen por varios elementos: Un host que es la dirección de un recurso en la web, cómo la IP, el puerto que se usa para distinguir entre servicios, de forma similar a las rutas.

//* Controladores; Reciben solicitudes de cliente y devuelven una respuesta interactuando con las bases de datos.
//* Los servicios; Se usan para descomponer la lógica de la aplicaicón en partes pequeñas cómo los módulos pero de forma más categorizada, su objetivo especifico es especificar aún más el código y ayudar con la carga de código a los controladores. también interactúan con bases de datos o APIs externas y permite que no todo este dentro de los controladores.
//* Los middlewares; Son aquellos con capacidad de modificar u optimizar la respuesta antes de que el cliente la reciba.

//^ Introducción a Express

//* Express es un framework minimalista para node.js y que trabajar con ello resulte mucho más fácil para los desarrolladores, simplifica la creación de aplicaciones web al poner en disponibilidad un conjunto de herramientas y caracteristicas, con este podremos construir rápidamente servidores y APIs.

//^ Introducción a Scaffolding

//* Este es un término extravagante para algo realmente MUY MUY MUY fácil, pues se trata de la estructura de nuestras carpetas para la organización de nuestro código, carpetas dedicadas a los controladores, servicios, rutas, etc.

//* Proposito de carpetas:

//* Rutas: Almacena la lógica que relaciona las peticiones a las rutas http, es lo encargada de manejar las rutas asociadas, dentro de su lógica encontraremos funciones que se ejecutan cuándo una ruta es alcanzada y la respuesta al cliente mediante la interacción con la base de datos.

//* Servicios: Los servicios son funciones especializadas, "asistentes" de los controladores.

//* Flujo: La ruta recibe una solicitud, le dice al controlador que hacer y el controlador ejecuta la lógica para ejecutar cuándo se recibe la solicitud a la ruta, se manejan posibles errores con los controladores y se establece por último que hacer con los servicios.

//* Existen dos enfoques al scaffolding, uno es móudular y otro es práctico, uno tiene todos los controladores de todas las funciones en unna carpeta controlador, todo los controllers de usuarios, funciones etc, en controllers, en cambio en el funcional en la carpet usuarios estan sus controllers, servicios, etc.

//^ ¿Por qué express?

//* Express nos facilita muchisimas cuestiones, facilita el manejo de rutas, nos da middlewares para funciones adicionales, nos ahorra tiempo con middlewares integrado y es escalable y flexible.

//^ Enrutado

//* El enrutado es un componente de Express, una clase más especificamente, llamada Router, esta gestiona las rutas de nuestra aplicación y canaliza las solicitudes.

//* Este Router tiene una sintaxis muy similar a axios, la vamos a mostard e forma práctica.
