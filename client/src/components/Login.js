import React, { useState } from "react";
import { login } from "../utils/auth";
import { useChatMessages } from "../utils/hooks";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { createUser } = useChatMessages();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "name" ? setName(value) : setPassword(value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const user = await login(name, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
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
    <div>
      {isRegister ? (
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
                {error && (
                  <p className="help is-danger invalid"> - User Exists</p>
                )}
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={handleRegisterSubmit}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section className="section login-section">
          <div className="container">
            <h1 className="title">Login</h1>
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
                {error && (
                  <p className="help is-danger invalid">
                    - Invalid Credentials
                  </p>
                )}
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={handleLoginSubmit}
                  >
                    Login
                  </button>
                </div>
              </div>
              <a
                href="/#"
                onClick={() => setIsRegister({ isRegister: true })}
                className="create-account"
              >
                Don't have an account yet?
              </a>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
