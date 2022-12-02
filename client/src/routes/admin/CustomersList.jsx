import { useNavigate } from "react-router-dom";
import useCustomers from "../../hooks/useCustomers";

export default function CustomersList() {
  const navigate = useNavigate();

  const { customers } = useCustomers();

  return (
    <main>
      <h1 className="font-bebas font-semibold text-2xl uppercase tracking-wide mb-3">
        Customers
      </h1>
      <p className="my-2">
        Click a row to view customer information and orders.
      </p>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Role</th>
          </tr>
          {customers.map((customer) => {
            return (
              <tr
                key={customer.id}
                onClick={() => {
                  navigate(`/admin/customers/${customer.id}`, {
                    state: customer,
                  });
                }}
              >
                <td className="p-2 border-2 border-black">{customer.id}</td>
                <td className="p-2 border-2 border-black">{customer.name}</td>
                <td className="p-2 border-2 border-black">{customer.email}</td>
                <td className="p-2 border-2 border-black">
                  {customer.address}
                </td>
                <td className="p-2 border-2 border-black">
                  {customer.phoneNumber}
                </td>
                <td className="p-2 border-2 border-black">
                  {customer.userRole}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
