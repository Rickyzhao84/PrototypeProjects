import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import './HomeScreen.css';

import axios from 'axios';

class GetContent extends Component {
  constructor(props, pic) {
    super(props);
    
    
      
  }
  
  state = {
    
    persons: [],
    titles: [],
    lesson: [],
    GodsLove: [],
    books1: [],
    FollowMe: [],
    pictures: [],
    name: [],
    bookname: [],


    parenting: [],
    Chen: [],

  }
  componentDidMount(){

    
    axios
    .get("https://idigest.gtinternational.org/api/home", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
        
      },
    })
      .then((response) => {
        
        console.log(response.data.books);
        
        for (let i = 0; i < response.data.books.length; i++) {
          
          this.setState(prevState=> ({
            pictures: [...prevState.pictures, response.data.books[i].image],
            name: [...prevState.name, response.data.books[i].classNameChs],
          }))


          console.log("https://idigest.gtinternational.org/api/lesson/" + response.data.books[i].name);

          axios
            .get("https://idigest.gtinternational.org/api/lesson/" + response.data.books[i].name, {
              headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
                "Content-Type": "application/json",
              },
            })

            .then((response) => {
        
              const GodsLove = response.data;
              
              
              console.log(response.data.sessions);
              
              for (let i = 0; i < response.data.sessions.length; i++) {
                
                  this.setState(prevState=> ({
                    titles: [...prevState.titles, response.data.sessions[i].title],
                    lesson: [...prevState.lesson, response.data.sessions[i].lesson],
                  }))
                 
                  
                
                
                
                
              }
              
              
            })
            
            .catch((error) => {
              console.log(error);
            });
      
        // console.log(response.data.sessions[i])
        
        
      }
      
      })
      
      .catch((error) => {
        console.log(error);
      });

      axios
      .get("https://idigest.gtinternational.org/api/lesson/GodsLove", {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        
        const GodsLove = response.data;
        
        
        console.log(response.data.sessions);
        
        for (let i = 0; i < response.data.sessions.length; i++) {
          
            this.setState(prevState=> ({
              titles: [...prevState.titles, response.data.sessions[i].title],
              lesson: [...prevState.lesson, response.data.sessions[i].lesson],
            }))
           
            
          
          // console.log(response.data.sessions[i])
          
          
        }
        this.setState({GodsLove});
        //console.log(response.data.sessions[0]);
        // console.log(response.data.sessions[0]);
        // console.log(this.state.titles);
        // console.log(response.data.sessions[0].lesson);
        
      })
      
      .catch((error) => {
        console.log(error);
      });


      axios
      .get("https://idigest.gtinternational.org/api/lesson/FollowMe", {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.title);
        const FollowMe = response.data;
        
        
        
        
        for (let i = 0; i < response.data.sessions.length; i++) {
          
            this.setState(prevState=> ({
              books1: [...prevState.books1, response.data.sessions[i].title],
              lesson: [...prevState.lesson, response.data.sessions[i].lesson],
            }))
           
            
          
          // console.log(response.data.sessions[i])
          
          
        }
        this.setState({FollowMe});
        //console.log(response.data.sessions[0]);
        // console.log(response.data.sessions[0]);
        // console.log(this.state.titles);
        // console.log(response.data.sessions[0].lesson);
        
      })
      
      .catch((error) => {
        console.log(error);
      });
   
  };
    
  
  
  render() {
    
    return (
      <div>
        
        
        <h1>IDigest</h1>
        <img src="https://play-lh.googleusercontent.com/-DscnIMy5CY4pda2kulLTxfdPTRBRpYWK0OznZtEU6sYwaFkMWnco3udlX2JmrXidA0=s180" width="80px" height= "80px"></img>
        <h3>Welcome! Rickyzhao84</h3>
        
        
        <body>
        
  <div class="class1 vertical" >
    <p>Books</p>
    <section>
            
            
            <h5 class="left">{this.state.pictures.map(item => (
            <a href="google.com"><img className="photoss"src={item} alt="God's Love"></img><ul key = {item}></ul></a>
            
            )
          )}</h5>
            
        </section>
        
  </div>
  <div class="class2 vertical">
    <p>Chapters</p>
    <form onSubmit={this.submitHandler}>
          
          {/* <h4>
            {this.state.GodsLove.title}
          </h4>
          
          <h4>
            {this.state.GodsLove.description}
            
          </h4> */}
          <h5>{this.state.name.map(
              item => (
                <li key={item}>{item}</li>
              )
            )}</h5>
          {/* <h5>{this.state.persons.description}</h5> */}
        
          <h5 class="left">{this.state.titles.map(item => (
            
            <a href="google.com"><li key = {item}>{item}</li></a>
            //CURRENTLYYYY WORKINGGG ON THIS
            )
          )}</h5>
          {/* <h5>{this.state.lesson.map(item => (
            <li key = {item}>Lesson {item}</li>
            
            )
          )}</h5> */}

         {/* <h2>-------------------------------------</h2>


          <h5>
            {this.state.FollowMe.title}
          </h5>
          
          <h5>
            {this.state.FollowMe.description}
            
          </h5>
          <h5>{this.state.persons.description}</h5> 
        
          <h5 class="left">{this.state.books1.map(item => (
            
            <a href="google.com"><li key = {item}>{item}</li></a>
            
            )
          )}</h5>
           */}
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

