import { useContext, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";
import { UserContext } from "../../context/UserContext";
import LinkButton from "../../components/LinkButton";
import CreateProductForm from "../admin/CreateProductForm";

export default function ProductsList({ products }) {
  const { user } = useContext(UserContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const filteredProducts = products.filter((product) => {
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
    setIsAddingProduct(!isAddingProduct);
  };

  return (
    <div className="flex justify-center mx-8 flex-wrap mt-2 pt-2 ">
      {user && user.user.userRole === "admin" ? (
        <LinkButton
          value={isAddingProduct ? "Cancel" : "Add Product"}
          clickHandler={handleAddProductClick}
        />
      ) : null}
      {isAddingProduct && (
        <CreateProductForm
          token={user.token}
          setIsAddingProduct={setIsAddingProduct}
        />
      )}
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
