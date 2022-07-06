import Container from 'components/shared/Container'
import Title from 'components/shared/Title'
import React from 'react'
import './styles.scss'
import PostsItems from "../PostsItems";

const Posts = () => {
  return (
    <section className='posts posts__bg'>
      <Container>
        <Title
          title="Статьи и новости"
          subtitle="Делимся опытом"
          titleSearchWords={['новости']}
        />
        <PostsItems />
      </Container>
    </section>
  )
}

export default Posts
