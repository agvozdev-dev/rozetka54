import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import LearnMoreButton from "../buttons/LearnMoreLink";
import TablePrice from "../../shared/TablePrice";
import './styles.scss'

const ServicesAndPrices = () => {
  const { allMdx } = useStaticQuery(query)

  return (
        <ul className="services-and-prices__list">
          {allMdx.edges.map((edge: any, index: number) => {
            return (
              <li className="services-and-prices__item" key={`services-and-prices__item-${index}`}>
                <h2 className="services-and-prices__heading">{edge.node.frontmatter.title}</h2>
                <div className="services-and-prices__content">
                  <GatsbyImage
                    className="services-and-prices__image"
                    image={getImage(edge.node.frontmatter.image)}
                    alt={edge.node.frontmatter.image_alt}
                  />
                  <p className="services-and-prices__text">
                    {edge.node.frontmatter.text}
                  </p>
                </div>
                <TablePrice prices={edge.node.frontmatter.prices} tableExtraClass="services-and-prices__table"/>
                <LearnMoreButton to={`/service/${edge.node.slug}`} />
              </li>
            )
          })}
        </ul>
  )
}

const query = graphql`
{
  allMdx(filter: {frontmatter: {type: {eq: "prices"}}}
        sort: {fields: frontmatter___order}
         ) {
    edges {
      node {
        frontmatter {
          title
          text
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          image_alt
          prices {
            serviceName
            servicePrice
          }
        }
        slug
      }
    }
  }
}
  `

export default ServicesAndPrices
