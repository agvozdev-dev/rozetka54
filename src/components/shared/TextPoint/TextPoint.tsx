import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import HighlighterText from '../HighlighterText'
import './text-point.scss'
import classNames from "classnames";

type TextPointProps = {
  title: string
  text: string
  extraClass?: string
}

const TextPoint: React.FC<TextPointProps> = ({title, text, extraClass}) => {
  const classes = classNames("text-point", extraClass)
  return (
    <div className={classes}>
      <StaticImage
        width={30}
        height={30}
        loading="eager"
        placeholder="blurred"
        className="text-point__img"
        src="../../../../static/images/icons/circle.svg"
        alt={'circle icon'}
      />
      <div className="text-point__wrapper">
        <HighlighterText
          className="text-point__title"
          text={title}
          searchWords={[title]}
        />
        <p className="text-point__text">{text}</p>
      </div>

    </div>
  )
}

export default TextPoint
