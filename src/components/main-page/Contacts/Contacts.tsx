import Container from 'components/shared/Container'
import HighlighterText from 'components/shared/HighlighterText'
import Title from 'components/shared/Title'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import MaskInput from 'react-maskinput/lib'
import './contacts.scss'
import Form from "components/shared/Form";

const Contacts = () => {
  const { phone, mail, address } = useStaticQuery(query).contentJson.contacts

  return (
    <section className="contacts" id="contacts">
      <Container>
        <Title
          title="Наши контакты"
          subtitle="Всегда на связи"
          titleSearchWords={['контакты']}
        />
        <div className="contacts__content">
          <address className="contacts__address">
            <p className="contacts__heading">
              <HighlighterText
                text={'Звоните в любое время'}
                searchWords={['Звоните']}
              />
            </p>
            <p className="contacts__text">
              Позвоните нам сами, либо заполните форму обратной связи, и мы
              перезвоним вам
            </p>
            <a className="contacts__item" href={`tel:${phone}`}>
              <span className="contacts__label">Телефон:</span>
              <span className="contacts__phone">{phone}</span>
            </a>

            <a className="contacts__item" href={`mailto:${mail}`}>
              <span className="contacts__label">Почта:</span>
              <span className="contacts__mail">{mail}</span>
            </a>

            <div className="contacts__item">
              <span className="contacts__label">Адрес:</span>
              <span className="contacts__street">{address}</span>
            </div>
          </address>
          <Form />
        </div>
      </Container>
    </section>
  )
}
//<a href="whatsapp://send?phone=+79139514181">Ping me on WhatsApp</a>
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

export default Contacts
