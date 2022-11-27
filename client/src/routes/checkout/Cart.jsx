import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems } = useCart();
  const { products } = useProducts();

  return (
    <main>
      <h1 className="text-center font-semibold text-3xl uppercase tracking-wide">
        Shopping Cart
      </h1>
      <div className="bg-white">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} products={products} />
        ))}
      </div>
    </main>
  );
}
