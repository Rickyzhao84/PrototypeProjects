import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomeScreen from './HomeScreen.js'
import './HomeScreen.css';
class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      titles: [],
      lesson: [],
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
        console.log(response.data.displayName);
        const persons = <Link to="/GetContent"><button className="buttonsw" type="submit">Go to Profile</button></Link>;
        const titles = "Hi! " + response.data.displayName;
        
        
        
        
      console.log(this.state.titles);
      this.setState({persons});
    this.setState({titles});
    })
      .catch((error) => {
        const titles = "wrong password";
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
        <h1>
        {this.state.persons}
        <Router>
        <Route path="/HomeScreen" exact render= {
            ()=> {
              return ( <HomeScreen/> );
            }
          }/></Router>
        </h1>
        <h1>
        {this.state.titles}
        </h1>
      </div>
    );
  }
}

export default LoginPage;