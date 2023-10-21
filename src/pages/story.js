// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'
import YoutubeEmbed from '../components/youtubeembed'

// Step 2: Define your component
const Page = () => {
  const images = [
    [
      {file: "../../images/alien0.png", caption: "Unidentified Friends Off-Planet Logline", width: 1650, height: 1275}, 
      {file: "../../images/alien1.png", caption: "Unidentified Friends Off-Planet (1/3)", width: 1650, height: 1275}, 
      {file: "../../images/alien2.png", caption: "Unidentified Friends Off-Planet (2/3)", width: 1650, height: 1275}, 
      {file: "../../images/alien3.png", caption: "Unidentified Friends Off-Planet (3/3)", width: 1650, height: 1275}, 
    ],
    [
      {file: "../../images/action-board.png", caption: "Horror Animatic Concept", width: 5000, height: 1200}, 
    ],
    
  ]
  const embed_ids = [
    "quOtYMXKWmQ", 
    "Sp0LHz21hQo",
    "v2cEs85YCl4",
  ]
  
  
  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i}/>
  })

  return (
    <main>
      <Layout pageTitle="Story">
        <Gallery images = {images}/>
        <div style={{display: "block"}}>
          {embeds}
        </div>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Page