import CallbackButton from 'components/shared/buttons/CallbackButton'
import TextPoint from 'components/shared/TextPoint'
import Container from 'components/shared/Container'
import HighlighterText from 'components/shared/HighlighterText'
import Title from 'components/shared/Title'
import React, {useEffect} from 'react'
import './about-us.scss'
import {graphql, useStaticQuery} from "gatsby";
import {Fancybox as NativeFancybox} from "@fancyapps/ui/dist/fancybox.esm";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

type Point = {
  title: string
  text: string
}

type Card = {
  title: string
  description: string
  searchWords: string[]
}

const points: Point[] = [
  {
    title: 'Качество',
    text: 'Все работы выполняются по ГОСТу'
  },
  {
    title: 'Аккуратность',
    text: 'Бережное обращение к материалам'
  },
  {
    title: 'Долговечность',
    text: 'Предоставляем гарантии по договору'
  },
  {
    title: 'Соблюдение сроков',
    text: 'Мы ценим ваше время'
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

function Fancybox(props: any) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}

export default () => {
  const options = {
    Thumbs: false,
    Toolbar: false,
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    }
  }

  let edges = useStaticQuery(query).allFile.edges

  return (
    <section className="about-us" id="about-us">
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

        <ul className="about-us__text-point-list">
          {points.map((point, index) => (
            <li className="about-us__text-point-item" key={index}>
              <TextPoint title={point.title} text={point.text} />
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

        <ul className="about-us__gallery">
          {edges.map((edge: any, index: number) => (
            <li className="about-us__gallery-item" key={`about-us__gallery-item-${index}`}>
              <Fancybox options={options}>
                <GatsbyImage className="about-us__gallery-image rounded"
                             key={`gallery__image-${index}`}
                             alt={'Фото команды'}
                             image={getImage(edge.node.childImageSharp)}
                             data-fancybox={`gallery-1`}/>
              </Fancybox>
            </li>
          ))}
        </ul>

        <CallbackButton href={'#contacts'} extraClassName="about-us__callback-btn" />
      </Container>
    </section>
  )
}

export const query = graphql`
query OurPhotos {
  allFile(filter: {absolutePath: {regex: "/about-us/"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
