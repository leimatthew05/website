// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="My story page is now on the homepage :)">
          <div className="section">
            <Row>
              <Col lg={6}>
                <h2>
                  <Link to={"/"}>Click Here To See!</Link>
                </h2>
              </Col>
              <Col lg={6}>
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
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Lei</title>;

// Step 3: Export your component
export default IndexPage;