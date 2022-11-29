import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, removeItemFromCart, updateItemQuantity } = useCart();
  const { products } = useProducts();

  const handleItemRemoved = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleQuantityUpdated = (cartItemId, productId, quantity) => {
    updateItemQuantity(cartItemId, productId, quantity);
  };

  const getSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((cartItem) => {
      subtotal +=
        Number(cartItem.priceUsd.replace(/[^0-9.-]+/g, "")) *
        Number(cartItem.quantity);
    });
    subtotal = subtotal.toFixed(2);
    return subtotal;
  };

  const subtotal = getSubtotal();

  return (
    <main className="flex flex-col">
      <h1 className="text-center font-semibold text-3xl uppercase tracking-wide mb-6">
        Shopping Cart
      </h1>
      <div className="bg-white">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            products={products}
            itemRemovedHandler={handleItemRemoved}
            quantityUpdatedHandler={handleQuantityUpdated}
          />
        ))}
      </div>
      <h4 className="self-end m-4">{`Subtotal: $${subtotal}`}</h4>
    </main>
  );
}
