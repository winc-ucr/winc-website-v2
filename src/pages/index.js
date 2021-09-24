import * as React from "react";
import Layout from "../components/layout";
import EventCards from "../components/sections/events/EventCards";
import Hero from "../components/sections/home/Hero";
import "../components/sections/home/home.css";
import Join from "../components/sections/home/Join";
import Seo from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Join />
    <div style={{backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <EventCards />
      <Link style={{
        textDecoration: 'none',
        backgroundColor: '#F7D1B8',
        padding: '1rem',
        width: '10rem',
        marginBottom: '3rem',
        textAlign: 'center',
        borderRadius: '1rem',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      to={'/events'}>
        See Calendar
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
