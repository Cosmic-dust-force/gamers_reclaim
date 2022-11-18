const express = require("express");
const { getAllProducts } = require("./productsController");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

module.exports = productsRouter;
