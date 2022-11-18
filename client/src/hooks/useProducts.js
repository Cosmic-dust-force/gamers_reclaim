import { useState, useContext, useCallback, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import * as productsController from "../axios-services/products";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState("");
  const { setIsLoading } = useContext(StateContext);

  const downloadProducts = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await productsController.getAll();
      setProducts(data);
    } catch (error) {
      setProductsError(error.message);
    }
    setIsLoading(false);
  }, [setIsLoading, setProducts]);

  useEffect(() => {
    downloadProducts();
  }, [downloadProducts]);

  return { products, productsError };
}

export default useProducts;
