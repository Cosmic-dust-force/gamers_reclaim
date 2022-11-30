import useCart from "../../hooks/useCart";

export default function OrderProcessedPage() {
  const { order } = useCart();

  return (
    <div>
      <h1>Your order has been processed!</h1>
    </div>
  );
}
