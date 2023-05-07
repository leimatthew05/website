import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from './parallax';

class About extends Component {
  render() {
    return (
      <section id= "about">
      <div className= "dark-container" style={{paddingBottom: "10%"}}>
      <Row>
        <div className= "about-container">
        <Col md={8}>
        <Fade bottom duration= {5000}>
          <h3>about</h3>
          <h4>
            Hi! My name is Matthew. Welcome to my website! 
            I'm a senior at Lincoln High School.
            This website is a work in progress... stay tuned for some changes!
          </h4>
        </Fade>
        </Col>
        </div>
      </Row>
      </div>
      </section>
    )

  }
}

export default About;
