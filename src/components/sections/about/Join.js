import React from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { SiSlack } from "react-icons/si";
import {
  VscChromeClose,
  VscChromeMinimize,
  VscOrganization,
} from "react-icons/vsc";
import "./about.css";

const JoinAbout = () => {
  return (
    <section style={{ maxWidth: "100vw", backgroundColor: "#FC998F" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: `0 auto`,
          maxWidth: "60rem",
          padding: `2.5rem`,
        }}
      >
        <h1
          style={{
            color: "#F6EEE3",
            textShadow: "0.2rem 0.2rem #203E4D",
            fontFamily: "'Shrikhand', cursive",
            letterSpacing: "0.075rem",
          }}
        >
          Become a Member
        </h1>
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
            className="actionBoxMember"
            style={{
              backgroundColor: "#F6EEE3",
              border: "0.125rem solid #203E4D",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "-2.25rem",
                left: "-1.25rem",
                borderBottom: "0.125rem solid #203E4D",
                paddingLeft: "1rem",
                width: "calc(100% + 2.5rem)",
              }}
            >
              <VscChromeClose
                style={{
                  marginRight: "0.25rem",
                  border: "0.075rem solid black",
                  borderRadius: "50%",
                }}
                size="0.75em"
              />
              <VscChromeMinimize
                style={{
                  marginRight: "0.4rem",
                  border: "0.075rem solid black",
                  borderRadius: "50%",
                }}
                size="0.75em"
              />
              <AiOutlineExpandAlt
                style={{ border: "0.075rem solid black", borderRadius: "50%" }}
                size="0.75em"
              />
            </div>
            <div className="actionBoxContent">
              <h1
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "#263F4C",
                  fontWeight: "800",
                  fontSize: "1.125rem",
                  textAlign: "left",
                  letterSpacing: "0.05rem",
                  height: "3.75rem",
                }}
              >
                Come to our meetings and events
                <VscOrganization
                  size="1.5em"
                  style={{ paddingTop: "0.5rem" }}
                />
              </h1>
              <p style={{ textAlign: "left", height: "8.75rem" }}>
                Sign-in sheets will be sent out at the beginning of every
                meeting and event. <br />
                Sign in so we can track attendance and give you access to our
                newsletters.
              </p>
            </div>
          </div>
          <div
            className="actionBoxMember"
            style={{
              backgroundColor: "#F6EEE3",
              border: "0.125rem solid #203E4D",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "-2.25rem",
                left: "-1.25rem",
                borderBottom: "0.125rem solid #203E4D",
                paddingLeft: "1rem",
                width: "calc(100% + 2.5rem)",
              }}
            >
              <VscChromeClose
                style={{
                  marginRight: "0.25rem",
                  border: "0.075rem solid black",
                  borderRadius: "50%",
                }}
                size="0.75em"
              />
              <VscChromeMinimize
                style={{
                  marginRight: "0.4rem",
                  border: "0.075rem solid black",
                  borderRadius: "50%",
                }}
                size="0.75em"
              />
              <AiOutlineExpandAlt
                style={{ border: "0.075rem solid black", borderRadius: "50%" }}
                size="0.75em"
              />
            </div>
            <div className="actionBoxContent">
              <h1
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "#263F4C",
                  fontWeight: "800",
                  fontSize: "1.125rem",
                  textAlign: "left",
                  letterSpacing: "0.05rem",
                  height: "3.75rem",
                }}
              >
                Join our Slack
                <SiSlack size="1.5em" style={{ paddingTop: "0.5rem" }} />
              </h1>
              <p style={{ textAlign: "left", height: "8.75rem" }}>
                Join our Slack to communicate with us and have access to all our
                channels including #opportunities — a great resouce for seeking
                internships and on-campus jobs.
              </p>
            </div>
          </div>
          <div
            className="actionBoxMember"
            style={{
              backgroundColor: "#F6EEE3",
              border: "0.125rem solid #203E4D",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "-2.25rem",
                left: "-1.25rem",
                borderBottom: "0.125rem solid #203E4D",
                paddingLeft: "1rem",
                width: "calc(100% + 2.5rem)",
              }}
            >
              <VscChromeClose
                style={{
                  marginRight: "0.25rem",
                  border: "0.075rem solid black",
                  borderRadius: "50%",
                }}
                size="0.75em"
              />
              <VscChromeMinimize
                style={{
                  marginRight: "0.4rem",
                  border: "0.075rem solid black",
                  borderRadius: "50%",
                }}
                size="0.75em"
              />
              <AiOutlineExpandAlt
                style={{ border: "0.075rem solid black", borderRadius: "50%" }}
                size="0.75em"
              />
            </div>
            <div className="actionBoxContent">
              <h1
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "#263F4C",
                  fontWeight: "800",
                  fontSize: "1.125rem",
                  textAlign: "left",
                  letterSpacing: "0.05rem",
                  height: "3.75rem",
                }}
              >
                Follow our socials
                <MdNotificationsNone
                  size="1.5em"
                  style={{ paddingTop: "0.5rem" }}
                />
              </h1>
              <p style={{ textAlign: "left", height: "8.75rem" }}>
                Following our socials will keep you updated on what's happening
                with Winc! <br />
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://linktr.ee/winc_ucr"
          target="_blank"
          rel="norefferrer"
          style={{
            textDecoration: "none",
            marginTop: "2rem",
          }}
        >
          <div
            className="actionButton"
            style={{
              backgroundColor: "#F6EEE3",
              border: "0.125rem solid #203E4D",
              color: "#203E4D",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              All links
              <FiExternalLink style={{ marginLeft: "0.25rem" }} />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default JoinAbout;
