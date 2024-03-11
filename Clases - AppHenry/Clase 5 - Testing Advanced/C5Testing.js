//! V1 - INTRODUCCIÓN

//* Empezamos a ver testing nuevamente, luego de haber visto el framework de testing "Jasmine" hoy toca "Jest" otro framework de testing muy usado para las pruebas unitarias con métodos propios para el testing.

//* A diferencia de Jasmine, Jest es mucho más fácil de configurar, lo que veremos más adelante, junto a su sintaxis básica, la importancia del testing y cómo realizarlo efectivamente en nuestro código.

//! T1 - REPASO TESTING

//? ¿Qué es el testing?

//* Cómo ya paso un tiempo desde que vimos testing con Jasmine, repasemos, que es y que hace; El testing es un aréa de la programación que se encarga de verificar el comportamiento del código de fora aislada con distintas metodologías, cómo la que usaremos ahora: TDD (Test Driven Development) -> Se desarrolla el código a partir de los tests.

//^ ¿Qué es Jest?

//* Jest es un framework muy usado para el testing, este viene diseñado con un conjunto de tests (llamados suites) para poder testear nuestro código, esta enfocado para javascript y además de esto cuenta con funciones (mocks) que pueden imitar nuestro código, y así poder replicarlo de manera aislada sin otras funciones afectando.

//^ Caracteristicas de Jest

//* Jest tiene muchas caracteristicas que nos van a ayudar mucho con el testing de nuestro código; Paraa empezar su configuración es muy sencilla, haciendo que tengamos poco que hacer antes de empezar a usarla, a esto se suma su rapidez qu elo hace ideal para proyectos grandes pudiendo correr los tests de forma eficaz, también una de sus caracteristias más recalcada, la creación de mocks, funciones que replican el código de manera aislada para su testeo, y por último, las snapshots: "fotos" que hace jest de cada una de sus salidas para que podamos registrar los cambios de nuestro proyectos

//! T2 - INTEGRACIÓN DE JEST

//* La forma de integrar Jest a un proyecto es muy sencilla y parecida a Jasmine, tan solo vamos a realizar los tests en un archivo.test.js y de ahí con los métodos y matchers que nos proporciona Jest iremos realizando nuestro código con matchers cómo .toBe() .toEqual() y semejantes. Siempre luego de la aserción expect.

//! V2 - APRENDIENDO A INSTALAR JEST

//* Ahora arrancaremos a realizar una demo con Jest de forma práctica en la carpeta "Jest Prueba"

//* Primero cómo creamos una demo usamos "npm init -y" para que se cree package.json sin preguntar nada y luego instalamos jest con "npm i -D jest" y empezamos!

//! T3 - CONFGIURAR PACKAGE.JSON PARA JEST

//* En package.json podemos añadirle la configuración al script de test para que tenga el valor "Jest --watchAll" Jest de por sí busca cualquiér archivo .test que exista y ejecuta sus tests, pero siempre debe ejecutarse el comando "jest" para esto, con "jest --watchAll" cómo valor del script le indicamos que deje corriendo jest cómo una especie de nodemon que siempre que hagamos un cambio y lo guardemos se reflejara en la consola.

//* Ahora comenzaremos a testear! Para esto primero debemos crear una función que contega la aserción expect() que contendra entre parentesis un valor que se espera obtener y sumarle cómo método un matcher cómo .toBe() con un valor que se espera obtener entre paréntesis. Antes de esto debemos describir la función con un it() con un string entre parentesis que describa lo que haremos.

//! V3 - PRIMEROS TESTS CON JEST

//* Realizado totalmente con la actividad demo-jest

//! T4 - MOCK FUNCTIONS

//* Mock de por sí significa "imitación" y es justamente lo que hace una mock function, imita el código sin tener que correrlo de forma completa, sí no que solo aislando una función o clase y designandole una mockk function que la imite y así verificar que se ejecute correctamente.

//! V4 - COMO FUNCIONAN LAS MOCK FUNCTIONS

//* Cuándo hay funciones que son afectadas por su contexto o otras funciones de su código y queremos verificarla independientemente es muy útil crear una mock function que la aisle y compruebe de forma apartada.

//* Realizado con la actividad demo-jest
