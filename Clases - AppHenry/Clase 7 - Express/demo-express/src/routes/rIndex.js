const { Router } = require("express");
//* Dentro de express se requiere a su objeto Router el cuál nos facilita la creación de rutas usando su instancia que crearemos.

const { testController } = require("../controllers/cIndex");
//* Requerimos la función testController, controlador encargado de manejar la lógica de la ruta "/"

const router = Router();
//* Creamos una instancia de Router que va a tener sus funcionalidades pra ayudarnos a crera rutas y la llamamos router.

router.get("/", testController);
//* Le decimos a la instacia de router que maneje las peticiones de tipo get a la ruta "/" y luego le colocaremos el controlador cómo un módulo importado, ya que su lógica se encuentra en controllers.

module.exports = router;
//* Exportamos la instancia de router para que después pueda comunnicarse con app, que es quién recibe la solicitud primero que todos.
