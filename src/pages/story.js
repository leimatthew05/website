// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'
import YoutubeEmbed from '../components/youtubeembed'

// Step 2: Define your component
const Page = () => {
  const images = [
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
      <iframe
  src="https://docs.google.com/presentation/d/e/2PACX-1vQDQsMoIKh-2EnUshrDKe8drkoTq6ugTOkUFrQGjwsSQXNieRL513YHuWrFfxIoTa91Zb_uy-4OdOqt/embed?start=false&loop=false&delayms=60000"
  frameborder="0" width="100%" height="1080" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
  </iframe>
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