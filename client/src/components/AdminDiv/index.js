import React, { Component } from 'react';
import AdminHeader from "../AdminHeader";
import AdminStatsTable from "../AdminStatsTable";
import AdminStoryGraph from "../AdminStoryGraph";
import "./style.css";

class AdminDiv extends Component {
	// Setting the component's initial state
	state = {};

	render() {
	  return (
      <div>
        <AdminHeader>Game Master Console</AdminHeader>
        <AdminStatsTable />
        <AdminStoryGraph id="cy"></AdminStoryGraph>
      </div>
	  )};
}

export default AdminDiv;