const getUsersService = require("../services/getUsersService");

const getUsers = async (req, res) => {
  try {
    const users = await getUsersService();

    console.log(users);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getUsers;
