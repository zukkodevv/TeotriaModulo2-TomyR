const getUsers = (req, res) => {
  res.status(200).send("Se esta ejecutando el controlador en /users");
};

module.exports = getUsers;
