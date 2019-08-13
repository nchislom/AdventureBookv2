import React, { Component } from 'react';

import "./style.css";

const AdminStatsTable = props => {
  // console.log("Here are the stats: " + props.stats.storySize);
  return (
    <table>
      <tbody>
        <tr>
          <td>Current Story</td>
          <td>Adventure Book v2</td>
        </tr>
        <tr>
          <td>Story Length</td>
          <td>{ props.storySize }</td>
        </tr>
        <tr>
          <td>Registerd Users</td>
          <td>{ props.registeredUsers }</td>
        </tr>
        <tr>
          <td>Global Wins</td>
          <td>{ props.globalWins }</td>
        </tr>
        <tr>
          <td>Game Storage</td>
          <td>{ props.storyCollectionSize }</td>
        </tr>
        <tr>
          <td>User Storage</td>
          <td>{ props.userCollectionSize }</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminStatsTable;