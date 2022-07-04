import * as React from 'react'
import './styles.scss'

type PageTitleProps = {
  text: string
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
      <div className="banner">
        <p className="banner__text">{text}</p>
      </div>
  )
}

export default PageTitle
