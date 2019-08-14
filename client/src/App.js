import React, { Component } from "react";
import Register from "./components/Register"
import Story from "./components/Story"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Register />
      <Story 
        // <Options />
      />
      </div>
    );
  }
}

export default App;
