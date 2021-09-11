import React from "react";
import Typist from "react-typist";
import { Link, navigate, graphql, useStaticQuery } from "gatsby";

import Layout from "../../layout";
import "./home.css";
import Balsamiq from '../../../images/balsamiq.png'

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FA6C5E",
        }}
      >
        <div
          style={{
            minHeight: "calc(100vh - 5.25rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
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
              <span>Women in computing;</span>
            </Typist>
            <div 
              style={{
                display: 'flex'
              }}
            >
            <Link to={"/about"} style={{marginRight: '1rem'}}>
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
            <a href="https://linktr.ee/winc_ucr" target="_blank" style={{textDecoration: 'none'}}>
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
          <div style={{ height: "auto", fontSize: "20rem" }}>👩‍💻</div>
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
          <img
            src={Balsamiq}
            alt="balsamiq logo"
            className="logo-image"
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
