import React from 'react'
import * as styles from './slider.module.scss'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper'
import data from '../../content/main-page.yaml'

const SliderItem = (props: any) => {
  return (
    <div className="container">
      {/* <svg className="swiper-button-prev" viewBox="0 0 37 8" fill="#ffc962" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM37 3.5L1 3.5L1 4.5L37 4.5L37 3.5Z"
          fill="#FFC962"
        />
      </svg> */}
      <div className={`${styles.slider__content}`}>
        <h2 className={`${styles.slider__header}`}>{props.header}</h2>
        <p className={`${styles.slider__description}`}>{props.description}</p>
        <button>Узнать больше</button>
        <button>Позвонить</button>
      </div>
    </div>
  )
}

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
      autoplay={{
        delay: 400000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={`${styles.slider}`}
    >
      <SwiperSlide className={`${styles.slider__item}`}>
        <SliderItem header={electro.header} description={electro.description} />
        <StaticImage className={`${styles.slider__img}`} layout="fullWidth" loading="eager" placeholder="blurred" objectFit="cover" src={'../../../static/images/main-page/electro.jpg'} alt="slider image" />
      </SwiperSlide>

      <SwiperSlide className={`${styles.slider__item}`}>
        <SliderItem header={video.header} description={video.description} />
        <StaticImage className={`${styles.slider__img}`} layout="fullWidth" loading="eager" placeholder="blurred" objectFit="cover" src={'../../../static/images/main-page/video.jpg'} alt="slider image" />
      </SwiperSlide>

      <SwiperSlide className={`${styles.slider__item}`}>
        <SliderItem header={internet.header} description={internet.description} />
        <StaticImage className={`${styles.slider__img}`} layout="fullWidth" loading="eager" placeholder="blurred" objectFit="cover" src={'../../../static/images/main-page/internet.jpg'} alt="slider image" />
      </SwiperSlide>
    </Swiper>
  )
}
