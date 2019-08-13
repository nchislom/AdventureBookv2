import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function StoryStart(props) {
  return (
    <div>
      <h1>P1</h1>
      <p>In a land not so far away</p>
      <p>A war of epic proportion rages</p>
      <p>You have escaped from a town on fire</p>
      <p>You run to the woods, your home</p>
      <p>Just when you think you are safe in your hiding place…</p>
      <p>You see a badly injured woman dressed in soldiers’ gear</p>
      <p>She falls to the ground.</p>
      
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        LEAVE YOUR HIDING PLACE TO HELP
      </Link>{" "}

      <Link to="/about" role="button" className="btn btn-link">
        STAY HIDDEN
      </Link>

      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default StoryStart;
