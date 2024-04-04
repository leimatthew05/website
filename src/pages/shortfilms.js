// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import YoutubeEmbed from "../components/youtubeembed";

// Step 2: Define your component
const Page = () => {
  const embed_ids = [
    "MURybgFO7Ls?si=-CmXCvicWvfrUXUr",
    "pZPMxcY1nGM?si=zrCOZ1E6_6JSzEuy",
    "x_JN3huCfFQ?si=FitQM7LsfT2Rs9q6",
  ];

  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i} />;
  });

  return (
    <main>
      <Layout pageTitle="SHORT FILMS">
        <div style={{ display: "block" }}>{embeds}</div>
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export const Head = () => <title>Matthew Lei</title>;

export default Page;
