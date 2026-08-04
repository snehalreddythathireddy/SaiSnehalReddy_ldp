import React, { Component } from "react";

interface StateData {
  name: string;
}

class ClassForm extends Component<object, StateData> {
  state: StateData = {
    name: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>Class Component</h3>

        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}

export default ClassForm;