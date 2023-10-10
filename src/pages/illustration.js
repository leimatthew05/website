// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'

// Step 2: Define your component
const Page = () => {
  const images = [
    [
      {file: "../../images/cnidaria-background.png", caption: "Cnidaria", width: 1920, height: 1080}, 
      {file: "../../images/aclockalypse.png", caption: "Aclockalypse", width: 1920, height: 1080}, 
    ],
    [
      {file: "../../images/fox-1.png", caption: "The Fox And The Grapes (1/3)", width: 1920, height: 1080}, 
      {file: "../../images/fox-2.png", caption: "The Fox And The Grapes (2/3)", width: 1920, height: 1080}, 
      {file: "../../images/fox-3.png", caption: "The Fox And The Grapes (3/3)", width: 1920, height: 1080}, 
    ],
    [
      {file: "../../images/echidna.png", caption: "Echidna Witch Doctor", width: 2500, height: 2000}, 
      {file: "../../images/the-savior.png", caption: "The Savior", width: 3840, height: 2160},
    ],
    [
      {file: "../../images/achilles.png", caption: "The Song Of Achilles", width: 6300, height: 2700}, 
      {file: "../../images/floating-into-view.png", caption: "Floating In To View", width: 2000, height: 2500}, 
    ],
    
  ]
  
  return (
    <main>
      <Layout pageTitle="Illustration">
        <Gallery images = {images}/>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Page