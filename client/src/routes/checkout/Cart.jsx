import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../../components";
import { UserContext } from "../../context/UserContext";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import CartItem from "./CartItem";
import CheckoutOptions from "./CheckoutOptions";
const emptyCartImage = require("../../img/empty_cart.png");

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

  const handleNavigateToProducts = () => {
    navigate("/products");
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
    <main className="grow flex flex-col flex-wrap mb-6">
      <h1 className="text-center font-semibold text-5xl uppercase tracking-wide mt-6 mb-6">
        Shopping Cart
      </h1>
      <div className="flex flex-wrap bg-white text-center mt-6 justify-center">
        {!cartItems.length && (
          <div>
            <p>You don't have any items in your cart, let's get gaming!</p>
            <img src={emptyCartImage} alt="handheld videogame console" />
            <LinkButton
              value={"View Our Products"}
              clickHandler={handleNavigateToProducts}
            />
          </div>
        )}
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

      {cartItems.length ? (
        <div className="flex flex-col items-stretch justify-center flex-wrap">
          <h4 className="m-4 text-center text-2xl mb-6 ">{`Subtotal: $${subtotal}`}</h4>
          <div className="p-3">
            <CheckoutOptions
              user={user}
              proccesOrderHandler={handleProcessOrder}
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
