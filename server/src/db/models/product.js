const { getAllProductsWithCategory } = require("../adapters/productsAdapter");

async function getAll() {
  const products = await getAllProductsWithCategory();

  const modelProducts = products.map((product) => {
    const {
      product_name: productName,
      price_usd: priceUsd,
      inventory_quantity: inventoryQuantity,
      category_id: categoryId,
      category_name: categoryName,
      image_url: imageUrl,
      ...modelProduct
    } = product;

    modelProduct.productName = productName;
    modelProduct.priceUsd = priceUsd;
    modelProduct.inventoryQuantity = inventoryQuantity;
    modelProduct.categoryId = categoryId;
    modelProduct.categoryName = categoryName;
    modelProduct.imageUrl = imageUrl;

    return modelProduct;
  });

  return modelProducts;
}

module.exports = { getAll };
