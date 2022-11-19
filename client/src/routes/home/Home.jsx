import useProducts from "../../hooks/useProducts";
import ProductsList from "./ProductsList";

export default function Home() {
  const { products, productsError } = useProducts();

  return (
    <div>
      <h1 className="">Products</h1>
      <ProductsList />
    </div>
  );
}
