import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from './parallax';

class About extends Component {
  render() {
    return (
      <div className= "light-container" style={{paddingBottom: "10%"}}>
      <Row>
        <Col md={8}>
        <Fade bottom duration= {5000}>
          <h3>about</h3>
          <h4>
            Hi! My name is Matthew. Welcome to my website! 
            I'm a sophomore at Lincoln High School.
            I'm passionate about art and animation (Pixar, please hire me).
            My goal is to be a storyboard artist, character designer, or perhaps
            a movie director. I'm working towards getting into art school. 
            Be sure to check out some of my
            artworks in my gallery and some videos from my YouTube channels.
          </h4>
        </Fade>
        </Col>
      </Row>
      </div>
    )

  }
}

export default About;
