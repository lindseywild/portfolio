module.exports = {
  siteMetadata: {
    title: `Lindsey Wild | Front End Engineer`,
    description: `Lindsey Wild is a Front End Engineer with over 6 years of experience as a designer and developer.`,
    author: `@stananick`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Playfair Display`,
            variants: [`300`, `400`, `700`]
          },
        ],
      },
    }
  ],
}
