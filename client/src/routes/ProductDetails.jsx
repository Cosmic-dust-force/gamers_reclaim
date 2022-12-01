import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Counter from "../components/Counter";
import LinkButton from "../components/LinkButton";
import { UserContext } from "../context/UserContext";
import useCart from "../hooks/useCart";

export default function ProductDetails() {
  const location = useLocation();
  const { product } = location.state;
  const { user } = useContext(UserContext);
  const { cartItems, addItemToCart, updateItemQuantity } = useCart();

  const [userIsAddingToCart, setUserIsAddingToCart] = useState(false);

  const onAddToCartButtonClick = () => {
    setUserIsAddingToCart(true);

    const cartItem = {
      userId: user.user.id,
      productId: product.id,
      quantity: 1,
      priceUsd: product.priceUsd,
    };

    addItemToCart(cartItem);
  };

  const onQuantityUpdated = (quantity) => {
    const cartItem = cartItems.find(
      (cartItem) => cartItem.productId === product.id
    );
    updateItemQuantity(cartItem?.id, product?.id, quantity);
  };

  return (
    <div className="flex p-2 m-2 flex-col md:flex-row">
      <img className="" src={product.imageUrl} alt={product.productName} />
      <div className="">
        <h3 className="font-semibold mt-2 mb-2 text-2xl">
          {product.productName}
        </h3>
        <h4 className="font-medium mt-2 mb-5 text-l">{product.brand}</h4>
        <h4>
          {product.inventoryQuantity
            ? `In Stock - ${product.inventoryQuantity} available`
            : "Out of Stock"}
        </h4>
        <h4 className="">{product.description}</h4>
        <h3 className="font-semibold mt-8 mb-1 text-2xl">{product.priceUsd}</h3>
        {userIsAddingToCart ? (
          <Counter
            onCountChanged={onQuantityUpdated}
            min={1}
            startingQuantity={1}
            max={product.inventoryQuantity}
          />
        ) : (
          <LinkButton
            clickHandler={onAddToCartButtonClick}
            value={"Add to Cart"}
          />
        )}
        {userIsAddingToCart && (
          <div>
            <Link
              to="/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contiue Shopping
            </Link>
            <Link
              to="/cart"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Go to Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
