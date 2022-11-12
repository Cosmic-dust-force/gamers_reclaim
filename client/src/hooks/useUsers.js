import { useState, useContext, useCallback } from "react";
import { StateContext } from "../context/StateContext";
import * as usersController from "../axios-services/users";

function useUsers() {
  const [usersError, setUsersError] = useState('');
  const { setIsLoading } = useContext(StateContext);

  const login = useCallback(async (email, password) => {
    console.log("qhay");
    setIsLoading(true);

    try {
      const data = await usersController.login(email, password);
    } catch (error) {
      setUsersError(error.message);
    }
  }, [setIsLoading]);

  setIsLoading(false)
  return { login, usersError };
}

export default useUsers;