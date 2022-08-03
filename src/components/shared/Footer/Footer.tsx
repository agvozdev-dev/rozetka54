import React from "react";
import Container from "../Container";
import {graphql, Link, useStaticQuery} from "gatsby";
import './style.scss'

export default () => {
  const { phone, mail, address } = useStaticQuery(query).contentJson.contacts

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <ul className="footer__row">
            <li className="footer__column">
              <p className="footer__column-heading">Услуги</p>
              <ul className="footer__link-list">
                <li className="footer__link-item">
                  <Link className="footer__link" to="/service/electro">Электромонтаж</Link>
                </li>
                <li className="footer__link-item">
                  <Link className="footer__link" to='/service/video'>Видеонаблюдение</Link>
                </li>
                <li className="footer__link-item">
                  <Link className="footer__link" to='/service/internet'>Интернет</Link>
                </li>
              </ul>
            </li>
            <li className="footer__column">
              <p className="footer__column-heading">О компании</p>
              <ul className="footer__link-list">
                <li className="footer__link-item">
                  <Link className="footer__link" to='/#about-us'>О нас</Link>
                </li>
                <li className="footer__link-item">
                  <Link className="footer__link" to='/blog'>Блог</Link>
                </li>
              </ul>
            </li>
            <li className="footer__column">
              <p className="footer__column-heading">Мы в соц. сетях</p>
              <ul className="footer__link-list">
                <li className="footer__link-item">
                  <a className="footer__link" href='https://vk.com'>ВКонтакте</a>
                </li>
              </ul>
            </li>
            <li className="footer__column">
              <p className="footer__column-heading">Контакты</p>
              <ul className="footer__link-list">
                <li className="footer__link-item">
                  <a className="footer__phone" href={`tel:${phone}`}>{phone}</a>
                </li>
                <li className="footer__link-item">
                  {mail}
                </li>
                <li className="footer__link-item">
                  {address}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__bottom"></div>
      </Container>
    </footer>
  )
}

export const query = graphql`
  {
    contentJson {
      contacts {
        mail
        phone
        address
      }
    }
  }
`
