import { useParams } from "react-router-dom";
import userData from "./userData";

const User = ({ onRemoveUser }) => {
  const { userId } = useParams();

  const user = userData.find((user) => user.id === userId)

  return (
    <>
      <h2>User: {userId}</h2>
      <p>{user.fullName}</p>
      {/* <Link to="/users">Back to Users</Link> */}
      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>
    </>
  );
};

export default User;
