import { useState, useContext, useCallback, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import * as categoriesController from "../axios-services/categories";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [categoriesError, setCategoriesError] = useState("");
  const { setIsLoading } = useContext(StateContext);

  const downloadCategories = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await categoriesController.getAll();
      setCategories(data);
    } catch (error) {
      setCategoriesError(error.message);
    }

    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    downloadCategories();
  }, [downloadCategories]);

  return { categories, categoriesError };
}

export default useCategories;
