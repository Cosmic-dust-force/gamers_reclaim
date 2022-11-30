import useProducts from "../../hooks/useProducts";
import ProductsList from "../products/ProductsList";



export default function Products() {
    const { products } = useProducts();


    return (
        <div>
        <h1 className="font-bebas text-center font-semibold text-3xl uppercase tracking-wide m-3">Featured Products</h1>
        <ProductsList products={products}/>
        </div>
    )
}