import useProducts from "../../hooks/useProducts";
import Product from "./Product";

export default function ProductsList() {
    const { products, productsError } = useProducts();
    
    
    return (
      <div className="flex flex-wrap justify-center mx-8 mt-2 pt-2 ">
        
        {
            products.map(product => <Product product = {product}/>)
        }

      </div>
    );
  }