import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SectionContainer from "./components/SectionContainer";
import axios from "axios";

var storyData = {};

class App extends Component {
  
  constructor(props) {
    super();
    this.state = {
        show : '1',
    };
  }
  
  // This componentDidMount is stricty for testing components
  componentDidMount() {
    axios.get(`http://localhost:3000/api/story/1`)
      .then(res => {
        storyData = res.data;
        this.setState({ storyData });
        // console.log(storyData);
        // console.log(res.data);
      });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SectionContainer data={storyData}></SectionContainer>
      </div>
    );
  }
}

export default App;
