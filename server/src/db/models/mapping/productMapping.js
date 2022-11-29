function copyObjectSetValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value)
  );
}

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

function dbFromModel(modelProduct) {
  const {
    productName: product_name,
    priceUsd: price_usd,
    inventoryQuantity: inventory_quantity,
    categoryId: category_id,
    categoryName: category_name,
    imageUrl: image_url,
    ...dbProduct
  } = modelProduct;

  dbProduct.product_name = product_name;
  dbProduct.price_usd = price_usd;
  dbProduct.inventory_quantity = inventory_quantity;
  dbProduct.category_id = category_id;
  dbProduct.image_url = image_url;

  return copyObjectSetValues(dbProduct);
}

module.exports = { modelFromDb, dbFromModel };
