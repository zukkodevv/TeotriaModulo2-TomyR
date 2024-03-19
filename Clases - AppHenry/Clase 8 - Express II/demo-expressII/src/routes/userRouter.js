const { Router } = require("express");
//* Le indicamos al código que requira el objeto propio de express Router para poder crear rutas facilmente.
const userController = require("../controllers/userController");
//* Requerimos el controlador que tiene la lógica de manejo de petición a la ruta que vamos a controlar.

const userRouter = Router();
//* Creamos una instancia de Router y lo llamamos userRouter.

userRouter.get("/", userController.getAllUsers);
//* Creamos una nueva ruta y le decimos al router que cuándo reciba una petición de tipo get a la ruta dentro de parentesis en comillas ("/"), ejecute la lógica del controlador.

userRouter.post("/", userController.createUser);

module.exports = userRouter;
