// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  const images = [
    [
      {file: "../../images/img1.jpg", caption: "Ocean", width: 5464, height: 3576}, 
      {file: "../../images/img5.jpg", caption: "Night Sky", width: 2400, height: 3613},
      {file: "../../images/img3.jpg", caption: "Forest", width: 6720, height: 4480},
    ],
    [
      {file: "../../images/img6.jpg", caption: "Hello", subcaption: "This is a photo of a beach", width: 2400, height: 3600},
      {file: "../../images/img2.jpg", caption: "Beach", width: 5472, height: 3078}, 
      {file: "../../images/img4.jpg", caption: "Tree", width: 2400, height: 3200},
    ],
    [
      {file: "../../images/img5.jpg", caption: "Night Sky", width: 2400, height: 3613},
      {file: "../../images/img5.jpg", caption: "Night Sky", width: 2400, height: 3613},
      {file: "../../images/img5.jpg", caption: "Night Sky", width: 2400, height: 3613},
    ],
  ]
  
  return (
    <main>
      <Layout pageTitle="Nature">
        <Gallery images = {images}/>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Portfolio</title>

// Step 3: Export your component
export default IndexPage