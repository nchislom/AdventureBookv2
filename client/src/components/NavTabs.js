import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/StoryStart"
          className={window.location.pathname === "/StoryStart" ? "nav-link active" : "nav-link"}
        >
          StoryStart
        </Link>
      </li>
      
    </ul>
  );
}

export default NavTabs;
