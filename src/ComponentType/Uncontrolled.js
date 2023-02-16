import { useEffect, useRef } from "react";
// import Input from "./Input";

const Uncontrolled = () => {
  console.log('Uncontrolled function called')
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  const handleSubmit = () => {
    // const input = document.getElementById('input')

    // alert(input.value)

    alert(inputRef.current.value);
  };

  return (
    <div>
      <label>First name: </label>
      <input id="input" ref={inputRef} />
      {/* <Input label="First name: " ref={inputRef} /> */}
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Uncontrolled;
