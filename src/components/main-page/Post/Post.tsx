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
          {nodes.map((node: any, index: number) => {
            const to = `/blog/${node.slug}`
            return (
              <li className="post__item" key={`post__item-${index}`}>
                <Link className="post__link" to={to}>
                  <GatsbyImage
                    className="post__image"
                    image={getImage(node.frontmatter.image)}
                    alt={node.frontmatter.image_alt}
                  />
                </Link>

                <div className="post__content">
                  <div className="post__content-wrapper">
                    <Link className="post__link post__title-link" to={to}>
                      <p className="post__title">{node.frontmatter.title}</p>
                    </Link>

                    <p className="post__introduction">
                      {node.frontmatter.introduction}
                    </p>
                  </div>
                  <Link className="post__link post__link-read" to={to}>
                    Читать
                  </Link>
                </div>
              </li>
            )
          })}
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
          image_alt
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
