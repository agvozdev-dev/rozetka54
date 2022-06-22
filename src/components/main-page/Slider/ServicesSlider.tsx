import React from 'react'
import './services-slider.scss'
import { StaticImage } from 'gatsby-plugin-image'
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

const SliderItem = (props: any) => (
  <div className="slider__outer-wrapper">
    <Container>
      <div className="slider__content-wrapper">
        <div className="swiper-button-prev"></div>
        <div className="slider__content">
          <h2 className="slider__header">{props.header}</h2>
          <p className="slider__description">{props.description}</p>
          <div className="slider__btns-wrapper">
            <LearnMoreButton to={'electro'} />
            <CallButton />
          </div>
        </div>
        <div className="swiper-button-next"></div>
      </div>
    </Container>
  </div>
)

const getSliderItemData = (index: number) => ({
  header: data.slider[index].header,
  description: data.slider[index].description,
})

export default () => {
  const electro = getSliderItemData(0)
  const video = getSliderItemData(1)
  const internet = getSliderItemData(2)

  return (
    <Swiper
      className="slider"
      autoplay={{
        delay: 400000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className="slider__item">
        <SliderItem header={electro.header} description={electro.description}></SliderItem>
        <StaticImage
          className="slider__img"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
          objectFit="cover"
          src={'../../../static/images/main-page/electro.jpg'}
          alt="slider image"
        />
      </SwiperSlide>

      <SwiperSlide className="slider__item">
        <SliderItem header={video.header} description={video.description} />
        <StaticImage
          className="slider__img"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
          objectFit="cover"
          src={'../../../static/images/main-page/video.jpg'}
          alt="slider image"
        />
      </SwiperSlide>

      <SwiperSlide className="slider__item">
        <SliderItem header={internet.header} description={internet.description} />
        <StaticImage
          className="slider__img"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
          objectFit="cover"
          src={'../../../static/images/main-page/internet.jpg'}
          alt="slider image"
        />
      </SwiperSlide>
    </Swiper>
  )
}
