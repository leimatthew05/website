// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/dist/css/bootstrap.min.css';



// Step 2: Define your component
const VisDev = () => {
  return (
    <Layout pageTitle="Matthew Lei">
      <p>Visual Development Portfolio</p>
      <StaticImage 
        alt="Song of Achilles" 
        src="../images/story-1.png"
      />
      <StaticImage 
        alt="Cnideria" 
        src="../images/story-2.png"
      />
      <StaticImage 
        alt="The Savior" 
        src="../images/story-3.png"
      />
      <StaticImage 
        alt="The Aclockalypse" 
        src="../images/story-4.png"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Visual Development</title>

// Step 3: Export your component
export default VisDev