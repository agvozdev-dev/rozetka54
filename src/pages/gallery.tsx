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
        <PageTitle text="Галерея" />
      <Container>
        <p className="image-gallery__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
        <p className="image-gallery__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
        <ImageGallery />
        </Container>
        <Contacts />

      </section>
    </Layout>
  )
}

export default GalleryPage
