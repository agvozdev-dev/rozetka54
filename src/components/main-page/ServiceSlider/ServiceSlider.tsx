import React from 'react'
import './service-slider.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper'
import LearnMoreButton from 'components/shared/buttons/LearnMoreLink'
import CallButton from 'components/shared/buttons/CallButton'
import Container from 'components/shared/Container'
import { graphql, useStaticQuery } from 'gatsby'
import {MainSlider} from "components/types/MainSlider";

type SliderItemType = {
  title: string
  description: string
  to: string
}

const SliderItem : React.FC<SliderItemType> = ({ title, description, to }) => (
  <div className="service-slider__outer-wrapper">
    <Container>
      <div className="service-slider__content-wrapper">
        <div className="swiper-button-prev service-slider__button-prev"></div>
        <div className="service-slider__content">
          <h2 className="service-slider__header">{title}</h2>
          <p className="service-slider__description">{description}</p>
          <div className="service-slider__btns-wrapper">
            <LearnMoreButton extraClass="service-slider__learn-more-btn" to={`/service/${to}`} />
            <CallButton />
          </div>
        </div>
        <div className="swiper-button-next service-slider__button-next"></div>
      </div>
    </Container>
  </div>
)

const autoplay = {
  delay: 10000,
  disableOnInteraction: false,
}

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}

const modules = [Autoplay, Navigation, Pagination]

export default () => {
  const queryResult = useStaticQuery(query)
  const mainPage = queryResult.data.mainPage

  let sliderData =  queryResult.images.nodes.map((node: any) => {
    const title = mainPage[node.name].title
    const description = mainPage[node.name].sliderDescription
    const order = mainPage[node.name].order

    return new MainSlider(title, description, node.name, getImage(node), order)
  }).sort(function(a: MainSlider, b: MainSlider) {
    return ((a.order < b.order) ? -1 : ((a.order > a.order) ? 1 : 0));
  })

  return (
    <Swiper
      className="service-slider"
      autoplay={autoplay}
      navigation={navigation}
      pagination={true}
      slidesPerView="auto"
      modules={modules}
    >
      {sliderData.map((data: MainSlider, index: number) => (
          <SwiperSlide className="service-slider__item" key={`service-slider-item-${index}`}>
            <SliderItem
                title={data.title}
                description={data.description}
                to={data.to}
            ></SliderItem>
            <GatsbyImage
                image={getImage(data.image)}
                className="service-slider__img"
                alt="slider image"
            />
          </SwiperSlide>
      ))}

    </Swiper>
  )
}

const query = graphql`
    {
      data: contentJson {
        mainPage {
          electro {
            order
            sliderDescription
            title
          }
          video {
            order
            sliderDescription
            title
          }
          internet {
            order
            sliderDescription
            title
          }
        }
      }
      images:  allFile(filter: {relativeDirectory: {eq: "images/main-page/main-slider"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  `


