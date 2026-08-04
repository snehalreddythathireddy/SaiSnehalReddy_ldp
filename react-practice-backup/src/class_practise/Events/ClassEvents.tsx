import React, { Component } from "react";

interface StateData {
  message: string;
}

class ClassEvents extends Component<object, StateData> {
  state: StateData = {
    message: "Click the button",
  };

  handleClick = () => {
    this.setState({
      message: "Button Clicked!",
    });
  };

  render() {
    return (
      <div>
        <h3>Class Component</h3>

        <p>{this.state.message}</p>

        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassEvents;