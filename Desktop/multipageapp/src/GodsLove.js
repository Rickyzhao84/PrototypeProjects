import React, { Component, useState } from "react";

import axios from 'axios';
class GodsLove extends Component {
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
        
        <form onSubmit={this.submitHandler}>
          
          <h1>
            {this.state.persons.title}
          </h1>
          <h3>{this.state.persons.description}</h3>
          <h5>{this.state.persons.description}</h5>
        
          <h5>{this.state.titles.map(item => (
            <a href="google.com"><li key = {item}>{item}</li></a>
            
            )
          )}</h5>
          <h5>{this.state.lesson.map(item => (
            <li key = {item}>Lesson {item}</li>
            
            )
          )}</h5>
          
          <button className="buttonsw">Read</button>
          
        </form>
      </div>
    );
  }
}

  export default GodsLove;