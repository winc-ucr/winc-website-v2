import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/sections/home/Hero";
import "../components/sections/home/home.css";
import Join from "../components/sections/home/Join";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Join />
  </Layout>
);

export default IndexPage;
