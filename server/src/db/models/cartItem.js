const { dbFromModel, modelFromDb } = require("./mapping/cartItemMapping");
const {
  createCartItem,
  getCartItemsInCartForUser,
} = require("../adapters/cartItemsAdapter");

async function create(cartItem) {
  const dbCartItem = dbFromModel(cartItem);

  const newCartItem = await createCartItem(dbCartItem);

  return newCartItem;
}

async function itemsInCartForUser(user_id) {
  const dbCartItems = await getCartItemsInCartForUser(user_id);

  const cartItems = dbCartItems.map((cartItem) => {
    return modelFromDb(cartItem);
  });

  return cartItems;
}

module.exports = { create, itemsInCartForUser };
