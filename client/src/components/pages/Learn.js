import React from "react";
import { Link, Route } from "react-router-dom";
import Blog from "./Blog";

function Learn(props) {
  return (
    <div>
      <h1 className="text-center">P2</h1>
      <p>You see no one else nearby</p>
      <p>So you hurry to the woman</p>
      <p>In a hurry you roll her on her back</p>
      <p>You immediately see that she isn’t breathing</p>
      <p>Suddenly her eyes open</p>
      <p>They shine a brilliant purple</p>
      <p>You stare into them and feel dread fill your heart</p>
      <p>When you snap back into consciousness you see the woman is gone</p>
      <p>And soldiers are closing in on you</p>
      <p>You see an opening</p>

      <Link to={`${props.match.url}/Blog`} role="button" className="btn btn-link">
        HOLD YOUR GROUND 
      </Link>{" "}

      <Link to="/about" role="button" className="btn btn-link">
        MAKE A BREAK FOR IT
      </Link>

      <Route exact path={`${props.match.url}/Blog`} component={Blog} />
    </div>
  );
}

export default Learn;
