import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useState } from 'react'
import AccordionItem from '../AccordionItem'
import './accordion.scss'

const Accordion = () => {
  const query = graphql`
    {
      electroPrices: allElectroPriceJson {
        edges {
          node {
            name
            value
          }
        }
      }
      accordionIcons: allFile(
        filter: {
          relativeDirectory: { eq: "images/main-page/accordion-icons" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
            name
          }
        }
      }
      accordionImages: allFile(
        filter: {
          relativeDirectory: { eq: "images/main-page/accordion-images" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
            name
          }
        }
      }
      arrowTopIcon: allFile(
        filter: {
          relativeDirectory: { eq: "images/icons" }
          name: { eq: "arrow-top" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `

  const queryResult = useStaticQuery(query)

  const prices = queryResult.electroPrices.edges.map((edge: any) => {
    return {
      name: edge.node.name,
      price: edge.node.value,
    }
  })

  const serviceIcons = queryResult.accordionIcons.edges.map((edge: any) => ({
    name: edge.node.name,
    gatsbyImageData: edge.node.childImageSharp.gatsbyImageData,
  }))

  const serviceImages = queryResult.accordionImages.edges.map((edge: any) => ({
    name: edge.node.name,
    gatsbyImageData: edge.node.childImageSharp.gatsbyImageData,
  }))

  const arrowTopIcon = queryResult.arrowTopIcon.edges.map((edge: any) => ({
    gatsbyImageData: edge.node.childImageSharp.gatsbyImageData,
  }))[0]

  const data = [
    {
      key: 'electro',
      title: 'Электромонтаж',
      description:
        'Стоимость электромонтажа зависит от объемов работ, сложности электрической схемы, используемых материалов и оборудования. Предоставленные цены не включают стоимость расходных материалов - сверла, диски, стяжки и т.д.',
    },
    {
      key: 'video',
      title: 'Видеонаблюдение',
      description:
        'Стоимость электромонтажа зависит от объемов работ, сложности электрической схемы, используемых материалов и оборудования. Предоставленные цены не включают стоимость расходных материалов - сверла, диски, стяжки и т.д.',
    },
    {
      key: 'internet',
      title: 'Интернет',
      description:
        'Стоимость электромонтажа зависит от объемов работ, сложности электрической схемы, используемых материалов и оборудования. Предоставленные цены не включают стоимость расходных материалов - сверла, диски, стяжки и т.д.',
    },
  ]

  const [clicked, setClicked] = useState('0')

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }

  return (
    <ul className="service__list">
      {data.map((service, index) => (
        <AccordionItem
          to={service.key}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          title={service.title}
          description={service.description}
          serviceIcon={
            serviceIcons.find(icon => icon.name === service.key).gatsbyImageData
          }
          prices={prices}
          arrowIcon={arrowTopIcon.gatsbyImageData}
          serviceImage={
            serviceImages.find(image => image.name === service.key)
              .gatsbyImageData
          }
        />
      ))}
    </ul>
  )
}

export default Accordion
