//^ Módulo Activity alojado independientemente con el fin de ser exportado hacía "video2Prueba.js"
class Activity {
  //* Creamos una nueva clase llamada Activity
  constructor(id, description, title, imgUrl) {
    //* Creamos un constructor con 4 parametros que tendran cada una de sus instancias
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

module.exports = Activity;
//* Exportamos la clase para que podamos requerirla en otros módulos
