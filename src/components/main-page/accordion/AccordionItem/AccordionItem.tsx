import LearnMoreButton from 'components/shared/buttons/LearnMoreButton'
import Container from 'components/shared/Container'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useRef } from 'react'

const AccordionItem = ({
  title,
  description,
  serviceIcon,
  arrowIcon,
  serviceImage,
  active,
  prices,
  to,
  onToggle,
}) => {
  const contentEl: any = useRef()

  const contentCSS = active
    ? { height: contentEl.current.scrollHeight }
    : { height: '0px' }

  return (
    <li className={`service__item ${active ? 'service__item--active' : ''}`}>
      <button className="service__btn" onClick={onToggle}>
        <GatsbyImage
          className="service__icon"
          image={serviceIcon}
          alt="service icon"
        />
        <h2 className="service__title">{title}</h2>
        <GatsbyImage
          className="service__expand-icon"
          image={arrowIcon}
          alt="arrow icon"
        />
      </button>
      <div ref={contentEl} className="service__item-content" style={contentCSS}>
        <Container>
          <div className="service__item-wrapper">
            <GatsbyImage
              className="service__image"
              image={serviceImage}
              alt="service image"
            />
            <div className="service__description">{description}</div>
          </div>
          <table className="service__price">
            <thead className="service__thead">
              <tr className="service__price-row">
                <th className="service__price-cell">Услуга</th>
                <th className="service__price-cell">Цена, руб</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((price, index) => (
                <tr className="service__price-row" key={index}>
                  <th className="service__price-cell">{price.name}</th>
                  <th className="service__price-cell">{price.price}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className="service__learn-more-btn" to={to}>
            Узнать больше
          </Link>
        </Container>
      </div>
    </li>
  )
}

export default AccordionItem
