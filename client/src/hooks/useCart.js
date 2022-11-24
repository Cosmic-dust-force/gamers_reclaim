import { useState, useContext, useCallback, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext.jsx";
import * as cartItemsController from "../axios-services/cartItems";

function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsError, setcartItemsError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { user } = useContext(UserContext);

  const downloadUserCart = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await cartItemsController.getInCartForUser(
        user?.token,
        user?.user.id
      );
      setCartItems(data);
    } catch (error) {
      setcartItemsError(error);
    }

    setIsLoading(false);
  }, [setIsLoading, user]);

  const addItemToCart = useCallback(
    async (cartItem) => {
      if (user) {
        try {
          await cartItemsController.addItemToCart(user.token, cartItem);
          downloadUserCart();
        } catch (error) {
          setcartItemsError(error);
        }
      } else {
        //Just make change to local cached cart
      }
    },
    [user, downloadUserCart]
  );

  useEffect(() => {
    downloadUserCart();
  }, [downloadUserCart]);

  return { cartItems, addItemToCart, cartItemsError };
}

export default useCart;
