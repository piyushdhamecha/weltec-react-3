import { NavLink } from "react-router-dom";

const Navigation = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'green' : 'blue'
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
      <NavLink to="/about" style={style}>About</NavLink>
    </nav>
  );
};

export default Navigation