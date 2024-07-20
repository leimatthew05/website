// Step 1: Import React
import * as React from "react";
import Gallery from "../components/gallery";
import Layout from "../components/layout";

// Step 2: Define your component
const IndexPage = () => {
  const images = [
    [
      {
        file: "../../images/sea-shepherd.jpg",
        caption: "Sea Shepherd",
        width: 3996,
        height: 2160,
      },
      {
        file: "../../images/sky-poster.jpg",
        caption: "Sky Poster",
        width: 2000,
        height: 2500,
      },
      {
        file: "../../images/self love.jpg",
        caption: "Self Love",
        width: 1920,
        height: 1080,
      },
    ],
    [
      {
        file: "../../images/nature.jpg",
        caption: "Secret Adventure",
        width: 2500,
        height: 3000,
      },
      {
        file: "../../images/touchy.jpg",
        caption: "Touchy",
        width: 2000,
        height: 2500,
      },
      {
        file: "../../images/producersshow.jpg",
        caption: "Emotional Soup",
        subcaption:
        "That feeling when you feel like you could explode in to soup.",
        width: 2500,
        height: 2500,
      },
      {
        file: "../../images/everywhere.jpg",
        caption: "The Journey Ahead",
        width: 4032,
        height: 3024,
      },
    ],
    [
      {
        file: "../../images/go-outside.jpg",
        caption: "Must Go Outside!",
        subcaption:
        "A comic I made about my dorm-dwelling habits.",
        width: 3000,
        height: 2000,
      },
      {
        file: "../../images/grounded.jpg",
        caption: "My anxieties keep me grounded.",
        width: 2000,
        height: 2000,
      },
      {
        file: "../../images/mirrors.png",
        caption: "Self Conscious",
        subcaption:
        "Sometimes, being self conscious feels like standing in a room full of mirrors.",
        width: 2500,
        height: 2500,
      },
      {
        file: "../../images/toomuch.jpg",
        caption: "Too Much!!",
        width: 3000,
        height: 2000,
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
        file: "../../images/rainstorm.png",
        caption: "The Storm",
        subcaption:
        "A quick doodle I made on a particularly stormy day.",
        width: 3840,
        height: 2160,
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
