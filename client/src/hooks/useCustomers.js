import { useState, useContext, useCallback, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext.jsx";
import * as usersController from "../axios-services/users";

function useCustomers() {
  const [customers, setCustomers] = useState([]);
  const [customersError, setCustomersError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { user } = useContext(UserContext);

  const downloadCustomers = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await usersController.getCustomers(user?.token);
      setCustomers(data);
    } catch (error) {
      setCustomersError(error.message);
    }

    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    downloadCustomers();
  }, [downloadCustomers]);

  return { customers, customersError };
}

export default useCustomers;
