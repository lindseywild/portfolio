module.exports = {
  siteMetadata: {
    title: `Lindsey Wild | Front End Engineer`,
    description: `Lindsey Wild is a Senior Front End Engineer with over 6 years of experience as a designer and developer.`,
    author: `@stananick`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-35182438-1",
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1D201F`,
        theme_color: `#C58882`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans\:300,400,700\/`,`Playfair Display\:300,400,700\/`],
      },
    }
  ],
}
