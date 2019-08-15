import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Register"
import Login from "./components/Login"
import AdminDiv from "./components/AdminDiv";
import Story from "./components/Story"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/" component = { Story } />
          <Route exact path ="/story" component = { Story } />
          <Route path = "/login" component = { Login } />
          <Route path = "/register" component = { Register } />
          <Route path = "/admin" component= { AdminDiv } />
        </Switch>
      </div>
    );
  }
}

export default App;
