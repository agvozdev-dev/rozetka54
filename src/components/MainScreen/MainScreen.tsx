import React from 'react'
import * as styles from './main-screen.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

export default () => {
  return (
    <div className={`${styles.slider}`}>
      <StaticImage layout="fullWidth" loading="eager" placeholder="blurred" objectFit="cover" className={`${styles.slider__img}`} src={'../../../static/images/main-page/bg.jpg'} alt="slider image" />
    </div>
  )
}
