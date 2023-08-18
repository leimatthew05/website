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



// Step 2: Define your component
const AboutPage = () => {

    const images = [
    {
        src: "../images/fish-copy.gif",
        width: 300,
        height: 100,
        w: 6,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "../images/snew-duck.png",
        width: "10vw",
        height: 300,
        w: 6,
        alt: "Boats (Jeshu John - designerspics.com)",
    },   
    // {
    //     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //     width: 320,
    //     height: 400,
    // },
    // {
    //     src: "../images/icon.png",
    //     width: 320,
    //     height: 212,
    // },
    ];

    var gallery = images.map((image, index) => {
        return (
        <Col className="gallerycell" onClick={() => setIndex(index)} md={image.w} 
            style={{backgroundImage: `url(${image.src})`}}>
        </Col>
        )
    })

    console.log(gallery)
    
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <Layout>
            <Row style={{width: "100vw !important"}}>
            {gallery}
            </Row>
            {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
                mainSrc={currentImage.src}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
            />
            )}
        </Layout>
    )

  

//   return (
//     <Layout pageTitle="About Me">
//     <div>
//       <Gallery
//         images={images}
//         onClick={handleClick}
//         enableImageSelection={false}
//       />
//       {!!currentImage && (
//         /* @ts-ignore */
//         <Lightbox
//           mainSrc={currentImage.src}
//           imageTitle={currentImage.caption}
//           mainSrcThumbnail={currentImage.src}
//           nextSrc={nextImage.original}
//           nextSrcThumbnail={nextImage.src}
//           prevSrc={prevImage.original}
//           prevSrcThumbnail={prevImage.src}
//           onCloseRequest={handleClose}
//           onMovePrevRequest={handleMovePrev}
//           onMoveNextRequest={handleMoveNext}
//         />
//       )}
//     </div>
//     </Layout>
//   ); 
    
}



export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage

// import React, { Component } from 'react';
// import Lightbox from 'react-18-image-lightbox';
// import 'react-18-image-lightbox/style.css'; // This only needs to be imported once in your app

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ];

// export default class LightboxExample extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       photoIndex: 0,
//       isOpen: false,
//     };
//   }

//   render() {
//     const { photoIndex, isOpen } = this.state;

//     return (
//       <div>
//         <button type="button" onClick={() => this.setState({ isOpen: true })}>
//           Open Lightbox
//         </button>

//         {isOpen && (
//           <Lightbox
//             mainSrc={images[photoIndex]}
//             nextSrc={images[(photoIndex + 1) % images.length]}
//             prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//             onCloseRequest={() => this.setState({ isOpen: false })}
//             onMovePrevRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + images.length - 1) % images.length,
//               })
//             }
//             onMoveNextRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + 1) % images.length,
//               })
//             }
//           />
//         )}
//       </div>
//     );
//   }
// }