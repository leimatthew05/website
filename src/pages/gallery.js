// Step 1: Import React
import * as React from 'react'
import { useState } from "react";
import {Row, Col, Button} from 'reactstrap';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import 'react-18-image-lightbox/style.css'
import '../css/style.css'



class ArtGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images,
            index: -1
        };

        this.setIndex.bind(this)
    }

    setIndex(index){
        this.setState({index: index});
    }

    render(){
        var images = this.props.images

        var gallery = images.map((image, index) => {
            return (
            <Col className="gallerycell" onClick={() => this.setIndex(index)} md={image.w} 
                style={{backgroundImage: `url(${image.src})`}}>
            </Col>
            )
        })
    
        console.log(gallery)
        
        const index = this.state.index
    
        const currentImage = images[index];
        const nextIndex = (index + 1) % images.length;
        const nextImage = images[nextIndex] || currentImage;
        const prevIndex = (index + images.length - 1) % images.length;
        const prevImage = images[prevIndex] || currentImage;
    
        const handleClick = (index, item) => this.setIndex(index);
        const handleClose = () => this.setIndex(-1);
        const handleMovePrev = () => this.setIndex(prevIndex);
        const handleMoveNext = () => this.setIndex(nextIndex);
    
        return (
            <div>
                <Row style={{width: "100vw !important"}}>
                {gallery}
                </Row>
                {!!currentImage && (
                /* @ts-ignore */
                <Lightbox
                    mainSrc={currentImage.src}
                    prevSrc={prevImage.src}
                    nextSrc={nextImage.src}
                    imageTitle={currentImage.caption}
                    mainSrcThumbnail={currentImage.src}
                    nextSrcThumbnail={nextImage.src}
                    prevSrcThumbnail={prevImage.src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
                )}
            </div>
        )
    }
}

export default ArtGallery;