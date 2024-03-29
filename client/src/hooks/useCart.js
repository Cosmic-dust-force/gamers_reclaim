import { useState, useContext, useCallback, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext.jsx";
import { CartContext } from "../context/CartContext";
import * as cartItemsController from "../axios-services/cartItems";
import * as ordersController from "../axios-services/orders";
import * as cartEditor from "../model/cartEditor";

function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState(null);

  const [cartItemsError, setCartItemsError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { user } = useContext(UserContext);
  const { cartItems: cachedCartItems, setCartItems: setCachedCartItems } =
    useContext(CartContext);

  const downloadUserCart = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await cartItemsController.getInCartForUser(
        user?.token,
        user?.user.id
      );
      setCartItems(data);
    } catch (error) {
      setCartItemsError(error);
    }

    setIsLoading(false);
  }, [setIsLoading, user]);

  const synchronizeUserCart = useCallback(async () => {
    setIsLoading(true);

    try {
      const cachedCartItemsWithUserId = cachedCartItems.map((cachedItem) => {
        cachedItem.userId = user.user.id;
        return cachedItem;
      });

      const data = await cartItemsController.synchronizeCart(
        user?.token,
        cachedCartItemsWithUserId
      );

      setCachedCartItems(null);
      setCartItems(data);
    } catch (error) {
      setCartItemsError(error);
    }

    setIsLoading(false);
  }, [setIsLoading, user, cachedCartItems, setCachedCartItems]);

  const refreshCart = useCallback(async () => {
    if (user) {
      if (cachedCartItems) {
        synchronizeUserCart();
      } else {
        downloadUserCart();
      }
    } else {
      if (cachedCartItems) {
        setCartItems([...cachedCartItems]);
      }
    }
  }, [user, cachedCartItems, downloadUserCart, synchronizeUserCart]);

  const addItemToCart = useCallback(
    async (cartItem) => {
      if (user) {
        try {
          await cartItemsController.addItemToCart(user.token, cartItem);
        } catch (error) {
          setCartItemsError(error);
          return;
        }
      } else {
        const updatedItems = cartEditor.addItemToCart(cartItems, cartItem);
        setCachedCartItems(updatedItems);
      }

      refreshCart();
    },
    [user, cartItems, setCachedCartItems, refreshCart]
  );

  const updateItemQuantity = useCallback(
    async (id, productId, quantity) => {
      if (user) {
        try {
          await cartItemsController.updateItemQuantity(
            user.token,
            id,
            productId,
            quantity
          );
        } catch (error) {
          setCartItemsError(error);
          return;
        }
      } else {
        cartEditor.updateItemQuantityInPlace(
          cachedCartItems,
          productId,
          quantity
        );

        setCachedCartItems(cachedCartItems);
      }
    },
    [user, cachedCartItems, setCachedCartItems]
  );

  const removeItemFromCart = useCallback(
    async (id, productId) => {
      if (user) {
        try {
          await cartItemsController.deleteCartItem(user.token, id);
        } catch (error) {
          setCartItemsError(error);
          return;
        }
      } else {
        const updatedItems = cartEditor.removeItemFromCart(
          cartItems,
          productId
        );
        setCachedCartItems(updatedItems);
      }
      refreshCart();
    },
    [user, cartItems, setCachedCartItems, refreshCart]
  );

  const checkout = useCallback(async () => {
    if (user) {
      try {
        const orderStub = await ordersController.createOrder(user.token);
        await refreshCart();
        setOrder(orderStub);
      } catch (error) {
        setCartItemsError(error);
      }
    } else {
      //send up cached cart items etc..
    }
  }, [user, refreshCart]);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  return {
    cartItems,
    order,
    addItemToCart,
    updateItemQuantity,
    removeItemFromCart,
    checkout,
    cartItemsError,
  };
}

export default useCart;
