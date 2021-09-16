import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Typist from "react-typist";
import "../components/sections/home/home.css";
import Hero from "../components/sections/home/Hero";
import Join from "../components/sections/home/Join";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Join />
  </Layout>
);

export default IndexPage;
