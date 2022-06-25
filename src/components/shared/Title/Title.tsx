import React from 'react'
import HighlighterText from '../HighlighterText'
import './title.scss'

type TitleProps = {
  title: string
  subtitle: string
  titleSearchWords: string[]
}

const Title: React.FC<TitleProps> = ({ title, subtitle, titleSearchWords }) => (
  <div className="title">
    <div>
      <span className="section-subtitle">{subtitle}</span>
    </div>
    <div>
      <h2 className="section-title">
        <HighlighterText text={title} searchWords={titleSearchWords} />
      </h2>
    </div>
  </div>
)

export default Title
