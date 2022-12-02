const express = require("express");
const { useToken, requireAdmin } = require("../../authentication");
const { getCustomers, login, register } = require("./usersController");
const usersRouter = express.Router();

usersRouter.get("/", useToken, requireAdmin, getCustomers);

usersRouter.post("/login", login);

usersRouter.post("/register", register);

module.exports = usersRouter;
