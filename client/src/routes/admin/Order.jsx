import OrderItem from "./OrderItem";

export default function Order({ customer, order }) {
  const date = new Date(order.orderDate);
  const { items } = order;

  const getSubtotal = () => {
    let subtotal = 0;
    items.forEach((item) => {
      subtotal +=
        Number(item.priceUsd.replace(/[^0-9.-]+/g, "")) * Number(item.quantity);
    });
    subtotal = subtotal.toFixed(2);
    return subtotal;
  };

  const subtotal = getSubtotal();

  return (
    <div className="bg-white m-3 p-4 rounded-md max-w-md border-2 border-black">
      <h3 className="font-bold mb-3 text-2xl">{`Order #${order.id}`}</h3>
      <hr />
      <h5 className="font-semibold mt-2 mb-2 text-xl">{`Date order placed: ${date}`}</h5>
      <h5>Items:</h5>
      {items.map((item) => (
        <OrderItem item={item} key={item.id} />
      ))}
      <h5 className="mt-6">{`Subtotal: $${subtotal}`}</h5>
    </div>
  );
}
