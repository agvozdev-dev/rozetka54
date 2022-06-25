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


  const serviceIcons = [{
    name: 'electro',
    svg:         <svg viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.0382 45.5C25.7828 45.5 22.5287 42.25 22.5287 38C22.5287 33.75 25.7828 30.5 30.0382 30.5C34.2936 30.5 37.5478 33.75 37.5478 38C37.5478 42.25 34.2936 45.5 30.0382 45.5ZM30.0382 35.5C28.5363 35.5 27.535 36.5 27.535 38C27.535 39.5 28.5363 40.5 30.0382 40.5C31.5401 40.5 32.5414 39.5 32.5414 38C32.5414 36.5 31.5401 35.5 30.0382 35.5Z" fill="#FFC962"/>
    <path d="M41.5529 31C40.8019 31 40.051 30.75 39.5503 30C37.0471 27 33.5427 25.5 29.7879 25.5C26.0331 25.5 22.5287 27.25 20.0255 30C19.0242 31 17.5223 31.25 16.521 30.25C15.5198 29.25 15.2694 27.75 16.2707 26.75C19.7752 22.75 24.7815 20.5 30.0382 20.5C35.2949 20.5 40.3013 22.75 43.5554 27C44.3064 28 44.3064 29.75 43.3051 30.5C42.8045 30.75 42.3038 31 41.5529 31Z" fill="#FFC962"/>
    <path d="M49.3127 24.75C48.5618 24.75 47.8108 24.5 47.3102 23.75C43.3051 18.5 36.7968 15.5 30.0382 15.5C23.2796 15.5 16.7713 18.5 12.5159 23.75C11.765 24.75 10.0127 25 9.01145 24C8.01017 23 7.75985 21.5 8.76113 20.5C14.0178 14.25 21.7777 10.5 30.0382 10.5C38.2987 10.5 46.0586 14.25 51.3153 20.5C52.0662 21.5 52.0662 23.25 51.0649 24C50.5643 24.5 50.0637 24.75 49.3127 24.75Z" fill="#FFC962"/>
    <path d="M57.0726 18.25C56.3217 18.25 55.5707 18 55.0701 17.25C49.0624 9.75 39.8006 5.5 30.0382 5.5C20.2758 5.5 11.014 9.75 4.75605 17.5C4.00509 18.5 2.25286 18.75 1.25159 17.75C0.250316 17 -2.44379e-06 15.25 1.00127 14.25C8.01019 5.5 18.7739 0.5 30.0382 0.5C41.3025 0.5 52.0662 5.5 59.0752 14.25C59.8261 15.25 59.8261 17 58.8248 17.75C58.3242 18.25 57.8236 18.25 57.0726 18.25Z" fill="#FFC962"/>
    </svg>,
    
  }]

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
