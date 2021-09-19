/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import "./layout.css";
import NavigationBar from "./Navbar/navbar";
import Footer from "./sections/footer/footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <NavigationBar />
      <div
        style={{
          width: "100%",
        }}
      >
        <main style={{ width: "100%" }}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
