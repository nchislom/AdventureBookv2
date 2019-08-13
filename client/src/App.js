import React, { Component } from "react";
import Register from "./components/Register";
import AdminDiv from "./components/AdminDiv";

console.log("Will this be on the client side?");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
        <AdminDiv />
      </div>
    );
  }
}

export default App;
