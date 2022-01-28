import React from "react";
import { Link } from "react-router-dom";

import "./NavDesktop.css";
export default function NavDesktop() {
  return (
    <div className="navbar-desktop">
      <div className="navbar-desktop__menu">
        <Link to="/" className="navbar-desktop__menu-item hover">
          Home
        </Link>
        <Link to="/dashboard" className="navbar-desktop__menu-item hover">
          Dashboard
        </Link>
        <span className="navbar-desktop__menu-item">
          <button className="navbar-desktop__login-btn">Login</button>
        </span>
      </div>
    </div>
  );
}
