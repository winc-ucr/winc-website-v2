require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `UCR WINC`,
    description: `We are WINC at UCR, an inclusive community dedicated to empowering and supporting a network of leading women in tech at the University of California, Riverside.`,
    author: `@winc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/winclogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@highlight-run/gatsby-plugin-highlight",
      options: {
        orgID: process.env.ORGID,
        disableNetworkRecording: false,
        disableConsoleRecording: false,
          enableStrictPrivacy: false,
          environment: 'production',
        version: '5.2.3',
        networkRecording: true,
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
