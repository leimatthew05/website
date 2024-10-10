import * as React from "react";
import "../css/style.css";
import "../css/mobile.css";
import "bootstrap/dist/css/bootstrap.css";

const Contacts = ({ pageTitle, children }) => {

  return (
    <div className="contacts">
      <main>
      {children}

        <div style={{textAlign: "right",paddingRight: "2%", paddingTop:"2%", paddingBottom:"1%"}}>
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
      </main>
    </div>
  );
};

export default Contacts;