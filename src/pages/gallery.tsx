import * as React from 'react'
import Layout from 'components/shared/Layout'
import Container from "../components/shared/Container";
import ImageGallery from "../components/shared/ImageGallery";
import Contacts from "../components/shared/Contacts";
import PageTitle from "../components/shared/PageTitle";
import HighlighterText from "../components/shared/HighlighterText";

// @ts-ignore
const GalleryPage = () => {
  const text = 'Предоставляем вашему вниманию наши последние сданные объекты. Мы работаем в новостройках,\n' +
    'вторичных квартирах, коттеджах и в больших промышленных помещениях.'
  return (
    <Layout pageTitle="Галерея">
      <section className="image-gallery">
        <PageTitle text="Галерея"/>
        <Container>
          <HighlighterText className="image-gallery__text" text={text} searchWords={['работаем', 'в новостройках', 'квартирах', 'коттеджах', 'промышленных помещениях']} />
          <p className="image-gallery__text">
            Представленные фотографии являются примерами выполненных работ компании Rozetka54.
            Копирование, распространение или иное использование этих материалов без письменного разрешения автора не допускается.
          </p>
          <ImageGallery/>
        </Container>
        <Contacts/>

      </section>
    </Layout>
  )
}

export default GalleryPage
