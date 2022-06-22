import React from 'react'
import './learn-more-button.scss'
import { Link } from 'gatsby'

export default (props: { to: string }) => {
  return (
    <Link className="learn-more-btn" to={props.to}>
      Узнать больше
    </Link>
  )
}
