import { useLocation } from "react-router-dom";
import useOrders from "../../hooks/useOrders";
import Order from "./Order";

export default function CustomerDetails() {
  const location = useLocation();
  const customer = location.state;

  const { orders } = useOrders();
  const customerOrders = orders.filter((order) => customer.id === order.userId);

  return (
    <main>
      <h1 className="font-bebas font-semibold text-2xl uppercase tracking-wide mb-3">{`Customer ${customer.name}'s Profile`}</h1>
      <h3 className="my-3">{`Email: ${customer.email}`}</h3>
      <h3 className="my-3">{`Address: ${customer.address}`}</h3>
      <h3 className="my-3">{`Phone Number: ${customer.phoneNumber}`}</h3>
      <h3 className="my-3">{`Role: ${customer.userRole}`}</h3>
      <h3 className="font-bold text-xl">Orders:</h3>
      {customerOrders.map((order) => (
        <Order customer={customer} order={order} key={order.id} />
      ))}
      {!customerOrders.length && (
        <h3 className="my-3">No orders to display.</h3>
      )}
    </main>
  );
}
