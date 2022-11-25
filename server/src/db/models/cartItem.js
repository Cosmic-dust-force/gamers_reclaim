const { dbFromModel, modelFromDb } = require("./mapping/cartItemMapping");
const {
  createCartItem,
  updateCartItem,
  getCartItemsInCartForUser,
} = require("../adapters/cartItemsAdapter");

async function create(cartItem) {
  const dbCartItem = dbFromModel(cartItem);

  const newCartItem = await createCartItem(dbCartItem);

  return newCartItem;
}

async function update(cartItem) {
  const dbCartItem = dbFromModel(cartItem);

  const updatedCartItem = await updateCartItem(cartItem);

  return updatedCartItem;
}

async function itemsInCartForUser(user_id) {
  const dbCartItems = await getCartItemsInCartForUser(user_id);

  const cartItems = dbCartItems.map((cartItem) => {
    return modelFromDb(cartItem);
  });

  return cartItems;
}

module.exports = { create, update, itemsInCartForUser };
