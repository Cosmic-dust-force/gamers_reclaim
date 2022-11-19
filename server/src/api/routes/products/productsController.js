const productsModel = require("../../../db/models/product");

async function getAllProducts(req, res, next) {
  try {
    const products = await productsModel.getAll();

    return res.json(products);
  } catch (error) {
    console.error(error);
    return next(UnexpectedServerError());
  }
}

module.exports = { getAllProducts };
