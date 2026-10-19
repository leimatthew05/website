// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import YoutubeEmbed from "../components/youtubeembed";
import Contacts from "../components/contacts";

// Step 2: Define your component
const Page = () => {
  const embed_ids = [
    "8wnvC6bMvS4", // BFA3
    "NhBPC8zdZbQ", // Normal Glasses
    "xsVgXBbzDNg", // All Fish Go To Heaven
    "IZFuBIg1mzc", // BFA2
    "YvcD7x-NSN4", // Slug in Bell Pepper
    "IZ4a3tlvFGA", // LOMS
    "nuKLxaHLWyQ", // BFA1
    "8HUbtIjpKSo", // Butterflies
    "VGHAwryqTp4", // Step On The Grass
    "TH1-jFQ2_jY", // Kinda Smells Like Shit
    "Ja5cjynxNAg", // A Nostalgic Summer Day
    "G9MrWnCpNFs", // The Life Of The Party
  ];

  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i} />;
  });

  return (
    <main>
      <Layout pageTitle="(featured) SHORT FILMS">
        <div className="desktop-only">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "1"}}>
            {embeds}
          </div>
        </div>

        <div className="mobile-only">
          <div style={{ display: "grid"}}>
            {embeds}
          </div>
        </div>
        <Contacts></Contacts>
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export const Head = () => <title>Matthew Lei</title>;

export default Page;
