// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/dist/css/bootstrap.min.css';



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Matthew Lei">
      <p>Welcome to my portfolio!!</p>
      <StaticImage 
        alt="Sim U Later!" 
        src="../images/char-1.png"
      />
      <StaticImage 
        alt="Robots Human Design" 
        src="../images/char-5.png"
      />
      <StaticImage 
        alt="Robots Human Design" 
        src="../images/char-2.png"
      />
      <StaticImage 
        alt="Cnideria Mains" 
        src="../images/char-3.png"
      />
      <StaticImage 
        alt="Cnideria Citizens" 
        src="../images/char-4.png"
      />      
      <StaticImage 
        alt="Sarah" 
        src="../images/char-6.png"
      />  

    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage