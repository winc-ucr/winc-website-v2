import React from "react";
import "./about.css";

const DonateInfo = () => {
  return (
    <section style={{ maxWidth: "100vw", backgroundColor: "#F6EEE3"}}>
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
            color: "#FA6C5E",
            fontFamily: "'Shrikhand', cursive",
            letterSpacing: "0.1rem",
          }}
        >
          How do I donate?
        </h1>
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
      </div>
    </section>
  );
};

export default DonateInfo;
