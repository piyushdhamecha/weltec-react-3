import { List, ListItem, ListItemText } from "@mui/material";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import SamsungMobiles from "./SamsungMobiles";

const Mobiles = () => {
  return (
    <div>
      <h2>Mobiles</h2>
      <List dense={true}>
        <ListItem>
          <ListItemText primary={<Link to="samsung">Samsung</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link to="apple">Apple</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link to="vivo">Vivo</Link>} />
        </ListItem>
      </List>
      {/* <Outlet /> */}
      <Routes>
        <Route path="samsung" element={<SamsungMobiles />} />
      </Routes>
    </div>
  );
};

export default Mobiles
