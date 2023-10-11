// Step 1: Import React
import * as React from 'react'
import Gallery from '../components/gallery';
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  const images = [
    [
      {file: "../../images/robots-example.png", caption: "The Last Human On Earth", width: 2880, height: 2304}, 
      {file: "../../images/robots-human.png", caption: "The Last Human On Earth (Reaction Sheet)", width: 2880, height: 2304},
      {file: "../../images/robots-robots.png", caption: "The Last Human On Earth (Robot Designs)", width: 2880, height: 2304},
    ],
    [
      {file: "../../images/spider-butler-1.png", caption: "Spider Butler Character Exploration", width: 3000, height: 2500},
      {file: "../../images/spider-butler-2.png", caption: "Spider Butler Character Sheet", width: 2500, height: 2500},
      {file: "../../images/Sarah.png", caption: "Sarah and Her Best Friend", width: 1080, height: 1350},
      {file: "../../images/character-design.png", caption: "Sarah Character Sheet", width: 1650, height: 1400},
    ],
    [
      {file: "../../images/sky.png", caption: "Sky", width: 6207, height: 2456},
      {file: "../../images/cometandaster.png", caption: "Comet And Aster", width: 6207, height: 2456},
      {file: "../../images/lucifer.png", caption: "Lucifer", width: 6207, height: 2456},
    ],
    [
      {file: "../../images/sim-you-later.png", caption: "Sim You Later!", subcaption: "This is a show idea I had", width: 3000, height: 3750},
      {file: "../../images/character-lineup.png", caption: "Sim You Later! Character Lineup", subcaption: "Character Lineup", width: 7000, height: 2500},
    ],
    [
      {file: "../../images/Aurelia Aurita.png", caption: "Aurelia Aurita", width: 2000, height: 2500},
      {file: "../../images/Anton Aiptasia.png", caption: "Anton Aiptasia", width: 2000, height: 2500},
      {file: "../../images/Turri Dohrns.png", caption: "Turri Dohrns", width: 2000, height: 2500},
      {file: "../../images/The Man Of War.png", caption: "The Man Of War", width: 2000, height: 2500},
      {file: "../../images/Cnidaria Citizens.png", caption: "Cnidaria Citizens", width: 2000, height: 2500},
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