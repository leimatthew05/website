// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import YoutubeEmbed from "../components/youtubeembed";
import Contacts from "../components/contacts";

// Step 2: Define your component
const Page = () => {
  const embed_ids = [
    "IZFuBIg1mzc",
    "nuKLxaHLWyQ?si=fu43cI2g0uYXKV7r",
    "aFXa-YSXbQo",
    "G9MrWnCpNFs?si=EP5oPHdmSFXH_4UK",
    "8HUbtIjpKSo?si=g3NFNjszy2-lXax0",
    "znGdFCYXd3M?si=3Q6OlojKx5XoJfoc",
  ];

  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i} />;
  });

  return (
    <main>
      <Layout pageTitle="SHORT FILMS">
        <div className="desktop-only">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridAutoRows: "1"}}>
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
