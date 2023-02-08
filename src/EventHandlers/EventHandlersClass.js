import { Component } from "react"

// This is for dummy commit
class EventHandlersClass extends Component {
  constructor() {
    console.log('Constructor called')
    super()

    this.state = {
      count: 0,
      isLoading: false,
      country: "",
      time: new Date(),
      timerInstance: null
    }
  }

  componentDidMount() {
    console.log('ComponentDidMount called')
    // const timerInstance = setInterval(() => {
    //   this.setState({ time: new Date()})
    // }, 2000);

    // this.setState({ timerInstance })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate called')

    // console.log({ prevState, currentState: this.state })

    if(prevState.country !== this.state.country) {
      console.log('Do some dropdown actions')
    }

    if(prevState.state !== this.state.current) {
      console.log('Do some dropdown actions')
    }
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount Called')
    
    // clearInterval(this.state.timerInstance)
  }

  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1 })
    // this.state.count = this.state.count + 1
    debugger
    console.log('Increment clicked')
  }

  handleDecrementClick = () => {
    this.setState({ count: this.state.count - 1 })
    console.log('Decrement clicked')
  }

  handleDropdownChange = (e) => {
    this.setState({ country: e.target.value })
  }

  render() {
    console.log('Render called')
    return (
      <div>
        {/* <div>{this.state.time.toTimeString().split(' ')[0]}</div> */}
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
        {/* <select onChange={this.handleDropdownChange}>
          <option value=""></option>
          <option value="India">India</option>
          <option value="UK">UK</option>
        </select> */}
      </div>
    )
  }
}

export default EventHandlersClass