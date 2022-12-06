import { useEffect, useState } from "react";

export default function ProductSearchBar({
  products,
  setProductsFilteredBySearch,
}) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const checkProductContent = (product) => {
      const fieldsToCheck = (
        product.productName +
        product.description +
        product.brand
      ).toLowerCase();
      return fieldsToCheck.includes(searchValue.toLowerCase());
    };

    const productsSearchValueChangeHandler = () => {
      if (products.length) {
        const productsFilteredBySearch = products.filter((product) =>
          checkProductContent(product)
        );
        setProductsFilteredBySearch(productsFilteredBySearch);
      }
    };

    productsSearchValueChangeHandler();
  }, [searchValue, products, setProductsFilteredBySearch]);

  return (
    <>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mb-2"
        placeholder={"Search products"}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </>
  );
}
