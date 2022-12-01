const express = require("express");
const { useToken, requireUser } = require("../../authentication");
const {
  addItemToCart,
  updateItemQuantity,
  getUserCart,
  removeItemFromCart,
  mergeUserCartItems,
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

cartItemsRouter.delete("/:id", useToken, requireUser, removeItemFromCart);

cartItemsRouter.post("/synchronize", useToken, requireUser, mergeUserCartItems);

module.exports = cartItemsRouter;
