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
        file: "../../images/IMG_4216.jpg",
        width: 3477,
        height: 2739,
      },
      {
        file: "../../images/IMG_4217.jpg",
        width: 3320,
        height: 2193,
      },
    ],
    [
      {
        file: "../../images/IMG_4218.jpg",
        width: 3504,
        height: 2339,
      },
      {
        file: "../../images/IMG_4223.jpg",
        width: 3386,
        height: 2749,
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
