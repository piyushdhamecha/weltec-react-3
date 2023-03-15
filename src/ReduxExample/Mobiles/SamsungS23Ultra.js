import { Button } from "@mui/material";
import store from '../../store'

const SamsungS23Ultra = () => {

  return (
    <div>
      <h3>S23 Ultra</h3>
      <Button variant="contained" onClick={() => store.dispatch({ type: 'ADD_TO_CART'})}>
        Add to cart
      </Button>
    </div>
  );
};

export default SamsungS23Ultra;
