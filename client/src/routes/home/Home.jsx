import useProducts from "../../hooks/useProducts";
import ProductsList from "./ProductsList";

export default function Home() {
  const { products } = useProducts();

  return (
    <div className="flex flex-col content-center">
      <h1 className="text-center font-semibold text-3xl uppercase tracking-wide">Products</h1>
      <ProductsList products={products}/>
    </div>
  );
}
