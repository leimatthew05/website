// Step 1: Import React
import * as React from "react";
import Gallery from "../components/gallery";
import Layout from "../components/layout";
import Contact from "../components/contacts";

// Step 2: Define your component
const IndexPage = () => {
  const images = [
    [
      {
        file: "../../images/life/IMG_4582.jpg",
        width: 3868,
        height: 2948,
      },
      {
        file: "../../images/life/IMG_4584.jpg",
        width: 3550,
        height: 3024,
      },
    ],
    [
      {
        file: "../../images/life/IMG_4216.jpg",
        width: 3477,
        height: 2739,
      },
      {
        file: "../../images/life/IMG_4217.jpg",
        width: 3320,
        height: 2193,
      },
      {
        file: "../../images/life/IMG_4218.jpg",
        width: 3504,
        height: 2339,
      },
      {
        file: "../../images/life/IMG_4223.jpg",
        width: 3386,
        height: 2749,
      },
    ],
    [
      {
        file: "../../images/life/IMG_4308.jpg",
        width: 3546,
        height: 2554,
      },
      {
        file: "../../images/life/IMG_4309.jpg",
        width: 2697,
        height: 3430,
      },
      {
        file: "../../images/life/IMG_4311.jpg",
        width: 2871,
        height: 2153,
      },
    ],
  ];

  return (
    <main>
      <Layout pageTitle="LIFE DRAWING">
        <Contact>
            <Gallery images={images} />
        </Contact>
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Lei</title>;

// Step 3: Export your component
export default IndexPage;
