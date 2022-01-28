import React from "react";

import NavDesktop from "./NavDesktop";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-container">
          <span className="navbar-logo">URL Monitor</span>
          <NavDesktop />
        </div>
      </div>
    </div>
  );
}
