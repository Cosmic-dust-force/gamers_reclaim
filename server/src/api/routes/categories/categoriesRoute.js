const express = require("express");
const { getAllCategories } = require("./categoriesController");

const categoriesRouter = express.Router();

categoriesRouter.get("/", getAllCategories);

module.exports = categoriesRouter;
