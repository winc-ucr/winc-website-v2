import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/sections/home/home.css";
import Hero from "../components/sections/donate/Hero";
import Team from "../components/sections/about/Team";
import JoinAbout from "../components/sections/about/Join";

const About = () => {
  return (
    <Layout>
      <Seo title="Donate" />
      <Hero />
    </Layout>
  );
};

export default About;
