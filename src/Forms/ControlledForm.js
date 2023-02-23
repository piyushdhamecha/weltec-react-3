import { useState } from "react";
import { StyledError } from "./Forms.styled";

const ControlledForm = () => {
  const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState();

  const hasError = firstName !== firstName.toUpperCase();
  // PI !== PI
  // PIy !== PIY

  const handleFormSubmit = (event) => {
    event.preventDefault();

    alert(`Hi, welcome ${firstName}`);
  };
console.log(firstName)
  return (
    <div>
      <h3>Controlled form</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>First name : </label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value.toUpperCase())} />
        </div>
        {hasError && (
          <StyledError>First name should be in upper case only</StyledError>
        )}
        {/* <div>
          <label>Last name : </label>
          <input  onChange={(e) => setLastName(e.target.value)}  />
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
