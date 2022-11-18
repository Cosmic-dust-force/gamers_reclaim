const { getAllProducts } = require("../adapters/productsAdapter");

async function getAll() {
  const products = await getAllProducts();

  const modelProducts = products.map((product) => {
    const {
      product_name: productName,
      price_usd: priceUsd,
      inventory_quantity: inventoryQuantity,
      category_id: categoryId,
      image_url: imageUrl,
      ...modelProduct
    } = product;

    modelProduct.productName = productName;
    modelProduct.priceUsd = priceUsd;
    modelProduct.inventoryQuantity = inventoryQuantity;
    modelProduct.categoryId = categoryId;
    modelProduct.imageUrl = imageUrl;
  });

  return modelProducts;
}

module.exports = { getAll };
