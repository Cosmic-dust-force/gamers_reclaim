import Counter from "../../components/Counter";
import LinkButton from "../../components/LinkButton";

export default function CartItem({
  cartItem,
  products,
  itemRemovedHandler,
  quantityUpdatedHandler,
}) {
  const product = products.find((product) => product.id === cartItem.productId);

  const handleRemoveItemFromCart = () => {
    itemRemovedHandler(cartItem.id);
  };

  const onQuantityUpdated = (quantity) => {
    quantityUpdatedHandler(cartItem.id, product.id, quantity);
  };

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
        <div className="flex items-center ml-6">
          <span>Quantity:</span>
          <Counter
            min={1}
            max={product.inventoryQuantity}
            startingQuantity={cartItem.quantity}
            onCountChanged={onQuantityUpdated}
          />
        </div>
        <h3 className="ml-3">{product.priceUsd}</h3>
      </div>
      <LinkButton
        value={"Remove From Cart"}
        clickHandler={handleRemoveItemFromCart}
      />
    </div>
  );
}
