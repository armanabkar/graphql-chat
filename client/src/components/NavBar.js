import React from "react";

const NavBar = ({ onLogout, user }) => {
  let greeting;
  const time = new Date().getHours();
  if (time < 12) greeting = "Good Morning";
  else if (time >= 12 && time <= 17) greeting = "Good Afternoon";
  else if (time >= 17 && time <= 24) greeting = "Good Evening";

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
