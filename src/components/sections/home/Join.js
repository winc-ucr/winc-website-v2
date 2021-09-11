import { Link } from "gatsby";
import React from "react";
import Typist from "react-typist";

import { BsPeopleFill } from "react-icons/bs";
import { VscBroadcast, VscOrganization, VscSmiley } from "react-icons/vsc";
import Balsamiq from "../../../images/balsamiq.png";
import "./home.css";

const Join = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: `0 auto`,
          maxWidth: "60rem",
          padding: `2.5rem`,
        }}
      >
        <div
          style={{
            maxWidth: "650px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: "black",
              fontSize: "2rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Empowering Women in Tech
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              lineHeight: 1.56,
            }}
          >
            We're dedicated to empowering and supporting a network of leading
            women in tech at the University of California, Riverside. We're UCR
            Women in Computing.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            insert/change graphic here
            <iframe
              src="https://giphy.com/embed/UMMLUBnxmXIBytqZ8N"
              width="480"
              height="270"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "82rem",
          padding: `0 2.5rem 2.5rem`,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: "black",
              fontSize: "2rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Grow and thrive.
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              lineHeight: 1.56,
            }}
          >
            We offer all the opportunities and resources necessary for success
          </p>
          <div
            className="joinGrid"
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(17.5rem, 1fr))",
              gap: "2rem 1rem",
              justifyItems: "center",
            }}
          >
            <div
              className="actionBox"
              style={{
                backgroundColor: "#203E4D",
                color: "white",
              }}
            >
              <div className="actionBoxContent">
                <VscOrganization size="1.5em" />
                <h1
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "1.125rem",
                    textAlign: "center",
                    margin: 0,
                    letterSpacing: "0.05rem",
                  }}
                >
                  MENTORSHIP
                </h1>
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
                    MORE INFO
                  </div>
                </a>
              </div>
            </div>
            <div
              className="actionBox"
              style={{
                backgroundColor: "#F4C2A1",
              }}
            >
              <div className="actionBoxContent">
                <VscBroadcast size="1.5em" />
                <h1
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "1.125rem",
                    textAlign: "center",
                    margin: 0,
                    letterSpacing: "0.05rem",
                  }}
                >
                  PROF DEV WORKSHOPS
                </h1>
                <a
                  href="https://www.youtube.com/channel/UCpg9Xu-WaFM3KRN35f6hPNA"
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
                    YOUTUBE
                  </div>
                </a>
              </div>
            </div>
            <div
              className="actionBox"
              style={{
                backgroundColor: "#FA6C5E",
                color: "white",
              }}
            >
              <div className="actionBoxContent">
                <VscSmiley size="1.5em" />
                <h1
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "1.125rem",
                    textAlign: "center",
                    margin: 0,
                    letterSpacing: "0.05rem",
                  }}
                >
                  COMMUNITY
                </h1>
                <a
                  href="https://discord.gg/RH53n2dCFn"
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
                    DISCORD
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
