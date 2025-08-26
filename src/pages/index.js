// Step 1: Import React
import * as React from "react";
import Gallery from "../components/gallery";
import Layout from "../components/layout";
import YoutubeEmbed from "../components/youtubeembed";
import Contacts from "../components/contacts";

// Step 2: Define your component
const speakerDecks = [
  {
    src: "https://speakerdeck.com/player/b19180719b3e4316a1f12a6ab7a67886",
    title: "Curse of the Amulet'",
  },
  {
    src: "https://speakerdeck.com/player/d2c7f77b83714fbe9e00ee56fe9dd2a7",
    title: "Aquarium Fantasy",
  },
  {
    src: "https://speakerdeck.com/player/245b0364686242c1bd60ebd052974cc4",
    title: "The Encounter",
  },
  {
    src: "https://speakerdeck.com/player/ba8a719e6c4d4ab59609c9a765cadb05",
    title: "Chewed Pen",
  },
];

const desktopStyle = {
  border: "0px",
  background: "padding-box padding-box rgba(0, 0, 0, 0)",
  margin: "0 20% auto",
  padding: "0px",
  borderradius: "6px",
  boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
  width: "60%",
  height: "600px",
  aspectratio: "560 / 314;",
};

const mobileStyle = {
  border: "0px",
  background: "padding-box padding-box rgba(0, 0, 0, 0)",
  margin: "0",
  padding: "0px",
  borderradius: "6px",
  boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
  width: "100%",
  height: "300px",
  aspectratio: "560 / 314;",
};

const Page = () => {
  return (
    <main>
      <Layout pageTitle="STORY">
        <div className="desktop-only">
          {speakerDecks.map((deck) => (
            <iframe
              key={deck.src}
              className="speakerdeck-iframe"
              frameBorder="0"
              src={deck.src}
              title={deck.title}
              allowFullScreen={true}
              style={desktopStyle}
              data-ratio="1.78343949044586"
            />
          ))}
        </div>
        <div className="mobile-only">
          {speakerDecks.map((deck) => (
            <iframe
              key={deck.src}
              className="speakerdeck-iframe"
              frameBorder="0"
              src={deck.src}
              title={deck.title}
              allowFullScreen={true}
              style={mobileStyle}
              data-ratio="1.78343949044586"
            />
          ))}
        </div>
        <Contacts />
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Lei</title>;

// Step 3: Export your component
export default Page;
