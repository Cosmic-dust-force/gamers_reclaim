const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const { addItemToCart, getUserCart } = require("./cartItemsController");

const cartItemsRouter = express.Router();

cartItemsRouter.post("/", useToken, requireUser, addItemToCart);
cartItemsRouter.get("/:userId", useToken, requireUser, getUserCart);

module.exports = cartItemsRouter;
