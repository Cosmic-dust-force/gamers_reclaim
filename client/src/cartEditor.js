function addItemToCart(cartItems, cartItem) {
  const existingItem = cartItems.find(
    (item) => item.productId === cartItem.productId
  );

  if (existingItem) return cartItems;

  return [...cartItems, cartItem];
}

function updateItemQuantity(cartItems, productId, quantity) {
  const existingItem = cartItems.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity = quantity;
  }

  return [...cartItems];
}

function removeItemFromCart(cartItems, productId) {
  return cartItems.filter((item) => item.productId !== productId);
}

export { addItemToCart, updateItemQuantity, removeItemFromCart };
