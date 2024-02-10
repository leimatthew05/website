// Step 1: Import React
import * as React from "react";
import Gallery from "../components/gallery";
import Layout from "../components/layout";

// Step 2: Define your component
const IndexPage = () => {
  const images = [
    [
      {
        file: "../../images/rainstorm.png",
        caption: "The Storm",
        subcaption:
        "A quick doodle I made on a particularly stormy day.",
        width: 3840,
        height: 2160,
      },
      {
        file: "../../images/stage fright.png",
        caption: "Stage Fright",
        subcaption:
        "Inspired by when I got so dizzy the lights were blinding and time froze.",
        width: 2500,
        height: 2500,
      },
    ],
    [
      {
        file: "../../images/dead-inside.png",
        caption: "Dead Inside",
        subcaption:
        "That moment when you feel empty inside.",
        width: 2500,
        height: 3000,
      },
      {
        file: "../../images/art-block-2.png",
        caption: "Art Block",
        subcaption:
        "The perfect thing to draw when I don't feel like drawing.",
        width: 3840,
        height: 2160,
      },
    ],
    [
      {
        file: "../../images/13-final.png",
        caption: "Sky",
        width: 2500,
        height: 2500,
      },
      {
        file: "../../images/comet_0005_Layer-2.png",
        caption: "Comet",
        width: 2500,
        height: 2500,
      },
      {
        file: "../../images/aster_0005_Layer-10.png",
        caption: "Aster",
        width: 2500,
        height: 2500,
      },
    ],
    [
      {
        file: "../../images/robots-example.jpg",
        caption: "The Last Human On Earth",
        subcaption:
          "In a world run by robots, a young girl is raised as the last human on Earth.",
        width: 2880,
        height: 2304,
      },
      {
        file: "../../images/robots-human.jpg",
        caption: "The Last Human On Earth (Reaction Sheet)",
        subcaption:
        "In a world run by robots, a young girl is raised as the last human on Earth.",
        width: 2880,
        height: 2304,
      },
      {
        file: "../../images/robots-robots.jpg",
        caption: "The Last Human On Earth (Robot Designs)",
        subcaption:
        "In a world run by robots, a young girl is raised as the last human on Earth.",
        width: 2880,
        height: 2304,
      },
    ],
  ];

  return (
    <main>
      <Layout pageTitle="PERSONAL">
        <Gallery images={images} />
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Lei</title>;

// Step 3: Export your component
export default IndexPage;
