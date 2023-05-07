import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import {Carousel} from '3d-react-carousal';
import CarouselComponent from './carousel'; 

class Gallery extends Component {
    

    render() {
    var images = [
    <img  src = {require("../images/1.png")} alt="1" />,
    <img  src = {require("../images/2.png")} alt="2" />,
    <img  src = {require("../images/3.png")} alt="3" />,
    <img  src = {require("../images/4.png")} alt="4" />,
    <img  src = {require("../images/5.png")} alt="5" />,
    <img  src = {require("../images/6.png")} alt="5" />,
    <img  src = {require("../images/7.png")} alt="6" />,
    <img  src = {require("../images/8.png")} alt="7" />,
    <img  src = {require("../images/9.png")} alt="8" />,
    <img  src = {require("../images/10.png")} alt="9" />,
    <img  src = {require("../images/11.png")} alt="10" />,
    <img  src = {require("../images/12.png")} alt="11" />,
    ]

    var mobileimages=[
        {src: require("../images/1.png")}, 
        {src: require("../images/2.png")},
        {src: require("../images/3.png")},
        {src: require("../images/4.png")},
        {src: require("../images/5.png")},
        {src: require("../images/6.png")},
        {src: require("../images/7.png")}, 
        {src: require("../images/8.png")},
        {src: require("../images/9.png")},
        {src: require("../images/10.png")},
        {src: require("../images/11.png")},
        {src: require("../images/12.png")},
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
