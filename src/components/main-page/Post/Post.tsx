import Container from 'components/shared/Container'
import Title from 'components/shared/Title'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import './post.scss'

const Post = () => {
  const nodes = useStaticQuery(query).allMdx.nodes

  return (
    <section className="post">
      <Container>
        <Title
          title="Статьи и новости"
          subtitle="Делимся опытом"
          titleSearchWords={['новости']}
        />
        <ul className="post__list">
          {nodes.map(node => (
            <li className="post__item">
              <GatsbyImage
                className="post__image"
                image={getImage(node.frontmatter.image)}
                alt="dfcsd"
              />
              <div className="post__description">
                <p className="post__title">{node.frontmatter.title}</p>
                <p className="post__introduction">
                  {node.frontmatter.introduction}
                </p>
                <Link to={`/blog/${node.slug}`}>Читать</Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          introduction
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default Post
