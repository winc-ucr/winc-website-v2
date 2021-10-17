import React from "react";
import Layout from "../components/layout";
import Hero from "../components/sections/donate/Hero";
import DonateInfo from "../components/sections/donate/DonateInfo";
import "../components/sections/home/home.css";
import Seo from "../components/seo";

const About = () => {
  return (
    <Layout>
      <Seo title="Donate" />
      <Hero />
      <DonateInfo />
    </Layout>
  );
};

export default About;
