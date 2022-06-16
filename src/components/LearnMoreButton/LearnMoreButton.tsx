import React from 'react'
import * as styles from './learn-more-btn.module.scss'
import { Link } from 'gatsby'

export default (props: { to: string }) => {
  return (
    <Link className={styles.learn_more_btn} to={props.to}>
      Узнать больше
    </Link>
  )
}
