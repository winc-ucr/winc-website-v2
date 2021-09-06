import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Typist from "react-typist";
import "../components/sections/home/home.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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
      SPONSORS
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
);

export default IndexPage;
