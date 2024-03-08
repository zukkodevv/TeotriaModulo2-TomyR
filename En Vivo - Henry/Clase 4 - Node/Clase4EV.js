//* Comenzamos repasando sobre el code review de la clase anterior: 3 - Frameworks CSS (Más que nada Bootstrap)

//! CODE REVIEW - Frameworks CSS (Bootstrap principal)

//* Comenzamos haciendo un formulario cómo una de las páginas extras que requiere la homework inicial, es un formulario que hicimos en clase pasadas, ahora estamos viendo cómo podemos darle estilos a la página del formulario usando Bootstrap.

//* Esta es una clase realmente pequeña y consiza ya que únicamente nos centarmos en la creación de estilos usando la documentación de CSS siendo casi completamente creativa.

//^^ Utilizando Javascript para validaciones

//*

//! LECTURE - Node

//* Motor V8; es un entorno de ejecucción del lado de javascript del servidor, no esta del lado del navegador por lo que al integrarlo puede dar problemas con la consola del servidor, proporiona las funcionalidades del archivo JS.

//* Para poder ejecutar librerias, archivos, enviar datos, etc, se utiliza la librería Libuv ya integrada.

//* Node JS es un entorno de desarrollo de JS.

//* Node es un sistema de módulos nos sirve para poder gestionar mejor el código en archivos independientes, con archivos para cada función interconectados sí es necesario (mayormente sí lo es).

//? ¿Qué es NPM?

//* NPM (Node Package Manager) son generalmente archivos generados por usuarios que tienen el fin de facilitar la escritura de un código, NPM es quién administra estos paquetes, un gestor de paquetes y es el estándar para Node Js, instalado de forma automatica a la forma de instalar Node.

//? ¿Qué hace NPM?

//* NPM se encaarga de instalar y actualizar estos paquetes de código, permitiendonos acoplarlos a nuestro código de diferentes maneras cómo dependencias.

//^^ Instalación node

//* Para la instalación de Node se debe abrir una terminal integrada a la carpeta, posteriormente utilziar los comandos de tipo npm(Node Package Manager): primero "npm init" -> Esto abrira una serie de opciones para configurar el archivo de Node que se creará, luego de esto el archivo "package,json" será creado.

//? ¿Qué es "Package.json"?

//* "Package.json" es importante que este en la raíz del proyecto ya que este se encarga de guardar todas las configuraciones de Node y información de nuestro proyecto en formato JSON.

//* Dentro del package.json: dentro del paquete hay varíos objetos con un valor de información, por ejemplo el objeto script tiene cómo valor los comandos que usaremos para poder acceder de forma rápida a los distintos comandos de las dependencias que tengamos instaladas por ejemplo:

//& scripts{
//&  "test": "jasmine archivoActual.js"
//&  }

//* Esto hace que cuándo coloquemos el comando "npm test" corra el código que esta seleccionado cómo valor (osea "jasmine archivoActual.js") de forma rápida sin que tengamos que poner el mismo código largo tan repetitivamente.

//TIP: Dependencias; Las dependencias de desarrollo de Node instalados con un -D extra es una dependencia que solo afecta para los desarrolladores, osea solo nos sirve a nosotros.

//TIP: Instalaciones globales - No es recomendable instalar las dependencias de forma global ya que en la actualización de la dependencia, nuestra aplicación se rompería totalmente sí llegara a ser muy drástica, por ejemplo, si usamos Jasmine instalado de manera global en la versión 5.2.4 y meses después de terminar nuestro proyecto se actualiza a 6.0.0 nuestro proyecto se rompe totalmente y requiere una migración. (-g es para instalación con dependencia Global)

//^^ Modularización con Node

//* Cada módulo apunta a realizar una funcionalidad especifica, en su conjunto ayudan a gestionar de manera mucho más efectiva y organizada un proyecto.

//^^ Ventajas y Desventajas de la Modularización

//** El mantenimiento, la escalabilidad, reutilización, organización, encapsulación; Con la modularización es mucho más fácil sobretodo la reutilización del código, la resolución independiente de cada módulo que falle para no tener que hacer un cambio drástico en un archivo que encapsule todo el código y poder organizarlo de una forma mucho más legible visualmente.

//* Desventajas: Empaquetamiento, administración de dependencias; Es complicado administrar cuál módulo depende de cuál y cuál se exporta a cuál lo que aumenta la complejidad del código y hace que sea más complejo de ser para el programador convirtiendose en el temido "código spaghetti".

//^^ Caracteristicas //!(Importante)

//* Las variables y funciones son locales -> Para que esten disponibles hay que exportarlos

//* Se debe usar el objeto "exports.module"

//* Se utiliza "require" para requerir funcionalidades de otros archivos

//^^ Explicado a profundidad en la práctica

//? ¿Que es NODE JS?

//* Es una libreria open source que incluye muchos módulos, los módulos esta diseñados para ayudar con la aplicación, reduce la cantidad de código y lógica y reutiliza códigos creados por terceros, cómo se ve funciona de unna forma casi identica a npm.

//^^ Versionado

//* El versionado sigue unas normas semanticas, 1.3.4 cada número después de un "." representa un cambio, los principales puntos ["1."3.4 --> Son cambios mayores que cambian cosas importanes (Nombre, proposito, etc), el que esta después del principal es el menor 1."3."4 --> Representa cambios menores cómo nuevas funciones o hacerlo retro-compatibles, y por último tenemos el patch:   1.3".4" que refiere a un parche que corrige bugs o errores de compatibilidad.]

//^^ Compatibilidad

//* Los parches y las actualizaciones menores son compatibles con otras versiones 1."3.4" pero los mayores no son compatibles (my mayormente) con otras versiones "1."3.4 --> 1.3.4 no es compatible con 2.1 pero 1.6.1 es compatible con 1.3.4

//* Uso del ^: Esto se utiliza en el package.json para poder indicar las versiones que se requieren, sí se usa, se actualiza el proyecto pero solo los versionados menores y de parche, NÚNCA cambiando la versión mayor ya que rompería el código (esto lo hace el código solo) y sí no pusieramos "^" pediriamos la versión exacta que no se actualizaria.
