// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";
import YoutubeEmbed from "../components/youtubeembed";

// Step 2: Define your component
const DreamCatchers = () => {
  const embed_ids = [
    "gwp1oQai7vM?si=ObvZt7VkNhPEF3PC",
    "dyC-9eoKR2k?si=J3X-rEOQJmFSQUeK",
    "XPgLdkUIoj0?si=ztdV78xQtPU78jps",
    "oBBig20jLJs?si=feckcqHFHDGBLeRg",
    "MBjFq2p95QY?si=vj4TRSyvcGYDsaON",
    "nhWmHGEhzcU?si=_8jeBsfJspHGl2nB",
  ];

  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i} />;
  });
  return (
    <main>
      <Layout pageTitle="DREAM CATCHERS">
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
          <div className="section">
                <h2 style={{paddingTop: "60px", paddingBottom: "20px", color: "var(--textcolor)",}}>
                  About The Show
                </h2>
                <div style={{ color: "var(--paragraph)"}}>
                  <p>
                  The indie animated show of your DREAMS! Created by a team of CalArts Students (and various friends from other schools).
                  </p>
                  <p>
                  Dream Catchers is a surreal series that follows Star and TV, who are tasked with the
                  job of traveling through people’s dreams to help them with their troubles. Join them,
                  as they learn new things, solve problems, and make new ones!
                  </p>
                  <p>
                  We've finished making Season 1, and are currently developing Season 2!
                  </p>
                  <p>
                    <Link className="link" to= {"https://thedreamcatchersshow-shop.fourthwall.com"} target="_blank">
                    Check out our website!
                    </Link>
                  </p>
                </div>
                <h2 style={{paddingTop: "60px", paddingBottom: "20px", color: "var(--textcolor)",}}>
                  My Role
                </h2>
                <div style={{ color: "var(--paragraph)"}}>
                  <p>
                  I'm a co-creator, showrunner, animator, and voice actor!
                  </p>
                  <p>
                  With the rise of independent animation, I had the idea to create this show with one of my best friend, Val Yu.
                  After bringing more friends onboard, the show quickly became the biggest project I've ever started!
                  My job on this show is to manage the production of episodes, run promotional accounts, and collaborate with musicians,
                  language dubbers, and merchandising services.
                  </p>
                  <p>
                  During episodes 1-4, I was the sole animator on the project. Thankfully, I've gotten to
                  recruite and train a team of animators to animate on episodes 5 and onward.
                  </p>
                </div>
                <h2
                  style={{
                    paddingTop: "60px",
                    paddingBottom: "20px",
                    color: "var(--textcolor)",
                  }}
                >
                  FOLLOW THE SHOW!
                </h2>
                <div style={{paddingBottom: "50px"}}>
                  <a
                    href={"https://www.youtube.com/@thedreamcatchersshow"}
                    style={{ paddingRight: "30px" }}
                    target="_blank"
                  >
                    <div
                      id="youtube"
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "table-cell",
                      }}
                    ></div>
                  </a>
                  <a
                    href={"https://www.instagram.com/thedreamcatchersshow"}
                    style={{ paddingRight: "30px" }}
                    target="_blank"
                  >
                    <div
                      id="insta"
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "table-cell",
                      }}
                    ></div>
                  </a>
                </div>
          </div>
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Lei</title>;

// Step 3: Export your component
export default DreamCatchers;