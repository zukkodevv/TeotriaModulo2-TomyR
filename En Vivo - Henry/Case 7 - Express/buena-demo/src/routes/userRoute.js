const { Router } = require("express");
const getUsers = require("../controllers/usersController");

const usersRoute = Router();

usersRoute.get("/", getUsers);

module.exports = usersRoute;
