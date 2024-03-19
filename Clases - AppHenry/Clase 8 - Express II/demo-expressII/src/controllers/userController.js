const usersService = require("../services/userServices");
//* Requerimos el servico de usuarios en su módulo

module.exports = {
  //* Exportamos el objeto siguiente
  getAllUsers: async (req, res) => {
    try {
      //* Asignamos getAllUsers cómo si fuera un JSON, indicandole al código que es asincrono y asignandole un código que va a realizar cuándo sea requerido y usado después.
      const users = await usersService.getUsers();
      //* Se crea una constante users con el comando await para indicarle que debe esperar que la promesa de usersService que definimos antes se resuelva (cuándo se resuelve deuvelve el array) y ahí ejecute este código.

      res.status(200).send("Estamos enviando información de usuarios");
      //* Le decimos que responda con un status 200 y enviando el mensaje entre parentesis al recibir la solicitud.
    } catch (error) {
      res.status(400).json({
        error: "Posible error del servidor",
      });
    }
  },

  createUser: async (req, res) => {
    const { name } = req.body;
    //* req.body significa el cuerpo de la petición, viene en formato JSON y tiene información, en este caso va a tener un nombre que va a tomar el valor del objeto name. Este es un objeto debido a que queremos desestructurarlo para quedarnos con su valor.
    await usersService.createUser(name);

    try {
      res.status(201).json({
        message: "usuario creado correctamente",
      });
    } catch (error) {
      res.status(400).json({
        error: "error al crear al usuario",
      });
    }
  },
};
