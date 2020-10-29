import React, { Component } from "react";
import axios from "axios";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      loginId: "",
      
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://idigest.gtinternational.org/api/user/login", this.state, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { loginId, password } = this.state;
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.submitHandler}>
          
          <div>
            <h2>Email</h2>
            <input
              className="words"
              type="text"
              name="loginId"
              value={loginId}
              placeholder="1234@gmail.com"
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <h2>Password</h2>
            <input
              className="words"
              type="password"
              name="password"
              value={password}
              placeholder="**********"
              onChange={this.changeHandler}
            />
          </div>
          <button className="buttonsw">Forgot Password?</button>
          <button className="buttonsw" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;