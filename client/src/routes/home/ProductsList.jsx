import useProducts from "../../hooks/useProducts";
import Product from "./Product";

export default function ProductsList() {
    const { products, productsError } = useProducts();
    
    
    return (
      <div className="flex flex-wrap p-6 m-8">
        
        {
            products.map(product => <Product product = {product}/>)
        }

      </div>
    );
  }