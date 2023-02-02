const EventHandlers = () => {
  const handleSubmitClick = () => {
    console.log('Submit button clicked')
  }

  const handleSubmitFocus = () => {
    console.log('Submit button focused')
  }

  const handleInputFocus = () => {
    console.log('Input focused')
  }

  return (
    <div>
      {/* Html */}
      {/* <button onclick="handleSubmitClick()">Submit</button> */}
      {/* React */}
      <button onClick={handleSubmitClick} onFocus={handleSubmitFocus}>Submit</button>
      <input onFocus={handleInputFocus} />
    </div>
  )
}

export default EventHandlers