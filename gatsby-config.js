module.exports = {
  siteMetadata: {
    title: `デザインのいどころ`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `頑張って作っていますよ`,
    social: {
      twitter: `ツイッター`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.yourdomain.tld`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/contents/post`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-svg`,
    //   options: {
    //     rule: {
    //       include: /assets/,
    //     },
    //   },
    // },
    // 'gatsby-plugin-svg-sprite',
  ],
};
