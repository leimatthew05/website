// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'

// Step 2: Define your component
const Page = () => {
  const images = [
    [
        {file: "../../images/ocean-4.jpg", caption: "Beach", width: 1920, height: 1280}, 
    ],
    [
      {file: "../../images/ocean-1.jpg", caption: "Ocean 1", width: 640, height: 1404}, 
      {file: "../../images/ocean-2.jpg", caption: "Night Sky", width: 640, height: 480},
      {file: "../../images/ocean-3.jpg", caption: "Ocean 1", width: 1920, height: 1280}, 
    ],
    [
      {file: "../../images/ocean-5.jpg", caption: "Hello", subcaption: "This is a photo of a beach", width: 1920, height: 1280},
      {file: "../../images/ocean-6.jpg", caption: "Tree", width: 1920, height: 2560},      
    ],
    
  ]
  
  return (
    <main>
      <Layout pageTitle="Ocean">
        <Gallery images = {images}/>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Page