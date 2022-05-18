import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import "./nav.scss";

export default class Nav extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/" className="nav-link">
              <p className="nav-title">Stock-Status Inventory</p>
            </NavLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links nav-show" : "nav-links"}
          >
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
            <NavLink to="/admin" className="nav-links">
              Admin
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}
