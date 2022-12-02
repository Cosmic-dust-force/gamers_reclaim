import { useContext, useEffect, useState } from "react";
import { useLocation, Link} from "react-router-dom";
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
  const [productInCart, setProductInCart] = useState(null);

  useEffect(() => {
    const itemForProduct = cartItems.find(
      (item) => item.productId === product.id
    );

    if (itemForProduct) {
      setProductInCart(itemForProduct);
      setUserIsAddingToCart(true);
    }
  }, [cartItems, product.id]);

  function getInitialQuantity() {
    return productInCart ? productInCart.quantity : 1;
  }

  const onAddToCartButtonClick = () => {
    setUserIsAddingToCart(true);

    const cartItem = {
      userId: user ? user.user.id : null,
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

    if (cartItem && cartItem.quantity !== quantity) {
      updateItemQuantity(cartItem?.id, product?.id, quantity);
    }
  };

  return (
    <div className="bg-black m-2">
      <div className="flex p-2 m-2 flex-col md:flex-row">
        <img
          className="md:rounded-md"
          src={product.imageUrl}
          alt={product.productName}
        />
        <div className="bg-white md:rounded-md md:ml-2">
          <div className="m-3">
            <h3 className="font-semibold mt-2 mb-2 text-2xl">
              {product.productName}
            </h3>
            <h4 className="font-medium mt-2 mb-5 text-l">{product.brand}</h4>
            <h4>
              {product.inventoryQuantity
                ? `In Stock - ${product.inventoryQuantity} available`
                : "Out of Stock"}
            </h4>
            <h4 className="font-thin">{product.description}</h4>
            <h3 className="font-semibold mt-8 mb-1 text-2xl">{product.priceUsd}</h3>
            <div>
              <p className="font-thin"> Update the amount of items in your cart by clicking below. </p>
              {userIsAddingToCart ? (
                <Counter
                  onCountChangedHandler={onQuantityUpdated}
                  onInitialRenderHandler={
                    productInCart
                      ? null
                      : () => {
                        onQuantityUpdated(1);
                      }
                  }
                  min={1}
                  startingQuantity={getInitialQuantity()}
                  max={product.inventoryQuantity}
                />
              ) : (
                <LinkButton
                  clickHandler={onAddToCartButtonClick}
                  value={"Add to Cart"}
                />
              )}
            </div>
            {userIsAddingToCart && (
              <div>
                <Link
                  className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border border-gray-800 rounded ml-4"
                  to={"/products"}
                  >Continue Shopping</Link>
                <Link
                  className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 border border-green-800 rounded ml-4"
                  to={"/cart"}
                  >View Cart</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
