import React, { useState } from "react";
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
  const [showTermsBox, setShowTermsBox] = useState(false);

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
    <section className="section box login-section">
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
              <label className="checkbox">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  style={{ margin: "0 0.3rem" }}
                />
                I agree to the{" "}
                <a href="/#" onClick={() => setShowTermsBox(!showTermsBox)}>
                  terms and conditions
                </a>
              </label>
            </div>
          </div>
        </form>
        {showTermsBox && (
          <div
            className="box terms-box"
            style={{ height: "65vh", overflowY: "scroll" }}
          >
            <p>
              1- Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis explicabo quam sequi molestiae tempora adipisci repellat
              fuga assumenda minus necessitatibus, totam, dolor ut, a tenetur
              veritatis est blanditiis? Voluptatum, laborum?
            </p>
            <p>
              2- Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis explicabo quam sequi molestiae tempora adipisci repellat
              fuga assumenda minus necessitatibus, totam, dolor ut, a tenetur
              veritatis est blanditiis? Voluptatum, laborum?
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
