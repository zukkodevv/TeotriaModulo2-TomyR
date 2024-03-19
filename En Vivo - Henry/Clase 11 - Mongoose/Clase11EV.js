//! LECTURE - MONGOOSE

//^ El traductor (ODM)
//* ODM (Object Data Modeling) > Son librerias para manipular y convertir datos incompatibles entre dos sistemas, cómo mongodb usando BSON, necesita ser convertido para ser usado.

//* El ODM es quién interactua entre nuestra aplicación y la base de datos de MongoDB, siendo un intermediario o traductor, como la base de datos usa JSON o BSON y nuestro server Javascript, si nuestro servidor le habla a la base de datos se convierte la petición a JSON y viceversa si la base de datos se comunica con el servidor.

//^ Moongose

//* Moongose es un ODM que permite que interactuemos con nuestra base de datos desde el código, tiene el foco en MongoDB y esta espceializada en javascript y typescript.

//* Instalar Moongose es igual que las demás dependencias, con "npm install mongoose" y luego se debe requerir de igual forma que express, con "require.('moongose')"

//^ Nos conectamos a la base de datos

//* Para conectarnos a la abse de datos debemos usar el metodo connect() con la URI, osea el link de nuestra base de datos en MongoDB entre parentesis.

//^ Manejo de eventos

//* Usamos eventos para poder manejar posibles errores de conexión y ejecutar comandos cuando es exitosa, cómo el try y catch, pero con los comandos (error) y (open).

//* Tambien usa dos metodos. on() y once(), on() se ejecuta en caso de error ejecutando su lógica, caso contrario se ejecuta once() si la conexión es exitosa.

//^ Esquemas

//* Esuna estructura para crear nuestro código, lleva configuraciones de una colección, le dice a la colección el tipo de documento que vamos a guardar, deberemos tparlso datos guardados en la colección, y adjuntara a cada propiedad el tipo de dato que guardaremos.
