import React from "react";

export class CounterNameClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }
  render() {
    return (
      <>
        <label>Name:</label>
        <input
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
          type="text"
        />
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((currentState) => {
              return { age: currentState.age + 1 };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((currentState) => {
              return { age: currentState.age + 1 };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old
      </>
    );
  }
}
