import { Link } from "gatsby";
import React from "react";
import "./about.css";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div
          className="heroMobile"
          style={{ height: "20rem", fontSize: "20rem" }}
        >
          😉
        </div>
        <div>
          <h1>What is WINC?</h1>
          <p>Winc is cool :P</p>
          <p>We do cool events</p>
          <p>Andrei codes at winc so you know it's legit</p>
        </div>
        <div
          className="heroDesktop"
          style={{ height: "20rem", fontSize: "20rem" }}
        >
          😉
        </div>
      </div>
    </section>
  );
};

export default Hero;
