import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  componentDidMount() {
    fetch("/greeting")
      .then(res => res.json())
      .then(({ message }) => {
        this.setState({ message });
      });
  }

  render() {
    return <div className="App">{this.state.message}</div>;
  }
}

export default App;
