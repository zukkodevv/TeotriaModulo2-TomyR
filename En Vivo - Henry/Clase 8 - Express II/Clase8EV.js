//! T1 LECTURE - EXPRESS II

//^ Servicios

//* Los servicios son módulos especializados en la lógica del negocio que se pueden comunciar directamente con una API o base de datos, local o externa, gestionan las peticiones del usuario, se usan para la autenticación, se usan cómo funciones especializadas con el objetivo de mejorar eficiencia y cohesión del sistema.

//^ Middlewars

//* Usamos los middlewares para información que nos llega de las peticiones, para primeramente asegurar que cumpla con todo lo necesario para ralizarla de forma correcta y ahí pasarla a la ruta. Tienen acceso a la solicitud y respuesta (req y res) y pueden realizar acciones globales antes de avanzar la petición en rutas especificas.

//^ Método Next

//* El método next necesita un método next para que pueda seguir con el flujo de la petición, pasando entre los próximos middlewares o para continuar a la ruta

//^ Tipos de middleware

//* Existen dos tipos de midldeware, existen los prehechos (pre-built) y los personalizados que hacemos nosotros, los prehechos son middlewares como morgan o cors que ya itenen middleware y facilita muchisimas cosas de esto, son herramientas que veremos más adelante.

//^ Morgan y Cors

//* Morgan y Cors son dependencias que añadiremos cómo dependencias de desarrollo y así comenzar a usarlas cómo usabamos express, requiriendolas y después creandole una instancia llamandolas.

//^ Validaciones

//* Las validaciones son cruciales para nuestro código, para comprobar valores, datos ingresados o muchas otras cosas, esto evita que podamos recibir código maliciosa cómo valor en nuestra base de datos o errores que puedan comprometer la solicitud envíada.

//* Una de las formas de integrarla es la creación de middlewares personalizados de entrada y salida para verificar los datos ingresados por el cliente son correctos con su formato adecuado y los de salida para verificar que los envíados son correctos en el formato adecuado y sin información sensible.

