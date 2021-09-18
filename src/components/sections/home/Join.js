import { Link } from "gatsby";
import React from "react";
import Typist from "react-typist";

import { BsPeopleFill } from "react-icons/bs";
import { VscBroadcast, VscOrganization, VscSmiley } from "react-icons/vsc";
import { BsMicFill } from "react-icons/bs";
import Balsamiq from "../../../images/balsamiq.png";
import "./home.css";

const Join = () => {
  return (
    <section style={{ maxWidth: "100vw" }}>
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
            <iframe
              style={{ maxWidth: "90vw" }}
              id="programs"
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
                    letterSpacing: "0.05rem",
                    height: "2rem",
                  }}
                >
                  MENTORSHIP
                </h1>
                <p style={{ textAlign: "center", height: "4.5rem" }}>
                  learn from your peers about academia, industry, research,
                  internships and much more.
                </p>
                <a
                  href="https://linktr.ee/winc_ucr"
                  target="_blank"
                  style={{ textDecoration: "none", cursor: "not-allowed" }}
                >
                  <div
                    className="actionButton"
                    style={{
                      backgroundColor: "#A0A0A0",
                      color: "black",
                    }}
                  >
                    COMING SOON
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
                    letterSpacing: "0.05rem",
                    height: "2rem",
                    color: "#312720",
                  }}
                >
                  PROF. & TECH DEV WORKSHOPS
                </h1>
                <p style={{ textAlign: "center", height: "4.5rem" }}>
                  Tried and true methods from our network of members to break
                  into tech.
                </p>
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
                    letterSpacing: "0.05rem",
                    height: "2rem",
                  }}
                >
                  COMMUNITY
                </h1>
                <p style={{ textAlign: "center", height: "4.5rem" }}>
                  Interact with each other in a more casual setting with our
                  inclusive bonding events.
                </p>
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
            <div
              className="actionBox"
              style={{
                backgroundColor: "#FCDCA8",
                color: "#312720",
              }}
            >
              <div className="actionBoxContent">
                <BsMicFill size="1.5em" />
                <h1
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "1.125rem",
                    textAlign: "center",
                    letterSpacing: "0.05rem",
                    height: "2rem",
                  }}
                >
                  CONVERSATIONS
                </h1>
                <p style={{ textAlign: "center", height: "4.5rem" }}>
                  discuss health and well-being with "Let's Talk" and catch up
                  with WINC alumni on our Podcast
                </p>
                <a
                  href="https://podcasts.apple.com/us/podcast/women-in-conversations/id1510124573"
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
                    LISTEN
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
