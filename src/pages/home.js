// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/dist/css/bootstrap.min.css';



// Step 2: Define your component
const Home = () => {
  return (
    <Layout pageTitle="Matthew Lei">
      <p>Home Page</p>
      <StaticImage 
        alt="The Aclockalypse" 
        src="../images/story-4.png"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Home