function addItemToCart(cartItems, cartItem) {
  const existingItem = cartItems.find(
    (item) => item.productId === cartItem.productId
  );

  if (existingItem) return cartItems;

  return [...cartItems, cartItem];
}

function updateItemQuantityInPlace(cartItems, productId, quantity) {
  const existingItem = cartItems.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity = quantity;
  }
}

function removeItemFromCart(cartItems, productId) {
  return cartItems.filter((item) => item.productId !== productId);
}

export { addItemToCart, updateItemQuantityInPlace, removeItemFromCart };
