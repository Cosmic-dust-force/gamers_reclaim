const productsModel = require("../../../db/models/product");
const { UnexpectedServerError } = require("../../errors");

async function addProduct(req, res, next) {
  try {
    const product = req.body;
    const newProduct = await productsModel.create(product);

    return res.json(newProduct);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

async function getAllProducts(req, res, next) {
  try {
    const products = await productsModel.getAll();

    return res.json(products);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

module.exports = { addProduct, getAllProducts };
