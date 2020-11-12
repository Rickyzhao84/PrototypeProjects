import React, { Component, useState } from "react";

import axios from 'axios';
class GetContent extends Component {
  constructor(props) {
    super(props);
    
    
    
    
  }

  state = {
    persons: []
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
        this.setState({persons});
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
          <button className="buttonsw">Submit</button>
          
        </form>
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