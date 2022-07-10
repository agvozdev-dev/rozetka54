import './styles.scss'
import classNames from "classnames";
import { Link } from 'gatsby'

import React from 'react'

export default (props: { to: string, extraClass?: string }) => {
  const classes = classNames("learn-more-btn", props.extraClass)
  return (
    <Link className={classes} to={props.to}>
      Узнать больше
    </Link>
  )
}
