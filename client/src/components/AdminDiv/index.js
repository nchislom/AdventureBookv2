import React from "react";
import AdminHeader from "../AdminHeader";
import AdminStatsTable from "../AdminStatsTable";
import AdminStoryGraph from "../AdminStoryGraph";

import "./style.css";

const AdminDiv = (props) => {
  return (
    <div>
      <AdminHeader>{ props.children }</AdminHeader>
      <AdminStatsTable></AdminStatsTable>
      <AdminStoryGraph id="cy"></AdminStoryGraph>
    </div>
  );
};

export default AdminDiv;