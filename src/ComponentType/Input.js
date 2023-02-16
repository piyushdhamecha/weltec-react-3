import React from 'react'

const Input = React.forwardRef(({ label }, ref) => {
  console.log({ label, ref })
  return (
    <React.Fragment>
      <label>{label}</label>
      <input id="input" ref={ref} />
    </React.Fragment>
  );
}) 

export default Input
