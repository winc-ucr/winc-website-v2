import React from "react";
import "./about.css";
import HeroImage from "../../../images/winczoom.png";
const Hero = () => {
  return (
    <section style={{ marginTop: "5.25rem", backgroundColor: "#F6EEE3" }}>
      <div className="hero">
        <div
          className="heroMobile"
          style={{ width: "30rem", maxWidth: "100vw", fontSize: "20rem" }}
        >
          <img src={HeroImage} alt="heroimg" />
        </div>
        <div className="heroDesc" style={{ maxWidth: "100vw" }}>
          <h1
            style={{
              color: "#FA6C5E",
              fontSize: "3rem",
              textShadow: "0.1rem 0.1rem #F7D1B8",
              fontFamily: "'Shrikhand', cursive",
              letterSpacing: "0.075rem",
              maxWidth: "25rem",
              marginBottom: "0",
            }}
          >
            Dean's Match Challenge
          </h1>
          <p style={{ color: "#FB8377" }}>ENDS OCTOBER 31</p>
          <div
            className="aboutDesc"
            style={{
              marginBottom: "2.5rem",
              maxWidth: "25rem",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              color: "#203E4D",
            }}
          >
            {" "}
            <h3>How do i donate?</h3>
            <div style={{ textAlign: "left" }}>
              <ol>
                <li>
                  Use this link:{" "}
                  <a
                    style={{
                      color: "#203E4D",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                    href="https://crowdfunding.ucr.edu/o/university-of-california-riverside/i/ucrcrowdfunding/s/deans-match-challenge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.engr.ucr.edu/match
                  </a>
                </li>
                <li>
                  Select our club,{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Women in Computing(WinC)
                  </span>
                  , when choosing an organization
                </li>
                <li>
                  Select the amount you would like to donate, and click{" "}
                  <span style={{ fontWeight: "bold" }}>'Donate Now'</span>
                </li>
                <li>Fill out your information and proceed to payment</li>
              </ol>
            </div>
            <h3 style={{ color: "#203E4D" }}>
              What is the Dean's Match Challenge?
            </h3>
            <p>
              Our engineering college is matching{" "}
              <span style={{ fontWeight: "bold" }}>ALL</span> donations, meaning
              your impacts to WINC@UCR get{" "}
              <span style={{ fontWeight: "bold" }}>TRIPLED!</span>
            </p>
            <h3 style={{ color: "#203E4D" }}>Why donate to WINC?</h3>
            <p>
              Donations from the Match Challenge provide interview resources,
              platforms, and experiences for members to gain confidence during
              internship and graduate school recruitment! Ultimately giving back
              to all of you in our club! We're grateful for anything!
            </p>
          </div>
        </div>
        <div
          className="heroDesktop"
          style={{ maxWidth: "30rem", fontSize: "20rem" }}
        >
          {/* <div class="tenor-gif-embed" data-postid="19429903" data-share-method="host" data-aspect-ratio="2.2069" data-width="100%"><a href="https://tenor.com/view/startup-dosan-nam-dosan-nam-joohyuk-samsan-tech-gif-19429903">Startup Dosan GIF</a>from <a href="https://tenor.com/search/startup-gifs">Startup GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
          <img src={HeroImage} alt="heroimg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
