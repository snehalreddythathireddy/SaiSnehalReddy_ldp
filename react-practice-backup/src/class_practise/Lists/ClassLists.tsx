import React, { Component } from "react";

class ClassLists extends Component {
  fruits = ["Apple", "Banana", "Orange", "Mango"];

  render() {
    return (
      <div>
        <h3>Class Component</h3>

        <ul>
          {this.fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassLists;