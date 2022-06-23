import React from 'react'
import './highlighter-text.scss'
import Highlighter from 'react-highlight-words'

type MarkTextProps = {
  text: string
  searchWords: string[]
  className?: string
}

const HighlighterText: React.FC<MarkTextProps> = ({
  text,
  searchWords,
  className,
}) => (
  <Highlighter
    highlightClassName="highlighter-text"
    searchWords={searchWords}
    textToHighlight={text}
    className={className}
  />
)

export default HighlighterText
