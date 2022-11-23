const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const { addItemToCart } = require("./cartItemsController");

const cartItemsRouter = express.Router();

cartItemsRouter.post("/", useToken, requireUser, addItemToCart);

module.exports = cartItemsRouter;
