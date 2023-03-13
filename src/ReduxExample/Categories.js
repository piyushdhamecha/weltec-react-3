import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>
      <List dense={true}>
        <ListItem>
          <ListItemText primary={<Link to="/mobiles">Mobiles</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link to="/headphones">Headphones</Link>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<Link to="/electronics">Electronics</Link>} />
        </ListItem>
      </List>
    </div>
  );
};

export default Categories;
