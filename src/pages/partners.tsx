import * as React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Layout from 'components/shared/Layout'
import PageTitle from "/components/shared/PageTitle";
import Container from "../components/shared/Container";
import Contacts from "../components/shared/Contacts";
import PostsItems from "../components/shared/PostsItems";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

// @ts-ignore
const PartnersPage = () => {
  const edges = useStaticQuery(query).allFile.edges

  return (
    <Layout pageTitle="Блог">
      <h1 className="sr-only">Электромонтажные работы, видеонаблюдение, интернет в Новосибирске. Партнеры</h1>
      <section className="partners partners__bg">
        <PageTitle text="Партнеры"/>
        <Container>
          <p className="partners__text">
            Наша компания работает с представленными брендами.
            На все товары предоставляется гарантия. Цены от производителя.
          </p>
        </Container>
        <div className="partners__logos">
          <Container>
            <ul className="partners__list">
              {edges.map((edge: any, index: number) => {
                return (
                  <li className="partners__item" key={`partners__item-${index}`}>
                    <GatsbyImage alt='Логотип партнера' image={getImage(edge.node)}/>
                  </li>
                )
              })}

            </ul>
          </Container>
        </div>
        <Contacts />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allFile(filter: {absolutePath: {regex: "/images/partners/"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export default PartnersPage
