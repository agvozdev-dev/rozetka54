const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
    if (node.internal.type === "Mdx") {
        const { createNodeField } = actions

        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const allData = await graphql(`
{
  blogs: allMdx(filter: {frontmatter: {type: {eq: "blog"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          type
        }
      }
    }
  }
  services: allMdx(filter: {frontmatter: {type: {eq: "service"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          type
        }
      }
    }
  }
}
`)

    if (allData.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
        return
    }

    const { blogs, services }= allData.data

    blogs.edges.forEach(({ node }) => {
        createPage({
            path: `blog${node.fields.slug}`,
            component: require.resolve('./templates/blog/index.tsx'),
            context:{
                slug:node.fields.slug
            }
        })
    });

    services.edges.forEach(({ node }) => {
        createPage({
            path: `service${node.fields.slug}`,
            component: require.resolve('./templates/service/index.tsx'),
            context:{
                slug:node.fields.slug
            }
        })
    });
}