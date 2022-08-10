import React from "react";
import "./navbarStyle.css";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <div className="nav-container">
      <h1>Website Test</h1>
      <nav className="nav-items-container">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <p> | </p>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <p> | </p>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
