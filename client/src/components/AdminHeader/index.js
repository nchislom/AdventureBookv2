import React from "react";
import "./style.css";

const AdminHeader = (props) => {
  return (
    <h1>{ props.children }</h1>
  );
};

export default AdminHeader;