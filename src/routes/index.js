//O objetivo desse arquivo é reunir todas as rotas

const { Router } = require("express");
const routes = Router();

const usersRouter = require("./users.routes")

routes.use("/users", usersRouter)

module.exports = routes;