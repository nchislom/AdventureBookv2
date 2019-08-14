import React, { Component } from 'react';
import "./style.css";

class AdminRefreshButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <button
      id="admin-refresh" 
      className="pure-button pure-button-success"
      onClick={ console.log("Refresh!") }>
        Refresh Console
    </button>
  )};
};

export default AdminRefreshButton;