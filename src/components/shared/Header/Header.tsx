import React from 'react'
import './styles.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Container from 'components/shared/Container'

const MenuItem = (props: { pageName: string; to: string }) => (
  <li className="menu__item">
    <Link className="menu__link" to={props.to}>
      {props.pageName}
    </Link>
  </li>
)

const headerWrapperId = 'header-wrapper'
const headerWrapperClassName = 'header__wrapper'

const menuBtnClick = () => {
  const headerWrapper = document.getElementById(headerWrapperId)
  if (headerWrapper) {
    headerWrapper.classList.toggle(`${headerWrapperClassName}--active`)
  }
}

export default () => {
  const phone = useStaticQuery(query).contentJson.contacts.phone

  return (
    <header className="header">
      <Container>
        <div className={headerWrapperClassName} id={headerWrapperId}>
          <Link className="logo" to="#">
            <StaticImage
              className="logo__img"
              loading="eager"
              layout="fixed"
              placeholder="blurred"
              src={'../../../../static/images/logo/logo-51x60.png'}
              alt="Logo"
            />
          </Link>

          <nav className="menu">
            <button className="menu__btn" type="button" onClick={menuBtnClick}>
              <span className="menu__btn-item"></span>
            </button>
            <ul className="menu__list" id="menu-list">
              <MenuItem pageName="Главная" to="/" />
              <MenuItem pageName="О нас" to="#" />
              <MenuItem pageName="Услуги и цены" to="/services" />
              <MenuItem pageName="Блог" to="/blog" />
              <MenuItem pageName="Партнеры" to="/partners" />
              <MenuItem pageName="Контакты" to="#contact" />
            </ul>
          </nav>

          <div className="header__phone">
            <a className="header__phone-link" href={`tel:${phone}`}>
              <div className="header__phone-number">
                <svg
                  className="header__phone-icon"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="#FFC962"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.218 13C19.9948 13 19.7615 12.93 19.5384 12.88C19.0865 12.7818 18.6424 12.6515 18.2097 12.49C17.7391 12.3212 17.2219 12.33 16.7575 12.5146C16.2931 12.6992 15.9144 13.0466 15.6942 13.49L15.4711 13.94C14.4831 13.3982 13.5753 12.7252 12.773 11.94C11.9765 11.149 11.294 10.254 10.7444 9.28L11.1704 9C11.6201 8.78292 11.9725 8.40953 12.1598 7.95169C12.347 7.49385 12.3559 6.98391 12.1847 6.52C12.0237 6.09242 11.8915 5.6548 11.7891 5.21C11.7384 4.99 11.6978 4.76 11.6674 4.53C11.5442 3.82562 11.17 3.18774 10.6122 2.73124C10.0543 2.27474 9.34943 2.02961 8.62451 2.04H5.58161C5.14448 2.03595 4.71159 2.12481 4.31242 2.30053C3.91325 2.47625 3.55717 2.7347 3.26842 3.05828C2.97967 3.38187 2.76503 3.76299 2.63911 4.17571C2.51318 4.58843 2.47894 5.02306 2.5387 5.45C3.07906 9.63938 5.01971 13.5319 8.05412 16.5126C11.0885 19.4934 15.0437 21.3925 19.295 21.91H19.6804C20.4284 21.9111 21.1505 21.6405 21.709 21.15C22.0299 20.867 22.2862 20.5202 22.4611 20.1323C22.6359 19.7445 22.7253 19.3244 22.7233 18.9V15.9C22.7109 15.2054 22.4543 14.5366 21.9974 14.0077C21.5405 13.4788 20.9116 13.1226 20.218 13ZM20.7251 19C20.725 19.142 20.6941 19.2823 20.6346 19.4116C20.5752 19.5409 20.4885 19.6563 20.3803 19.75C20.2673 19.847 20.1348 19.9194 19.9915 19.9625C19.8481 20.0056 19.6972 20.0184 19.5485 20C15.7499 19.5198 12.2215 17.8065 9.51985 15.1303C6.81824 12.4541 5.09719 8.96734 4.62816 5.22C4.61202 5.07352 4.62617 4.92533 4.66975 4.78439C4.71334 4.64345 4.78545 4.51269 4.88174 4.4C4.97679 4.29333 5.09379 4.20784 5.22496 4.14922C5.35612 4.09059 5.49845 4.06018 5.64247 4.06H8.68537C8.92124 4.05483 9.15157 4.13088 9.3367 4.27507C9.52183 4.41926 9.65019 4.62257 9.69967 4.85C9.74024 5.12333 9.79096 5.39333 9.85182 5.66C9.96899 6.18714 10.1249 6.70518 10.3184 7.21L8.89837 7.86C8.77696 7.91492 8.66775 7.99295 8.577 8.0896C8.48626 8.18624 8.41577 8.29961 8.36959 8.42319C8.32341 8.54677 8.30244 8.67813 8.3079 8.80972C8.31335 8.94131 8.34511 9.07054 8.40137 9.19C9.86115 12.2728 12.3746 14.7508 15.5015 16.19C15.7484 16.29 16.0254 16.29 16.2724 16.19C16.3988 16.1454 16.5151 16.0765 16.6143 15.9872C16.7136 15.8979 16.7939 15.7901 16.8505 15.67L17.4794 14.27C18.0037 14.4549 18.5389 14.6085 19.082 14.73C19.3524 14.79 19.6263 14.84 19.9035 14.88C20.1342 14.9288 20.3404 15.0553 20.4867 15.2379C20.633 15.4204 20.7101 15.6475 20.7048 15.88L20.7251 19Z" />
                </svg>
                {phone}
              </div>
              <span className="header__phone-subtitle">Новосибирск</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}

export const query = graphql`
  {
    contentJson {
      contacts {
        phone
      }
    }
  }
`
