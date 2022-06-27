import React from 'react'
import './highlighter-text.scss'
import Highlighter from 'react-highlight-words'

type HighlighterTextProps = {
  text: string
  searchWords: string[]
  className?: string
}

const HighlighterText: React.FC<HighlighterTextProps> = ({
  text,
  searchWords,
  className,
}) => (
  <Highlighter
    highlightClassName="highlighter-text"
    searchWords={searchWords}
    textToHighlight={text}
    className={className}
    autoEscape={true}
  />
)

export default HighlighterText
