import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import './HomeScreen.css';

import axios from 'axios';
import RightColumn from "./RightColumn";
import { data } from './data';


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

    BookTitle: [],
    /* Need way to load hw. */
    hw: [
      {text: "one"},
      {text: "two"},
      {text: "three"}
    ]
  }


doSomething() {
  document.getElementsByName("submitButton").disabled = true;
}


submitHandler = (e) => {
    
    // var element = document.getElementById('{index}');
    
    console.log(e);
    
    //pass the index into submit handler
    //call the home api
    //compare the index with the home api's index
    //if match, call the name and chapters for that index's api
    axios
    .get("https://idigest.gtinternational.org/api/home", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
        
      },
    })
      .then((response) => {
        
        console.log(response.data.books);
        
        for (let i = 0; i < response.data.books.length; i++) {
          
          // this.setState(prevState=> ({
          //   pictures: [...prevState.pictures, response.data.books[i].image],
          //   name: [...prevState.name, response.data.books[i].classNameChs],
          // }))


          console.log("https://idigest.gtinternational.org/api/lesson/" + response.data.books[i].name);
          if (i == e) {
            console.log("weeee areeeee hereeeee");
          axios
            .get("https://idigest.gtinternational.org/api/lesson/" + response.data.books[i].name, {
              headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
                "Content-Type": "application/json",
              },
            })

            .then((response) => {
              this.setState({titles: []});
              const BookTitle = response.data.title;
              console.log(BookTitle);
              this.setState({BookTitle});
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
          }
        
        
        
      }
      
      })
      
      .catch((error) => {
        console.log(error);
      });






    // axios
    //   .get("https://idigest.gtinternational.org/api/lesson/GodsLove", {
    //     headers: {
    //       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NywibG9naW5JZCI6InBuZXVtb25pY2NvbWFAZ21haWwuY29tIiwiaWF0IjoxNjAzOTk4NjQwLCJleHAiOjE2MzU1MzQ2NDB9.rRXy4J5D5Rw9K2lTDTjd4VZ3hLEaBEU1BPNNND1HOys",
    //       "Content-type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.data);
    //     console.log(response.data.title);
    //     const GodsLove = response.data;
        
        
        
        
    //     for (let i = 0; i < response.data.sessions.length; i++) {
          
    //         this.setState(prevState=> ({
    //           titles: [...prevState.titles, response.data.sessions[i].title],
    //           lesson: [...prevState.lesson, response.data.sessions[i].lesson],
    //         }))
           
            
          
    //       console.log(response.data.sessions[i])
          
          
    //     }
    //     this.setState({GodsLove});
    //     //console.log(response.data.sessions[0]);
    //     console.log(response.data.sessions[0]);
    //     console.log(this.state.titles);
    //     console.log(response.data.sessions[0].lesson);
        
    //   })
      
    //   .catch((error) => {
    //     console.log(error);
    //   });
    };




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


        
        
      }
      
      })
      
      .catch((error) => {
        console.log(error);
      });

     
   
  };
    
  
  
  render() {
    
    return (
      <div>
        
        
        <h1>IDigest</h1>
        <img src="https://play-lh.googleusercontent.com/-DscnIMy5CY4pda2kulLTxfdPTRBRpYWK0OznZtEU6sYwaFkMWnco3udlX2JmrXidA0=s180" width="80px" height= "80px" ></img>
        <h3>Welcome! Rickyzhao84</h3>
        
        
        <body>
        
  <div class="class1 vertical" >
    <p>Books</p>
    <section>
            
            
            <h5 class="left">{this.state.pictures.map((items,index) => (
            <button onClick={() => this.submitHandler(index)} ><img className="photoss"src={items}
            ></img> <ul key = {index}  >{index} </ul>
            </button>
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
          {/* <h5>{this.state.name.map(
              item => (
                <li key={item}>{item}</li>
              )
            )}</h5> */}
          
        
          {/* <h5 class="left">{this.state.titles.map(item => (
            
            <a href="google.com"><li key = {item}>{item}</li></a>
          
            )
          )}</h5> */}
          
          {/* <h5 class = "left">{this.state.name.keys((array) => <li>{array}</li>)}</h5> */}
          <h4 class = "left">{this.state.BookTitle}</h4>
          <h5 class = "left">{this.state.titles.map(
            (item, index) =><li key={index}>{item}</li>)}</h5>
          
        </form>
  </div>
<div class="class3"> {/* removed "class3" for now */} 
  <RightColumn hw={data.answers}></RightColumn>
     </div>

  
</body>

  
  
      </div>
      
    );
  }
} 

  export default GetContent;

