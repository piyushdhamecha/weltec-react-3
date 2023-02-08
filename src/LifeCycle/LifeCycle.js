import { useState, useEffect } from "react";

const LifeCycle = () => {
  // const countState = useState(50)
  // const count = countState[0]
  // const setCount = countState[1]

  // 1. variable initialized => useState, useEffect
  // 2. return content will be displayed
  // 3. Will check dep and run callback all the useEffect

  console.log("Variable initialized");

  const [count, setCount] = useState(50);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect with no dependencies called");
  });

  // it will be like 
  // 1st time render { prevDep: undefined: currentDep: []}
  // prevDep !== currentDep 
  //        then will call the callback function
  //        prevDep = currentDep
  //
  // 2st time render { prevDep: []: currentDep: []}
  // prevDep === currentDep 
  useEffect(() => {
    console.log("useEffect with Empty array dependency called");
  }, []);

  useEffect(() => {
    console.log("useEffect with dependencies called");
  }, [count, isLoading])

  const handleIncrementClick = () => {
    console.log("Increment clicked");
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    console.log("Decrement clicked");
    setCount(count - 1);
  };

  const handleToggleLoading = () => {
    setIsLoading(!isLoading)
  }

  console.log("Return called");
  return (
    <div>
      <h3>Functional component</h3>
      <div>{count}</div>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleToggleLoading}>Toggle loading</button>
    </div>
  );
};

export default LifeCycle;
