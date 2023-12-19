// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  const images = [
    [
      {file: "../../images/13-final.png", caption: "Sky", width: 2500, height: 2500},
      {file: "../../images/comet_0005_Layer-2.png", caption: "Comet", width: 2500, height: 2500},
      {file: "../../images/aster_0005_Layer-10.png", caption: "Aster", width: 2500, height: 2500},
    ],
    [
      {file: "../../images/sky.jpg", caption: "Sky", width: 6207, height: 2456},
      {file: "../../images/cometandaster.jpg", caption: "Comet And Aster", width: 6207, height: 2456},
      {file: "../../images/lucifer.jpg", caption: "Lucifer", width: 6207, height: 2456},
    ],
    [
      {file: "../../images/robots-example.jpg", caption: "The Last Human On Earth",subcaption: "In a world run by robots, a young girl is raised as the last human on Earth.", width: 2880, height: 2304}, 
      {file: "../../images/robots-human.jpg", caption: "The Last Human On Earth (Reaction Sheet)", width: 2880, height: 2304},
      {file: "../../images/robots-robots.jpg", caption: "The Last Human On Earth (Robot Designs)", width: 2880, height: 2304},
    ],
    [
      {file: "../../images/axolotl.jpg", caption: "Sci-Fi Teenage Axolotls!", width: 3000, height: 2500},
      {file: "../../images/spider-butler-1.jpg", caption: "Spider Butler Character Exploration", width: 3000, height: 2500},
      {file: "../../images/spider-butler-2.jpg", caption: "Spider Butler Character Sheet", width: 2500, height: 2500},
      {file: "../../images/Sarah.jpg", caption: "Sarah and Her Best Friend", width: 1080, height: 1350},
      {file: "../../images/character-design.jpg", caption: "Sarah Character Sheet", width: 1650, height: 1400},
    ],
    [
      {file: "../../images/Aurelia Aurita.jpg", caption: "Aurelia Aurita", width: 2000, height: 2500},
      {file: "../../images/Anton Aiptasia.jpg", caption: "Anton Aiptasia", width: 2000, height: 2500},
      {file: "../../images/Turri Dohrns.jpg", caption: "Turri Dohrns", width: 2000, height: 2500},
      {file: "../../images/Cnidaria Citizens.jpg", caption: "Cnidaria Citizens", width: 2000, height: 2500},
    ],
  ]
  
  return (
    <main>
      <Layout pageTitle="Character Design">
        <Gallery images = {images}/>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Portfolio</title>

// Step 3: Export your component
export default IndexPage