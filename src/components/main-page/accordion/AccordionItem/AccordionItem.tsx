import Container from 'components/shared/Container'
import TablePrice from 'components/shared/TablePrice'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useRef } from 'react'

const serviceIcons: any = {
  electro: (
    <svg viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6145 23.3804C19.6171 24.6054 22.167 29.1434 22.7083 31.4167H37.2917C37.8331 29.1452 40.38 24.6072 41.3826 23.3839C43.1002 21.2831 44.177 18.7497 44.489 16.0756C44.801 13.4014 44.3355 10.6953 43.1462 8.26904C41.957 5.8427 40.0922 3.79486 37.7668 2.3614C35.4414 0.927946 32.7498 0.167175 30.0023 0.166748C27.2548 0.166321 24.5631 0.926238 22.2372 2.35897C19.9114 3.7917 18.0458 5.83895 16.8558 8.26487C15.6657 10.6908 15.1993 13.3967 15.5105 16.071C15.8217 18.7453 16.8976 21.279 18.6145 23.3804ZM31.0417 8.50008L24.7917 17.8751H28.9583V24.1251L35.2083 14.7501H31.0417V8.50008Z"
        fill="#FFC962"
      />
      <path
        d="M22.7083 34.5417C22.7083 33.9664 23.1747 33.5 23.75 33.5H36.25C36.8253 33.5 37.2917 33.9664 37.2917 34.5417C37.2917 35.117 36.8253 35.5833 36.25 35.5833H23.75C23.1747 35.5833 22.7083 35.117 22.7083 34.5417Z"
        fill="#FFC962"
      />
      <path
        d="M37.2917 37.6667H22.7083V39.7501C22.7083 40.9007 23.6411 41.8334 24.7917 41.8334H35.2083C36.359 41.8334 37.2917 40.9007 37.2917 39.7501V37.6667Z"
        fill="#FFC962"
      />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M45.4909 4.01411C44.5385 3.93911 43.5359 4.16411 42.6085 4.66411L20.9283 17.1641C18.5222 18.5641 17.7201 21.6641 19.0986 24.0141L22.8582 30.4891C24.2367 32.9141 27.2945 33.7141 29.7007 32.3391L34.2121 29.7391C34.8889 30.8891 35.8914 31.8141 37.1196 32.3391V36.7641C37.1196 39.4891 39.3502 41.6641 42.1323 41.6641H55.1405V36.7641H42.1323V32.3391C44.4131 31.3391 45.8919 29.0891 45.8919 26.6641C45.8919 25.5141 45.5911 24.4391 45.0397 23.4891L51.3809 19.8391C53.8121 18.4391 54.6392 15.4141 53.2356 12.9891L49.476 6.51411C48.6239 5.01411 47.095 4.16411 45.4909 4.01411ZM15.5897 24.5891L5.01276 26.3391L6.89255 29.5891L11.9053 38.2391L13.7851 41.4891L20.6025 33.2391L15.5897 24.5891Z"
        fill="#FFC962"
      />
    </svg>
  ),
  internet: (
    <svg viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.0382 45.5C25.7828 45.5 22.5287 42.25 22.5287 38C22.5287 33.75 25.7828 30.5 30.0382 30.5C34.2936 30.5 37.5478 33.75 37.5478 38C37.5478 42.25 34.2936 45.5 30.0382 45.5ZM30.0382 35.5C28.5363 35.5 27.535 36.5 27.535 38C27.535 39.5 28.5363 40.5 30.0382 40.5C31.5401 40.5 32.5414 39.5 32.5414 38C32.5414 36.5 31.5401 35.5 30.0382 35.5Z"
        fill="#FFC962"
      />
      <path
        d="M41.5529 31C40.8019 31 40.051 30.75 39.5503 30C37.0471 27 33.5427 25.5 29.7879 25.5C26.0331 25.5 22.5287 27.25 20.0255 30C19.0242 31 17.5223 31.25 16.521 30.25C15.5198 29.25 15.2694 27.75 16.2707 26.75C19.7752 22.75 24.7815 20.5 30.0382 20.5C35.2949 20.5 40.3013 22.75 43.5554 27C44.3064 28 44.3064 29.75 43.3051 30.5C42.8045 30.75 42.3038 31 41.5529 31Z"
        fill="#FFC962"
      />
      <path
        d="M49.3127 24.75C48.5618 24.75 47.8108 24.5 47.3102 23.75C43.3051 18.5 36.7968 15.5 30.0382 15.5C23.2796 15.5 16.7713 18.5 12.5159 23.75C11.765 24.75 10.0127 25 9.01145 24C8.01017 23 7.75985 21.5 8.76113 20.5C14.0178 14.25 21.7777 10.5 30.0382 10.5C38.2987 10.5 46.0586 14.25 51.3153 20.5C52.0662 21.5 52.0662 23.25 51.0649 24C50.5643 24.5 50.0637 24.75 49.3127 24.75Z"
        fill="#FFC962"
      />
      <path
        d="M57.0726 18.25C56.3217 18.25 55.5707 18 55.0701 17.25C49.0624 9.75 39.8006 5.5 30.0382 5.5C20.2758 5.5 11.014 9.75 4.75605 17.5C4.00509 18.5 2.25286 18.75 1.25159 17.75C0.250316 17 -2.44379e-06 15.25 1.00127 14.25C8.01019 5.5 18.7739 0.5 30.0382 0.5C41.3025 0.5 52.0662 5.5 59.0752 14.25C59.8261 15.25 59.8261 17 58.8248 17.75C58.3242 18.25 57.8236 18.25 57.0726 18.25Z"
        fill="#FFC962"
      />
    </svg>
  ),
}

const AccordionItem = ({
  title,
  description,
  serviceName,
  arrowIcon,
  serviceImage,
  active,
  prices,
  onToggle,
}) => {
  const contentEl: any = useRef()

  const contentCSS = active
    ? { height: contentEl?.current?.scrollHeight }
    : { height: '0px' }

  return (
    <li className={`service__item ${active ? 'service__item--active' : ''}`}>
      <button className="service__btn" onClick={onToggle}>
        <div className="service__icon-wrapper">{serviceIcons[serviceName]}</div>
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
          <TablePrice prices={prices} tableExtraClass="service__table-price" />
          <Link className="service__learn-more-btn" to={serviceName}>
            Узнать больше
          </Link>
        </Container>
      </div>
    </li>
  )
}

export default AccordionItem
