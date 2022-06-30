module.exports = {
  //pathPrefix: 'rozetka54-demo',
  siteMetadata: {
    title: 'Rozetka 54',
    description:
      'Электромонтаж под ключ, установка видеонаблюдения, подключение интернета. Фиксированная цена. Сюблюдение сроков. Порядок на объекте',
    url: 'https://www.rozetka54.ru',
    image: '/static/images/logo/logo.png',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `service`,
        path: `${__dirname}/content/service`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prices`,
        path: `${__dirname}/content/prices`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main-slider-images`,
        path: `${__dirname}/static/images/main-page/main-slider`,
      },
    },
    `gatsby-plugin-mdx`,
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
          families: ['Roboto:400,700', 'Philosopher:700', 'Abril Fatface:400'],
        },
      },
    },
  ],
}
