import { Link, useLocation } from "react-router-dom";
import useOrders from "../../hooks/useOrders";
import Order from "./Order";

export default function CustomerDetails() {
  const location = useLocation();
  const customer = location.state;

  const { orders } = useOrders();
  const customerOrders = orders.filter((order) => customer.id === order.userId);

  return (
    <main className="mb-6">
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
        <h3 className="my-4">No orders to display.</h3>
      )}
      <Link
        to="/admin/customers/"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Back to Customers
      </Link>
    </main>
  );
}
