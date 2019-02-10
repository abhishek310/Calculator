import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-light"
        style={{ backgroundColor: "#28a745" }}
      >
        <span />
        <span className="navbar-brand mb-0 h1">CALCULATOR</span>
        <span />
      </nav>
    );
  }
}

export default Header;
