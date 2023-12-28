import * as React from "react";
import { NavLink } from "reactstrap";
import "../css/style.css";
import "../css/mobile.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className="mobilemenu">
        <div
          style={{
            fontSize: "70px",
            paddingBottom: "50px",
            color: "var(--textcolor)",
          }}
        >
          MENU
        </div>
        <NavLink style={{ paddingBottom: "20px" }}>
          <Link to={"/"}>Character Design</Link>
        </NavLink>
        <NavLink style={{ paddingBottom: "20px" }}>
          <Link to={"/story/"}>Story</Link>
        </NavLink>
        <NavLink style={{ paddingBottom: "20px" }}>
          <Link to={"/shortfilms/"}>Short Films</Link>
        </NavLink>
        <NavLink style={{ paddingBottom: "20px" }}>
          <Link to={"/about/"}>About</Link>
        </NavLink>
        <div style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <a
            href={"https://www.instagram.com/lei_doodles"}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div
              id="insta"
              style={{ width: "40px", height: "40px", display: "table-cell" }}
            ></div>
          </a>
          <a
            href={"mailto:mlei@students.calarts.edu"}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div
              id="mail"
              style={{ width: "40px", height: "40px", display: "table-cell" }}
            ></div>
          </a>
          <a
            href={"https://www.youtube.com/@lei_doodles"}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div
              id="youtube"
              style={{ width: "40px", height: "40px", display: "table-cell" }}
            ></div>
          </a>
          <a
            href={"https://www.linkedin.com/in/leidoodles/"}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div
              id="linkedin"
              style={{ width: "40px", height: "40px", display: "table-cell" }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
