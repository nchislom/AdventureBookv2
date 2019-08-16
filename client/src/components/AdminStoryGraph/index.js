import React, { Component } from 'react';
import API from "../../utils/API";
import storyGraph from "./storyGraph";
import "./style.css";
import cytoscape from "cytoscape";

class AdminStoryGraph extends Component {

  state = {};

  componentWillMount = () => {
    // Store storyObj in state
    API.getStoryObj().then(res => {
      this.setState({ res });
      storyGraph(res.data);
    }).catch(err => console.log(err));
  };
  
  render() {
  return (
    <div id={ this.props.id } />
  )};
};

export default AdminStoryGraph;