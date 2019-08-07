import React from "react";
import { Link, Route } from "react-router-dom";

function About(props) {
  return (
    <div>
      <h1>P3*</h1>
      <p>You stay in your hiding place</p>
      <p>You hide from the soldiers</p>
      <p>The next day you journey to a nearby town</p>
      <p>Three days later the war claims your life</p>
      
      <Link to="/contact" role="button" className="btn btn-link">
        GO BACK
      </Link>
    </div>
  );
}

export default About;
