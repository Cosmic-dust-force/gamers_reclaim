import { useContext, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";
import { UserContext } from "../../context/UserContext";
import LinkButton from "../../components/LinkButton";
import { useNavigate } from "react-router-dom";

export default function ProductsList({ products }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

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
  };

  const handleAddProductClick = () => {
    navigate("/products/create");
  };

  return (
    <div className="flex">
      <div className="bg-white">
        <CategoryFilter
          onSelectedCategoriesChangedHandler={onSelectedCategoriesChanged}
        />{" "}
      </div>
      <div className="flex justify-center mx-8 flex-wrap mt-2 pt-2 flex-col">
        {user && user.user.userRole === "admin" ? (
          <div className="grow">
            <LinkButton
              value={"Add Product"}
              clickHandler={handleAddProductClick}
            />
          </div>
        ) : null}

        <main className="bg-black rounded-md">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </main>
      </div>
    </div>
  );
}
