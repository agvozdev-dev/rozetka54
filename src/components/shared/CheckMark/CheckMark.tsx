import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import HighlighterText from '../HighlighterText'
import './check-mark.scss'

type CheckMarkProps = {
  text: string
  searchWords: string[]
}

const CheckMark: React.FC<CheckMarkProps> = ({ text, searchWords }) => {
  return (
    <>
      <StaticImage
        className="circle__img"
        src="../../../../static/images/icons/circle.png"
        alt={''}
      />
      <span className="check-mark">
        <HighlighterText text={text} searchWords={searchWords} />
      </span>
    </>
  )
}

export default CheckMark
