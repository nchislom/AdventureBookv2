import React, { Component } from 'react';
import API from "../../utils/API";
import AdminHeader from "../AdminHeader";
import AdminStatsTable from "../AdminStatsTable";
import AdminStoryGraph from "../AdminStoryGraph";
import "./style.css";

// API.getStats({
// }).then(res => this.getUsers())
//   .catch(err => console.log(err));

// const AdminDiv = (props) => {
//   return (
//     <div>
//       <AdminHeader>Admin Console</AdminHeader>
//       <AdminStatsTable></AdminStatsTable>
//       <AdminStoryGraph id="cy"></AdminStoryGraph>
//     </div>
//   );
// };

class AdminDiv extends Component {
	// Setting the component's initial state
	state = {
    dbStats: {},
    storyObj: {}
	};
  
  componentWillMount = () => {
    API.getStats().then(res => {
      this.setState({ dbStats: res });
    }).catch(err => console.log(err));
  };
  
	render() {
	  return (
      <div>
      <AdminHeader>Game Master Console</AdminHeader>
      <AdminStatsTable></AdminStatsTable>
      <AdminStoryGraph id="cy"></AdminStoryGraph>
    </div>
	  )};
}

export default AdminDiv;