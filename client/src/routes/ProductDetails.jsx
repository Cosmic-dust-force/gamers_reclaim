import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Counter from "../components/Counter";
import LinkButton from "../components/LinkButton";

export default function ProductDetails() {
  const location = useLocation();
  const { product } = location.state;
  const [userIsAddingToCart, setUserIsAddingToCart] = useState(false);

  const onQuantityUpdated = (quantity) => {
    //AddToCart()
    return quantity;
  };

  const onAddToCartButtonClick = () => {
    setUserIsAddingToCart(true);
  };

  return (
    <div className="flex p-2 m-2 flex-col md:flex-row">
      <img className="" src={product.imageUrl} alt={product.productName} />
      <div className="">
        <h3 className="font-semibold mt-2 mb-2 text-2xl">
          {product.productName}
        </h3>
        <h4 className="font-medium mt-2 mb-5 text-l">{product.brand}</h4>
        <h4 className="">{product.description}</h4>
        <h3 className="font-semibold mt-8 mb-1 text-2xl">{product.priceUsd}</h3>
        {userIsAddingToCart ? (
          <Counter onCountChanged={onQuantityUpdated} min={0} max={20} />
        ) : (
          <LinkButton
            clickHandler={onAddToCartButtonClick}
            value={"Add to Cart"}
          />
        )}
      </div>
    </div>
  );
}
