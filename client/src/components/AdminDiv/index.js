import React, { Component } from 'react';
import AdminHeader from "../AdminHeader";
import AdminStatsTable from "../AdminStatsTable";
import AdminStoryGraph from "../AdminStoryGraph";
import AdminRefreshButton from "../AdminRefreshButton";
import AdminSeedButton from "../AdminSeedButton";
import AdminFileInput from "../AdminFileInput";
import "./style.css";

class AdminDiv extends Component {
	render() {
	  return (
      <div className="AdminDiv">
        <AdminHeader>Game Master Console</AdminHeader>
        <div className="pure-g">
          <div class="pure-u-1-3">
            <AdminStatsTable />
          </div>
          <div class="pure-u-1-3">
            <AdminRefreshButton />
            <AdminSeedButton />
            <AdminFileInput />
          </div>
          <div class="pure-u-1-3">
            <AdminStoryGraph id="cy" />
          </div>
        </div>
        
        
      </div>
	  )};
}

export default AdminDiv;