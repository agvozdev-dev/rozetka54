/*

    gatsby-plugin-image
    gatsby-plugin-web-font-loader
    gatsby-plugin-react-helmet
    gatsby-plugin-global-styles
    gatsby-plugin-manifest: ^3.2.0 => 3.3.0
    gatsby-plugin-offline: ^4.2.0 => 4.3.0
    gatsby-plugin-postcss: ^4.3.0 => 4.3.0
    gatsby-plugin-react-helmet: ^4.2.0 => 4.3.0
    gatsby-plugin-sharp: ^3.2.1 => 3.3.1
    gatsby-source-filesystem: ^3.2.0 => 3.3.0
    gatsby-transformer-sharp: ^3.2.0 => 3.3.0

*/

// module.exports = {
//   pathPrefix: `/`,

//   flags: {
//     DEV_SSR: false,
//     FAST_REFRESH: false,
//     PRESERVE_WEBPACK_CACHE: false,
//     PRESERVE_FILE_DOWNLOAD_CACHE: false,
//     PARALLEL_SOURCING: false,
//   },

//   plugins: [
//     `gatsby-plugin-sass`,
//     `gatsby-plugin-image`,
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/static/images`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-tsconfig-paths`,
//       options: {
//         configFile: `${__dirname}/tsconfig.json`,
//         silent: true,
//       },
//     },
//     {
//       resolve: 'gatsby-plugin-web-font-loader',
//       options: {
//         google: {
//           families: ['Roboto:400,700', 'Montserrat Alternates:400,600', 'Philosopher:700'],
//         },
//       },
//     },
//   ],
// }

module.exports = {
  // pathPrefix: `/rozetka54-demo`,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:400,700', 'Montserrat Alternates:400,600', 'Philosopher:700'],
        },
      },
    },
  ],
}
