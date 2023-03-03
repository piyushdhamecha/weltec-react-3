import { Link, Outlet } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>
                  <Link to={`/users/${user.id}`}>View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

export default Users;
