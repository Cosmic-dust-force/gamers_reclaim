import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";

export default function ProductsList() {
  const { products, productsError } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState({});

  const filteredProducts = products.filter((product) => {
    if (!Object.keys(selectedCategories).length) {
      return true;
    } else {
      return selectedCategories[product.categoryName];
    }
  });

  return (
    <div className="flex justify-center mx-8 flex-wrap mt-2 pt-2 ">
      <CategoryFilter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <main>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
