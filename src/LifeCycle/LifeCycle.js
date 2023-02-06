import { useState } from 'react'

const LifeCycle = () => {
  // const countState = useState(50)
  // const count = countState[0]
  // const setCount = countState[1]

  const [count, setCount] = useState(50)

  console.log({count, setCount})
  
  const handleIncrementClick = () => {
    console.log('Increment clicked')
    setCount(count + 1)
  }

  const handleDecrementClick = () => {
    console.log('Decrement clicked')
    setCount(count - 1)
  }

  return (
    <div>
      <h3>Functional component</h3>
      <div>{count}</div>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
    </div>
  );
};

export default LifeCycle;
