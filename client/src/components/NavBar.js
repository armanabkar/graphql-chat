import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { onLogout, user } = this.props;
    return (
      <nav className="navbar">
        <div className="navbar-start">
          <p className="card-header-title">Hi, {user}!</p>
          <a className="navbar-item navbar-item-mob" onClick={onLogout}>
            Logout
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
