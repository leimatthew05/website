import React, { Component } from 'react';
import '../css/standard.css';
import Welcome from "./welcome";
import About from "./about";
import Menu from "./menu";
import Gallery from "./gallery";

class Dev extends Component {
  render() {
    return (
      <div className="landing-container" >
      <Menu/>
      <div className="landing-container" style={{zIndex:-1}}>
        <Welcome/>
        <About/>
      </div>
      <Gallery/>
      </div>
      
    );
  }
}

export default Dev;
