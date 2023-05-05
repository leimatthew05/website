import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import {Carousel} from '3d-react-carousal';
import CarouselComponent from './carousel'; 

class Gallery extends Component {
    

    render() {
    var images = [
    <img  src = {require("../images/amanda-trade.png")} alt="1" />,
    <img  src = {require("../images/axolotl.png")} alt="2" />,
    <img  src = {require("../images/cactuscowboy.png")} alt="3" />,
    <img  src = {require("../images/mermaid and cuttles.png")} alt="4" />,
    <img  src = {require("../images/rubberducky.jpeg")} alt="5" />, 
    <img  src = {require("../images/s&d-tshirt.png")} alt="5" />,
    <img  src = {require("../images/partyman.png")} alt="5" />,
    <img  src = {require("../images/the-spider.png")} alt="5" />,
    ]

    var mobileimages=[
        {src: require("../images/amanda-trade.png")}, 
        {src: require("../images/axolotl.png")},
        {src: require("../images/cactuscowboy.png")},
        {src: require("../images/mermaid and cuttles.png")},
        {src: require("../images/rubberducky.jpeg")},
        {src: require("../images/s&d-tshirt.png")},
        {src: require("../images/partyman.png")},
        {src: require("../images/the-spider.png")},
    ]

    return (
        <section id= "gallery">
        <div className="dark-container" style={{height: "150vh"}}>
        
            <Row>
            <Col md={8}>
            <Fade bottom duration= {5000}>
                <h3>gallery</h3>
                <h4>
                Here's some of my art. Have a look!
                </h4>
                
            </Fade>
            </Col>
            </Row>
            <div className="gallery-carousel web-only" style={{minHeight: "50vh", padding: "5%"}}>
                <Carousel slides={images} style={{maxHeight: "50vh"}}/>
            </div>

            <div className="gallery-mobile mobile-only">
                <CarouselComponent items={mobileimages}/>
            </div>
        
        </div>
        </section>
    )

    }
}

export default Gallery;
