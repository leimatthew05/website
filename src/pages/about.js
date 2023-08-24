// Step 1: Import React
import * as React from 'react'
import Gallery from './gallery'
import Layout from '../components/layout'




// Step 2: Define your component
const AboutPage = () => {

    // const images = [
    // {
    //     src: "../images/fish-copy.gif",
    //     w: 6,
    //     caption: "After Rain (Jeshu John - designerspics.com)",
    // },
    // {
    //     src: "../images/snew-duck.png",
    //     w: 6,
    //     alt: "Boats (Jeshu John - designerspics.com)",
    // }] 

    // return (
    //     <Layout>
    //         <Gallery images={images}/>
    //     </Layout>
    // )

  

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