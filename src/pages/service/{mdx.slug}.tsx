import Layout from 'components/shared/Layout'
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './styles.scss'
import Container from 'components/shared/Container'

// @ts-ignore
const ServicePage = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.image)
    console.log('++++++++++++++++')
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.intro}</p>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        intro
      }
    }
  }
`

export default ServicePage
