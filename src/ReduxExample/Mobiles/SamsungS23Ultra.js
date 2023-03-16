import { Button } from "@mui/material";
// import { connect } from "react-redux";

import { useDispatch } from 'react-redux'

const SamsungS23Ultra = ({ addToCart }) => {
  // store.dispatch
  const dispatch = useDispatch()

  return (
    <div>
      <h3>S23 Ultra</h3>
      <Button variant="contained" onClick={() => dispatch({ type: "ADD_TO_CART" })}>
        Add to cart
      </Button>
    </div>
  );
};

export default SamsungS23Ultra

// const mapDispatchToProp = (dispatch) => {
//   return {
//     addToCart: () => dispatch({ type: "ADD_TO_CART" }),
//   };
// };

// export default connect(null, mapDispatchToProp)(SamsungS23Ultra);
