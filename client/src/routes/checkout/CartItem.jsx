import Counter from "../../components/Counter";
import LinkButton from "../../components/LinkButton";
import useCart from "../../hooks/useCart";

export default function CartItem({ cartItem, products }) {
  const { removeItemFromCart, updateItemQuantity } = useCart();
  const product = products.find((product) => product.id === cartItem.productId);

  console.log(products);
  console.log(cartItem);

  return (
    <div className="flex flex-col bg-white m-3 p-4">
      <div className="flex items-center">
        <img
          className="w-48"
          src={product.imageUrl}
          alt={product.productName}
        />
        <h3 className="font-semibold ml-6 text-sm w-48">
          {product.productName}
        </h3>
        <Counter
          min={1}
          max={product.quantity}
          onCountChanged={updateItemQuantity}
        />{" "}
        <h3 className="ml-3">{product.priceUsd}</h3>
      </div>
      <LinkButton value={"Remove From Cart"} />
      <hr />
    </div>
  );
}
