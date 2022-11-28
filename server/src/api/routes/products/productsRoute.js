const express = require("express");
const { useToken, requireAdmin } = require("../../authentication");
const { addProduct, getAllProducts } = require("./productsController");

const productsRouter = express.Router();

productsRouter.post("/", useToken, requireAdmin, addProduct);

productsRouter.get("/", getAllProducts);

module.exports = productsRouter;
