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
  ];

  var embeds = embed_ids.map((i) => {
    return <YoutubeEmbed embedId={i} />;
  });
  return (
    <main>
      <Layout pageTitle="DREAM CATCHERS">
          <div className="section">
              <div style={{ display: "block" }}>{embeds}</div>
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
                  So far, we've start production on our fifth episode. Our plan is to create 6 episodes in Season 1, and raise funding for a second Season!
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
                  After recruiting more friends onboard, the show quickly became the biggest project I've ever started!
                  Working with writers, visual artists, and musicians, my job is to manage the production, and make sure that
                  the episodes are being made on a reasonable but timely schedule.
                  </p>
                  <p>
                  On top of voicing one of the main characters, I'm also (currently) the only animator on the team, responsible for the layout,
                  staging, and character acting of every episode. Working on this show has taught me a lot about collaborating with other artists,
                  and being a good leader.
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
                    href={"https://www.instagram.com/thedreamcatchersshow"}
                    style={{ paddingRight: "30px" }}
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
                  <a
                    href={"https://www.youtube.com/@thedreamcatchersshow"}
                    style={{ paddingRight: "30px" }}
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