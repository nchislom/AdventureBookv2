import React, { Component } from "react";
import Register from "./components/Register"
import AdminDiv from "./components/AdminDiv";
import Story from "./components/Story"

console.log("Will this be on the client side?");

class App extends Component {
  render() {
    return (
      <div className="App">
      <Register />
      <Story />
      </div>
    );
  }
}

export default App;
