// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="ABOUT">
        <div className="desktop-only">
          <div className="section">
            <Row>
              <Col lg={5} style={{ paddingRight: "30px" }}>
                <img src="../../images/pfp.png" width="100%" />
              </Col>
              <Col lg={6}>
                <div style={{ color: "var(--paragraph)" }}>
                  <p>
                    Hi! I'm a BFA2 CalArts Character Animation student. I'm also
                    the creator of an upcoming indie animated series,
                    "Dream Catchers"!
                  </p>
                  <p>
                    During my free time you'll find me messing around on
                    Blender, writing silly songs, and goofing off on my YouTube
                    channel.
                  </p>
                </div>
                <h2
                  style={{
                    paddingTop: "60px",
                    paddingBottom: "20px",
                    color: "var(--textcolor)",
                  }}
                >
                  LET'S BE FRIENDS :D
                </h2>
                <div>
                  <a
                    href={"https://www.instagram.com/lei_doodles"}
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
                    href={"mailto:mlei@students.calarts.edu"}
                    style={{ paddingRight: "30px" }}
                  >
                    <div
                      id="mail"
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "table-cell",
                      }}
                    ></div>
                  </a>
                  <a
                    href={"https://www.youtube.com/@lei_doodles"}
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
                  <a
                    href={"https://www.linkedin.com/in/leidoodles/"}
                    style={{ paddingRight: "30px" }}
                  >
                    <div
                      id="linkedin"
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "table-cell",
                      }}
                    ></div>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="mobile-only">
          <div className="section">
            <div style={{ paddingRight: "30px", textAlign: "center" }}>
              <img
                style={{ maxWidth: "200px" }}
                src="../../images/pfp.png"
                width="100%"
              />
            </div>
            <div style={{ paddingTop: "50px" }}>
              <div style={{ color: "var(--paragraph)" }}>
                <p>
                  Hi! I'm a BFA2 CalArts Character Animation student. I'm also
                  the creator of an upcoming indie animated series,
                  "Dream Catchers"!
                </p>
                <p>
                  During my free time you'll find me messing around on Blender,
                  writing silly songs, and goofing off on my YouTube channel.
                </p>
              </div>
              <h2
                style={{
                  paddingTop: "60px",
                  paddingBottom: "20px",
                  color: "var(--textcolor)",
                }}
              >
                LET'S BE FRIENDS :D
              </h2>
              <div style={{ paddingBottom: "80px" }}>
                <a
                  href={"https://www.instagram.com/lei_doodles"}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <div
                    id="insta"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "table-cell",
                    }}
                  ></div>
                </a>
                <a
                  href={"mailto:mlei@students.calarts.edu"}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <div
                    id="mail"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "table-cell",
                    }}
                  ></div>
                </a>
                <a
                  href={"https://www.youtube.com/@lei_doodles"}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <div
                    id="youtube"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "table-cell",
                    }}
                  ></div>
                </a>
                <a
                  href={"https://www.linkedin.com/in/leidoodles/"}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                >
                  <div
                    id="linkedin"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "table-cell",
                    }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Lei</title>;

// Step 3: Export your component
export default IndexPage;
