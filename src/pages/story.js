// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'
import YoutubeEmbed from '../components/youtubeembed'

// Step 2: Define your component
const Page = () => {
  const images = [
    [
      {file: "../../images/action-board.jpg", caption: "Horror Animatic Concept", width: 5000, height: 1200}, 
    ],
    
  ]
  const embed_ids = [
    "quOtYMXKWmQ",
  ]
  
  
  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i}/>
  })

  return (
    <main>
      <Layout pageTitle="STORY">
      <div className="desktop-only">
      <iframe
  src="https://docs.google.com/presentation/d/e/2PACX-1vRe8-8ZmO2WfI5KTkmozWPeYuxhWC-T0NkbYyDReuVzkwKPVrDy4tk_6yQtMxbtN7r005JoLoZsb2Li/embed?start=false&loop=false&delayms=60000"
  frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style={{width:"60%", height:"600px", margin:"0 20% auto"}}>
      </iframe>
      <iframe
  src="https://docs.google.com/presentation/d/e/2PACX-1vQPi_Iy3rXsjsGlI-vxhKDJXgwuLuBcVs2glDsBl6EuIfj4zdkEuXC7XR5Ot7vwVTTk9dPtwli-ptKi/embed?start=false&loop=false&delayms=60000"
  frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style={{width:"60%", height:"600px", margin:"0 20% auto"}}>
      </iframe>
        <Gallery images = {images}/>
        <div style={{display: "block"}}>
          {embeds}
        </div>
      </div>

      <div className="mobile-only">
      <iframe
  src="https://docs.google.com/presentation/d/e/2PACX-1vRe8-8ZmO2WfI5KTkmozWPeYuxhWC-T0NkbYyDReuVzkwKPVrDy4tk_6yQtMxbtN7r005JoLoZsb2Li/embed?start=false&loop=false&delayms=60000"
  frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style={{width:"100%", height:"300px", margin:"0"}}>
      </iframe>
      <iframe
  src="https://docs.google.com/presentation/d/e/2PACX-1vQPi_Iy3rXsjsGlI-vxhKDJXgwuLuBcVs2glDsBl6EuIfj4zdkEuXC7XR5Ot7vwVTTk9dPtwli-ptKi/embed?start=false&loop=false&delayms=60000"
  frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style={{width:"100%", height:"300px", margin:"0"}}>
      </iframe>
        <Gallery images = {images}/>
        <div style={{display: "block"}}>
          {embeds}
        </div>
      </div>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Page