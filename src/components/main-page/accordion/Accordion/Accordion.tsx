import { Price } from 'components/types/Price'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useState } from 'react'
import AccordionItem from '../AccordionItem'
import './accordion.scss'

const Accordion = () => {
  const query = graphql`
    {
      data:   contentJson {
        mainPage {
          electro {
            serviceDescription
            sliderDescription
            title
          }
          internet {
            serviceDescription
            sliderDescription
            title
          }
          video {
            serviceDescription
            sliderDescription
            title
          }
        }
        prices {
          electro {
            serviceName
            servicePrice
          }
          internet {
            serviceName
            servicePrice
          }
          video {
            serviceName
            servicePrice
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

  const countOfPrices = 4
  const prices = queryResult.data.prices

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
          serviceName={service.key}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          title={service.title}
          description={service.description}
          prices={prices[service.key].slice(0, 4)}
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
