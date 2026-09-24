import React, { Component } from "react";

interface StateData {
  isLoggedIn: boolean;
}

class ClassConditional extends Component<object, StateData> {
  state: StateData = {
    isLoggedIn: false,
  };

  toggleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    return (
      <div>
        <h3>Class Component</h3>

        <h4>
          {this.state.isLoggedIn
            ? "Welcome, Snehal!"
            : "Please Login"}
        </h4>

        <button onClick={this.toggleLogin}>
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}

export default ClassConditional;