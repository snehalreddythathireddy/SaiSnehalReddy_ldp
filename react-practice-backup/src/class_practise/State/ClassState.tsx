import React, { Component } from "react";

interface StateData {
  count: number;
}

class ClassState extends Component<object, StateData> {
  state: StateData = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Class Component</h3>

        <p>Count: {this.state.count}</p>

        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassState;