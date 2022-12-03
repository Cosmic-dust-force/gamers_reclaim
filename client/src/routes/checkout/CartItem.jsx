import Counter from "../../components/Counter";
import LinkButton from "../../components/LinkButton";

export default function CartItem({
  cartItem,
  product,
  itemRemovedHandler,
  quantityUpdatedHandler,
}) {
  const handleRemoveItemFromCart = () => {
    itemRemovedHandler(cartItem.id, product.id);
  };

  const onQuantityUpdated = (quantity) => {
    quantityUpdatedHandler(cartItem.id, product.id, quantity);
  };

  if (!product) return;

  return (
    <div className="flex flex-col bg-white m-3 p-4">
      <div className="flex items-center flex-wrap">
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
            onCountChangedHandler={onQuantityUpdated}
          />
        </div>
        <h3 className="ml-3">{product.priceUsd}</h3>
      </div>
      <LinkButton
        value={"Remove Item From Cart"}
        clickHandler={handleRemoveItemFromCart}
      />
      </div>
  );
}
