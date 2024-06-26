// Step 1: Import React
import * as React from "react";
import Gallery from "../components/gallery";
import Layout from "../components/layout";

// Step 2: Define your component
const Page = () => {
  const images = [
    [
      {
        file: "../../images/cnidaria-background.jpg",
        caption: "Cnidaria",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/achilles.jpg",
        caption: "The Song Of Achilles",
        width: 6300,
        height: 2700,
      },
    ],
    [
      {
        file: "../../images/fox-1.jpg",
        caption: "The Fox And The Grapes (1/3)",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/fox-2.jpg",
        caption: "The Fox And The Grapes (2/3)",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/fox-3.jpg",
        caption: "The Fox And The Grapes (3/3)",
        width: 1920,
        height: 1080,
      },
    ],
    [
      {
        file: "../../images/marble.jpg",
        caption: "I Lost My Marbles",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/aclockalypse.jpg",
        caption: "Aclockalypse",
        width: 1920,
        height: 1080,
      },
    ],
  ];

  return (
    <main>
      <Layout pageTitle="Visual Development">
        <Gallery images={images} />
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default Page;
