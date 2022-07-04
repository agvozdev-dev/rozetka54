import Container from 'components/shared/Container'
import Title from 'components/shared/Title'
import React from 'react'
import ServicesAndPrices from "../../shared/ServicesAndPrices";

const Prices = () => {
  return (
    <section className="prices" id="#prices">
      <Title
        title="Услуги и цены"
        subtitle="Доверьтесь профессионалам"
        titleSearchWords={['Услуги']}
      />
      <Container>
        <ServicesAndPrices />
      </Container>
    </section>
  )
}

export default Prices
