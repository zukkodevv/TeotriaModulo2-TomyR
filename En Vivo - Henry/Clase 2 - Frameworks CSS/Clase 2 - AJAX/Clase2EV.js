//? CODE REVIEW
//? En esta clase comenzamos repasando que hicimos con el CSS en el proyecto dado, a este punto ya debe estar hecho el mapeado del javascript "tempData" y el CSS totalmente personalizado, ahora comenzaremos a utilizar frameworks

//* Realizamos el mapeado de las imagenes con tempData usando el método .map() y el método innerHTML con esto ya deberiamos tener las tarjetas creadas en el HTML */

//* Code review corto debido a una tarea simple y sencilla

//? LECTURE
//? En esta lecture comenzamos a ver el funcionamiento de AJAX (Asyncronus Javascript ), que era y cómo fue que modificó a la web en sus inicios, también cómo es su proceso y cómo podríamos usarlo a día de hoy

//* AJAX esta directamente relacionado a la ejecucción de código en Javascript, con la consola ejecutando el código línea por línea de arriba a abajo, así;

/* 1- Lee esto*/ function saludarYa() {
  /*2- Tambiéen lee esto*/ onsole.log("te saludo ya");
}

/* 3- Luego lee esto y vuelve a la línea 1, ejecutando la función y luego volviendo a esta línea*/ saludarYa(); // "te saludo ya" -- //* TODO ESTO PERTENECE A UN PROCESO SINCRÓNICO

//* AJAX Trabaja con este método de trabajo de código, así se ejecute un código a la vez pueda ejecutarse otro, sin que el código espere a que el resultado sea dado, por ejemplo en AJAX podría usarse a esperar que el usuario envie cierta información pero que el código no se estanque en el esperando, si no que continúe con el consiguiente código de la página y cuándo el usuario envie eso ejecutar el código.

//* Los principales propósitos de AJAX son; La creación de páginas web interactivas y dinámicas y sobretodo realizar peticiones al servidor y recibir respuestas de este. */

//? Repasamos los distintos archivos de comunicación del servidor, los dos más usados especificamente, XML(Extensible Markup Lenguage) y JSON (Java Script Object Notation).

//? Ejemplo de formato XML:
<Alacena>
  <cajon>
    <cosa1> Peine </cosa1>
    <cosa2> Aguja </cosa2>
  </cajon>
</Alacena>;

//? Ejemplo de formato JSON:
/*
}
Alacena{
    cajon{
        cosa1: "peine",
            cosa2: "aguja"
    }
}
}
*/

//? "Ciclo de vida" o formas de solicitud al servidor con el cliente

//? Forma de petición tradicional
//* El servidor tiene dos formas de mandar un apetición al cliente que lo requiere, la tradicional usado hace tiempo entregaba el html entero al cliente debiendo actualizar la página entera para poder tener los cambios en la página, por lo que resulta en una mala user experience.

//? Forma de petición con SPA
//* Se envia la petición por el cliente al servidor y el servidor devuelve un archivo JSON con la información que debe proporcionarse, por lo que no es necesario reiniciar la página ya que la respuesta apunta a la especificidad.

//? Implementación de JQuery a nuestro proyecto:

//*Implementmos JQuery mediante un scirpt en el HTML con el src en la página de JQuery, luego en el archivo js usamos el simbolo "$" para poder utilizar cualquier método de JQuery.

//* Obtenemos el mismo array de movies desed una API con JQuery, después de recuvurka se recibe en un callback al ser un proceso asincrono, el código que usamos fue:

$.get("link del API", (data) => {
  console.log(data);
});

//* Toda la información recibida del API, que sería un array se recibe en un callback arrow function que recibe el parametro data cómo el array obtenido mediante la API, luego la arrow function hace un console log del data que sería el array entero.

//? Metodos trabajados en la clase

//* Durante la clase se utilizaron los métodos getAllusers y renderUsers que son los siguientes:

// También se creo un repositorio nuevo, aparentemente con el objetivo de almacenar los ids de usuarios
const repository = new Repository();
const renderUsers = () => {
  console.log(repository.createUser(data));
};

const getUsers = (data) => {
  id++;
  repository.createUser(data);
  renderUsers();
};

//* Todo esto añadido a un botón dentro del HTML para generar nuevos usuarios

//? Uso de Funciones Callbacks
//* Son funciones que se pasan cómo un argumento a otra función, y que tienen el objetivo de serllamadas dentro del cuerpo de la función principal posteriormente * /
