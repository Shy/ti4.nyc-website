require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Twilight Imperium NYC",
    author: "Shy Ruparel",
    description: "Twilight Imperium NYC Website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.trackingId,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken,
                host: process.env.host
            },
     },
  `gatsby-transformer-remark`,

  ],
}
