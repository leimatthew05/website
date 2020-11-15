import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import '../css/parallax.css';
import '../css/welcome.css';
import Fade from 'react-reveal';
import Parallax from './parallax';

class Welcome extends Component {

  render() {
    const items = {
      background: "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))",
      name : "blog-welcome",
      layers: [ 
      
      {image: require("../images/howdy2.png"), depth: "0",  name: "layer3"},
      {image: require("../images/howdy3.png"), depth: "0.7",  name: "layer3"},
      {image: require("../images/howdy.png"), depth: "-1.3",  name: "layer3"},
      
      ]
    }
    
    return (
      <div>
        <section id = "blog-welcome">
          <Parallax items = {items}>
            <div>
              <section id = "welcome">
              <div className= "light-container">
                <Row style = {{paddingTop: "30vh"}}>
                  <Col md={8}>
                  <Fade bottom duration= {5000}>
                    <h1>matthew lei</h1>
                  </Fade>
                  </Col>
                </Row>
              </div>
              
              <div>

              </div>
              <div id='welcome-mobile'></div>
              </section>
          </div>
          </Parallax>
        </section>
      </div>
    );
  }
}

export default Welcome;
