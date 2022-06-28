import Layout from 'components/shared/Layout'
import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import './styles.scss'
import CallButton from 'components/shared/buttons/CallButton'
import Container from 'components/shared/Container'
import HighlighterText from "components/shared/HighlighterText";


// @ts-ignore
const ServicePage = ({data}) => {
    console.log(data)
    const image = getImage(data.mdx.frontmatter.image)
    const {phone} = data.contentJson.contacts
    const { title, subtitle, intro, keywords } = data.mdx.frontmatter

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
                            <HighlighterText text={intro} searchWords={keywords} />
                        </p>

                        <div className="service__btns">
                            <CallButton />
                        </div>
                    </Container>
                </section>
            </main>

        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subtitle
        intro
        image_alt
        keywords
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    contentJson {
        contacts {
      phone
    }
  }
  }
`

export default ServicePage
