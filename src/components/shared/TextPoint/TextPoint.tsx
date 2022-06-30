import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import HighlighterText from '../HighlighterText'
import './text-point.scss'
import classNames from "classnames";

type TextPointProps = {
    text: string
    searchWords: string[]
    extraClass?: string
}

const TextPoint: React.FC<TextPointProps> = ({text, searchWords, extraClass}) => {
    const classes = classNames("text-point", extraClass)
    return (
        <div className={classes}>
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
