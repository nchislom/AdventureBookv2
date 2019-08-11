import api from "./utils/API";
import React, { Component } from "react";
import Register from "./components/Register";
import AdminDiv from "./components/AdminDiv";

api.getStats();
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
