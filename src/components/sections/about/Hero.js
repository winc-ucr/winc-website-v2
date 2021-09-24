import React from "react";
import "./about.css";
import HeroImage from "../../../images/gymPhoto.jpeg";
const Hero = () => {
  return (
    <section style={{ marginTop: "5.25rem" }}>
      <div className="hero">
        <div
          className="heroMobile"
          style={{ width: "30rem", maxWidth: "100vw", fontSize: "20rem" }}
        >
          <img src={HeroImage} />
        </div>
        <div style={{ maxWidth: "100vw", marginRight: "2rem" }}>
          <h1>What is WINC?</h1>
          <div
            className="aboutDesc"
            style={{
              marginBottom: "2.5rem",
              maxWidth: "25rem",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            }}
          >
            <p>
              WINC is the University of California, Riverside's ACM-W chapter
              dedicated to empowering and supporting a network of women in tech.
            </p>
            <p>
              We are an inclusive community for anyone who is interested in
              advocating for women in tech and anyone - regardless of skill -
              who is interested in the field of computing.{" "}
            </p>
            <p>
              We host a plethora of events. Whether you want to ace that coding
              interview with our workshops, or want to attend speaker panels
              with some of the most intelligent, down-to-earth people in the
              industry, or maybe you just want to a hang out with a community,
              WINC is the place for you.
            </p>
          </div>
        </div>
        <div
          className="heroDesktop"
          style={{ maxWidth: "30rem", height: "531px", fontSize: "20rem" }}
        >
          <img src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
