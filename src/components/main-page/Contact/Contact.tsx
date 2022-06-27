import Container from 'components/shared/Container'
import HighlighterText from 'components/shared/HighlighterText'
import Title from 'components/shared/Title'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import MaskInput from 'react-maskinput/lib'
import './contact.scss'

const Contact = () => {
  const contact = useStaticQuery(query).contentJson.contact

  return (
    <section className="contact" id="contact">
      <Container>
        <Title
          title="Наши контакты"
          subtitle="Всегда на связи"
          titleSearchWords={['контакты']}
        />
        <div className="contact__wrapper">
          <address className="contact__address">
            <p className="contact__heading">
              <HighlighterText
                text={'Звоните в любое время'}
                searchWords={['Звоните']}
              />
            </p>
            <p className="contact__description">
              Позвоните нам сами, либо заполните форму обратной связи, и мы
              перезвоним вам
            </p>
            <a className="contact__item" href={`tel:${contact.phone}`}>
              <span className="contact__label">Телефон:</span>
              <span className="contact__phone">{contact.phone}</span>
            </a>

            <a className="contact__item" href={`mailto:${contact.mail}`}>
              <span className="contact__label">Почта:</span>
              <span className="contact__mail">{contact.mail}</span>
            </a>

            <div className="contact__item">
              <span className="contact__label">Адрес:</span>
              <span className="contact__street">{contact.address}</span>
            </div>
          </address>
          <form className="form contact__form">
            <label className="form__label" htmlFor="form-phone">
              Ваш номер телефона
            </label>
            <MaskInput
              className="form__input form__phone"
              alwaysShowMask
              mask={'+7 (000) 000 00 00'}
              showMask
              maskChar="_"
            />
            <label className="form__label" htmlFor="form-message">
              Сообщение (необязательно)
            </label>
            <textarea
              className="form__input form__message"
              id="form-message"
            ></textarea>
            <button className="form__btn">Отправить</button>
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
