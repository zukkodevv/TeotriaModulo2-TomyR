//! T1 - Node y Motores

//* Antes de entrar en lo que es Node JS debemos remontarnos a los motores de navegación para saber cómo es que node realmente afecta al código, cada código depende totalmente de un motor de ejecucción que posee un navegador, el más usado es V8 ya que es el usado por chrome. Todo código que ejecutemos con un script funcionaba gracias a que el motor del navegador permitia ejecutar código javascript.

//^ Dejamos de trabajar en el navegador

//* Cuándo abandonamos la ejecucción del navegador es cuándo entra Node aunque también es conocido cómo runtime, un entorno de ejecución de javascript con todo lo necesario para correr nuestro código, APIs, funciones, métodos, todo esto dejando de depender de los motores que usan los navegadores, ya que nuestra computadora va a terminar siendo nuestro propio motor.

//^ Node en sí

//* Node fue desarrollado usando el motor de chrome (V8, que ironía) que utiliza el leguaje C++ y una librería escrita en C.

//* Este entorno de ejecucción hace posible la creación de software, APis y servidores de manera rápida y escalable sin preocuparnos por la diferenciación entre los motores de los distintos navegadores.

//! V1 - Trabajando con Node

//* Para trabajar con nuestros archivos primero debemos conocer el archivo package.json que es el corazón del proyecto, siempre ubicado en la raíz y con todas las dependencias, configuraciones y información del proyecto es uno de los más importantes.
//^ npm init
//* De esta forma generaremos el archivo después de configurarlo con especificaciones básicas respecto a su información.

//^ Scripts

//* Al configurar nuestro package.json debemos configurar los scripts que ejecutan distintos comando scon sus valores, cómo "test":"jest --allWatch" que ejecuta el comando de testeo con solo poner en la consola "run test", facilitandonos muchisimo el código.

//* Al hacer esto no es recomendado innovar con los nombres de los scripts, siempre deben llamarse de formas convencionales (start, build, test) ya que así facilita el uso del código por otras personas en caso de colaboración, a esto se le llama "convección" y es la mejor práctica.

//^ Comenzamos a modularizar

//* ¡Ordenar nuestros archivos! Parte muy importante de programar, en proyectos grandes imaginarse un único index.js con 500 o más líneas de código que se llamen mutuamente, enlazando líneas del 1 - 100 con la 300 - 400 es totalmente incomprensible e ilegible bajando de forma ABISMAL la cálidad de no solo el código sino que del PROYECTO ENTERO, por esto es demasiado importante aprender a modularizar.

//* ¿Qué significa esto? Simplemente repartir nuestros archivos según su funcionalidad, archivo "getElements" puede obtener elementos de una API con una llamada y un archivo "generateElements" puede convertir esos archivos a elementos html por ejemplo.

//* Acá también es cuándo entran los nuevos términos, "archivo" es un mal término, porque no es un archivo independiente ya que en la modularización todos dependes de partes del código en base a la exportación y importación, es por eso que se los llama módulos al estar interconectados.

//* También comienza la arquitectura del código planeando nuestra organización en base a sus responsabilidades, los controladores que verifiquen que toda información este bien en su carpeta "controllers" y los módulos que controlan llamadas a rutas especificas a nuestro http "routes".

//^ Módulos / Su exportación e Importación

//? ¿Qué es un módulo?

//* Un módulo refiere a una parte del código aislado y encapsulado que puede reutilizarse por medio de su requerimiento, ayudan mucho a manejar el proyecto ya que lo dividen en piezas haciendolo mucho más segmentado y manejable. "Son los componentes de nuestro código".

//? ¿Qué es esa renombrada exportación/importación?

//* Node de por sí ya viene con un sistema de módulos, herramienta que nos facilita muchisimo todo nuestro código y hace posible toda la modularización ya que este permite la exportación de nuestros archivos(módulos) y su requerimiento en otros otros archivos(módulos)

//* Recordar que cada módulo tiene su propio ambito, por lo que variables y funciones no exportadas no estarán disponibles en el archivo que la importe, por ej;

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

module.exports = suma; // Luego del "=" se declaran los valores y propiedades que se exportaran, en este caso; la función "suma".

//* Esto solo exportara la función de suma, no la de resta, sí llegaramos a llamar esta función en el otro archivo veríamos que no funcionaria.

//^ Luego suponiendo que nos encontramos en el otro archivo que quiere requerirlo:

//* Para hacer esto necesitaremos la función require() que toma cómo argumento el path del archivo que contiene los valores a exportar, a esto también debemos asignarle una constante para poder llamar al valor exportado una vez requerido:

// - OtroArchivo.js -

//^ const suma = require("./otroArchivo.js");

console.log(suma(1, 2)); // 2

//* Por más que en el módulo suma núnca haya sido definido, el códigoo lo requiere del otro módulo y utiliza su función.

