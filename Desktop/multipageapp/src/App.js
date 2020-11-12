import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PostAPI from "./PostAPI.js";
import LoginPage from "./LoginPage.js";
import ForgotPasswordPage from"./ForgotPasswordPage.js";
import HomePage from "./HomePage.js";
import GetContent from "./GetContent.js";
import GodsLove from './GodsLove';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1 class="nav">NAV BAR</h1>
        <ul>
        <Link to="/"><button class="buttons">Home</button></Link>
        <Link to="/signup"><button class="buttons1">SignUp</button></Link>
        <Link to="/login"><button class="buttons2">Login</button></Link>
        <Link to="/ForgotPasswordPage"><button class="buttons3">Forgot Password</button></Link>
        <Link to="/GetContent"><button class="buttons4">GetContent</button></Link>
        </ul>
          <Route path="/" exact render= {
            ()=> {
              return ( <HomePage/> );
            }
          }/>
          <Route path="/signup" exact render= {
            ()=> {
              return ( <PostAPI/>);
            }
          }/>
          <Route path="/login" exact render= {
            ()=> {
              return ( <LoginPage/>);
            }
          }/>
          <Route path="/ForgotPasswordPage" exact render= {
            ()=> {
              return ( <ForgotPasswordPage/>);
            }
          }/>
          <Route path="/GetContent" exact render= {
            ()=> {
              return ( <GetContent/> );
            }
          }/>
          <Route path="/GodsLove" exact render= {
            ()=> {
              return ( <GodsLove/> );
            }
          }/>
      </div>
      </Router>
    );
  }
}


export default App;
