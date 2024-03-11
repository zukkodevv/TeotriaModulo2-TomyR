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
//^ Introducción a AJAX y XML;

//* Debido a la masiva demanda que había en cuanto al manejo del asincronismo en javascript y el manejo de solicitudes y respuestas a los servidores, surgieron nuevas técnicas de desarrollo para abordar este problema, es el caso de AJAX (Asynchronous JavaScript and XML), pero antes de abordar bien AJAX, veamos brevemente que es XML:

//* XML (Extensible Markup Language) es un lenguage muy similar al HTML que es usado para almacenar y intercambiar información (para los servidores o el cliente normalmente), y se basa en la apertura y el cierre de etiquetas cómo en el HTML;

//? ¿Para qué utilizamos AJAX?

//* AJAX se utiliza para poder darle interactividad y dinamismo a nuestras páginas web realizando procesos asincronicos, cómo realizar peticiones de datos a un servidor.

//^ Es importarte remarcar que AJAX no es ningun lenguaje ni tecnologia, es una forma de llamar a un modo de usar varias tecnologías, cómo HTML, DOM, Javascript, XML o las http request

//* Aunque el propio nombre de AJAX (Asynchronus Javascript And XML) de a entender que su método principal de transferencia de datos en su incio fue XML hoy en día no es el único ya que bien puede usarse XML cómo también JSON.

//^^ Comparación entre AJAX y HTML

//* Si bien ambos son formatos de transferencia de infromación, cómo ya vimos anteriormente tienen muchisimas diferencias, la principa es su declaración de texto, XML tiene una anotación muy similar a html siendo mucho más verboso, mientras que JSON tiene la anotación como los objetos de javascript siendo mucho más consiza y sencilla de leer, pero lo más importante fue lo que el formato JSON trajó consigo, el hecho de poder dar respuestas de información sin neceisdad de recargar la página, algo imposbible con XML que exigía un reinicio de la página para poder efectúar cada cambio.

//! V3 - Comparación de solicitudes y respuestas de AJAX con XML y JSON

//? ¿Qué es AJAX?

//* AJAX es un método de transferencia de información que se utiliza para poder enviar datos especificos pedidos por el cliente, antes con el uso normalizado de XML cualquier dato cambiado requería que el servidor vuelva a enviar la página entera, el DOM entero y absolutamente todo el código HTML otra vez, requiriendo un reinicio para cambiar talvez una sola palabra, acá emtra AJAX con JSON que devuelve únicamente la nueva información especifica solicitada, sin nada más ni nada menos, haciendo que se actualice solamente esa información sin problemas.

//^^ Sumando AJAX al proyecto

//* Para hacer bien este código y realizar las peticiones de forma más sencilla usaremos funciones brindadas por JQuery, importando su script  su script desde su página poficia para poder utilizarlo,

//* Especificaciones detalladas en el proyecto del código

//^^ Método get en JQuery

//* En la videotutoria anterior ingegramos jquery al proyecto,

//* Especificaciones detalladas en el proyecto del código "index.js"

//^^ Introducción a las funciones callbacks

//* Los callbacks en sí son funciones que se pasan cómo parametros para otras funciones, son muy útiles para verificar que la segunda función se ejecute solo si se ejecutó efectivamente la primera:

function suma(a, b, callbackEjemplo) {
  //* Definimos una función con los parametros a, b y el callback.
  const resultado = a + b;
  //* Asignamos una constante que va a ser igual al resultado de a + b
  callbackEjemplo(resultado);
  //* Llamamos a la función callback definiendole cómo parametro la suma de a y b y guardandola para su posterior uso.
}

let comprobarCallback = function (resultado) {
  //* Definimos una variable con una función anonima que tiene cómo parametro el parametro almacenado por el callback
  console.log(`el resultado es ${resultado}`);
  //* Declaramos que la función realice un console.log de el string definido y el resultado almacenado por el callback al ser ejecutada.
};

//* Llamamos a la función principal y la segunda función pero cómo sí fuera un parametro más.
suma(5, 5, comprobarCallback); // 'El resultado es 10'

//* El código definió la variable resultado con 10 después de realizar la operación, pasó la variable como parametro de callbackEjemplo() y almacenó ese callback, luego se definio una variable comprobarCallback cuál cuyo parametro accede al callback anterior y su parametro para luego ejecutar un código en base a ello.

//* NADA DE ESTO PODRÍA HABER OCURRIDO SI LA FUNCIÓN SUMA PRINCIPAL "const resultado = a + b"  NO SE HUBIERA EJECUTADO, este es el real objetivo de las funciones callback, verificar la ejecucción del posterior.

//! HOMEWORK - Video Tutoria Realización

//* En esta homework cambiaremos nuestro archivo tempData realizando peticiones a un servidor que ahora nos proporcionara la información de las peliculas para que podamos mappearlo y generar las tarjetas.

// Comando necesario: (Recordar que hace falta JQuery)
//^ $.get("url"); -- Comando básico para llamar a una url con un método get.

//^ $.get("url", (data) => {´
//^
//^ }) -- Comando para llamar a la url, iterarla y referirnos a cada iteración como data, y a cada iteración ejecutarle el código entre llaves.
