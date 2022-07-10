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
            <section className="partners partners__bg">
                <PageTitle text="Партнеры" />
                <Container>

                    <ul className="partners__list">
                            {edges.map((edge: any) => {
                                return (
                                    <li className="partners__item">
                                        <GatsbyImage alt='Логотип партнера' image={getImage(edge.node)} />
                                    </li>
                                )
                            })}

                    </ul>
                </Container>

                <div className="partners__wrapper">
                    <Container>
                        <Contacts extraClass={'partners__contacts'} />
                    </Container>
                </div>
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
