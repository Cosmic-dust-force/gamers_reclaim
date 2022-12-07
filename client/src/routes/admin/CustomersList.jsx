import { useNavigate } from "react-router-dom";
import useCustomers from "../../hooks/useCustomers";

export default function CustomersList() {
  const navigate = useNavigate();

  const { customers } = useCustomers();

  return (
    <main>
      <h1 className="text-center font-semibold text-5xl uppercase tracking-wide mt-6 mb-8">
        Customers
      </h1>
      <p className="my-2 mb-8 text-center">
        Click a row to view customer information and orders.
      </p>
      <table className="w-full text-sm text-left text-gray-500">
        <tbody className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6">ID</th>
            <th scope="col" class="py-3 px-6">Name</th>
            <th scope="col" class="py-3 px-6">Email</th>
            <th scope="col" class="py-3 px-6">Address</th>
            <th scope="col" class="py-3 px-6">Phone Number</th>
            <th scope="col" class="py-3 px-6">Role</th>
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
                <td className="p-2 border-2 border-gray-800">{customer.id}</td>
                <td className="p-2 border-2 border-gray-800">{customer.name}</td>
                <td className="p-2 border-2 border-gray-800">{customer.email}</td>
                <td className="p-2 border-2 border-gray-800">
                  {customer.address}
                </td>
                <td className="p-2 border-2 border-gray-800">
                  {customer.phoneNumber}
                </td>
                <td className="p-2 border-2 border-gray-800">
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
