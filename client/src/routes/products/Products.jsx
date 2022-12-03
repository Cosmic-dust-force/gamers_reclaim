import useProducts from "../../hooks/useProducts";
import ProductsList from "../products/ProductsList";

export default function Products() {
  const { products } = useProducts();

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}
