// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {Row, Col} from 'reactstrap';
import YoutubeEmbed from '../components/youtubeembed'

// Step 2: Define your component
const Page = () => {
  const embed_ids = [
    "Yw6u6YkTgQ4?si=rCDDe8XE7qx79I8x", 
    "kXF3VYYa5TI?si=pgUw4kW4L5o_Ut-O",
    "yA1CbWrPCnM?si=Poe566_EA_MGMAz-",
  ]

  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i}/>
  })

  return (
    <main>
      <Layout pageTitle="Animation">
        <div style={{display: "block"}}>
          {embeds}
        </div>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default Page