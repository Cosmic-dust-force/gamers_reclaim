import { useLocation, Link } from "react-router-dom";
    

export default function ProductDetails() {
    const location = useLocation()
    const { product } = location.state

    return (
        <div className="flex p-2 m-2 flex-col md:flex-row">
            <img className="" src={product.imageUrl} alt={product.productName}/>
                <div className="">
                    <h3 className="font-semibold mt-2 mb-2 text-2xl">{product.productName}</h3>
                    <h4 className="font-medium mt-2 mb-5 text-l">{product.brand}</h4>
                    <h4 className="">{product.description}</h4>
                    <h3 className="font-semibold mt-8 mb-1 text-2xl">{product.priceUsd}</h3>
                    {/* <Link to={} >Add To Cart</Link> */}
                </div>
        </div>
    );
}
