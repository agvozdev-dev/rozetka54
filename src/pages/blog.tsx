import * as React from 'react'
import Layout from 'components/shared/Layout'
import PageTitle from "/components/shared/PageTitle";
import Container from "../components/shared/Container";
import Contacts from "../components/shared/Contacts";
import PostsItems from "../components/shared/PostsItems";

// @ts-ignore
const BlogPage = () => {
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

export default BlogPage
