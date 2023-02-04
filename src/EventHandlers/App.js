// import EventHandlers from "./EventHanlders"
import { Component } from "react";
import EventHandlersClass from "./EventHandlersClass";

// const App = () => {

//   return (
//     <div>
//       <EventHandlersClass />
//     </div>
//   );
// };

class App extends Component{
  constructor() {
    super()

    this.state = {
      showComponent: false
    }
  }

  handleToggleComponent = () => {
    this.setState({ showComponent: !this.state.showComponent})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleComponent}>{this.state.showComponent ? 'Hide': 'Show'}</button>
        {this.state.showComponent && <EventHandlersClass />}
      </div>  
    )
  }
}


export default App;
