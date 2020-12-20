import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import { getLoggedInUser, logout } from "./utils/auth";
import client from "./graphql/client";
import Chat from "./components/Chat";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

const App = () => {
  const [user, setUser] = useState(getLoggedInUser());

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    // You can also use this condition for making sure before log out :
    // if (window.confirm("Are you sure you want to log out?"))
    logout();
    setUser(null);
  };

  if (!user) {
    return (
      <ApolloProvider client={client}>
        <Login onLogin={handleLogin} />
      </ApolloProvider>
    );
  }
  return (
    <ApolloProvider client={client}>
      <NavBar user={user} onLogout={handleLogout} />
      <Chat user={user} />
    </ApolloProvider>
  );
};

export default App;
