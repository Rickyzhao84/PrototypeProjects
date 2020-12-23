import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import './HomeScreen.css';

import axios from 'axios';

class GetContent extends Component {
  constructor(props) {
    super(props);
    
    
    
    
  }
  
  state = {
    
    persons: [],
    titles: [],
    lesson: [],
  }

  submitHandler = (e) => {
    e.preventDefault();
    
    axios
      .get("https://idigest.gtinternational.org/api/lesson/GodsLove", {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.title);
        const persons = response.data;
        
        
        
        
        for (let i = 0; i < response.data.sessions.length; i++) {
          
            this.setState(prevState=> ({
              titles: [...prevState.titles, response.data.sessions[i].title],
              lesson: [...prevState.lesson, response.data.sessions[i].lesson],
            }))
           
            
          
          console.log(response.data.sessions[i])
          
          
        }
        this.setState({persons});
        //console.log(response.data.sessions[0]);
        console.log(response.data.sessions[0]);
        console.log(this.state.titles);
        console.log(response.data.sessions[0].lesson);
      })
      
      .catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    
    return (
      <div>
        
        {/* <form onSubmit={this.submitHandler}>
          
          <h1>
            {this.state.persons.title}
          </h1>
          <h3>{this.state.persons.description}</h3>
          <button className="buttonsw">Submit</button>
          
        </form> */}
        <h1>IDigest</h1>
        <img src="https://play-lh.googleusercontent.com/-DscnIMy5CY4pda2kulLTxfdPTRBRpYWK0OznZtEU6sYwaFkMWnco3udlX2JmrXidA0=s180" width="80px" height= "80px"></img>
        <h3>Welcome! Rickyzhao84</h3>
        
        
        <body>
  <div class="class1">
    <p>Books</p>
    <section>
            
            <a href = "/GodsLove">
            <img className="photoss" src={"https://idigest.gtinternational.org/api/lesson/GodsLove/cover"} alt="God's Love"></img>
            </a>
            <br/>
            <img className="photoss"src={"http://13.91.97.63/idigest/lesson/parenting/cover"} alt="God's Love"></img>
            <br/>
            <img className="photoss"src={"http://13.91.97.63/idigest/lesson/FollowMe/cover"} alt="God's Love"></img>
        </section>
  </div>
  <div class="class2">
    <p>Chapters</p>
    <form onSubmit={this.submitHandler}>
          
          <h5>
            {this.state.persons.title}
          </h5>
          
          <h5>
            {this.state.persons.description}
            
          </h5>
          {/* <h5>{this.state.persons.description}</h5> */}
        
          <h5>{this.state.titles.map(item => (
            <a href="google.com"><li key = {item}>{item}</li></a>
            
            )
          )}</h5>
          {/* <h5>{this.state.lesson.map(item => (
            <li key = {item}>Lesson {item}</li>
            
            )
          )}</h5> */}
          
          <button className="buttonsw" >Read</button>
          {!this.state.isHidden }
        </form>
  </div>
  <div class="class3">
    <p>Homework</p>
    <h5>1. Why is it difficult to define the love of God?</h5>
    <textarea></textarea>
  </div>
  
</body>
      </div>
    );
  }
}

  export default GetContent;


/*
    constructor(props) {
        super(props);
    
        this.state = {
          item: [],
          isLoaded: false
        };
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
          });
      }
    /*
      submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
          .get("https://idigest.gtinternational.org/api/lesson/parenting?/content/*")
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    *//*
      render() {
        var { isLoaded, items } = this.state;

        if(!isLoaded) {
          return <div>Loading!!</div>;
        } else {
        return (
          <div>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  Name: {item.name} | Email: {item.email}
                </li>
              ))};
            </ul>
          </div>
        );
      }
    }
    }
    
export default GetContent;

*/