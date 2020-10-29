import React, { Component } from "react";
import axios from "axios";

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      loginId: "",
      
      
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .put("https://idigest.gtinternational.org/api/user/resetPassword", this.state, {
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
    const { loginId} = this.state;
    return (
      <div>
        <h1>Forgot Password?</h1>
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

          
          <button className="buttonsw">Submit</button>
          
        </form>
      </div>
    );
  }
}

export default ForgotPasswordPage;