const { dbFromModel, modelFromDb } = require("./mapping/cartItemMapping");
const {
  createCartItem,
  updateCartItem,
  getCartItemsInCartForUser,
  destroyCartItem,
  addUserCartItemsToOrder,
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

async function itemsInCartForUser(userId) {
  const dbCartItems = await getCartItemsInCartForUser(userId);

  const cartItems = dbCartItems.map((cartItem) => {
    return modelFromDb(cartItem);
  });

  return cartItems;
}

async function destroy(id) {
  return await destroyCartItem(id);
}

async function orderItemsInUserCart(userId, orderId) {
  const dbCartItems = await addUserCartItemsToOrder(userId, orderId);

  return dbCartItems.map(modelFromDb);
}

module.exports = {
  create,
  update,
  itemsInCartForUser,
  destroy,
  orderItemsInUserCart,
};
