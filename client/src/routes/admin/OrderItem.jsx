import useProducts from "../../hooks/useProducts";

export default function OrderItem({ item }) {
  const { products } = useProducts();
  const orderItem = products.find((product) => product.id === item.productId);

  return (
    <div className="flex flex-col bg-white m-3 p-4 border border-black rounded">
      <div className="flex items-center">
        <img
          className="w-32"
          src={orderItem?.imageUrl}
          alt={orderItem?.productName}
        />
        <h3 className="font-semibold ml-6 text-sm w-48">
          {orderItem?.productName}
        </h3>
        <h3 className="ml-3">{`${item?.quantity}x`}</h3>
        <h3 className="ml-3">{orderItem?.priceUsd}</h3>
      </div>
    </div>
  );
}
