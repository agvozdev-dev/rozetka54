import React from 'react'
import './learn-more-button.scss'
import { Link } from 'gatsby'
import classNames from "classnames";

export default (props: { to: string, extraClass?: string }) => {
  const classes = classNames("learn-more-btn", props.extraClass)
  return (
    <Link className={classes} to={props.to}>
      Узнать больше
    </Link>
  )
}
