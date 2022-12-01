import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

// import useProducts from "../../hooks/useProducts";

export default function Product({ product }) {
  // const { products, productsError } = useProducts();
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white m-3 p-4 rounded-md max-w-md">
      <img className="" src={product.imageUrl} alt={product.productName} />
      <h3 className="font-semibold mt-2 mb-2 text-xl">{product.productName}</h3>
      <h4>
        {product.inventoryQuantity
          ? `In Stock - ${product.inventoryQuantity} available`
          : "Out of Stock"}
      </h4>
      <h3 className="font-bold mb-3 text-2xl">{product.priceUsd}</h3>
      {user && user.user.userRole === "admin" ? (
        <Link to={`products/${product.id}/admin`} state={{ product }}>
          View Product
        </Link>
      ) : (
        <Link to={`products/${product.id}`} state={{ product }}>
          View Product
        </Link>
      )}
    </div>
  );
}
