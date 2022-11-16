import { createContext, useState } from "react";

export const StateContext = createContext({
  isLoading: false,
  setIsLoading: () => null,
});

export const StateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const value = { isLoading, setIsLoading };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
