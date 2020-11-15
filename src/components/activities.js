import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from './parallax';

class Activities extends Component {
  render() {
    return (
      <div className= "light-container activities" style={{paddingBottom: "10%"}}>
      <h3>activities</h3>
      <Row style={{paddingTop: "20vh"}}>
        <Col md={2}>
          <a href = "https://www.instagram.com/lei_doodles/" target = "blank_">
          <img src = {require("../images/instagram.png")} style={{width:"80%"}}/>
          </a>
        </Col>
        <Col md={3}>
        <a href = "https://www.instagram.com/lei_doodles/" target = "blank_">
          <h4>
            <b>Artwork (@lei_doodles)</b>
          </h4>
          </a>
        </Col>
        <Col md={2}>
        </Col>
        <Col md={2}>
          <img src = {require("../images/clapperboard.png")} style={{width:"80%"}}/>
        </Col>
        <Col md={3}>
          <h4>
            <b>Animation Club</b>
          </h4>
        </Col>
      </Row>

      <Row style={{paddingTop: "10vh"}}>
        <Col md={2}>
          <img src = {require("../images/youtube.png")} style={{width:"80%"}}/>
        </Col>
        <Col md={3}>
          <h4>
            <b>The Squadcast</b>
          </h4>
        </Col>
        <Col md={2}>
        </Col>
        <Col md={2}>
          <img src = {require("../images/shuttle.png")} style={{width:"80%"}}/>
        </Col>
        <Col md={3}>
          <h4>
            <b>Rocketry</b>
          </h4>
        </Col>
      </Row>
      
      <Row style={{paddingTop: "10vh"}}>
        <Col md={2}>
          <img src = {require("../images/piano.png")} style={{width:"80%"}}/>
        </Col>
        <Col md={3}>
          <h4>
            <b>Piano</b>
          </h4>
        </Col>
        <Col md={2}>
        </Col>
        <Col md={2}>
          <img src = {require("../images/tennis.png")} style={{width:"80%"}}/>
        </Col>
        <Col md={3}>
          <h4>
            <b>Tennis</b>
          </h4>
        </Col>
      </Row>
      </div>
    )

  }
}

export default Activities;