//* Definimos una función middleware, esta sera llamada entre la petición y la ruta, y se encargara de verificar que el cuerpo de la petición (recordar que es formato JSON) tenga un valor name.

const validateUsers = (req, res, next) => {
  //* Creamos una constante definida como una función que va a manejar la solicitud.
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Falta el dato del nombre",
    });
    //* (No es buena práctica pero lo usaremos ahora) Cortamos el flujo y le enviamos cómo respuesta al cliente un error sí se detecta un error.
  } else {
    next();
    //* Definimos que sí no hay errores en la petición, continue su flujo.
  }
};

module.exports = validateUsers;
