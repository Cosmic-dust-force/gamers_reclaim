import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";

export default function ProductsList( {products} ) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = products.filter((product) => {
    if (!selectedCategories.length) {
      return true;
    } else {
      return selectedCategories.includes(product.categoryName);
    }
  });

  const onSelectedCategoriesChanged = (categories) => {
    setSelectedCategories(categories);
  }

  return (
    <div className="flex justify-center mx-8 flex-wrap mt-2 pt-2 ">
      <CategoryFilter
        onSelectedCategoriesChangedHandler={onSelectedCategoriesChanged}
      />
      <main>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
