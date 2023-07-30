// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>They go to san fransisco where the disco's off the rails!</p>
      <StaticImage 
        alt="Guido the water fish" 
        src="../images/fish-copy.gif"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage