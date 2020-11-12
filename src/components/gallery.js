import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import {Carousel} from '3d-react-carousal';

class Gallery extends Component {
    

    render() {
    var images = [
    <img  src = {require("../images/amanda-trade.png")} alt="1" />,
    <img  src = {require("../images/axolotl.png")} alt="2" />,
    <img  src = {require("../images/cactuscowboy.png")} alt="3" />,
    <img  src = {require("../images/mermaid and cuttles.png")} alt="4" />,
    <img  src = {require("../images/rubberducky.jpeg")} alt="5" />, 
    <img  src = {require("../images/s&d-tshirt.png")} alt="5" />,
    <img  src = {require("../images/the-spider.png")} alt="5" />,
    ]
    return (
        <div className="dark-container" style={{height: "120vh"}}>
        
            <Row>
            <Col md={8}>
            <Fade bottom duration= {5000}>
                <h3>gallery</h3>
                <h4>
                I'm a moose in a moose.
                </h4>
                
            </Fade>
            </Col>
            </Row>
            <div className="gallery-carousel" style={{minHeight: "50vh", padding: "5%"}}>
                <Carousel slides={images} style={{height: "50vh"}}/>
            </div>
        
        </div>
    )

    }
}

export default Gallery;
