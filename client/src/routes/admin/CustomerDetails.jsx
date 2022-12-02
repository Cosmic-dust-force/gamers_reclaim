import { useLocation } from "react-router-dom";
import Order from "./Order";

export default function CustomerDetails() {
  const orders = [];
  const location = useLocation();

  const customer = location.state;

  return (
    <main>
      <h1>{`Customer ${customer.name}'s Profile`}</h1>
      <h3>{`Email: ${customer.email}`}</h3>
      <h3>{`Address: ${customer.address}`}</h3>
      <h3>{`Phone Number: ${customer.phoneNumber}`}</h3>
      <h3>{`Role: ${customer.userRole}`}</h3>
      <h3>Orders</h3>
      {orders.map((order) => {
        return <Order order={order} />;
      })}
    </main>
  );
}
