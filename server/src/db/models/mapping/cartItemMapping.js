function dbFromModel(modelCartItem) {
  const {
    userId,
    productId,
    orderId = null,
    priceUsd,
    ...dbCartItem
  } = modelCartItem;

  dbCartItem.user_id = userId;
  dbCartItem.product_id = productId;
  dbCartItem.order_id = orderId;
  dbCartItem.price_usd = priceUsd;

  return dbCartItem;
}

function modelFromDb(dbCartItem) {
  const { user_id, product_id, order_id, price_usd, ...modelCartItem } =
    dbCartItem;

  modelCartItem.userId = user_id;
  modelCartItem.productId = product_id;
  modelCartItem.orderId = order_id;
  modelCartItem.priceUsd = price_usd;

  return modelCartItem;
}

module.exports = { dbFromModel, modelFromDb };
