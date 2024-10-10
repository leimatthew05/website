// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import YoutubeEmbed from "../components/youtubeembed";
import Contacts from "../components/contacts";

// Step 2: Define your component
const Page = () => {
  const embed_ids = [
    "oMDtgr6kqUY?si=DF07PeSuXQ8EqDn3",
    "JbzJROmevvA?si=DRV8ZsqVlK7JrgkM",
    "ajJi2HEmfC0?si=UEYtn5mSOcigRoGT",
  ];

  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i} />;
  });

  return (
    <main>
      <Layout pageTitle="COMPOSITING">
        <div style={{ display: "block" }}>{embeds}</div>
        <Contacts></Contacts>
      </Layout>
    </main>
  );
};

// Step 3: Export your component
export const Head = () => <title>Matthew Lei</title>;

export default Page;