import { Link } from "gatsby";
import React from "react";
import Typist from "react-typist";
import Balsamiq from "../../../images/balsamiq.png";
import "./home.css";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FA6C5E",
        }}
      >
        <div className="hero">
          <div
            className="heroMobile"
            style={{ height: "20rem", fontSize: "20rem" }}
          >
            👩‍💻
          </div>
          <div>
            <h1
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: "white",
                fontSize: "2rem",
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
              }}
            >
              Description goes here
              {/* WINC is dedicated to empowering and supporting a network of leading women in tech at the University of California, Riverside. */}
            </div>
            <div
              className="heroAction"
              style={{
                display: "flex",
              }}
            >
              <Link
                to={"/about"}
                style={{ marginRight: "1rem", textDecoration: "none" }}
              >
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
            style={{ height: "20rem", fontSize: "20rem" }}
          >
            👩‍💻
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
    </>
  );
};

export default Hero;
