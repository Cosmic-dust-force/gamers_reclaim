import useProducts from "../../hooks/useProducts";
import ProductsList from "../products/ProductsList";

export default function Products() {
  const { products } = useProducts();


    return (
      <div>
      <h1 className="text-center font-semibold text-5xl uppercase tracking-wide mt-6">
          PRODUCTS
      </h1>
      <div className="font-bebas text-center font-semibold text-3xl uppercase tracking-wide m-3"></div>
      <ProductsList products={products} />
  </div>
)
}
