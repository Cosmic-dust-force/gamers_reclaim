export default function UsersList() {
  const users = [];
  return (
    <main>
      <h1>Users</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Role</th>
        </tr>
        {users.map((user) => {
          return (
            <tr
              key={user.id}
              onClick={() => {
                console.log("quah");
              }}
            >
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>{user.address}</th>
              <th>{user.phoneNumber}</th>
              <th>{user.userRole}</th>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
