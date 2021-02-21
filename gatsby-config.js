module.exports = {
  siteMetadata: {
    title: `Sandesh Shrestha`,
    description: `Portfolio of Sandesh Shrestha`,
    author: `@sandeshsth`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://27b2005f7e524402b53a58634551cea8@sentry.io/1546001",
        enabled: false
      }
    },
    `gatsby-plugin-offline`,
  ],
}
