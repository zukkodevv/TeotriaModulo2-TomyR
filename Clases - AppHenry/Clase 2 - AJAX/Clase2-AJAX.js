//! V1 = Video 1, T1 = Texto 1 : Referencia al material textual y videografico.

//! V1 - INICIO
//? ¿Por qué usaremos AJAX? ¿Cómo funciona? ¿Qué es?

//* AJAX esta directamente relacionado al protocolo HTTP, siendo nuestro primer paso en la verdadera acción de realizar una petición http al servidor, esto es algo que requiere mucho trabajo, y acá es donde entra AJAX, simplificando y facilitando las solicitudes http al servidor sin preocuparnos por todo lo técnico de http (lo cual consta de mucha complejidad).

//* Iniciando en el módulo empezaremos a ver asincronismo en javascript, ¿Qué es?, porque una solicitud http es ¿asincrono y que significa? cómo ver respuestas de las peticiones http, cómo realizarlas y las distintas operaciones asincronas que existen.

//! T1 - Asincronismo
//? - ¿Qué es AJAX?
//* Esta es la pregunta que propone esta parte de la clase, y nos cuenta que AJAX surgió en los años 2000 cuándo la revolución del dinamismo en las páginas web tomó completamente internet haciendo que ahora las páginas estáticas locales queden en una minoría y las páginas dinámicas recién surgidas cómo la modernidad, por esto mismo una forma de enviar y recibir información a los servidores de forma remota eficazmente creando una comunicación cliente - servidor era una necesidad muy demandada, y fue entonces que entró AJAX.

//* El proceso de envío y recepción requiere en sí el manejo de la asincronía dentro del código, a que nos referimos en cuánto "asincronia" lo veremos más adelante.

//^ Sincronismo :
//* Un programa sincronico es aquel que ejecuta tareas en orden, una después de la anterior esperando la finalización de la anterior a la consecuente, esto significa que espera a que la primer tarea se termina antes de empezar la segunda, Javascript cómo muchos lenguajes, es sincrónico por naturaleza.

//^ Asincronismo :
//* El asincronismo es la capacidad que tiene un lenguaje para ejecutar un código mientras otro código esta ejecutandose AL MISMO TIEMPO EN SEGUNDO PLANO.

//* Estos procesos se rigen por varías caracteristicas:

//* Inicio de la tarea: Cuándo una tarea se inicia, el programa no espera a que finalice, solo sigue con el resto del código mientras aquella se ejecuta.
//* Continuación inmediata: Inmediatamente después de iniciada la tarea, el código sigue con todo el resto de tareas sin esperar que el código asincronico termine
//* Manejo de resultado: Cuándo la función asíncronica termina generalmente se utiliza una función llamada callback para establecer que debe hacer una vez finalizado.

//? El objetivo asincrono

//* El objetivo de un código asincrono es mejorar la eficiencia y capacidad de respuesta de un código, ya que gracias a esto se puede evitar que se generen procesos bloqueantes con cosas cómo la lectura, peticiones de red o operaciones de entrada/salida, y mientras estos se realicen continuar haciendo otros procesos en segundo plano.

//! V2 - Asincronismo

//* Repasamos la naturaleza de javascript haciendo enfásis en su forma de ejecución (single thread y sincronica) puede ejecutar solo una tarea a la vez, también un enfoque en cuándo comenzó a usarse javascript, en un momento dónde surgió incertidumbre en cuánto la duración de los procesos de cada tarea en javsacript, se temía que los procesos duraran en demasía y no había forma de comprobarlo directamente desde el código ni de solucionarlo.

//* Sí tenemos 4 tareas y una de ellas tarda 30seg son 30seg de carga menos que afectan al UX y la cálidad de la página.

//* Generalmente las tareas asincronas tienen la caracteristica de la incertidumbre bastante alta y varíos resultados posibles que no podemos determinar, ampliamos más con ejemplos en la parte práctica de esta tarea.

// EXTRA: Esto no es algo que javascript haga naturalmente, lo realiza a partir de muchas herramientas técnicas que tiene implementada pero no es natural de javascript,

//! T2 - AJAX
//^ Introducción a AJAX;

//* Debido a la masiva demanda que había en cuanto al manejo del asincronismo en javascript y el manejo de solicitudes y respuestas a los servidores, surgieron nuevas técnicas de desarrollo para abordar este problema, es el caso de AJAX (Asynchronous JavaScript and XML), pero antes de abordar bien AJAX, veamos brevemente que es XML:

//* XML (Extensible Markup Language) es un lenguage muy similar al HTML que es usado para almacenar y intercambiar información (para los servidores o el cliente normalmente), y se basa en la apertura y el cierre de etiquetas cómo en el HTML;
