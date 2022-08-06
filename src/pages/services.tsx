import * as React from 'react'
import Layout from 'components/shared/Layout'
import PageTitle from "../components/shared/PageTitle";
import Container from "../components/shared/Container";
import ServicesAndPrices from "../components/shared/ServicesAndPrices";
import Contacts from "../components/shared/Contacts";

// @ts-ignore
const Services = () => {
  return (
    <Layout pageTitle="Услуги и цены">
      <h1 className="sr-only">Электромонтажные работы, видеонаблюдение, интернет в Новосибирске. Услуги и цены</h1>
      <section className="services">
        <PageTitle text="Услуги и цены" />
          <Container>
            <ServicesAndPrices />
          </Container>
        <div className="services__wrapper">
          <Container>
            <Contacts />
          </Container>
        </div>
      </section>
    </Layout>
  )
}

export default Services
