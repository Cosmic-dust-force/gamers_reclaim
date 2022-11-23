function dbFromModel(modelCartItem) {
  const { userId, productId, orderId, priceUsd, ...dbCartItem } = modelCartItem;

  dbCartItem.user_id = userId;
  dbCartItem.product_id = productId;
  dbCartItem.order_id = orderId;
  dbCartItem.price_usd = priceUsd;

  return dbCartItem;
}

module.exports = { dbFromModel };
