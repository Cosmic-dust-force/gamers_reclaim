const { dbFromModel } = require("./mapping/cartItemMapping");
const { createCartItem } = require("../adapters/cartItemsAdapter");

async function create(cartItem) {
  const dbCartItem = dbFromModel(cartItem);

  const newCartItem = await createCartItem(dbCartItem);

  return newCartItem;
}

module.exports = { create };
