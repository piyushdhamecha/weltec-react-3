import { NavLink } from "react-router-dom";

const Navigation = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        display: "flex",
        gap: "10px",
      }}
    >
      <NavLink to="/home" style={style}>Home</NavLink>
      <NavLink to="/users" style={style}>Users</NavLink>
    </nav>
  );
};

export default Navigation