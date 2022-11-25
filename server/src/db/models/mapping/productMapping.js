function modelFromDb(dbProduct) {
  const {
    product_name: productName,
    price_usd: priceUsd,
    inventory_quantity: inventoryQuantity,
    category_id: categoryId,
    category_name: categoryName,
    image_url: imageUrl,
    ...modelProduct
  } = dbProduct;

  modelProduct.productName = productName;
  modelProduct.priceUsd = priceUsd;
  modelProduct.inventoryQuantity = inventoryQuantity;
  modelProduct.categoryId = categoryId;
  modelProduct.categoryName = categoryName;
  modelProduct.imageUrl = imageUrl;

  return modelProduct;
}

module.exports = { modelFromDb };
