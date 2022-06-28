import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from 'components/shared/Layout'

// @ts-ignore
const ServicePage = ({ data }) => {
    console.log("---------------------------")
    console.log(data)
    return (
        <Layout pageTitle="Услуга">
            {data.allMdx.nodes.map((node: any) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
                    </h2>
                    <p>{node.frontmatter.intro}</p>
                </article>
            ))}
        </Layout>
    )
}

export const query = graphql`
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/(service)/"}}
      sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default ServicePage
