import React, { Component } from 'react';
import API from "../../utils/API";
import "./style.css";

class AdminStatsTable extends Component {

  state = {
    storySize: 0,
    registeredUsers: 0,
    globalWins: 0,
    storyCollectionSize: 0,
    userCollectionSize: 0
  };

  componentWillMount = () => {
    // Store dbStat object in state
    API.getStats().then(res => {
      this.setState({
      storySize: res.data.storySize,
      registeredUsers: res.data.registeredUsers,
      globalWins: res.data.globalWins,
      storyCollectionSize: res.data.storyCollectionSize,
      userCollectionSize: res.data.userCollectionSize });
    }).catch(err => console.log(err));
    
    // Store storyObj in state
    API.getStoryObj().then(res => {
      this.setState({ storyObj: res });
    }).catch(err => console.log(err));
  };
  
  render() {
  return (
    <table className="pure-table pure-table-bordered">
      <tbody>
        <tr className="pure-table-odd">
          <td>Current Story</td>
          <td>Adventure Book v2</td>
        </tr>
        <tr>
          <td>Story Length</td>
          <td>{ this.state.storySize }</td>
        </tr>
        <tr className="pure-table-odd">
          <td>Registerd Users</td>
          <td>{ this.state.registeredUsers }</td>
        </tr>
        <tr>
          <td>Global Wins</td>
          <td>{ this.state.globalWins }</td>
        </tr>
        <tr className="pure-table-odd">
          <td>Game Storage</td>
          <td>{ this.state.storyCollectionSize }</td>
        </tr>
        <tr>
          <td>User Storage</td>
          <td>{ this.state.userCollectionSize }</td>
        </tr>
      </tbody>
    </table>
  )};
};

export default AdminStatsTable;