//! V2 - MODULOS/Module.exports

//* Repasamos lo que son los módulos, la propiedad del término y la utilidad de ellos, cómo se encapsulan y nos ayudan a segmentar, y la importancia que tienen.

//! T2 - NPM (Node Package Manager)

//* Node cuent con un enorme repertorio de módulos creados por otros usuarios que son capaces de resolver casi cualquier problema que se presente a la hora de programar, pero no los requerimos cómo con nuestros archivos locales, a estos módulos debemos instalarlos por medio del Administrador de Paquetes de Node "NPM" con el comando vía consola: "npm install ('nombre del paquete')"

//? ¿Porqué usar estos paquetes?

//* Simplemente por eficiencia, es la mejor forma de maximizarla ya que gracias a que la gran mayoría de estos paquetes estan orientados a problemas comúnes del código o código que se repite muchas veces, así podremos reutilizar el mismo código pequeño para códigos extensos que tendríamos que hacer una y otra vez de no tenerlos, esto sumado a sus ccaracteristicas comunitarias teniendo a más usuarios resolviendo problemas, o mejorando el paquete hace que sea la forma más eficiente de escribir código repetitivo o resolver problemas comúnes, haciendo que podamos concentrarnos en el próposito de nuestra aplicación y las partes más complejas.

//* NPM pertenece a una clasificación cómo las librerías y frameworks, NPM es un "gestor de paquetes" y no el único, hay otros cómo "Yarn" o "Pip" por poner ejemplos.

//* Cuándo instalamos módulos externos en nuestro código dejamos de referirnos a ellos cómo módulos y nos referimos a ellos cómo "dependencias".

//! V3 - Instalación de Nodemon via NPM

//* Ahora yendonos a la práctica, vamos a utilizar uno de estos paquetes que ofrece NPM para instalar "Nodemon" (Node Monitor) una herramienta que nos ayudara a visibilizar los cambios efectuados en el código de forma directa sin tener que reiniciarlo.

//* Volviendo a las dependencias, añadiendo términos, existen dos tipos de dependencias, las de desarrollo "npm install -D 'paquete'" son dependencias que solo utilizan los programadores para poder ayudarnos con la escritura de nuestro código y las dependencias "fijas" que están presentes en todo momento. Nodemon es una dependencia de desarrollo.

//* Información detallada en la práctica de Nodemon <--

//! T3 - VERSIONADO

//? ¿Qué es el versionado?

//* Los módulos de código que dijimos que instalamos mediante NPM tienen una versión al momento de instalarse, igual que los celulares un modelo, el versionado nos permite saber el avance de código, permite su actualización para el desarrollador, implementado funcionalidades, corrigiendo errores y muchas otras cosas más, cada uno de estos cambios son llamados dependiendo su impacto en el código, por ejemplo: 3.2.0 - El primer significa cambio Mayor = >3.2.0 - El segundo significa cambio Menor = 3.>2.0 y el último se llama "Parche" = 3.2.>0.

//* Mayor = Cambios fuertes que impactan mucho en el código, cómo cambios de funciones/métodos, cambio de propósito, etc.

//* Menores = Cambios pequeños que también afectan un poco al código pero no mucho, cómo un nuevo método a una función existente, cambios de errores comúnes, etc.

//* Parches = Cambios muy chicos, casí imperceptibles que sirven casí siempre para arreglar errores muy chicos del código, cómo errores tipograficos o pequeñas anomalías en situaciónes muy especificas.

//* Gracias a Node en nuestras dependencias podemos contlar cuál es la versión que queremos, para que no hayan problemas con nuestro código y nos da dos símbolos para poder gestionar todavía mejor esto, "^" y "~" con "^".

//* Con "^" podemos controlar que nuestro proyecto se actualice sin pasar de la versión mayor para evitar interferencias o rupturas del código en la actualización de la dependencia, por ej. si ponemos 'dependencia' : "^2.4.3" la versión se actualizara hasta la 2.9.9 si sale pero núnca pasara de la actualización mayor 2 a 3 ni posteriores.

//* Con "~" hacemos casí lo mismo pero con la versión menor, haciendo que se actualicen todos los parches que salgan pero núnca pasando de la versión 2.4, pudiendo ser hasta 2.4.9 pero jamás 3.0 o 2.5 por ejemplo.

//! Homework Clase 4 - Node

//* Ahora veremos cómo podemos usar node en nuestro proyecto, porque aunque con node hayamos visto que la modularización es tan sencilla, el navegador no lo entiende y esto es un GRAN problema, ya que rompe nuestro código por completo. Pero hay que recordar, sí existe un problema, casí siempre existe una librería que lo soluciona, en este caso instalaremos por npm lo que se conoce cómo un bundler, las librerías "webpack" y "webpack CLI" serán nuestra salvación.

//* Esta homework es 100% guiada y la seguiremos desde la simulación en la carpeta "Sim Homework".
