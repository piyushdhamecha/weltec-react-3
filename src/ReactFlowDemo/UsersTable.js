import { TableStyled } from "./ReactFlowDemo.styled";

const UsersTable = ({ users }) => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <th width="25%">First name</th>
          <th width="25%">Last name</th>
          <th width="25%">Username</th>
          <th width="25%">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default UsersTable;
