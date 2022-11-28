const express = require("express");
const { useToken, requireAdmin } = require("../../authentication");
const {
  addProduct,
  updateProduct,
  getAllProducts,
  removeProduct,
} = require("./productsController");

const productsRouter = express.Router();

productsRouter.post("/", useToken, requireAdmin, addProduct);

productsRouter.patch("/:productId", useToken, requireAdmin, updateProduct);

productsRouter.get("/", getAllProducts);

productsRouter.delete("/:productId", useToken, requireAdmin, removeProduct);

module.exports = productsRouter;
