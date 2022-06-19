import React from 'react'
import * as styles from './call-btn.module.scss'
import data from 'content/shared.yaml'

export default () => {
  return (
    <a className={`${styles.call_btn}`} href={`tel:${data.phone}`}>
      Позвонить
    </a>
  )
}
