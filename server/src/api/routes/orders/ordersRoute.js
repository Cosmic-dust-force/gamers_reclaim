const express = require("express");
const { useToken, requireUser, requireAdmin } = require("../../authentication");
const { getAllCartItems, checkoutUserCart } = require("./ordersController");

const ordersRouter = express.Router();

ordersRouter.get("/", useToken, requireAdmin, getAllCartItems);
ordersRouter.post("/", useToken, requireUser, checkoutUserCart);

module.exports = ordersRouter;
