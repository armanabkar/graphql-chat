import React, { Component } from "react";
import { login } from "../utils/auth";

class Login extends Component {
  state = { name: "", password: "", error: false, isRegister: false };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, password } = this.state;
    const user = await login(name, password);
    if (user) {
      this.props.onLogin(user);
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { name, password, error, isRegister } = this.state;
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
                      onChange={this.handleChange.bind(this)}
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
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="field">
                  {error && (
                    <p className="help is-danger">Invalid Credentials</p>
                  )}
                  <div className="control">
                    <button
                      className="button is-info"
                      onClick={this.handleSubmit.bind(this)}
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
                      onChange={this.handleChange.bind(this)}
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
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="field">
                  {error && (
                    <p className="help is-danger">Invalid Credentials</p>
                  )}
                  <div className="control">
                    <button
                      className="button is-info"
                      onClick={this.handleSubmit.bind(this)}
                    >
                      Login
                    </button>
                  </div>
                </div>
                <a
                  onClick={() => this.setState({ isRegister: true })}
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
  }
}

export default Login;
