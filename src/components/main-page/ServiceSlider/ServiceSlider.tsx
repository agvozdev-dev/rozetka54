import React from 'react'
import './service-slider.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper'
import data from 'content/main-page.yaml'
import LearnMoreButton from 'components/shared/buttons/LearnMoreButton'
import CallButton from 'components/shared/buttons/CallButton'
import Container from 'components/shared/Container'
import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  {
    allFile(
      filter: { relativeDirectory: { eq: "images/main-page" } }
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

const SliderItem = (props: any) => (
  <div className="service-slider__outer-wrapper">
    <Container>
      <div className="service-slider__content-wrapper">
        <div className="swiper-button-prev service-slider__button-prev"></div>
        <div className="service-slider__content">
          <h2 className="service-slider__header">{props.header}</h2>
          <p className="service-slider__description">{props.description}</p>
          <div className="service-slider__btns-wrapper">
            <LearnMoreButton to={'electro'} />
            <CallButton />
          </div>
        </div>
        <div className="swiper-button-next service-slider__button-next"></div>
      </div>
    </Container>
  </div>
)

const getSliderItemData = (index: number) => ({
  header: data.slider[index].header,
  description: data.slider[index].description,
})

const autoplay = {
  delay: 400000,
  disableOnInteraction: false,
}

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}

const modules = [Autoplay, Navigation, Pagination]

export default () => {
  const images = useStaticQuery(query).allFile.edges.map((edge: any) =>
    getImage(edge.node.childImageSharp.gatsbyImageData)
  )

  return (
    <Swiper
      className="service-slider"
      autoplay={autoplay}
      navigation={navigation}
      pagination={true}
      slidesPerView="auto"
      modules={modules}
    >
      {images.map((image: any, index: number) => {
        const data = getSliderItemData(index)
        return (
          <SwiperSlide className="service-slider__item" key={index}>
            <SliderItem
              header={data.header}
              description={data.description}
            ></SliderItem>
            <GatsbyImage
              image={image}
              className="service-slider__img"
              alt="slider image"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
