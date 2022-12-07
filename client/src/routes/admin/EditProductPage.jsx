import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../axios-services/products";
import LinkButton from "../../components/LinkButton";
import { UserContext } from "../../context/UserContext";
import EditProductForm from "./EditProductForm";

export default function EditProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;
  const { user } = useContext(UserContext);
  const { token } = user;

  const [isEditingProduct, setIsEditingProduct] = useState(false);

  if (user.user.userRole !== "admin") {
    navigate("/");
  }

  const handleDeleteProductClick = () => {
    deleteProduct(token, product.id);
    navigate("/");
  };

  const handleEditProductClick = () => {
    setIsEditingProduct(!isEditingProduct);
  };

  return (
    <div className="flex flex-col">
      {isEditingProduct ? (
        <EditProductForm product={product} token={token} />
      ) : (
        <div className="flex p-2 m-2 flex-col md:flex-row">
          <img src={product.imageUrl} alt={product.productName} />
          <div className="p-4">
            <h3 className="font-semibold mt-2 mb-2 text-2xl">
              {product.productName}
            </h3>
            <h4 className="font-medium mt-2 mb-5 text-l">{product.brand}</h4>
            <h4>
              {product.inventoryQuantity
                ? `In Stock - ${product.inventoryQuantity} available`
                : "Out of Stock"}
            </h4>
            <h4>{product.description}</h4>
            <h3 className="font-semibold mt-8 mb-6 text-2xl">
              {product.priceUsd}
            </h3>
            <div className="pb-2">
            <LinkButton
              value={"Delete Product"}
              clickHandler={handleDeleteProductClick}
            />
            </div>
            <div>
              <LinkButton
                value={isEditingProduct ? "Cancel" : "Edit Product"}
                clickHandler={handleEditProductClick}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
