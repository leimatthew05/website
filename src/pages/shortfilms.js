// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import YoutubeEmbed from "../components/youtubeembed";
import Contacts from "../components/contacts";

// Step 2: Define your component
const Page = () => {
  const embed_ids = [
    "IZFuBIg1mzc", // BFA2
    "nuKLxaHLWyQ?si=fu43cI2g0uYXKV7r", // BFA1
    "xsVgXBbzDNg?si=hM99Cc2GgzGE_gGF", // All Fish Go To Heaven
    "IZ4a3tlvFGA?si=VDtGlC8Da0vsjDOU", // LOMS
    "YvcD7x-NSN4?si=_mu2MQAx4tIfvOQN", // Slug in Bell Pepper
    "G9MrWnCpNFs?si=EP5oPHdmSFXH_4UK", // The Life Of The Party
    "Ja5cjynxNAg?si=GlAlJ8wTga37gPwn", // A Nostalgic Summer Day
    "8HUbtIjpKSo?si=g3NFNjszy2-lXax0", // Butterflies
    "rZV_0Av5zi4?si=DgnqBlpJHgq1bjpz", // Don't Blame The Trees
    "znGdFCYXd3M?si=irC-ERQ7vQFUD8jU", // if i was a worm
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
