import React from 'react'
import * as styles from './slider.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper'
import data from 'content/main-page.yaml'
import LearnMoreButton from 'components/buttons/LearnMoreButton'
import CallButton from 'components/buttons/CallButton'
import Container from 'components/Container'

const SliderItem = (props: any) => (
  <div className={`${styles.slider__outer_wrapper}`}>
    <Container>
      <div className={`${styles.slider__content_wrapper}`}>
        <div className={`swiper-button-prev`}></div>
        <div className={`${styles.slider__content}`}>
          <h2 className={`${styles.slider__header}`}>{props.header}</h2>
          <p className={`${styles.slider__description}`}>{props.description}</p>
          <div className={`${styles.slider__btns_wrapper}`}>
            <LearnMoreButton to={'electro'} />
            <CallButton />
          </div>
        </div>
        <div className={`swiper-button-next`}></div>
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

  //TODO сделать чтобы стрелки всегда были на одном месте
  return (
    <Swiper
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
      className={`${styles.slider}`}
    >
      <SwiperSlide className={`${styles.slider__item}`}>
        <SliderItem header={electro.header} description={electro.description}></SliderItem>
        <StaticImage
          className={`${styles.slider__img}`}
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
          objectFit="cover"
          src={'../../../static/images/main-page/electro.jpg'}
          alt="slider image"
        />
      </SwiperSlide>

      <SwiperSlide className={`${styles.slider__item}`}>
        <SliderItem header={video.header} description={video.description} />
        <StaticImage
          className={`${styles.slider__img}`}
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
          objectFit="cover"
          src={'../../../static/images/main-page/video.jpg'}
          alt="slider image"
        />
      </SwiperSlide>

      <SwiperSlide className={`${styles.slider__item}`}>
        <SliderItem header={internet.header} description={internet.description} />
        <StaticImage
          className={`${styles.slider__img}`}
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
