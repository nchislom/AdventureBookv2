import React, { Component } from 'react';
import API from "../../utils/API";
import "./style.css";
import cytoscape from "cytoscape";

class AdminStoryGraph extends Component {

  state = {};

  componentWillMount = () => {
    // Store storyObj in state
    API.getStoryObj().then(res => {
      this.setState({ res });
    }).catch(err => console.log(err));
  };
  
  render() {
    var cy = cytoscape({ elements: [
      { data: { id: 'a' }},
      { data: { id: 'b' }},
      { data: { id: 'ab', source: 'a', target: 'b' }}] });
  return (
    <div id={ this.props.id } />
  )};
};

export default AdminStoryGraph;