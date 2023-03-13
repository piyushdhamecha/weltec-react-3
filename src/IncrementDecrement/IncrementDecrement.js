import { useReducer } from "react";

const reducer = (state, action) => {
  debugger;
  const value = action.data || 1

  switch (action.type) {
    case "INCREMENT":
      return state + value;

    case "DECREMENT":
      return state - value;

    default:
      break;
  }
};

const IncrementDecrement = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrementClick = () => {
    dispatch({ type: "INCREMENT" });
    // setCount(count + 1)
  };

  const handleDecrementClick = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleIncrementBy2Click = () => {
    dispatch({ type: "INCREMENT", data: 2 });
  };

  const handleIncrementBy5Click = () => {
    dispatch({ type: "INCREMENT", data: 50 });
  };

  return (
    <div>
      <h4>Increment decrement</h4>
      <div>
        <strong>{count}</strong>
      </div>
      <br />
      <div>
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy2Click}>Increment by 2</button>
        <button onClick={handleIncrementBy5Click}>Increment by 5</button>
      </div>
    </div>
  );
};

export default IncrementDecrement;
