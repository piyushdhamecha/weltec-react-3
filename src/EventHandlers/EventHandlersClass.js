import { Component } from "react"

class EventHandlersClass extends Component {
  handleClick = () => {
    console.log('Button clicked')
  }

  render() {
    console.log(this)  
    return (
      <div>
        <button onClick={this.handleClick}>Submit</button>  
        <input />
      </div>
    )
  }
}

export default EventHandlersClass