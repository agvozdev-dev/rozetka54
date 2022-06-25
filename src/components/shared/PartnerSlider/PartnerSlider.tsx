import React from 'react'
import './partner-slider.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Container from '../Container'

export const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { eq: "images/partners" } }
      sort: { fields: name }
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

const autoplay = {
  delay: 3000,
  disableOnInteraction: false,
}

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}

const modules = [Autoplay, Navigation]

export default () => {
  const images = useStaticQuery(query).allFile.edges.map((edge: any) =>
    getImage(edge.node.childImageSharp.gatsbyImageData)
  )

  return (
    <section className="partner">
      <div className="partner__slider-outer-wrapper">
        <Container extraClass="container--large">
          <div className="partner__inner-wrapper">
            <div className="swiper-button-prev partner-slider__button-prev"></div>
            <Container>
              <Swiper
                className="partner-slider"
                autoplay={autoplay}
                navigation={navigation}
                slidesPerView={5}
                loop={true}
                modules={modules}
              >
                {images.map((image: any, index: number) => {
                  return (
                    <SwiperSlide className="partner-slider__item" key={index}>
                      <GatsbyImage
                        image={image}
                        className="partner-slider__img"
                        alt="partner slider image"
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </Container>
            <div className="swiper-button-next partner-slider__button-next"></div>
          </div>
        </Container>
      </div>
      <Link className="partner__link" to="partners">
        Подробнее
      </Link>
    </section>
  )
}
