const users = [
  {
    id: 1,
    name: "Jorge",
  },
  {
    id: 2,
    name: "Alicia",
  },
  {
    id: 3,
    name: "Kalifo",
  },
];
//* Creamos una array que simula la API de peliculas y luego la exportaremos.

module.exports = {
  getUsers: async () => {
    return users;
  },
  //* Es tipo async ya que simulamos cómo funciona en un proyecto real comunicandose asincronamente con una base de datos y porque async siempre resulta en una promesa.
  createUsers: async (name) => {
    const newUser = {
      id,
      name,
    };
    users.push(newUser);
  },
};
