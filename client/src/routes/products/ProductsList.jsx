import { useContext, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";
import { UserContext } from "../../context/UserContext";
import LinkButton from "../../components/LinkButton";
import ProductSearchBar from "./ProductSearchBar";
import { useNavigate } from "react-router-dom";

export default function ProductsList({ products }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productsFilteredBySearch, setProductsFilteredBySearch] =
    useState(products);

  const filteredProducts = productsFilteredBySearch.filter((product) => {
    if (!selectedCategories.length) {
      return true;
    } else {
      return selectedCategories.includes(product.categoryName);
    }
  });

  const onSelectedCategoriesChanged = (categories) => {
    setSelectedCategories(categories);
  };

  const handleAddProductClick = () => {
    navigate("/products/create");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-white mt-16">
        <CategoryFilter
          onSelectedCategoriesChangedHandler={onSelectedCategoriesChanged}
        />{" "}
      </div>
      <div className="flex justify-center mx-8 flex-wrap mt-2 pt-2 flex-col">
        {user && user.user.userRole === "admin" ? (
          <div className="grow flex justify-end mb-4">
            <LinkButton
              value={"Add Product"}
              clickHandler={handleAddProductClick}
            />
          </div>
        ) : null}
        <ProductSearchBar
          products={products}
          setProductsFilteredBySearch={setProductsFilteredBySearch}
        />

        <main className="bg-black rounded-md">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          {!filteredProducts.length && (
            <h3 className="bg-white py-3">
              No products to display that match this criteria.
            </h3>
          )}
        </main>
      </div>
    </div>
  );
}
