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
    description: [],

  

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
              this.setState({description: []});
              const BookTitle = response.data.title;
              
              this.setState({BookTitle});
              
              const description = response.data.description;
              this.setState({description});
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
        <img src="https://image.winudf.com/v2/image1/b3JnLmd0aW50ZXJuYXRpb25hbC5pZGlnZXN0X2ljb25fMTU5MDMwNDAwM18wNDA/icon.png?w=170&fakeurl=1" width="80px" height= "80px" ></img>
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
          
          
          <h3 class = "left">{this.state.BookTitle}</h3>
          <h4 class = "left">{this.state.description}</h4>
          <h5 class = "left">{this.state.titles.map(
            (item, index) =><li key={index}>{item}</li>)}</h5>
          
        </form>
  </div>
<div class="class3"> {/* removed "class3" for now */} 
  <RightColumn hw={data.answers}></RightColumn>
  <iframe src="tools/template.html" height="2000px"></iframe>
     </div>

  
</body>

  
  
      </div>
      
    );
  }
} 

  export default GetContent;

