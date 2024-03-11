//* En la lecture de hoy vamos a ver una funcionalidad de javascript que es caracteristica por excelencia, el asincronismo, ya vimos un poco de esto en AJAX pero aora vamos a terminar de verlo todavía mejor ya que es algo que usaremos no solo ahora, sí no que casi siempre en nuestro código, sí tiene algo asincrono, va a necesitar algo de esto por seguro.

//! V1 - INTRODUCCIÓN

//* Enfatizamos en la INMENSA o ABISMAL importancia que tiene esta clase de asincronismo, ya que es algo que acompañara a nuestro código infinidad de veces durante toda nuestra carrera cómo desarrolladores, y repasamos nuestro conocimiento en asincronismo, el protocolo http que establece el rol de cliente y servidor, y además la capacidad de javascript para poder realizar estas peticiones HTTP con algunas herramientas cómo JQuery que usamos.

//* Además recordaremos que esto tenía ciertas caracteristicas en javascript, cómo la demora y sobretodo lo que se relaciona con lo que veremos hoy: el gran grado de incertidumbre

//^ Manejo de incertidumbre en Javascript

//* Cuándo tenemos un gran grado de incertidumbre es cuándo empezamos a usar el asincronismo, pero cómo sabe javascript que tiene que hacer cuándo recibe la ejecucción con ese alto grado de incertidumbre? Ya que no conocemos exactamente sus retornos, por eso ahora empezaremos a ver métodos para manejar esta incertidumbre y indicarle al código que realice una operación dependiendo del resultado que se presente.

//! T1 - REPASO HTTP

//* Antes de comenzar con uestro nuevo tema desglosaremos aún más el tema ya visto en clase anteriores, el protocolo HTTP, este es un protocolo de informacion entre un cliente (quién necesita algo) y un servidor (quien lo brinda), HTTP es únicamente quien establece las reglas por la cuál se efectúara la comunicación.

//^ Cliente y servidor

//* Sigamos desglosando aún más los términos y veamos exactamente, que es un cliente y que es un servidor, para eso analizaremos una acción que realizamos regularmente, visitar páginas web, cuándo visitamos una página web nosotros somos el cliente, no por usarla, sí no por haber ingresado la url, cuándo hacemos esto estamos poniendole una petición con el protocolo HTTP al servidor dónde esta url esta alojada pidiendole ver la información de HTML, CSS y demás.

//^ Testing de APIs

//* Ahora vamos a ver herramientas más interesantes, cómo nosotros con AJAX planteamos una solicitud de tipo GET a un servidor solicitandole la información de las películas, hay herramientas que hacen lo mismo mostrandonos la repsuesta del servidor recibida, para que nosotros podamos corroborar el correcto funcionamiento de la url, servidor y que el protocolo HTTP con el método solicitado haya sido correcto para comenzar a implementarlo en nuestro proyecto, las herramientas que se usan para esto son: Postman, Insomnia, Thunderclient.

//! V2 - DEMO POSTMAN, INSOMNIA, THUNDERCLIENT

//* Vemos como con Insomnia/Postman/Thunderclient podemos realizar solicitudes a los servidores para poder realizar una respuesta, dejandote visualizar la respuesta del servidor de forma clara, y también con una diversidad de métodos para poder realizar las peticiones.

//* Las 3 herramientas son demasiado similares por lo que la elección realmente no afecta demasiado al proyecto, con la excepcion de que Postman y Insomnia se deben instalar, Thunderclient esta dentro de VS Code cómo extensión, pero nada más aparte de eso.

//* Ahora gracia a esta herramienta ya podemos probar distintas APIs y URLs con 0 líneas de código, solamente introduciendo la url en nuestra herramienta y seleccionando el tipo de solicitud

//! T2 - OPERACIONES ASINCRONICAS

//* Ahora ya repasado el asincronismo de la clase anterior de AJAX, adentremonos mejor en los términos, empezando por introducir las operaciones asincronas, estás son operaciones que inhiben un comportamiento natural de javascript, pues en vez de esperar que el código se ejecute de forma sincrona y se rompa sí algo esta mal, le indicamos al código que es una operación asincrona para que se ejecute independientemente del resto del código, y en caso de romperse no afecte al código.

//^ Herramientas sincronas y promesas

//* Javascript cuenta con múltiples herramientas y metodologías que le permiten dejar de lado su naturaleza sincrona y pasar a la ejecucción asincrona, cómo el uso de callbacks (controlar que haremos con una operación asincronica después de obtenerla de forma muy sencilla), y un método más actual que vamos a ver ahora, las promesas que nos permite encadenar operaciones asincronas y manejarl los errores, controlando y mitigando el grado de incertidumbre.

//^ Promesas

//* Las promesas se llaman así por su definición en el léxico linguístico fuera de la programación, cómo la aserción de realizar algo en un futuro, concepto que encaja de formas casí perfecta con su contraparte en la programación, una promesa es un cómo un ticket de promoción de hace un mes, puede que lo acepten o puede que no pero no lo sabemos, y en base a la posterior respuesta haremos una cosa o otra.

//* En términos más informáticos, una promesa es una clase que ocupa un espacio en nuestro código para algo que todavía no ocurrió pero se estima que va a ocurrir, normalment la resolución de una operación asincrona y la configuramos de modo que cuándo la reciba, la promesa sepa que hacer con esa respuesta. Generalmente se representan cómo objetos con el valor de la eventual operación asincrona resulta.

//* En javscript se cuenta con la estrucutra nativa "Promise" para poder generar nuevas instancias de promesas anteriormente indicandolas cómo new Promise, esto crea la función de la promesa que a su vez toma dos funciones cómo parametros de arrow function, casí siempre llamadas "response" y "reject" estás dos representan la respuesta exitosa y rechazada.

//* SINTAXIS

const promesa = new Promise((response, reject) => {});

console.log(promesa); // Promise { <pending> } -- Devuelve la función y su estado (pendiente).

//* Las promesas pueden tener tres estados: Pending - esperando a que se ejecute la operación asincrona y se obtenga un valor de rechazo o exito, Fullfilled - Sí fue exitosa, en ese caso se devuelve el valor de la operación o la solicitud refiriendose a esta cómo "response", Rejected - Sí fue rechazada, en este caso se devuelve rejected y la razón por la que fue rechazada cómo "reject".

//^ Métodos Then & Catch

//* Estos dos son los métodos que nos ayudaran a poder controlar la devolución de las promesas, con el método then{} podremos manejar la lógica en caso de haber sido resuelta correctamente la petición. Pero caso contrario usaremos catch{} para manejar la lógica que se debe seguir en caso de que la petición haya sido rechazada.

//! V3 - 