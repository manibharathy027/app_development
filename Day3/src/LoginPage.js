// LoginPage.js
import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    // You can implement your authentication logic here
    // For a simple example, you can check if the username and password match a predefined value
    if (username === "user" && password === "password") {
      // Successful login, redirect or display a success message
      alert("Login successful!");
    } else {
      // Failed login, display an error message
      alert("Login failed. Please check your credentials.");
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="button" onClick={this.handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
