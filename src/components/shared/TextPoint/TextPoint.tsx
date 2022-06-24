import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import HighlighterText from '../HighlighterText'
import './text-point.scss'

type TextPointProps = {
  text: string
  searchWords: string[]
}

const TextPoint: React.FC<TextPointProps> = ({ text, searchWords }) => {
  return (
    <div className="text-point">
      <StaticImage
        className="text-point__img"
        src="../../../../static/images/icons/circle.png"
        alt={''}
      />
      <HighlighterText
        className="text-point__text"
        text={text}
        searchWords={searchWords}
      />
    </div>
  )
}

export default TextPoint
