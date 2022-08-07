import Container from 'components/shared/Container'
import Title from 'components/shared/Title'
import React from 'react'
import ServicesAndPrices from "../../shared/ServicesAndPrices";
import './styles.scss'

type PricesProps = {
  top?: number
}

const Prices: React.FC<PricesProps> = ({top}) => {
  return (
    <section className="prices" id="#prices">
      <Title
        title="Услуги и цены"
        subtitle="Доверьтесь профессионалам"
        titleSearchWords={['Услуги']}
      />
      <Container>
        <ServicesAndPrices top={top} />
      </Container>
    </section>
  )
}

export default Prices
