// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import { Gallery } from "react-grid-gallery";


// Step 2: Define your component
const AboutPage = () => {

    const images = [
    {
        src: "../images/fish-copy.gif",
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "../images/snew-duck.png",
        width: 320,
        height: 212,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },
    
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        width: 320,
        height: 212,
    },
    ];
    
  return (
    <Layout pageTitle="About Me">
        <img src= "../static/images/fish-copy.gif" alt = ""/>
        <p>No bones about it!</p>
        <Gallery images={images} enableImageSelection={false}/>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage