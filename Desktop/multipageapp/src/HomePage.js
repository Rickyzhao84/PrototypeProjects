import React, { Component } from "react";
import PhotoContainer from "./PhotoContainer";

import Photo from "./Photo";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      photos: [Photo]
      
      
    };
  }
  
  


  

  render() {
    
    return (
      <section>
        <h1>Home Page</h1>
        <PhotoContainer photos={this.state.photos}/>
      </section>
    );
  }
}

export default HomePage;