const axios = require("axios");

const getUsersService = async () => {
  try {
    await axios("https://jsonplaceholder.typicode.com/users");

    return users.data;
  } catch (error) {}
};
