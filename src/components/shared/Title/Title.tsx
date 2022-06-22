import React from 'react'
import './title.scss'

type TitleProps = {
  title: string
  subtitle: string
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => (
  <>
    <div>
      <span className="section-subtitle">{subtitle}</span>
    </div>
    <div>
      <h2 className="section-title">{title}</h2>
    </div>
  </>
)

export default Title
