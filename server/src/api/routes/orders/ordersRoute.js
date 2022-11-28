const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const { checkoutUserCart } = require("./ordersController");

const ordersRouter = express.Router();

ordersRouter.post("/", useToken, requireUser, checkoutUserCart);

module.exports = ordersRouter;
