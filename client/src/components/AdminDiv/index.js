import React, { Component } from 'react';
import API from "../../utils/API";
import AdminHeader from "../AdminHeader";
import AdminStatsTable from "../AdminStatsTable";
import AdminStoryGraph from "../AdminStoryGraph";
import "./style.css";
import { stringify } from 'querystring';

var storySize, registeredUsers, globalWins, 
    storyCollectionSize, userCollectionSize = 0;
var storyObj = {};

class AdminDiv extends Component {
	// Setting the component's initial state
	state = {
    dbStats: {},
    storyObj: {}
	};
  
  componentDidMount = () => {
    // Store dbStat object in state
    API.getStats().then(res => {
      this.setState({ dbStats: res });
      storySize = res.data.storySize;
      registeredUsers = res.data.registeredUsers;
      globalWins = res.data.globalWins;
      storyCollectionSize = res.data.storyCollectionSize;
      userCollectionSize = res.data.userCollectionSize;
      console.log("After call: " + stringify(res.data.storySize));
    }).then(() => {
      this.setState();
    }).catch(err => console.log(err));
    
    // Store storyObj in state
    API.getStoryObj().then(res => {
      this.setState({ storyObj: res });
    }).catch(err => console.log(err));
  };
  
	render() {
	  return (
      <div>
        <AdminHeader>Game Master Console</AdminHeader>
        <AdminStatsTable
          storySize={ storySize }
          registeredUsers={ registeredUsers }
          globalWins={ globalWins }
          storyCollectionSize={ storyCollectionSize }
          userCollectionSize={ userCollectionSize }
          ></AdminStatsTable>
        <AdminStoryGraph id="cy" storyObj={ storyObj }></AdminStoryGraph>
      </div>
	  )};
}

export default AdminDiv;