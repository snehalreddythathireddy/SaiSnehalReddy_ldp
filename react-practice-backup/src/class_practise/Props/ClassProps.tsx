import React, { Component } from "react";

interface ClassPropsData {
  name: string;
  age: number;
}

class ClassProps extends Component<ClassPropsData> {
  render() {
    return (
      <div>
        <h3>Class Component</h3>

        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default ClassProps;