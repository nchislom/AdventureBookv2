import React, { Component } from 'react';
import API from "../../utils/API";
import "./style.css";

class AdminSeedButton extends Component {

  constructor(props) {
    super(props);
    this.callSeed = this.callSeed.bind(this);
  }

  callSeed() {
    API.seedDb().then(res => { console.log(res.data)}).catch(err => console.log(err));
  }

  render() {
  return (
    <button
      id="admin-seed" 
      className="pure-button button-warning"
      onClick={ this.callSeed }>
        Re-Seed Default Game Database
    </button>
  )};
};

export default AdminSeedButton;