import React from "react";
import { useChatMessages } from "../utils/hooks";

export default function Register({
  setName,
  setPassword,
  setError,
  name,
  password,
  onLogin,
  error,
}) {
  const { createUser } = useChatMessages();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "name" ? setName(value) : setPassword(value);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    createUser(name, password)
      .then(() => {
        onLogin(name, password);
      })
      .catch(() => setError(true));
  };

  return (
    <section className="section login-section">
      <div className="container">
        <h1 className="title">Register</h1>
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            {error && <p className="help is-danger invalid"> - User Exists</p>}
            <div className="control">
              <button className="button is-info" onClick={handleRegisterSubmit}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
