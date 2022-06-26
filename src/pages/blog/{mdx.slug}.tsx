import Layout from 'components/shared/Layout'
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './blog.scss'
import Container from 'components/shared/Container'

const BlogPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

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
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <MDXRenderer className="re">{data.mdx.body}</MDXRenderer>
        </Container>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        introduction
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPage
