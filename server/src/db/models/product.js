const {
  getAllProductsWithCategory,
  getProductQuantity,
} = require("../adapters/productsAdapter");
const { modelFromDb } = require("./mapping/productMapping");

async function getAll() {
  const products = await getAllProductsWithCategory();

  const modelProducts = products.map(modelFromDb);

  return modelProducts;
}

async function getQuantityForId(id) {
  return await getProductQuantity(id);
}

module.exports = { getAll, getQuantityForId };
