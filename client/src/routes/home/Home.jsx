import useProducts from "../../hooks/useProducts";
import ProductsList from "./ProductsList";

export default function Home() {
  const { products } = useProducts();

  return (
    <div className="flex flex-col content-center">
      <h1 className="font-bebas text-center font-semibold text-5xl uppercase tracking-wide m-3">Gamer's Reclaim</h1>
      <p className="font-raj text-center font-semibold m-3">Making gaming more accessible in an affordable and eco-friendly way by gathering extra equipment and referbished. </p>
      <div className="max-w-lg mb-7 m-8">
        <img className="rounded-md"src={require('./home_page_image.jpg')} 
        alt="video game controller"></img>
       </div>
       <h1 className="font-bebas text-center font-semibold text-3xl uppercase tracking-wide m-3">Featured Products</h1>
      <ProductsList products={products}/>
    </div>
  );
}
