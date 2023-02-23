import { useRef } from "react";

const BasicForm = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(event);

    // const firstName = event.target[0].value;
    // const lastName = event.target[1].value;

    // const firstName = document.getElementById("firstName").value;
    // const lastName = document.getElementById("lastName").value;

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;

    // const firstName = firstNameRef.current.value;
    // const lastName = lastNameRef.current.value;

    alert(`Hi, welcome ${firstName} ${lastName}`);
  };

  return (
    <div>
      <h3>Basic form</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>First name : </label>
          <input id="firstName" name="firstName" ref={firstNameRef} />
        </div>
        <div>
          <label>Last name : </label>
          <input id="lastName" name="lastName" ref={lastNameRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
