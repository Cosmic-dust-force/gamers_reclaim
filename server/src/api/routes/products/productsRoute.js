const express = require("express");
const fileUpload = require("express-fileupload");
const { useToken, requireAdmin } = require("../../authentication");
const {
  addProduct,
  updateProduct,
  getAllProducts,
  removeProduct,
  uploadProductImage,
} = require("./productsController");

const productsRouter = express.Router();

productsRouter.use(fileUpload());

productsRouter.post("/", useToken, requireAdmin, addProduct);

productsRouter.patch("/:productId", useToken, requireAdmin, updateProduct);

productsRouter.get("/", getAllProducts);

productsRouter.delete("/:productId", useToken, requireAdmin, removeProduct);

productsRouter.post(
  "/productImage",
  useToken,
  requireAdmin,
  uploadProductImage
);

module.exports = productsRouter;
