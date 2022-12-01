import { useState, useContext, useCallback, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import { UserContext } from "../context/UserContext";
import * as usersController from "../axios-services/users";

function useUsers() {
  const [usersError, setUsersError] = useState("");
  const { setIsLoading } = useContext(StateContext);
  const { setUser } = useContext(UserContext);

  const login = useCallback(
    async (email, password) => {
      setIsLoading(true);

      try {
        const data = await usersController.login(email, password);
        setUser(data);
      } catch (error) {
        setUsersError(error.message);
      }
      setIsLoading(false);
    },
    [setIsLoading, setUser]
  );

  const register = useCallback(
    async (user) => {
      setIsLoading(true);

      try {
        const data = await usersController.register(user);
        setUser(data);
      } catch (error) {
        setUsersError(error.message);
      }
      setIsLoading(false);
    },
    [setIsLoading, setUser]
  );

  return { login, register, usersError };
}

export default useUsers;
