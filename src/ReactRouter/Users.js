import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = ({ users }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const searchTerm = searchParams.get('name') || ''
  // const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const name = e.target.value;

    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  }

  return (
    <>
      <h2>Users</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
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
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>
                  <Link to={user.id}>View</Link>
                  {/* Absolute: /user/1 */}
                  {/* Absolute: /membership/1 */}
                  {/* Relative: 1 */}
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
