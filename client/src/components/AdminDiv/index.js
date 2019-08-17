import React, { Component } from 'react';
import AdminHeader from "../AdminHeader";
import AdminStatsTable from "../AdminStatsTable";
import AdminStoryGraph from "../AdminStoryGraph";
import AdminRefreshButton from "../AdminRefreshButton";
import AdminSeedButton from "../AdminSeedButton";
import AdminDropZone from "../AdminDropZone";
import AdminSubHeader from "../AdminSubHeader";
import "./style.css";

class AdminDiv extends Component {
	render() {
	  return (
      <div className="AdminDiv">
        <AdminHeader>Game Master Console</AdminHeader>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <AdminSubHeader>Statistics</AdminSubHeader>
            <AdminStatsTable />
          </div>
          <div className="pure-u-1-3">
            <AdminSubHeader>Data Tools</AdminSubHeader>
            <AdminRefreshButton />
            <AdminSeedButton />
          </div>
          <div className="pure-u-1-3">
            <AdminSubHeader>Upload Data</AdminSubHeader>
            <AdminDropZone />
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <AdminSubHeader>Game Model</AdminSubHeader>
            <AdminStoryGraph id="cy" />
          </div>
        </div>
        
        
      </div>
	  )};
}

export default AdminDiv;