// Step 1: Import React
import * as React from "react";
import Gallery from "../components/gallery";
import Layout from "../components/layout";
import YoutubeEmbed from "../components/youtubeembed";
import Contacts from "../components/contacts";

// Step 2: Define your component
const Page = () => {
  return (
    <main>
      <Layout pageTitle="STORY">
        <div className="desktop-only">
          <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/245b0364686242c1bd60ebd052974cc4"
            title="The Encounter"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0 20% auto", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "60%", height: "600px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>
          <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/ba8a719e6c4d4ab59609c9a765cadb05"
            title="Chewed Pen"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0 20% auto", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "60%", height: "600px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>
          <iframe
            style={{width: "60%", height: "600px", margin: "0 20% auto"}}
            src="https://www.youtube.com/embed/GyjHQcxAK9A?si=EdZ339pb3IJ48Ipk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
          <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/65d53621ec694c25ac15c66efa9fecff"
            title="Heathers (&quot;Beautiful&quot; Part One)"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0 20% auto", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "60%", height: "600px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>

          <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/cf25f19fea7143eab916a444c798fb75"
            title="My Pet Land Shark"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0 20% auto", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "60%", height: "600px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>
        </div>



        <div className="mobile-only">
         <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/245b0364686242c1bd60ebd052974cc4"
            title="The Encounter"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "100%", height: "300px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>
          <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/ba8a719e6c4d4ab59609c9a765cadb05"
            title="Chewed Pen"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "100%", height: "300px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>

          <iframe
            style={{width: "100%", height: "300px", margin: "0"}}
            src="https://www.youtube.com/embed/GyjHQcxAK9A?si=EdZ339pb3IJ48Ipk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
          <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/65d53621ec694c25ac15c66efa9fecff"
            title="Heathers (&quot;Beautiful&quot; Part One)"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "100%", height: "300px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>
          <iframe
            class="speakerdeck-iframe"
            frameborder="0"
            src="https://speakerdeck.com/player/cf25f19fea7143eab916a444c798fb75"
            title="My Pet Land Shark"
            allowfullscreen="true"
            style={{border: "0px", background: "padding-box padding-box rgba(0, 0, 0, 0.1)", margin: "0", padding: "0px", borderradius: "6px", boxshadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px", width: "100%", height: "300px", aspectratio: "560 / 314;"}}
            data-ratio="1.78343949044586">
          </iframe>
        </div>
        <Contacts></Contacts>
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Matthew Lei</title>;

// Step 3: Export your component
export default Page;
