const Activity = require("./activityClass");
//* Requerimos la clase Activity de su módulo para que la clase de este módulo pueda utilizarla.

class Repository {
  //* Creamos una nueva clase Repository que servira cómo una "base de datos"
  constructor() {
    this.id = 0;
    //* Le creamos un constructor para sus instancias
    this.activities = [];
    //* Asignamos al constructor un parametro activities cómo un array vacío que contendrá posteriormente las actividades añadidas.
  }
  createActivity(title, description, imgUrl) {
    //* Le creamos un método que toma 3 parametros --> Los métodos son "funciones" que pueden llamarse desde la instancia cómo: instancia.createActivity('juanito', 'juanito come', 'juanito.png')
    const newActivity = new Activity(this.id, title, description, imgUrl);
    //* Creamos una nueva instancia de Activity y la asignamos como constante para poder referirnos a ella.
    this.id++;
    //* Le decimos que el parametro de id aumente en 1 por cada instancia
    this.activities.push(newActivity);
    //* decimmos que añada esta instancia al array usado cómo "base de datos" (this.activities)
  }
  getAllActivities() {
    //* Definimos un metodo que devuelva todas las actividades añadidas
    return this.activities;
    //* Devuelve el array que usamos como "base de datos" (this.activities)
  }
}

module.exports = Repository;
//* Exportamos la clase Repository para que pueda ser requerida y usada.
