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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `dkuja9bpqvhg`,
                accessToken: `b3d994d9baff5a3d2505a74d000e38e37ac811a7cfe3633257c018b2f3665945`,
            },
     },
  `gatsby-transformer-remark`,

  ],
}
