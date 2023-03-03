import { useParams } from "react-router-dom";
import userData from "./userData";

const User = () => {
  const { id } = useParams();
  console.log({ id });

  const user = userData.find((user) => user.id === id)

  console.log({user})
  return (
    <>
      <h2>User: {id}</h2>
      <p>{user.fullName}</p>
      {/* <Link to="/users">Back to Users</Link> */}
    </>
  );
};

export default User;
