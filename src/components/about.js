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
            Hi! My name is Matthew. I am a sophomore at Lincoln High School.
            I'm passionate about art and animation (Pixar, please hire me).
            In my spare time, you'll find me imitating the Giant Pacific Salamander.
            It is very important as this species is on the brink of extinction.
          </h4>
        </Fade>
        </Col>
      </Row>
      </div>
    )

  }
}

export default About;
