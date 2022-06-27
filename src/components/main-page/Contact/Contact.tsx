import Container from 'components/shared/Container'
import HighlighterText from 'components/shared/HighlighterText'
import Title from 'components/shared/Title'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import './contact.scss'

const Contact = () => {
  const contact = useStaticQuery(query).contentJson.contact

  return (
    <section className="contact">
      <Container>
        <Title
          title="Наши контакты"
          subtitle="Всегда на связи"
          titleSearchWords={['контакты']}
        />
        <div className="contact__wrapper">
          <address className="contact__address">
            <p className="contact__heading contact__text--normal">
              <HighlighterText
                text={'Звоните в любое время'}
                searchWords={['Звоните']}
              />
            </p>
            <p className="contact__description contact__text--normal">
              Позвоните нам сами, либо заполните форму обратной связи, и мы
              перезвоним вам
            </p>
            <a
              className="contact__address-part contact__phone-link contact__text--normal"
              href={`tel:${contact.phone}`}
            >
              <span className="contact__title contact__phone-title">
                Телефон:
              </span>
              <span className="contact__phone">{contact.phone}</span>
            </a>

            <a
              className="contact__address-part contact__mail-link contact__text--normal"
              href={`mailto:${contact.mail}`}
            >
              <span className="contact__title contact__mail-title">Почта:</span>
              <span className="contact__mail">{contact.mail}</span>
            </a>

            <div className="contact__address-part contact__street-wrapper">
              <span className="contact__title contact__street-title contact__text--normal">
                Адрес:
              </span>
              <span className="contact__street contact__text--normal">
                {contact.address}
              </span>
            </div>
          </address>
          <form className="form">
            <label className="form__phone-label" htmlFor="form-phone">
              Ваш номер телефона
            </label>
            <input className="form__phone" type="tel" id="form-phone" />
            <label className="form__message-label" htmlFor="form-message">
              Сообщение (необязательно)
            </label>
            <textarea className="form__message" id="form-message"></textarea>
            <button className="form__submit-btn">Отправить</button>
          </form>
        </div>
      </Container>
    </section>
  )
}
//<a href="whatsapp://send?phone=+79139514181">Ping me on WhatsApp</a>
export const query = graphql`
  {
    contentJson {
      contact {
        mail
        phone
        address
      }
    }
  }
`

export default Contact
