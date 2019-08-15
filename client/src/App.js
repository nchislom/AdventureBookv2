import React, { Component } from "react";
import Register from "./components/Register"
import Login from "./components/Login"
import AdminDiv from "./components/AdminDiv";
import Story from "./components/Story"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
        <Login />
        <Story />
      </div>
    );
  }
}

export default App;
