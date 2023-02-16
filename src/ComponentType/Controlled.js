// import { Alert } from "@mui/material";
import { useState } from "react";

const Controlled = () => {
  const [inputValue, setInputValue] = useState('')

  // const hasError = input !== input.toUpperCase()

  // console.log({ hasError })
console.log({ inputValue })
  return (
    <div>
      <label>First name: </label>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value.toUpperCase())} />
      {/* {hasError ? <Alert severity="error">This is an error alert — check it out!</Alert> : null} */}
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Controlled;
