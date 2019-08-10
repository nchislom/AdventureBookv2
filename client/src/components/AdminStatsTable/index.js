import React from "react";

import "./style.css";

const AdminStatsTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Current Story</td>
          <td>{ props.story }</td>
        </tr>
        <tr>
          <td>Story Length</td>
          <td>{ props.storyLength }</td>
        </tr>
        <tr>
          <td>Registerd Users</td>
          <td>{ props.user }</td>
        </tr>
        <tr>
          <td>Database Size</td>
          <td>{ props.dbSize }</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminStatsTable;