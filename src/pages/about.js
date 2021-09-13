import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/sections/home/home.css";
import Hero from "../components/sections/about/Hero";
import Team from "../components/sections/about/Team";

const About = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Team />
    </Layout>
  );
};

export default About;
