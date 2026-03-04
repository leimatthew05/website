// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";
import YoutubeEmbed from "../components/youtubeembed";
import Gallery from "../components/gallery";

// Step 2: Define your component
const desktopStyle = {
  border: "0px",
  background: "padding-box padding-box rgba(0, 0, 0, 0)",
  margin: "0 0% auto",
  padding: "0px",
  borderradius: "6px",
  boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
  width: "100%",
  height: "600px",
  aspectratio: "560 / 314;",
};

const mobileStyle = {
  border: "0px",
  background: "padding-box padding-box rgba(0, 0, 0, 0)",
  margin: "0",
  padding: "0px",
  borderradius: "6px",
  boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
  width: "100%",
  height: "300px",
  aspectratio: "560 / 314;",
};

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

  const images = [
    [
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_2.png",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_5.png",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_1.png",
        width: 1920,
        height: 1080,
      },
    ],
    [
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_7.png",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_4.png",
        width: 1125,
        height: 1214,
      },
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_9.png",
        width: 2000,
        height: 2000,
      },

    ],
    [
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_8.png",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_6.png",
        width: 1920,
        height: 1080,
      },
      {
        file: "../../images/Dream Catchers VisDev/DC_Visdev_3.png",
        width: 1920,
        height: 1080,
      },
    ],
  ];

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
                  We've finished making Season 1, and are currently developing Season 2! We hope to
                  get more eyes on this series while we continue doing what we love.
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
                  It started as a small side project between my friend, Val Yu, and I that we'd work on during our free time at CalArts.
                  After bringing more friends onboard, the show quickly became the biggest project I've ever started!
                  I've taken this unique opportunity to try many hats including writing, storyboarding, production management,
                  modeling/rigging, social media management, and more.
                  </p>
                  <p>
                  During episodes 1-4, I was the sole animator on the project. Thankfully, I've gotten to
                  recruite and train a team of animators to animate on episodes 5 and onward.
                  </p>
                </div>

                <h2 style={{paddingTop: "60px", paddingBottom: "20px", color: "var(--textcolor)",}}>
                  Storyboards
                </h2>
                <div className="desktop-only">
                  <iframe
                    className="speakerdeck-iframe"
                    frameBorder="0"
                    src="https://speakerdeck.com/player/72ede410c1344835a94f3b17ff5d43a7"
                    title="Dream Catchers Presentation"
                    allowFullScreen={true}
                    style={desktopStyle}
                    data-ratio="1.78343949044586"
                  />
                </div>
                <div className="mobile-only">
                  <iframe
                    className="speakerdeck-iframe"
                    frameBorder="0"
                    src="https://speakerdeck.com/player/72ede410c1344835a94f3b17ff5d43a7"
                    title="Dream Catchers Presentation"
                    allowFullScreen={true}
                    style={mobileStyle}
                    data-ratio="1.78343949044586"
                  />
                </div>

                <h2 style={{paddingTop: "60px", paddingBottom: "20px", color: "var(--textcolor)",}}>
                  Visual Development
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "20vh",
                    padding: "2rem 0",
                  }}
                >
                  <Gallery images={images} />
                </div>

                <h2 style={{paddingTop: "60px", paddingBottom: "20px", color: "var(--textcolor)",}}>
                  Animation Director
                </h2>
                <div style={{ color: "var(--paragraph)"}}>
                  <p>
                  After onboarding new aniamtors, I needed to step up from sole animator to animation director.
                  I created an OFFICIAL GUIDE to the show's animation style and pipeline to help train our team
                  of animators, regardless of their experience level with Blender or 3D animation.
                  </p>
                  <p>
                    <Link className="link" to= {"https://docs.google.com/document/d/1VjG8_D_HVb4heKUQF1iC7U3Er-F6HTcNysCfp-zmIU4/edit?usp=sharing"} target="_blank">
                    The Official Animation Guide 
                    </Link>
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