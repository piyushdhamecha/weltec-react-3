import { Component } from "react"

class EventHandlersClass extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1 })
    console.log('Increment clicked')
  }

  handleDecrementClick = () => {
    this.setState({ count: this.state.count - 1 })
    console.log('Decrement clicked')
  }


  render() {
    console.log(this)
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
      </div>
    )
  }
}

export default EventHandlersClass