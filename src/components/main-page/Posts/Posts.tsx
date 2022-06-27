import Container from 'components/shared/Container'
import Title from 'components/shared/Title'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import './styles.scss'

const Posts = () => {
  const nodes = useStaticQuery(query).allMdx.nodes
  return (
    <section className="posts">
      <Container>
        <Title
          title="Статьи и новости"
          subtitle="Делимся опытом"
          titleSearchWords={['новости']}
        />
        <ul className="posts__list">
          {nodes.map((node: any, index: number) => {
            const to = `/blog/${node.slug}`
            return (
              <li className="posts__item" key={`posts__item-${index}`}>
                <Link className="posts__link" to={to}>
                  <GatsbyImage
                    className="posts__image"
                    image={getImage(node.frontmatter.image)}
                    alt={node.frontmatter.image_alt}
                  />
                </Link>

                <div className="posts__content">
                  <div className="posts__content-wrapper">
                    <Link className="posts__link posts__title-link" to={to}>
                      <p className="posts__title">{node.frontmatter.title}</p>
                    </Link>

                    <p className="posts__introduction">
                      {node.frontmatter.introduction}
                    </p>
                  </div>
                  <Link className="posts__link posts__link-read" to={to}>
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

export default Posts
