//! T1 - ESTRCTURA DE UN SERVIDOR

//* Antes de seguir con nuestra herramienta que nos permitira crear servidores a gusto y con facilidad, repasemos un poco más HTTP, ya que es el lenguaje con el que se comunican el cliente y el servidor.

//* Cuándo nos comunicamos cómo clientes a los servidores es por ejemplo, cuándo buscamos una url en nuestro navegador, le estamos solicitando información al navegador (request), y este respondera con información pedida o con un error (response).

//* El pedido request/response que es ejecutado gracias al protocolo HTTP.

//^ Componentes del servidor ¡Importante! - Ejemplo del restaurante
//* Al ser un tema casi complejo usaremos un ejemplo de la vida real para poder realizar mejores interpretaciones de todos estos términos tan abstractos.

//^ HOST & PUERTO - Restaurante y puertas.

//Host
//* El host es quién nos indica dónde esta alojado el recurso que se busca en la web, por ejemplo en un restaurante, esa sería solo la dirección del restaurante, "Av. San Martin 2000" por ejemplo.

//Puerto
//* El puerto por otro lado es la especificación de dónde se debe acceder para obtener tal servicio especificado, esto en un restaurante sería, una de las puertas que se debe acceder para obtener un servicio de catering, de bebidas o de fiambreria.

//Resúmen
//* En resúmen, la web es inmensa, el servidor necesita encontrar tú servidor cuándo haces la respuesta y esto lo hace por medio del Host que es quién le brinda la ubicación, siendo este el IP, o dominio, en nuestro caso "localhost", el puerto es dónde debe acceder en la lógica especificamente para poder obtener cada servicio especifico.

//^ CONTROLADORES - Los Chefs.

//* Cuándo realizamos una petición al servidor para solicitar algo, se aparecen los controladores, quienes toman esta petición y la "controlan", todo depende de la petición que se realice claro esta, pero casí siempre su lógica se basa en retornar información, mostrar elementos, borrar elementos o algo por el estilo. En un restaurante podemos compararlo con un chef, una vez que entramos al restaurante por la puerta (puerto) asignado le decimos al personal del mostrador (por venir) que plato queremos y este le dira al chef (controlador) lo que solicitamos y comenzara a prepararnoslo.

//^ SERVICIOS - El Personal.

//* Los servicios son los que se encargan de que cada petición llegue a su controlador correcto que este encargado de esa ruta especifica, cada uno de los servicios tiene su responsabilidad particular (autenticación, solicitud de base de datos, etc), pues su objetivo es la segmentación la lógica en partes más pequeñas y manejables. En un restaurante los servicios son el personal, quién se encarga que cada orden llegue al chef adecuado quién la va a preparar y servir (bartender si es en bebidas, chef sí es restaurante o fiambrero si es fiambreria).

//^ Middlewars - Los pasantes.

//* Cuándo ya tenemos todo listo, pero no queremos entregar la información o la solicitud al cliente tal cómo sale del servidor sin ningún toque estético o que mejore la legibilidad, pasamos esta respuesta por un middleware que le aplica un nivel de esteticidad y practicidad superior. Esto en un restaurante pueden ser los pasantes, quienes no hacen toda la comida que hacen los chefs, pero ayudan en cosas chicas cómo su presentación.

//! T2 - SCAFFOLDING

//* Una de las caracteristicas de Express es su flexibilidad, pues no hay una estructura de carpetas a seguir, por esto es que ahora vamos a ver cómo podemos organizar nuestro proyecto con una organización basa en 3 carpetas: "Services", "Controllers" y "Routes".

//! V1.1/2/3 - ROUTES/CONTROLLERS/SERVICES

// Módulo Index.js
//* Cómo vimos anteriormente, usualente existe el módulo de entrada (entry point) "index.js" que es quién va a requerir a todos los demás módulos para que pueda funcionar correctamente el código, siendo así cómo el archivo más grande de todos que ejecutaría todos los códigos dentro sí no estuvieran modularizados.

// Rutas:
//* Dentro de esta carpeta van a estar los módulos que definen cuáles son los endpoints de la aplicación (los finales de url "/" o "/movies" por ejemplo) son rutas definidas para esperar un recurso, todos esos endpoints van a estar definidos acá.

// Controllers:
//* Sí bien con las rutas podemos definir los endpoints para que envíen una petición del tipo que queramos al ser ejecutados, todavía no sabemos que hacer con esa petición, pues una carpeta que veremos más adelante llevara la petición de la ruta al controlador, y el controlador va a manejar la petición que se ejecute con la ruta. (la lógica de negocios)

// Servicios:
//* Si bien el controlador define la lógica, no la ejecuta, pues esta es la tarea del servicio que procesa la solicitud y devuelve una respuesta al cliente.

//Flujo
//* Para seguir viendo los servicios, primero repasamos el flujo de la petición, primero la petición pasa por la ruta, ya que esta define dependiendo cuál sea el endpoint ("/users" por ejemplo) sí existe y a cuál controlador pertenece, el controlador embuye la petición en toda la lógica que debe tener la respuesta, si debe devolver información o mostrar elementos le dice esto a la respuesta que devolvera, pero no es el controlador quienla ejecuta, solo la define, quién los ejecuta son los servicios,

//^ Puntos importanes:

// PUERTO 3000
//* El puerto 3000 no es más que uno delos puertos que tiene nuestra computadora que no es utilizado, vienen en nuestro sistema por defecto, y del 3000 al 8000 los podemos utilizar sin problema.

// MÉTODO LISTEN
//* El método listen cómo lo vimos en el ejemplo, se usa para inicializar un servidor y decirle que escuche las solicitudes http a un puerto, luego tenemos la opción de iniciar una función callback para indicarle que hacer cuándo se levante. (Imprimir "levantado con éxito") por Ej.

//! T3 - CONTROLADORES

//* Los controladores son solicitudes HTTP que manejan la lógica necesaria de la petición para poder llevar la respuesta al cliente, comunicandose con la base de datos o realizando otras acciones, estan ligados a una o más rutas que reciben una solicitud del cliente al acceder.
