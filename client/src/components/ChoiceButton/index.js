import React from "react";
import "./style.css";

const ChoiceButton = (props) => {
  return (
    <button className={props.class} id={props.id}>{props.children}</button>
  );
};

export default ChoiceButton;