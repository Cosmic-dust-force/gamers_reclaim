const {
  createProduct,
  updateProduct,
  getAllProductsWithCategory,
  getProductByName,
  getProductQuantity,
  destroyProduct,
} = require("../adapters/productsAdapter");
const { modelFromDb, dbFromModel } = require("./mapping/productMapping");

async function create(product) {
  const newProduct = await createProduct(product);

  return modelFromDb(newProduct);
}

async function update(product) {
  const dbProduct = dbFromModel(product);
  console.log(dbProduct);
  const updatedProduct = await updateProduct(dbProduct);

  return modelFromDb(updatedProduct);
}

async function getAll() {
  const products = await getAllProductsWithCategory();

  const modelProducts = products.map(modelFromDb);

  return modelProducts;
}

async function getByName(productName) {
  const productWithName = await getProductByName(productName);

  return productWithName && modelFromDb(productWithName);
}

async function getQuantityForId(id) {
  return await getProductQuantity(id);
}

async function destroy(id) {
  const destroyedProduct = await destroyProduct(id);
  return modelFromDb(destroyedProduct);
}

module.exports = {
  create,
  update,
  getAll,
  getByName,
  getQuantityForId,
  destroy,
};
