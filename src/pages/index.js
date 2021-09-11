import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Typist from "react-typist";
import "../components/sections/home/home.css";
import Hero from "../components/sections/home/Hero";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
);

export default IndexPage;
