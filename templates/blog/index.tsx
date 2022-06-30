import Layout from 'components/shared/Layout'
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './styles.scss'
import Container from 'components/shared/Container'

// @ts-ignore
const BlogPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="article__banner">
        <p className="article__banner-text">Делимся опытом</p>
      </div>
      <article className="article">
        <Container>
          <h1 className="article__heading">{data.mdx.frontmatter.title}</h1>
          <p className="article__introduction">
            {data.mdx.frontmatter.introduction}
          </p>
          <GatsbyImage
            className="article__image"
            image={image}
            alt={data.mdx.frontmatter.image_alt}
          />
          <MDXRenderer className="re">{data.mdx.body}</MDXRenderer>
        </Container>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogBySlug($slug: String!) {
    mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { type: { eq: "blog" } }
    ) {
      frontmatter {
        title
        introduction
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        image_alt 
      }
      body
      slug
    }
  }
`

export default BlogPage
