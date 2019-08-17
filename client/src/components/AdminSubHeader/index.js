import React from "react";
import "./style.css";

const AdminSubHeader = (props) => {
  return (
    <h2>{ props.children }</h2>
  );
};

export default AdminSubHeader;