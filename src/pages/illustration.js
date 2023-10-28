// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'

// Step 2: Define your component
const Page = () => {
  const images = [
    [
      {file: "../../images/space-whale.jpg", caption: "Space-Whale", width: 1920, height: 1080}, 
      {file: "../../images/elsewhere.jpg", caption: "Elsewhere", width: 2500, height: 2500}, 
    ],
    [
      {file: "../../images/artblock(red).jpg", caption: "Art Block", width: 1920, height: 1080}, 
      {file: "../../images/cnidaria-background.jpg", caption: "Cnidaria", width: 1920, height: 1080}, 
    ],
    [
      {file: "../../images/fox-1.jpg", caption: "The Fox And The Grapes (1/3)", width: 1920, height: 1080}, 
      {file: "../../images/fox-2.jpg", caption: "The Fox And The Grapes (2/3)", width: 1920, height: 1080}, 
      {file: "../../images/fox-3.jpg", caption: "The Fox And The Grapes (3/3)", width: 1920, height: 1080}, 
    ],
    [
      {file: "../../images/echidna.jpg", caption: "Echidna Witch Doctor", width: 2500, height: 2000}, 
      {file: "../../images/the-savior.jpg", caption: "The Savior", width: 3840, height: 2160},
    ],
    [
      {file: "../../images/marble.jpg", caption: "I Lost My Marbles", width: 1920, height: 1080}, 
      {file: "../../images/aclockalypse.jpg", caption: "Aclockalypse", width: 1920, height: 1080}, 
    ],
    [
      {file: "../../images/achilles.jpg", caption: "The Song Of Achilles", width: 6300, height: 2700}, 
      {file: "../../images/floating-into-view.jpg", caption: "Floating In To View", width: 2000, height: 2500}, 
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