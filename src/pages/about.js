// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";

// Bio and Resume
const bio = (
  <div style={{ color: "var(--paragraph)" }}>
    <p>
      Hi! I'm a BFA3 CalArts Character Animation student. I'm also
      a co-creator, showrunner, and animator on an indie animated series,
      "Dream Catchers"!
    </p>
    <p>
      During my free time, I like to make music videos,
      short films, and other nonsense for my YouTube
      channel.
    </p>
    <Link
      className="link"
      to={
        "https://docs.google.com/document/d/1VD6JdyE-SBA52g6i_UtTPPggHKcrppe1lGyWUh4qDs4/edit?usp=sharing"
      }
      target="_blank"
    >
      <p>Here's my resume</p>
    </Link>
  </div>
);

// Socials data
const socials = [
  {
    id: "mail",
    href: "mailto:mlei@students.calarts.edu",
  },
  {
    id: "insta",
    href: "https://www.instagram.com/lei_doodles",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@lei_doodles",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/leidoodles/",
  },
];

// Socials component
const SocialLinks = ({ iconSize = 50, padding = "30px", isMobile = false }) => (
  <div style={isMobile ? { paddingBottom: "80px" } : {}}>
    {socials.map((social) => (
      <a
        key={social.id}
        href={social.href}
        style={
          isMobile
            ? { paddingLeft: "10px", paddingRight: "10px" }
            : { paddingRight: padding }
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          id={social.id}
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            display: "table-cell",
          }}
        ></div>
      </a>
    ))}
  </div>
);

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="ABOUT">
        {/* Desktop */}
        <div className="desktop-only">
          <div className="section" style={{ paddingBottom: "40px" }}>
            <Row>
              <Col lg={5} style={{ paddingRight: "30px" }}>
                <img
                  src="../../images/picture.png"
                  width="100%"
                  style={{ borderRadius: "20%" }}
                />
              </Col>
              <Col lg={6}>
                {bio}
                <h2
                  style={{
                    paddingTop: "60px",
                    paddingBottom: "20px",
                    color: "var(--textcolor)",
                  }}
                >
                  SOCIALS
                </h2>
                <SocialLinks iconSize={50} padding="30px"/>
              </Col>
            </Row>
          </div>
        </div>
        {/* Mobile */}
        <div className="mobile-only">
          <div className="section" style={{ paddingBottom: "40px" }}>
            <div style={{ paddingRight: "30px", textAlign: "center" }}>
              <img
                style={{ maxWidth: "300px", borderRadius: "16px", borderRadius: "20%" }}
                src="../../images/picture.png"
                width="100%"
              />
            </div>
            <div style={{ paddingTop: "50px" }}>
              {bio}
              <h2
                style={{
                  paddingTop: "60px",
                  paddingBottom: "20px",
                  color: "var(--textcolor)",
                }}
              >
                SOCIALS
              </h2 >
              <SocialLinks iconSize={40} isMobile />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export const Head = () => <title>Matthew Lei</title>;
export default IndexPage;
