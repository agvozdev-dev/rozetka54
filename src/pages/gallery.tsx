import * as React from 'react'
import Layout from 'components/shared/Layout'
import Container from "../components/shared/Container";
import ImageGallery from "../components/shared/ImageGallery";
import Contacts from "../components/shared/Contacts";
import PageTitle from "../components/shared/PageTitle";

// @ts-ignore
const GalleryPage = () => {
  return (
    <Layout pageTitle="Галерея">
      <section className="image-gallery">
        <PageTitle text="Галерея"/>
        <Container>
          <p className="image-gallery__text">
            Предоставляем вашему вниманию наши последние сданные объекты. Мы работаем в новостройках,
            вторичных квартирах, жилых домах и в больших промышленных помещениях.
          </p>
          <ImageGallery/>
        </Container>
        <Contacts/>

      </section>
    </Layout>
  )
}

export default GalleryPage
