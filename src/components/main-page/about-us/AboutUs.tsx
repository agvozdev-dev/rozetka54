import CheckMark from 'components/shared/CheckMark'
import Container from 'components/shared/Container'
import HighlighterText from 'components/shared/HighlighterText'
import Title from 'components/shared/Title'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import './about-us.scss'

type BenefitCardPrors = {
  src: string
  count: string
  title: string
  description: string
}

type Point = {
  text: string
  searchWords: string[]
}

type Card = {
  title: string
  description: string
  searchWords: string[]
}

const points: Point[] = [
  {
    text: 'Качество - все работы выполняются по ГОСТу',
    searchWords: ['Качество'],
  },
  {
    text: 'Аккуратность - бережное обращение к материалам',
    searchWords: ['Аккуратность'],
  },
  {
    text: 'Долговечность - предоставляем гарантии по договору',
    searchWords: ['Долговечность'],
  },
  {
    text: 'Соблюдение сроков - мы ценим ваше время',
    searchWords: ['Соблюдение', 'сроков'],
  },
]

const cards: Card[] = [
  {
    title: 'Более 10 лет опыта',
    description:
      'Все наши мастера - это специалисты своего дела. Умеем правильно рассчитать стоимость работ и материалов',
    searchWords: ['наши', 'мастера', 'специалисты'],
  },
  {
    title: '350+ сделанных объектов',
    description:
      'Квартира, дом, офис, склад или промышленное помещение - имеем опыт работы на любых объектах',
    searchWords: [
      'Квартира',
      'дом',
      'офис',
      'склад',
      'промышленное',
      'помещение',
    ],
  },
  {
    title: 'Фиксированная смета',
    description:
      'Цена на все виды работ остается неизменной (за исключением ситуаций, когда пожелания заказчика изменились)',
    searchWords: ['Цена', 'остается', 'неизменной'],
  },
]

export default () => {
  return (
    <section className="about-us">
      <Container>
        <Title
          title="Почему обращаются к нам"
          subtitle="Работаем на результат"
          titleSearchWords={['нам']}
        />
        <HighlighterText
          text="Услуги компании Rozetka54 - это:"
          searchWords={['Rozetka54']}
          className="about-us__heading"
        />

        <ul className="about-us__point-list">
          {points.map((point, index) => (
            <li className="about-us__point-item" key={index}>
              <CheckMark text={point.text} searchWords={point.searchWords} />
            </li>
          ))}
        </ul>

        <ul className="about-us__card-list">
          {cards.map((card, index) => (
            <li className="about-us__card-item" key={index}>
              <h2 className="about-us__card-title">{card.title}</h2>
              <HighlighterText
                text={card.description}
                searchWords={card.searchWords}
                className="about-us__card-description"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
