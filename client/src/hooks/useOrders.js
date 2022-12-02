import { useState, useContext, useCallback, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext.jsx";
import * as ordersController from "../axios-services/orders";

function useOrders() {
  const [orders, setOrders] = useState([]);
  const [ordersError, setOrdersError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { user } = useContext(UserContext);

  const downloadOrders = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await ordersController.getAll(user?.token);
      setOrders(data);
    } catch (error) {
      setOrdersError(error.message);
    }
    setIsLoading(false);
  }, [setIsLoading, user]);

  useEffect(() => {
    downloadOrders();
  }, [downloadOrders]);

  return { orders, ordersError };
}

export default useOrders;
