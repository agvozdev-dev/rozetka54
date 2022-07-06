import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/shared/Layout'
import PageTitle from "/components/shared/PageTitle";
import Container from "../components/shared/Container";
import Contacts from "../components/shared/Contacts";
import PostsItems from "../components/shared/PostsItems";

// @ts-ignore
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Блог">
      <section className="blog">
        <PageTitle text="Блог" />
        <Container>
          <PostsItems />
        </Container>
        <div className="services__wrapper">
          <Container>
            <Contacts extraClass={'blog__contacts'} />
          </Container>
        </div>
      </section>
    </Layout>
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
