/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Law Office of Jennifer Blagg',
    siteUrl: 'https://www.blagglaw.net',
  },
  plugins: [
    `gatsby-plugin-material-ui`, 
    `gatsby-plugin-sitemap`, 
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-124781532-1", // Google Analytics / GA
        ],
      },
    },
  ],
}
