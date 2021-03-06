import Layout from 'components/shared/Layout'
import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import './styles.scss'
import CallButton from 'components/shared/buttons/CallButton'
import Container from 'components/shared/Container'
import HighlighterText from "components/shared/HighlighterText";
import TextPoint from "../../src/components/shared/TextPoint";
import Contacts from "components/shared/Contacts";

// @ts-ignore
const ServicePage = ({data}) => {
  const image = getImage(data.mdx.frontmatter.image)
  const {title, subtitle, intro, keywords, text, points} = data.mdx.frontmatter
  const icon = getImage(data.icon)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <main className='service'>
        <GatsbyImage
          image={image}
          className="service__img"
          alt={data.mdx.frontmatter.image_alt}
        />
        <section className='service__substrate'>
          <Container>
            <h2 className="service__heading">{title}</h2>
            <p className="service__subtitle">{subtitle}</p>
            <p className="service__description">
              <HighlighterText text={intro} searchWords={keywords}/>
            </p>
            <div className="service__btns">
              <CallButton/>
            </div>
          </Container>
        </section>
        <section className="service__wrapper">
          <Container>
            <p className="service__text">
              {text}
            </p>
            <ul className="service__list">
              {points.map((point: any, index: number) => {
                return (
                  <li className="service__item" key={`service__item-${index}`}>
                    <div className="service__item-top">
                      <GatsbyImage className="service__icon" image={icon}
                                   alt='Иконка для карточки услуги'></GatsbyImage>
                      <div className="service__item-wrapper">
                        <div className="service__item-title-wrapper">
                          <span className="service__item-title">{point.title}</span>
                          <span className="service__item-number">{point.number}</span>
                        </div>
                        <div className="service__item-subtitle">{point.subtitle}</div>
                      </div>
                    </div>
                    <ul className="service__point-list">
                      {point.points.map((checkPoint: any, index: number) => {
                        return (
                          <li className="service__point-item">
                            <TextPoint text={checkPoint} searchWords={[]}/>
                          </li>
                        )
                      })}
                    </ul>
                  </li>

                )
              })}
            </ul>

          </Container>
        </section>
      </main>
      <Contacts/>
    </Layout>
  )
}

export const query = graphql`
  query ServiceBySlug($slug: String!) {
    mdx(
        fields: { slug: { eq: $slug } }
        frontmatter: { type: { eq: "service" } }
    ) {   
      body
      slug
      frontmatter {
        title
        subtitle
        intro
        text
        keywords
        image_alt
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        points {
            title
            subtitle
            number
            points
        }
      }
    }
    contentJson {
        contacts {
            phone
        }
    }
    icon: file(name: {eq: "service-point"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
  }
`

export default ServicePage
