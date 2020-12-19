import React from "react";

const NavBar = ({ onLogout, user }) => {
  let greeting;
  const time = new Date().getHours();
  if (5 < time < 12) {
    greeting = "Good morning";
  } else if (12 < time < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <p className="card-header-title">
          {greeting}, {user}!
        </p>
        <a href="/#" className="navbar-item navbar-item-mob" onClick={onLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
