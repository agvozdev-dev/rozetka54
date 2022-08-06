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
      <h1 className="sr-only">Электромонтажные работы, видеонаблюдение, интернет в Новосибирске. Блог</h1>
      <section className="blog">
        <PageTitle text="Блог" />
        <Container>
          <PostsItems />
        </Container>
        <Contacts />
      </section>
    </Layout>
  )
}

export default BlogPage
