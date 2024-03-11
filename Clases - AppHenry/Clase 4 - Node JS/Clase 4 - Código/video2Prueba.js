//* Ahora junto al video vaoms a hacer un repaso del uso del Node usando de ejemplo nuestro archivo de clases que utilizamos en el M1

//^ class Activity {
//^   //* Creamos una nueva clase llamada Activity
//^   constructor(id, title, description, imgUrl) {
//^     //* Creamos un constructor con 4 parametros que tendran cada una de sus instancias
//^     this.id = id;
//^     this.title = title;
//^     this.description = description;
//^     this.imgUrl = imgUrl;
//^   }
//^ }

// (Al final se explica porque esto esta comentado ahora)

//^class Repository {
//^  //* Creamos una nueva clase Repository que servira cómo una "base de datos"
//^  constructor() {
//^    //* Le creamos un constructor para sus instancias
//^    this.activities = [];
//^    //* Asignamos al constructor un parametro activities cómo un array vacío que contendrá posteriormente las actividades añadidas.
//^     this.id = id;
//^   }
//^   createActivity(title, description, imgUrl) {
//^     //* Le creamos un método que toma 3 parametros --> Los métodos son "funciones" que pueden llamarse desde la instancia cómo: instancia.createActivity('juanito', 'juanito come', 'juanito.png')
//^     const newActivity = new Activity(this.id, title, description, imgUrl);
//^    //* Creamos una nueva instancia de Activity y la asignamos como constante para poder referirnos a ella.
//^^     this.id++;
//^^     //* Le decimos que el parametro de id aumente en 1 por cada instancia
//^^     this.activities.push(newActivity);
//^^     //* decimmos que añada esta instancia al array usado cómo "base de datos" (this.activities)
//^^   }
//^^   getAllActivities() {
//^^     //* Definimos un metodo que devuelva todas las actividades añadidas
//^^     return this.activities;
//^^     //* Devuelve el array que usamos como "base de datos" (this.activities)
//^^   }
//^^ }

// (Al final se explica porque esto esta comentado ahora)

//* No requerimos Activity acá porque no se lo necesita

const Repository = require("./Módulos/repository");
//* Requerimos el módulo de la clase Repository para poder utilizarlo en este módulo.

const repository = new Repository();
//* Creamos una instancia de Repository

repository.createActivity("salir a pasear", "es bueno para la salud");

//^ console.log(repository.getAllActivities());

//^ Volvemos a la modularización con node:

//* Cómo ven este código es grande y con 3 clases, sí llegaramos a tener un problema, por cada uno debemos revisar las 40 líneas de código una por una y identificarlo, es en estos casos dónde node entra para facilitarnos las cosas:

//* Ahora para que pongamos en práctica esto, primero en la carpeta "Módulos"  creamos un módulo que va a alojar a la primer clase, "Activity" y para eso creamos su archivo "activityClass.js".

//* Luego de hacer esto notaremos que nuestro código esta totalmente roto porque de ninguna forma estan vínculados todavía, por eso procedemos a exportar la clase en su módulo "activityClass.js" y luego lo requerimos.

//! V2 - Instaación de Nodemon via NPM

//* Ahora vamos a prácticar con NPM empezando por una dependencia de desarrollo que nos facilitara el monitoreo del código de la siguiente manera.

repository.createActivity("jugar al fútbol", "Argentina campeón del mundo");
repository.createActivity("salir a bailar", "No beber sí conduces");

console.log(repository.getAllActivities());

//* Para cada actividad que añadimos deberíamos realizar Ctrl + N o en consola el comando "node start" previamente configurado para ver la ejecucción en consola, bueno, con Nodemon esto ya no va a ser necesario.

//* Una vez instalado nos crea la carpeta "node_modules" y se nos añade la dependencia al package.json "nodemon", es muy importante que si vamos a subir nuestro proyecto, creemos un archivo .gitignore en la raíz y dentro coloquemos "node_modules" ya que esta carpeta es demasiado pesada y realmente innecesaria de subir y con nuestro archivo .gitignore la podremos ignorar al pushear.

//* Luego de instalar nodemon, modificamos el comando "start" para que ahora su valor sea "nodemon 'archivo'" esto ejecutara el archivo del valor y inicialara nodemon que ejecutara el proyecto, nodemon quedara corriendo y cada vez que se guarde con cambios se reflejara en la consola automaticamente gracias a Nodemon.

//* En nuestro ejemplo, nodemon esta configurado par correr "video2Prueba.js" que actuaria como un index.js normal, pero si realizamos cambios en "Respository.js" o "Activity.js" también se nos reflejaran los cambios, debido a que nodemon identifica la modularización y los requerimientos de los módulos y todos son parte del monitoreo de nodemon al estar interconectados.

/////