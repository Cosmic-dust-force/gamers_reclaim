import Order from "./Order";

export default function UserDetails() {
  const user = {};
  const orders = [];
  return (
    <main>
      <h1>{`User ${user.name}'s Profile`}</h1>
      <h3>{`Email: ${user.email}`}</h3>
      <h3>{`Role: ${user.userRole}`}</h3>
      <h3>Orders</h3>
      {orders.map((order) => {
        return <Order order={order} />;
      })}
    </main>
  );
}
