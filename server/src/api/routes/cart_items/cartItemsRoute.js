const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const {
  addItemToCart,
  updateItemQuantity,
  getUserCart,
} = require("./cartItemsController");

const cartItemsRouter = express.Router();

cartItemsRouter.post("/", useToken, requireUser, addItemToCart);

cartItemsRouter.patch(
  "/quantity/:id",
  useToken,
  requireUser,
  updateItemQuantity
);

cartItemsRouter.get("/:userId", useToken, requireUser, getUserCart);

module.exports = cartItemsRouter;
