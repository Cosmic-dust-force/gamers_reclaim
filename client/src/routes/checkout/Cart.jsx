import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import CartItem from "./CartItem";
import CheckoutOptions from "./CheckoutOptions";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart, updateItemQuantity, checkout } =
    useCart();
  const { products } = useProducts();
  const { user } = useContext(UserContext);

  const handleItemRemoved = (cartItemId, productId) => {
    removeItemFromCart(cartItemId, productId);
  };

  const handleQuantityUpdated = (cartItemId, productId, quantity) => {
    updateItemQuantity(cartItemId, productId, quantity);
  };

  const handleProcessOrder = () => {
    if (user) {
      checkout();
      navigate("/cart/orderprocessed");
    }
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
            key={cartItem.id || "tmp-cart-item-key" + cartItem.productId}
            cartItem={cartItem}
            product={products.find(
              (product) => product.id === cartItem.productId
            )}
            itemRemovedHandler={handleItemRemoved}
            quantityUpdatedHandler={handleQuantityUpdated}
          />
        ))}
      </div>
      <h4 className="self-end m-4">{`Subtotal: $${subtotal}`}</h4>
      {cartItems.length && (
        <CheckoutOptions user={user} proccesOrderHandler={handleProcessOrder} />
      )}
    </main>
  );
}
