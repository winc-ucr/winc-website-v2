import { Link } from "gatsby";
import React from "react";
import Typist from "react-typist";
import Balsamiq from "../../../images/balsamiq.png";
import "./home.css";

const Hero = () => {
  return (
    <section>
      <div
        style={{
          backgroundColor: "#FA6C5E",
          marginTop: "5.25rem",
        }}
      >
        <div className="hero">
          <div
            className="heroMobile"
            style={{ maxWidth: "28rem", fontSize: "20rem" }}
          >
            <img
              className="heroMobile"
              src={
                "https://img.buzzfeed.com/buzzfeed-static/static/2021-04/29/0/asset/b22b1a654b93/sub-buzz-661-1619655668-13.png"
              }
            />
            {/* 👩 */}
          </div>
          <div className="heroDesc" style={{ maxWidth: "100vw" }}>
            <h1
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: "white",
                fontSize: "2rem",
                marginBottom: "0.8rem",
              }}
            >
              We are
            </h1>
            <Typist className="heroTypist" avgTypingDelay={80}>
              <span>Women in computing;</span>
              <Typist.Backspace count={19} delay={100} />
              <span>software engineers;</span>
              <Typist.Backspace count={19} delay={100} />
              <span>data scientists;</span>
              <Typist.Backspace count={16} delay={100} />
              <span>Women in Computing;</span>
            </Typist>
            <div
              style={{
                color: "#F0F0F0",
                marginBottom: "2.5rem",
                maxWidth: "25rem",
                fontSize: " clamp(0.9rem, 1.75vw, 1.1rem)",
                alignSelf: "center",
              }}
            >
              Supporting, celebratring, and advocating for women in all aspects
              of the computing field at the University of California, Riverside
              (UCR).
            </div>
            <div
              className="heroAction"
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Link to={"/about"} style={{ textDecoration: "none" }}>
                <div
                  className="actionButton"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  ABOUT
                </div>
              </Link>
              <a
                href="https://linktr.ee/winc_ucr"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="actionButton"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "0.125rem solid black",
                  }}
                >
                  JOIN NOW
                </div>
              </a>
            </div>
          </div>
          <div
            className="heroDesktop"
            style={{ maxWidth: "28rem", fontSize: "20rem" }}
          >
            <img
              className="heroDesktop"
              src={
                "https://img.buzzfeed.com/buzzfeed-static/static/2021-04/29/0/asset/b22b1a654b93/sub-buzz-661-1619655668-13.png"
              }
            />
            {/* 👩 */}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#FFEFEF",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10rem",
        }}
      >
        <a href="https://balsamiq.com/" target="_blank">
          <img src={Balsamiq} alt="balsamiq logo" className="logo-image" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
