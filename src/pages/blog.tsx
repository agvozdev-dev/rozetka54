import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from 'components/shared/Layout'
import PageTitle from "/components/shared/PageTitle";
import Container from "../components/shared/Container";
import ServicesAndPrices from "../components/shared/ServicesAndPrices";
import Contacts from "../components/shared/Contacts";
import Posts from "../components/shared/Posts";

// Это страница блога, с ссылками на другие страницы

// @ts-ignore
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Блог">
      <section className="blog">
        <PageTitle text="Блог" />
        <Container>
          <Posts />
        </Container>
        <div className="services__wrapper">
          <Container>
            <Contacts extraClass={'blog__contacts'} />
          </Container>
        </div>
      </section>
    </Layout>

      /*
      *     <Layout pageTitle="Услуги и цены">
      <section className="services">
        <PageTitle text="Услуги и цены" />
          <Container>
            <ServicesAndPrices />
          </Container>
        <div className="services__wrapper">
          <Container>
            <Contacts extraClass={'services__contacts'} />
          </Container>
        </div>
      </section>
    </Layout>
      *
      * */
  )
}

export const query = graphql`
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/(blog)/"}}
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

export default BlogPage
